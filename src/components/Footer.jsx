import Container from '@mui/material/Container'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TelegramIcon from '@mui/icons-material/Telegram'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import macroPayLogo from '../assets/macroPay-logo.svg'
import smile from '../assets/smile.png'

export function Footer() {
  return (
    <Container
      disableGutters={true}
      maxWidth='1920px'
      sx={{ marginTop: '157px', height: '688px', display: 'flex', position: 'relative' }}
      className='footer-wave '
    >
      <Container
        disableGutters={true}
        sx={{
          position: 'absolute',
          bottom: '26px',
          left: '108px',
          display: 'flex',
          alignItems: 'center',
          columnGap: '166px',
        }}
      >
        <Container disableGutters={true} sx={{ margin: '0px' }}>
          <Typography fontWeight='bold' fontSize='20px' color='#013E9B'>
            OFERTAS Y PROMOCIONES
          </Typography>
          <Typography fontWeight={800} fontSize='50px' color='#2B3445' sx={{ marginTop: '24px' }}>
            No te pierdas
          </Typography>
          <Typography fontWeight={800} fontSize='50px' color='#2B3445'>
            nuestras ofertas!
          </Typography>
          <Input
            sx={{ width: '705px', paddingBottom: '21.5px' }}
            variant='standard'
            placeholder='Tu dirección de correo electrónico'
            endAdornment={
              <InputAdornment position='end'>
                <TelegramIcon color='secondary' sx={{ fontSize: '45px' }} />
              </InputAdornment>
            }
          />
          <Container
            disableGutters={true}
            sx={{
              marginTop: '77.5px',
              display: 'flex',
              alignItems: 'center',
              columnGap: '85px',
              marginBottom: '36px',
            }}
          >
            <Box
              sx={{
                width: '203px',
                height: '70px',
                backgroundColor: '#0038AE',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={macroPayLogo} alt='Macropay Logo' width={183} height={50} />
            </Box>
            <Box>
              <Typography fontSize='18px' color='#2B3445'>
                Envíos y devoluciones
              </Typography>
              <Typography fontSize='18px' color='#2B3445'>
                Preguntas Frecuentes
              </Typography>
            </Box>
            <Box>
              <Typography fontSize='18px' color='#2B3445'>
                Aviso de privacidad
              </Typography>
              <Typography fontSize='18px' color='#2B3445'>
                Términos y condiciones
              </Typography>
            </Box>
          </Container>
          <Typography fontSize='10px' color='#2B3445'>
            Todos los derechos reservados - © Macropay 2022
          </Typography>
        </Container>
        <Container
          disableGutters={true}
          sx={{ width: '206px', height: '174px', margin: '0px', alignSelf: 'end', marginBottom: '120px' }}
        >
          <img src={smile} alt='Sonrisa de color azul' />
        </Container>
        <Container disableGutters={true} sx={{ margin: '0px' }}>
          <Typography fontWeight={800} fontSize='50px' color='#2B3445' sx={{ marginTop: '24px' }}>
            Conversemos!
          </Typography>
          <Typography fontSize='22px' color='#2B3445' sx={{ marginTop: '24px' }}>
            Loren ipsum dolor sit amet
          </Typography>
          <Box sx={{ display: 'flex', columnGap: '31px', marginTop: '31px' }}>
            <FacebookIcon sx={{ fontSize: '55px' }} />
            <InstagramIcon sx={{ fontSize: '55px' }} />
            <LinkedInIcon sx={{ fontSize: '55px' }} />
            <WhatsAppIcon sx={{ fontSize: '55px' }} />
          </Box>
        </Container>
      </Container>
    </Container>
  )
}
