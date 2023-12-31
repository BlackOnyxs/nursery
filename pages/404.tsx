import { MainLayout } from "@/components/layouts"
import { Box, Typography } from "@mui/material"


const Custom404 = () => {
  return (
    <MainLayout
        title='Página no encontrada'
        pageDescription='No tenemos nada que mostrar aquí.'
    >
         <Box 
          display='flex' 
          justifyContent='center' 
          alignItems='center' 
          height='calc(100vh - 200px)'
          sx={{ flexDirection: { xs: 'column', sm: 'row'}}}
        >
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography variant='h1' marginLeft={2}>No encontramos ninguna página aquí.</Typography>
        </Box>
    </MainLayout>
  )
}

export default Custom404