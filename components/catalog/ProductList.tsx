import { Grid } from '@mui/material'
import { IProduct } from '@/interfaces';
import { ProductCard } from './';

export const products: IProduct[] = [
    {
        id: '1',
        title: 'Tomate Pera',
        variant: '6 plantones',
        imagesUrl: ['/tomatoes.png'],
        price: 2.75,
    },
    {
        id: '1',
        title: 'Tomate Pera',
        variant: '6 plantones',
        imagesUrl: ['/tomatoes.png'],
        price: 2.75,
    },
    {
        id: '1',
        title: 'Tomate Pera',
        variant: '6 plantones',
        imagesUrl: ['/tomatoes.png'],
        price: 2.75,
    },
    {
        id: '1',
        title: 'Tomate Pera',
        variant: '6 plantones',
        imagesUrl: ['/tomatoes.png'],
        price: 2.75,
    },
    {
        id: '1',
        title: 'Tomate Pera',
        variant: '6 plantones',
        imagesUrl: ['/tomatoes.png'],
        price: 2.75,
    },
    {
        id: '1',
        title: 'Tomate Pera',
        variant: '6 plantones',
        imagesUrl: ['/tomatoes.png'],
        price: 2.75,
    },
    {
        id: '1',
        title: 'Tomate Pera',
        variant: '6 plantones',
        imagesUrl: ['/tomatoes.png'],
        price: 2.75,
    },
]
export const ProductList = () => {
    return (
        <Grid
            item
            container
            columnSpacing={40}
            sm={8}
            xl={9}
            sx={{
                display: {xs: 'block', sm: 'flex' },
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {
                products.map(product => (
                    <ProductCard product={product} />
                ))
            }
        </Grid>
    )
}
