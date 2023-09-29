import { FC, useState, useRef, ChangeEvent, useContext } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import AddPhotoAlternate from '@mui/icons-material/AddPhotoAlternate';
import SaveOutlined from '@mui/icons-material/SaveOutlined';
import UploadOutlined from '@mui/icons-material/UploadOutlined';
import DriveFileRenameOutline from '@mui/icons-material/DriveFileRenameOutline';
import { Alert, Box, Button, Card, CardActions, CardMedia, Chip, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Skeleton, Switch, TextField } from '@mui/material';

import { AdminLayout } from '@/components/layouts';
import { dbCategories } from '@/database';
import { ICategory } from '@/interfaces';
import { Category } from '@/models';
import { nurseryApi } from '@/api';

import { useForm } from 'react-hook-form';
import { UIContext } from '@/context';

interface FormData {
  _id?: string;
  title: string;
  imageUrl: string;
  showOnWeb: boolean;
  productsCount: number;
}

interface Props {
  category: ICategory;
}

const CategoryPage: FC<Props> = ({ category }) => {
  const router = useRouter();
  const { isUploading, toggleUploading, messageOptions, setMessage } = useContext(UIContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm<FormData>({
    defaultValues: category
  });

  const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }

    try {
      toggleUploading();
      const formData = new FormData();
      formData.append('file', target.files[0]);
      const { data } = await nurseryApi.post<{ message: string }>('/admin/upload', formData);
      setValue('imageUrl', data.message, { shouldValidate: true });
      toggleUploading();
    } catch (error) {
      console.log({ error });
      toggleUploading();
    }
  }


  const onSubmit = async (form: FormData) => {
    setIsSaving(true);

    try {
      const resp = await nurseryApi({
        url: '/admin/categories',
        method: form._id ? 'PUT' : 'POST',
        data: form
      });

      if (resp.status === 200) {
        setMessage({ type: 'success', message: 'Guardado' })
      }

      if (!form._id) {
        router.replace(`/admin/categories/${form._id}`);
      } else {
        setIsSaving(false)
      }
    } catch (error: any) {
      setMessage({ type: 'error', message: error.response.data.message });
      console.log(error);
      setIsSaving(false);
    }
    setInterval(() => {
      setMessage({ type: 'info', message: '' })
    }, 5000)
  }
  return (
    <AdminLayout
      title='Categoria'
      subTitle={`Editando ${category.title}`}
      icon={<DriveFileRenameOutline color='primary'/>}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex' justifyContent='end' sx={{ mb: 1 }}>
          <Button
            color="primary"
            startIcon={<SaveOutlined />}
            sx={{ width: '150px' }}
            type="submit"
            disabled={isSaving}
          >
            Guardar
          </Button>
        </Box>
        <Grid container spacing={2}>
          {/* Data */}
          <Grid item xs={12} sm={6}>

            <TextField
              label="Título"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              {...register('title', {
                required: 'Este campo es requerido',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <FormLabel sx={{ mb: 1 }}>Imágenes</FormLabel>
            <Button
              color="primary"
              fullWidth
              startIcon={<UploadOutlined />}
              sx={{ mb: 3 }}
              disabled={ isUploading }
              onClick={() => fileInputRef.current?.click()}
            >
              Cargar imagen
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept='image/png, image/gif, image/jpeg'
              style={{ display: 'none' }}
              onChange={onFilesSelected}
            />
            <Chip
              label="Es necesario al 2 imagenes"
              color='error'
              variant='outlined'
              sx={{
                display: getValues('imageUrl').length < 1 ? 'flex' : 'none',
                mb: 1
              }}
            />
            <Grid container spacing={2} >
              <Grid 
                item 
                xs={4} 
                sm={3} 
                key={getValues('imageUrl')}
                
              >
                <Card >
                  <CardMedia
                    component='img'
                    className='fadeIn'
                    image={getValues('imageUrl')}
                    alt={getValues('imageUrl')}                  
                  />
                  <CardActions>
                    <CircularProgress
                      color='secondary' 
                      thickness={2} 
                      sx={{ display: isUploading ? 'flex' : 'none'}}
                    />
                    <Box
                      sx={{ display: isUploading ? 'none' : 'flex' }}>

                      <Button
                        fullWidth
                        color="error"
                        sx={{ display: getValues('imageUrl') ? 'flex' : 'none' }}
                        onClick={() => setValue('imageUrl', '', { shouldValidate: true })}
                      >
                        Borrar
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>


            </Grid>

          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display='flex' flexDirection="column">
              <FormControl component="fieldset">
                <FormControlLabel
                  sx={{ mt: 1 }}
                  value="Start"
                  control={(
                    <Switch
                      checked={getValues('showOnWeb')}
                      onChange={() => setValue('showOnWeb', !getValues('showOnWeb'), { shouldValidate: true })}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  )}
                  label="Ofertar"
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Alert
        sx={{ mt: 2, display: messageOptions.type !== 'info' ? 'flex' : 'none' }}
        severity={messageOptions.type}
        color={messageOptions.type === 'error' ? 'error' : 'success'}
      >
        {messageOptions.message}
      </Alert>
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id = '' } = query;

  let category: ICategory | null;

  if (id === 'new') {
    const tempCategory = JSON.parse(JSON.stringify(new Category()));
    delete tempCategory._id;
    tempCategory.imageUrl = 'img1.jpg';
    tempCategory.productsCount = 0;
    tempCategory.showOnWeb = true;
    category = tempCategory;
  } else {
    category = await dbCategories.getCategoryById(id.toString());
  }

  if (!category) {
    return {
      redirect: {
        destination: '/admin/categories',
        permanent: false
      }
    }
  }

  return {
    props: {
      category
    }
  }
}

export default CategoryPage;