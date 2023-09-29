import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/database';
import { Category } from '@/models';
import { ICategory } from '@/interfaces';

type Data = 
| { message: string }
| ICategory[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {    
    switch( req.method ) {
        case 'GET':
            return getCategories( req, res );
        default: 
            return res.status(400).json({ message: 'BAD REQUEST' });
    }    
}

const getCategories = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        db.connect();
        const categories = await Category.find({ showOnWeb: true }).lean();
        db.disconnect();

        return res.json(categories);
    } catch (error) {
        console.log(error);
        db.disconnect();
        return res.status(500).json({ message: 'Mirar logs del servidor.' })
    }
}
