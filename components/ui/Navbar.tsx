import { useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { AppBar, Toolbar, Link, Typography, Badge, Box, Button, IconButton, Input, InputAdornment } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ClearOutlined from '@mui/icons-material/ClearOutlined';

export const Navbar = () => {
    const { asPath, push } = useRouter();

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    
    const onSearchTerm = () => {
        if( searchTerm.trim().length === 0 ) return;
        push(`/search/${ searchTerm }`);
    }
    return (
        <AppBar>
            <Toolbar 
                sx={{ 
                    mt: 2, 
                    height: 'auto', 
                    pb: 4,
                }}>
                <NextLink href='/' passHref legacyBehavior >
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

                <Box 
                    sx={{ 
                        display: isSearchVisible ? 'none' : { xs: 'none', sm: 'flex' },
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    className="fadeIn">
                    <NextLink href='/' passHref legacyBehavior>
                        <Link>
                            <Button
                                color={asPath === '/' ? 'primary' : 'info'}
                            >
                                Home
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/catalog' passHref legacyBehavior>
                        <Link>
                            <Button
                                color={asPath === '/catalog' ? 'primary' : 'info'}
                            >
                                Catálogo
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/about' passHref legacyBehavior>
                        <Link>
                            <Button
                                color={asPath === '/about' ? 'primary' : 'info'}
                            >
                                Nosotros
                            </Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                {
                    isSearchVisible
                        ? (
                            <Input
                                sx={{ 
                                    display: { xs: 'none', sm: 'flex' },
                                    borderRadius: '40px'
                                }}
                                className='fadeIn'
                                autoFocus
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyUp={(e) => e.key === 'Enter' && onSearchTerm()}
                                type='text'
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setIsSearchVisible(false)}
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                        : (
                            <IconButton
                                onClick={() => setIsSearchVisible(true)}
                                className='fadeIn'
                                sx={{ display: { sx: 'none', sm: 'flex' } }}
                            >
                                <SearchOutlined />
                            </IconButton>
                        )
                }


                {/* <NextLink href='/cart' passHref legacyBehavior>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={numberOfItems > 9 ? '+9' : numberOfItems} color='secondary'>
                                <ShoppingBagOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button
                    onClick={toggleSideMenu}
                >
                    Menu
                </Button> */}
            </Toolbar>
        </AppBar>
    )
}
