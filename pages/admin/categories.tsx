import NextLink from 'next/link';

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Button, CardMedia, Chip, Grid, Link } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import CategoryOutline from '@mui/icons-material/CategoryOutlined';

import { AdminLayout } from '@/components/layouts';
import { ICategory } from '@/interfaces';
import useSwr from 'swr';

const columns: GridColDef[] = [
  {
    field: 'imageUrl',
    headerName: 'Foto',
    width: 100,
    renderCell: ({ row }: GridRenderCellParams) => {
      return (
        <a href={`/product/${row.slug}`} target='_blank' rel='noreferrer'>
          <CardMedia
            component='img'
            alt={row.title}
            className='fadeIn'
            image={row.imageUrl}
          />
        </a>
      )
    }
  },
  {
    field: 'title',
    headerName: 'Nombre',
    width: 250,
    renderCell: ({ row }: GridRenderCellParams) => {
      return (
        <NextLink href={`/admin/categories/${row.id}`} passHref legacyBehavior>
          <Link>
            {row.title}
          </Link>
        </NextLink>
      )
    }
  },

  { field: 'productsCount', headerName: 'Productos', width: 100 },
  {
    field: 'showOnWeb',
    headerName: 'Ofertar',
    width: 250,
    renderCell: ({ row }: GridRenderCellParams) => {
      return row.showOnWeb
        ? (<Chip variant='outlined' label='Ofertada' color='success' />)
        : (<Chip variant='outlined' label='No Ofertada' color='error' />)
    }
  },
];

const CategoriesPage = () => {
  const { data, error } = useSwr<ICategory[]>('/api/admin/categories');

  if (!data && !error) return <></>;

  const rows = data!.map(order => ({
    id: order._id,
    title: order.title,
    imageUrl: order.imageUrl,
    showOnWeb: order.showOnWeb,
    productsCount: order.productsCount,
  }))

  return (
    <AdminLayout
      title='Categorias'
      subTitle='Mantenimiento de categorias'
      icon={<CategoryIcon color='primary'/>}
    >
      <Box display='flex' justifyContent='end' sx={{ mb: 2 }}>
        <Button
          startIcon={<CategoryOutline />}
          color='primary'
          href='/admin/categories/new'
        >
          Crear Categoria
        </Button>

      </Box>
      <Grid container display='flex' className='fadeIn'>
        <Grid sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 }
              }
            }}
            pageSizeOptions={[5, 10, 25]}
          />
        </Grid>
      </Grid>
    </AdminLayout>
  )
}

export default CategoriesPage;