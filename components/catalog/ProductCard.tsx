import { FC } from 'react';
import Image from 'next/image';

import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { IProduct } from '@/interfaces';


interface Props {
    product: IProduct;
}
export const ProductCard:FC<Props> = ({ product }) => {

    return (
        <Grid 
            item 
            xs={12} 
            sm={4} 
            md={4} 
            lg={3} 
            xl={2} 
            sx={{ marginRight: 2 }}
        >
            <Card
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: 300,
                    mt: 4,
                    padding: '20px',
                }}
            >
                <CardMedia
                    sx={{ height: 100, width: 150 }}
                    image={'/tomatoes.png'}
                    title="Tomates"

                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 2
                    }}
                >
                    <Typography gutterBottom variant="h5" fontWeight='bold'>
                        { product.title }
                    </Typography>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}>
                        <Typography variant="body2" color="text.primary" fontWeight='bold'>
                            { product.variant }
                        </Typography>
                        <Image
                            src="/24.png"
                            alt="Imagen Pequeña"
                            width={100}
                            height={100}
                        />
                    </div>
                    <Typography variant="h6" color="text.primary">
                        B/. {product.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
