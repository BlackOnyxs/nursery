import { useEffect, useState } from 'react';
import { NextPage } from 'next'
import useSwr from 'swr';

import DashboarIcon from '@mui/icons-material/DashboardOutlined'
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WidgetsIcon from '@mui/icons-material/Widgets'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Grid, Typography } from '@mui/material';

import { AdminLayout } from '@/components/layouts';
import { SummaryTile } from '@/components/admin';
import { DashboardSummaryResponse } from '@/interfaces';

const DashboardPage: NextPage = () => {

  const { data, error } = useSwr<DashboardSummaryResponse>('/api/admin/dashboard', {
    refreshInterval: 30 * 1000
  });
  const [refreshIn, setrefreshIn] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setrefreshIn(refreshIn => refreshIn > 0 ? refreshIn - 1 : 30)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // if (!error && !data) {
  //   return <></>
  // }

  // if (error) {
  //   return <Typography>Error al cargar la data</Typography>
  // }
  return (
    <AdminLayout
      title='Dashboard'
      subTitle='Estadisticas generales'
      icon={<DashboarIcon />}
    >
      <Grid container spacing={2} className='fadeIn'>

        <SummaryTile
          title={2}
          subTitle='Usuarios'
          icon={<GroupIcon color='primary' sx={{ fontSize: 40 }} />}
        />

        <SummaryTile
          title={4}
          subTitle='Categorias'
          icon={<CategoryIcon color='error' sx={{ fontSize: 40 }} />}
        />

        <SummaryTile
          title={6}
          subTitle='Presentaciones'
          icon={<SignalCellularAltIcon color='warning' sx={{ fontSize: 40 }} />}
        />

        <SummaryTile
          title={45}
          subTitle='Productos'
          icon={<WidgetsIcon color='warning' sx={{ fontSize: 40 }} />}
        />

        <SummaryTile
          title={refreshIn}
          subTitle='Actualización en:'
          icon={<AccessTimeFilledIcon color='secondary' sx={{ fontSize: 40 }} />}
        />

      </Grid>
    </AdminLayout>
  )
}

export default DashboardPage;