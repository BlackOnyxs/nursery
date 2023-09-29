import { FC } from 'react';

import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { ICategory } from '@/interfaces';

interface Props {
    category: ICategory
}

export const CategoryCard: FC<Props> = ({ category:{ imageUrl, _id, title} }) => {
    return (
        <Grid item ml={4} mt={2} marginTop={4} >
            <Card
                sx={{
                    bgcolor: 'transparent',
                    width: 250,
                    height: 350,
                    border: '1px solid #666',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <CardMedia
                    sx={{ height: 200, width: '80%'}}
                    image={ imageUrl }
                    title={ title }
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        color='#284c36'
                        align='center'
                        className='hover'
                    >
                        { title }
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    )
}
