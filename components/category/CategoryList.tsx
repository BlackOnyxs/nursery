import { FC } from 'react';

import { Grid } from '@mui/material';

import { CategoryCard } from './';
import { ICategory } from '@/interfaces';

interface Props {
    categories: ICategory[];
}

export const CategoryList: FC<Props> = ({ categories }) => {
    return (
        <Grid
            container
            spacing={4}
            display='flex'
            justifyContent='center'
            alignItems='center'
            mt={1}
            mb={1}
        >
            {
                categories.map( category => (
                    <CategoryCard category={category} key={category._id}/>
                ))
            }
        </Grid>
    )
}
