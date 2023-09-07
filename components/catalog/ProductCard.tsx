import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"



export const ProductCard = () => {

    return (
        <Card            
            sx={{
                alignItems: 'center',
                border: '1px solid #666',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: 300,
                mb: 8,
                ml: 1, 
                mt: 4,
                padding: '18px',
                textAlign: 'center',
            }}
        >
            <CardMedia
                sx={{ height: 200, width: '100%' }}
                image="/tomatoes.png"
                title="Tomates"
            />
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px', // Espacio entre elementos
                }}
            >
                <Typography gutterBottom variant="h5" fontWeight='bold'>
                    Tomates
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Typography variant="body2" color="text.secondary">
            {/* //! TODO: Add stock type */}
                        6 plantones
                    </Typography>
                    <img
                        src="/24.png"
                        alt="Imagen Pequeña"
                        style={{
                            maxWidth: '100px', 
                            maxHeight: '100px', 
                        }}
                    />
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
