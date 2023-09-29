import { Category } from '@/models';
import { db } from './'
import { ICategory } from '@/interfaces';
import { isValidObjectId } from 'mongoose';

export const getCategoryById =  async( id:string ): Promise<ICategory  | null>  =>  {
    if( !isValidObjectId( id ) ) return null;

    try {
        await db.connect();
        const category =  await Category.findById(id);
        await db.disconnect(); 

        if ( !category ) return  null;

        return JSON.parse( JSON.stringify( category) );
    } catch (error) {
        await db.disconnect(); 
        return  null;
    }
}

export const getCategories = async(): Promise<ICategory[]> => {
    await db.connect();
    const categories = await Category.find()
                        .select('title')    
                        .lean();
    await db.disconnect();

    return JSON.parse( JSON.stringify( categories ) );
}