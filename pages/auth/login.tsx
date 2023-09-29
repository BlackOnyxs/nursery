import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { getProviders, getSession, signIn } from 'next-auth/react';

import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google'
import { useForm } from 'react-hook-form';

import { AuthLayout } from '@/components/layouts';
import { validations } from '@/utils';
import { useRouter } from 'next/router';


interface FormData {
    email: string
    password: string
}
  

const LoginPage = () => {
    const { reload, query } = useRouter();
    const { register, handleSubmit, formState: { errors }} = useForm<FormData>();
    const [showError, setShowError] = useState(false);

    const [providers, setProviders] = useState<any>({});

    useEffect(() => {
        getProviders().then( prov => {
          setProviders(prov);
        })
      }, []);

      const onLoginUser = async( { email, password }: FormData ) => {
        setShowError(false);
        const resp = await signIn('credentials', { email, password, redirect: false });
        if ( !resp?.ok ) {
            setShowError(true);
            return;
        }
        reload();
    }
    return (
        <AuthLayout title='Login'>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                <Box
                    component="img"
                    sx={{
                        height: 200,
                        width: 200,
                        marginTop: 10,
                    }}
                    alt="Jardinex Logo"
                    src="/navbar.svg"
                />
                <form noValidate onSubmit={ handleSubmit( onLoginUser )}>
                    <Box sx={{ width: 350, padding: '10px 20px' }} >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography>Iniciar Sesión</Typography>

                                <Typography
                                    color='error'
                                    className='fadeIn'
                                    sx={{ display: showError ? 'flex' : 'none' }}
                                >
                                    No reconocemos ese usuario / contraseña
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label='Correo'
                                    type='email'
                                    variant='filled'
                                    fullWidth
                                    {...register('email', {
                                        required: 'Este campo es requerido',
                                        validate: validations.isEmail
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label='Contraseña'
                                    type='password'
                                    variant='filled'
                                    fullWidth
                                    {...register('password', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 6, message: 'ninimo 6 caracteres' }
                                    })}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type='submit'
                                    size='large'
                                    fullWidth
                                    color='primary'
                                >
                                    Ingresar
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 } display='flex' justifyContent='end'>
                            <NextLink 
                                href={query.p ?`/auth/register?p=${query.p}` : '/auth/register'}
                                passHref 
                                legacyBehavior
                                
                            >
                                <Link underline='always'>
                                    ¿No tienes cuenta?
                                </Link>
                            </NextLink>
                        </Grid>   
                        <Grid item xs={ 12 } display='flex' flexDirection='column' justifyContent='end'>
                            <Divider sx={{ width: '100%', mb: 2 }}/>
                            {
                                Object.values( providers ).map(( provider: any) => {
                                    if ( provider.id === 'credentials' ) return (<div key='credentials'></div>);
                                    return (
                                        <Button
                                            key={ provider.id }
                                            variant='outlined'
                                            fullWidth
                                            color='primary'
                                            sx={{ mb: 1 }}
                                            startIcon={ <GoogleIcon />}
                                            onClick={() => signIn( provider.id )}
                                        >
                                            { provider.name }
                                        </Button>
                                    )
                                })
                            }
                        </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </AuthLayout>
    )
}
export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
    const session = await getSession({ req });

    const { p = '/' } = query;

    if ( session ) {
        return { 
            redirect: {
                destination: p.toString(),
                permanent: false
            }
        }
    }

    return {
        props: {
            
        }
    }
}

export default LoginPage