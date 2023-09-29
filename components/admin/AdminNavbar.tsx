import { useContext } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';


import { UIContext } from '@/context';

export const AdminNavbar = () => {

  const { toggleSideMenu } = useContext(UIContext);

  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref legacyBehavior>
          <Link
            display='flex'
            alignItems='center'
            mt={2}
          >
            <Image

              src='/navbar.svg'
              width={200}
              height={100}
              alt='Jardinex logo'
            />
          </Link>
        </NextLink>

        <Box flex={1} />

        <Button
          onClick={toggleSideMenu}
        >
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}
