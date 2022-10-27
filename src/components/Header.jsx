import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { SectionButton } from './SectionButton'
import macroPayLogo from '../assets/macroPay-logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <AppBar
      position='static'
      color='secondary'
      sx={{
        height: '171px',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Toolbar disableGutters={true} sx={{ height: '171px', justifyContent: 'space-between', paddingX: '150px' }}>
        <Link to='/'>
          <IconButton>
            <Box>
              <img src={macroPayLogo} alt='Logo de MacroPay' />
            </Box>
          </IconButton>
        </Link>
        <Box sx={{ display: 'flex', gap: '40px', alignItems: 'center', marginRight: '100px' }}>
          <Button variant='contained' sx={{ width: 194, height: 72 }}>
            <Typography fontSize='20px' textTransform='none'>
              Crea Tu Cuenta
            </Typography>
          </Button>
          <Button variant='text'>
            <Typography fontSize='20px' textTransform='none'>
              Iniciar sesión
            </Typography>
          </Button>
          <IconButton
            className='cart-button'
            sx={{
              backgroundColor: '#D8E0E9',
              width: '43px',
              height: '43px',
              '&:hover': { backgroundColor: '#2b3445' },
            }}
          >
            <ShoppingCartOutlinedIcon
              color='common'
              fontSize='large'
              sx={{
                '&:hover': { color: '#FFF' },
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
      <Toolbar
        disableGutters={true}
        sx={{ backgroundColor: '#FFFFFF', height: '60px', display: 'flex', gap: '50px', paddingX: '150px' }}
      >
        <Link to='/'>
          <SectionButton title='Home' />
        </Link>
        <SectionButton title='Celulares' />
        <SectionButton title='Motocicletas' />
        <SectionButton title='Tus préstamos' />
        <SectionButton title='Tiendas' />
        <SectionButton title='Tracking' />
        <SectionButton title='Club Macropay' />
      </Toolbar>
      <Box
        className='credit'
        sx={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '308px',
          height: '308px',
          borderRadius: '100%',
        }}
      >
        <Typography textAlign='center' fontSize='32px' color='#fff' sx={{ marginTop: '150px' }}>
          COMPRA A
        </Typography>
        <Typography textAlign='center' fontSize='44px' color='#fff'>
          CRÉDITO
        </Typography>
      </Box>
    </AppBar>
  )
}
