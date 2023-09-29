import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidObjectId } from 'mongoose';

import { ICategory } from '@/interfaces'
import { Category } from '@/models';
import { db } from '@/database';

import { v2 as cloudinary } from 'cloudinary';
cloudinary.config( process.env.CLOUDINARY_URL || '' );

type Data = { message: string }
| ICategory
| ICategory[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return  getCategories( req, res );
        case 'POST':
            return createCategory( req, res );
        case 'PUT':
            return updateCategory( req, res );
    
        default:
            return res.status(400).json({ message: 'Bad Request' })
    }
}

const getCategories = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { page = 1, limit = 10} = req.query;

    try {
        await db.connect();
        const categories = await Category.find()
                            .sort({ title: 'asc' })
                            .limit(Number( limit ))
                            .skip( (Number(page) - 1) * Number(limit) )
                            .lean();
        await db.disconnect();
        return  res.status(200).json( categories );
    } catch (error) {
        await db.disconnect();
        return res.status(500).json({ message: 'Algo salió mal. Revisar logs del servidor.'})
    }
}
const createCategory = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    try {
        await db.connect();
        const categoryInDB = await Category.findOne({ title: req.body.title }).lean();
        if ( categoryInDB ) {
            await db.disconnect();
            return res.status(400).json({ message: 'Ya existe una categoria con ese nombre' })
        }
        const category = new Category(req.body);
        await category.save();        
        await db.disconnect();

        return res.status(201).json( category );
    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(500).json({ message: 'Algo salió mal. Revisar logs del servidor.'})
    }
}

const updateCategory  = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
   const { _id = '', imageUrl = '' } = req.body as ICategory;

   if ( !isValidObjectId( _id ) ) {
    return res.status(400).json({ message: 'El id de la categoria no es válido' });
   }

   if ( !imageUrl ) {
    return res.status(400).json({ message: 'Es necesaria una imagen.' });
   }

   try {
        await db.connect();
        const category = await Category.findById( _id );

        if ( !category ) {
            await db.disconnect();
            return res.status(400).json({ message: 'No existe una categoria con ese id.' });
        }

        if ( imageUrl !== category.imageUrl ) {
            const [ fileId, extension ] = imageUrl.substring( imageUrl.lastIndexOf('/') + 1 ).split('.')
              
                await cloudinary.uploader.destroy( fileId );
        }

        await category.updateOne( req.body );
        await db.disconnect();

        return res.status(200).json( category );
   } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(500).json({ message: 'Algo salió mal. Revisar logs del servidor.'});
   }
}

