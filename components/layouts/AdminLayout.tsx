import { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '@mui/material';
import { Sidebar } from '../ui';
import { AdminNavbar } from '../admin';

interface Props extends PropsWithChildren{
    title: string;
    subTitle: string;
    icon?: JSX.Element;
}
export const AdminLayout:FC<Props> = ({children, title, subTitle, icon }) => {
  return (
    <>  
        <title>{title}</title>
        <nav>
            <AdminNavbar />
        </nav>
        
        <Sidebar />

        <main
          style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
          }}
        >
            <Box display='flex' flexDirection='column'>
                <Typography variant='h4' component='h1'>
                    { icon }
                    {' '} { title }
                </Typography>
                <Typography variant='h2' sx={{ mb: 1, mt: 1}}>{subTitle}</Typography>
            </Box>
                
            <Box className='fadeIn'>
                { children}
            </Box>

        </main>
        <footer>
          
        </footer>
    </>
  )
}
