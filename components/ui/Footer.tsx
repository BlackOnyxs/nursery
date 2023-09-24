import { Grid, Typography, Button, Box, Input, InputAdornment, IconButton } from "@mui/material";
import Image from "next/image";

export const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#333',
                color: '#fff',
                padding: 4,
            }}
        >
            <Grid 
                container 
                spacing={3}
            >
                <Grid 
                    item 
                    xs={12} 
                    sm={3}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Image

                        src='/navbar.svg'
                        width={200}
                        height={100}
                        alt='Jardinex logo'
                    />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ textAlign: 'center', marginTop: { xs: 0, sm: 2} }}>
                    <Typography variant="h6">Información de contacto:</Typography>
                    <Typography variant="body1">Teléfono: (123) 456-7890</Typography>
                    <Typography variant="body1">Email: info@jardinex.com</Typography>
                    <Typography variant="body1">Dirección: Santiago, Veraguas</Typography>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    sm={3} 
                    sx={{
                        display: { xs: 'block', sm: 'flex' }, 
                        flexDirection: { xs: 'row', sm: 'column'},
                        marginTop: 2,

                        textAlign: { xs: 'center'}
                    }}
                >
                    <Typography variant="h6">Suscríbete a nuestro newsletter</Typography>
                    <Input
                        sx={{
                            mt: 1,
                            mb: 1,
                            bgcolor: 'white',
                            width: '100%'
                        }}
                        className='fadeIn'
                        autoFocus
                        type='email'
                        placeholder="Your email"

                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Suscribirse
                    </Button>
                </Grid>
            </Grid>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
                &copy; {new Date().getFullYear()} Jardinex. Todos los derechos reservados.
            </Typography>
        </Box>
    );

}
