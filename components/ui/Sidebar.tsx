import { useContext, useState } from 'react'
import { useRouter } from 'next/router';

import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { Home, AdminPanelSettings,  LoginOutlined, SearchOutlined, VpnKeyOutlined, DashboardOutlined, ConnectWithoutContact } from '@mui/icons-material';
import ForestIcon from '@mui/icons-material/Forest';
import CategoryIcon from '@mui/icons-material/Category';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WidgetsIcon from '@mui/icons-material/Widgets';

import { UIContext, AuthContext } from '../../context';


export const Sidebar = () => {

    const { push, asPath } = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext(UIContext);
    const { isLoggedIn, user, logout } = useContext(AuthContext);

    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;

        navigateTo(`/search/${searchTerm}`);
    }

    const navigateTo = (url: string) => {
        toggleSideMenu();
        push(url);
    }

    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            onClose={toggleSideMenu}
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>
                    <ListItem>
                        <Input
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            onKeyUp={(e) => e.key === 'Enter' && onSearchTerm()}
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={onSearchTerm}
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListItemButton
                        sx={{ display: { xs: '', sm: '' } }}
                        onClick={() => navigateTo('/')}
                    >
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{ display: { xs: '', sm: '' } }}
                        onClick={() => navigateTo('/Catalog')}
                    >
                        <ListItemIcon>
                            <ForestIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Catálogo'} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{ display: { xs: '', sm: '' } }}
                        onClick={() => navigateTo('/about')}
                    >
                        <ListItemIcon>
                            <ConnectWithoutContact />
                        </ListItemIcon>
                        <ListItemText primary={'Nosotros'} />
                    </ListItemButton>

                    {
                        isLoggedIn
                            ? (
                               <ListItemButton onClick={ logout }>
                                <ListItemIcon>
                                    <LoginOutlined />
                                </ListItemIcon>
                                <ListItemText primary='Salir' />
                               </ListItemButton>
                            )
                            : (
                                <ListItemButton onClick={ () => navigateTo(`/auth/login?p=${asPath}`)}>
                                    <ListItemIcon>
                                        <VpnKeyOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Ingresar'} />
                                </ListItemButton>
                            )
                    }

                    {
                        user?.role === 'admin' && (
                            <>
                                <Divider />
                                <ListSubheader>Admin Panel</ListSubheader>

                                <ListItemButton onClick={ () => navigateTo('/admin')}>
                                    <ListItemIcon>
                                        <DashboardOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Dashboard'} />
                                </ListItemButton>

                                <ListItemButton onClick={ () => navigateTo('/admin/categories')}>
                                    <ListItemIcon>
                                        <CategoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Categorías'} />
                                </ListItemButton>

                                <ListItemButton onClick={ () => navigateTo('/admin/variant')}>
                                    <ListItemIcon>
                                        <SignalCellularAltIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Presentaciones'} />
                                </ListItemButton>

                                <ListItemButton onClick={ () => navigateTo('/admin/products')}>
                                    <ListItemIcon>
                                        <WidgetsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Productos'} />
                                </ListItemButton>

                                <ListItemButton onClick={ () => navigateTo('/admin/users')}>
                                    <ListItemIcon>
                                        <AdminPanelSettings />
                                    </ListItemIcon>
                                    <ListItemText primary={'Usuarios'} />
                                </ListItemButton>
                            </>
                        )
                    }

                </List>
            </Box>
        </Drawer>
    )
}
