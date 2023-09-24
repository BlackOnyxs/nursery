import { NextPage } from 'next'
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { MainLayout } from '@/components/layouts'

const AboutPage: NextPage = () => {
  return (
    <MainLayout
        title='Sobre Nosotros'
        pageDescription='¡En esta página encontrarás información para que nos conzcas mejor!'
    >
        
        <Box 
          display='flex' 
          alignItems='center' 
          height='calc(100vh - 200px)'
          flexDirection='column'                  
        >            
            <Typography variant='h1' color='#284c36' textAlign='center' mt={5}>Nuestra Historia</Typography>
           
            <Card sx={{ ml: 2, mt: 4, display: 'flex', p: 2}}>
                <CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Avatar 
                        src='https://res.cloudinary.com/dyjsa002n/image/upload/v1695323402/3A3304EC-9A32-4D6D-9F90-01DC1BB6D5F8_hu1ojs.jpg'
                        sx={{ width: 250, height: 250}}
                    />
                </CardMedia>
                <CardContent>
                    <Box display='flex'>
                        <Typography variant='h1' color='#284c36'>Robin</Typography>
                        <Typography variant='h1' color='primary' ml={0.5}>Ávila</Typography>
                    </Box>
                    <Typography variant='h6' color='gray' fontWeight='bold' ml={0.5}>Jr Full Stack Developer</Typography>
                    
                    <Typography variant='body1' mt={2} ml={2} textAlign='justify'>Soy un estudiante apasionado por la tecnología y el desarrollo web, con un enfoque especial en el backend utilizando NestJs. Mi búsqueda de conocimientos no se detiene aquí, ya que también estoy inmerso en el estudio del desarrollo frontend con React y Next.js. Esta combinación de habilidades me permite explorar el mundo del desarrollo full stack, donde puedo aplicar mis conocimientos y creatividad para crear soluciones web impactantes. Además, mi conexión con el mundo natural con un vivero agrega una dimensión única a mi perspectiva, fusionando mi amor por la tecnología con el cultivo de plantas y la naturaleza.</Typography>
                </CardContent>
            </Card>
        </Box>
    </MainLayout>
  )
}

export default AboutPage