import Image from 'next/image';

import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

import Carousel from 'nuka-carousel';

import { MainLayout } from '@/components/layouts';
import { ProductCard } from '@/components/catalog';

const HomePage = () => {
  
  return (
    <MainLayout title={''} pageDescription={''}>
      <Box
        sx={{
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mt={2}
      >
        <Grid
          container
          spacing={4}
        >
          <Grid item sm={6}  mt={6} ml={8}>
            <Typography variant="h3" color='#284c36'>
              Cultivando Sueños, Sembrando Vida.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size='large'
              sx={{ mt: 2 }}
            >
              Descubre Nuestro Catálogo
            </Button>
          </Grid>
          <Grid
            item
            sm={4}
            container
            justifyContent="start"
            alignItems="flex-start"
          >
            <Image
              src='/banner.png'
              width={400}
              height={300}
              alt='banner image'
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: 500,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#F7F1ED',
          padding: 2,
        }}
      >
        <Typography variant='h1' align='center' color='#284c36'>Ofrecemos todo para tu huerto</Typography>

        <Grid
          container
          spacing={4}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item ml={4} mt={2} marginTop={4} >
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 250,
                height: 350,
                border: '1px solid #666',
                padding: '40px',
              }}
            >
              <CardMedia
                sx={{ height: 200, padding: 10 }}
                image="/plant.png"
                title="Plant icon"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color='#284c36'
                  align='center'
                  className='hover'
                >
                  Plantas
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item ml={4} mt={2} marginTop={4}>
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 250,
                height: 350,
                border: '1px solid #666',
                padding: '40px',
              }}
            >
              <CardMedia
                sx={{ height: 200, padding: 10 }}
                image="/fertilizante.png"
                title="fertilizante icon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color='#284c36' align='center'>
                  Tratamientos
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item ml={4} mt={2} marginTop={4}>
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 250,
                height: 350,
                border: '1px solid #666',
                padding: '25px',
              }}
            >
              <CardMedia
                sx={{ height: 200, padding: 10 }}
                image="/tools.png"
                title="tools icon"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color='#284c36'
                  align='center'
                  mt={2}
                >
                  Herramientas
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item ml={4} mt={2} marginTop={4}>
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 250,
                height: 350,
                border: '1px solid #666',
                padding: '25px',
              }}
            >
              <CardMedia
                sx={{ height: 200, padding: 10 }}
                image="/shovels.png"
                title="Plant icon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color='#284c36' align='center'>
                  Kits
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        mt={5}
        mb={5}
      >
        <Typography variant='h1' align='center' color='#284c36'>Productos de Temporada</Typography>
        <Carousel
          slidesToShow={3}
          autoplay
          speed={500}        
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Carousel>
        <Button
          variant="contained"
          color="primary"
          size='large'
          sx={{ mt: 2 }}
        >
          Ver todos
        </Button>
      </Box>

      <Box
        sx={{
          height: 550,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#F7F1ED',
          padding: 2,
        }}
      >
        <Typography variant='h1' align='center' color='#284c36'>¡Aprende con nosotros en nuestro Blog!</Typography>
        <Grid
          container
          spacing={4}
          display='flex'
          justifyContent='center'
          alignItems='center'
          mb={1}
        >
          <Grid item ml={4} mt={2} marginTop={4} >
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 300,
                height: 350,
                border: '1px solid #666',
              }}
            >
              <CardMedia
                sx={{ height: 200, width: '100%' }}
                image="/fertilizar.jpg"
                title="Plant icon"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color='#284c36'
                  align='center'
                  className='hover'
                >
                  ¿Cómo aplicar el fertilizante?
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  align='justify'
                  noWrap
                >
                  El fertilizante es esencial para el crecimiento vegetal, proporcionando nutrientes clave como nitrógeno, fósforo y potasio. Mejora la salud de las plantas y aumenta la producción de cultivos.
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item ml={4} mt={2} marginTop={4} >
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 300,
                height: 350,
                border: '1px solid #666',
              }}
            >
              <CardMedia
                sx={{ height: 200, width: '100%' }}
                image="/germinar.jpg"
                title="Plant icon"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  color='#284c36'
                  align='center'
                  className='hover'
                >
                  Proceso de germinación
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  align='justify'
                  noWrap
                >
                  El proceso de germinación es...
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          size='large'
          sx={{ mt: 2 }}
        >
          Ver blog
        </Button>
      </Box>

      {/* <Divider 
        orientation='horizontal' 
        
        sx={{ 
          borderColor: '#93c12c', 
          mt: 5,
          borderWidth: 1.5
        }} 
      /> */}
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        mt={5}
        mb={5}
      >
        <Grid
          container
          spacing={4}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item ml={4} mt={2} marginTop={4} >
            <Card
              sx={{ 
                alignItems: 'center',
                border: '1px solid #666',
                display: 'flex', 
                height: 100,
                padding: '16px',
                width: 250,
              }}
            >
              <LocalShippingIcon 
                color='primary' 
                fontSize='large'
                sx={{ mr: 2 }}
              />
              <Typography 
                variant="h6"
                color='#284c36' 
                align='left'
              >
                Envío gratis a partir de B/. 50
              </Typography>
            </Card>
          </Grid>
          <Grid item ml={4} mt={2} marginTop={4} >
            <Card
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                width: 250,
                height: 100,
                padding: '16px',
                border: '1px solid #666',
              }}
            >
              <MarkunreadMailboxIcon 
                color='primary' 
                fontSize='large'
                sx={{ mr: 2 }}
              />
              <Typography 
                variant="h6"
                color='#284c36' 
                align='left'
              >
                Transporte Especializado
              </Typography>
            </Card>
          </Grid>
          <Grid item ml={4} mt={2} marginTop={4} >
            <Card
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                width: 250,
                height: 100,
                padding: '16px',
                border: '1px solid #666',
              }}
            >
              <CreditScoreIcon 
                color='primary' 
                fontSize='large'
                sx={{ mr: 2 }}
              />
              <Typography 
                variant="h6"
                color='#284c36' 
                align='left'
              >
                ¡Métodos de pago seguros!
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

    </MainLayout>
  )
}

export default HomePage;