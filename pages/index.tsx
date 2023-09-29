import Image from 'next/image';

import useSWR from 'swr';
import Carousel from 'nuka-carousel';

import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

import { ICategory } from '@/interfaces';
import { MainLayout } from '@/components/layouts';
import { ProductCard, products } from '@/components/catalog';
import { useTheme } from '@mui/material/styles';
import { CategoryList } from '@/components/category';


const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { data = [], error, isLoading } = useSWR<ICategory[]>('/api/categories');
  return (
    <MainLayout title={''} pageDescription={''}>
      <Box
        sx={{
          height: 400,
          display: { sm: 'block', md: 'flex' },
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
          <Grid item sm={6} mt={6} ml={8}>
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
            sx={{ display: { xs: 'none', md: 'flex' } }}
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
          display: { xs: 'block', sm: 'flex' },
          flexDirection: { xs: 'row', sm: 'column' },
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
          {
            error
              ? <h4 style={{ marginLeft: 10, color: 'red' }}>Algo salió mal. Vuelve a intentar más tarde.</h4>
              : (
                <div className="container">
                  {
                    isLoading
                      ? <CircularProgress color='secondary' thickness={2} />
                      : (
                        <>
                          {
                            data.length <= 0
                              ? <h4>No hay imagenes que mostrar</h4> //!Todo add component
                              : <CategoryList categories={data!} />
                          }
                        </>
                      )
                  }
                </div>
              )
          }
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

        <Box maxWidth='100%'>
          <Carousel
            slidesToShow={isSmallScreen ? 1 : 3}
            slidesToScroll={isSmallScreen ? 1 : 3}
            autoplay
            cellAlign='center'
            speed={500}
            disableEdgeSwiping
          >
            {
              products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            }

          </Carousel>
        </Box>
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