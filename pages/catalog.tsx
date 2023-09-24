import { ChangeEvent, useState } from 'react';

import { NextPage } from 'next';

import { Box, Card, CardContent, Grid, Checkbox, Collapse, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Stack, Pagination, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { MainLayout } from '@/components/layouts';
import { ProductList } from '@/components/catalog';



const CatalogPage: NextPage = () => {

  const [page, setPage] = useState(1);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <MainLayout title='Catálogo' pageDescription='Los mejores productos para tu jardín.'>
      
      <Box
        width='100%'
        bgcolor='#F7F1ED'
      >
        <Grid
          alignItems='center'
          container
          flex='center'
          flexDirection='column'
          justifyContent='center'
          sx={{
            height: 80,
            bgcolor: 'white',
            display: {
              xs: 'none',
              md: 'flex'
            }
          }}
        >
          <Grid
            sm={4}
            sx={{
              width: '20%',
              textAlign: 'center',
            }}
          >
            <Typography
              align='center'
              color='#284c36'
              variant='h5'
            >
              Plantas
            </Typography>
          </Grid>
          <Grid
            sm={8}
            xs={12}
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 160,
                height: 50,
                border: '1px solid #93c12c',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent>
                <Typography
                  align='center'
                  color='#93c12c'
                  variant='h6'
                >
                  Plantas
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 160,
                height: 50,
                border: '1px solid #284c36',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent>
                <Typography
                  align='center'
                  color='#284c36'
                  variant='h6'
                >
                  Tratamientos
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 160,
                height: 50,
                border: '1px solid #d9497d',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent>
                <Typography
                  align='center'
                  color='#d9497d'
                  variant='h6'
                >
                  Herramientas
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                bgcolor: 'transparent',
                width: 160,
                height: 50,
                border: '1px solid #faba2c',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent>
                <Typography
                  align='center'
                  color='#faba2c'
                  variant='h6'
                >
                  Kits
                </Typography>
              </CardContent>
            </Card>

          </Grid>
        </Grid>
        
        <Box
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
              bgcolor: 'transparent'
            },
            justifyContent: 'center',
            alignItems: 'center',
            mt: 10,
            bgcolor: 'white'
          }}
        >
          <FormControl fullWidth sx={{ mt: 2}}>
            <InputLabel>Categoría</InputLabel>
            <Select
              value='Plantas'
              label='Categoría'
              onChange={console.log}
            >
              <MenuItem value='Plantas'>Plantas</MenuItem>
              <MenuItem value='Herramientas'>Herramientas</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid
          alignItems='center'
          container
          
          flexDirection='row'
          justifyContent='flex-start'
          sx={{ 
            display: { xs: 'block', md: 'flex'},
            marginLeft: '5px', 
            marginTop: '4px',
            width: 'calc(100vw - 100px)' 
          }}
        >
          <Grid
            item
            xs={2}
            mt={1}
            ml={2}
            alignSelf='self-start'
            rowSpacing={2}
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              },
            }}
          >
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge='end'>
                    <AddIcon color='primary' />
                  </IconButton>
                }>
                <ListItemText primary='Variedad' color='primary' />
              </ListItem>
              <Collapse in={false} timeout="auto" unmountOnExit>
                <List
                  disablePadding
                  sx={{
                    ml: 2,
                    width: '100%'
                  }}
                >
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Aromáticas' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Aromáticas`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Catus y planras Crasas' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Catus y planras Crasas`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Flores' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Flores`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Hortículas' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Hortículas`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Tropicales y frutas' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Tropicales y frutas`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Árboles' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Árboles`} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem
                secondaryAction={
                  <IconButton edge='end'>
                    <AddIcon color='primary' />
                  </IconButton>
                }>
                <ListItemText primary='Formatos' />
              </ListItem>
              <Collapse in={true} timeout="auto" unmountOnExit>
                <List
                  disablePadding
                  sx={{
                    ml: 2,
                    width: '100%'
                  }}
                >
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': '24 Plantones' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`24 Plantones`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': '60 Plantones' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`60 Plantones`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': '46 Plantones' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`46 Plantones`} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem
                secondaryAction={
                  <IconButton edge='end'>
                    <AddIcon color='primary' />
                  </IconButton>
                }>
                <ListItemText primary='Riego' />
              </ListItem>
              <Collapse in={false} timeout="auto" unmountOnExit>
                <List
                  disablePadding
                  sx={{
                    ml: 2,
                    width: '100%'
                  }}
                >
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Poca Exigencia' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Poca Exigencia`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Exigencia media' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Exigencia media`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Exigente' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Exigente`} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={1}
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': 'Muy Exigente' }}
                        />
                      </ListItemIcon>
                      <ListItemText id={'first'} primary={`Muy Exigente`} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Grid>
          <ProductList />
        </Grid>

        <Stack 
          display='flex' 
          alignItems='flex-end' 
          m={1}
        >
          <Typography>Page: {page}</Typography>
          <Pagination 
            count={10} 
            variant="outlined" 
            color="secondary" 
            sx={{ mb: 2 }}
            onChange={handleChange}
          />
        </Stack>
      </Box>

    </MainLayout>
  )
}

export default CatalogPage