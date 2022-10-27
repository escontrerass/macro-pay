import Carousel from 'react-material-ui-carousel'
import banner1 from '../assets/banner-1.jpg'
import banner2 from '../assets/banner-2.jpg'
import banner3 from '../assets/banner-3.jpg'
import { BannerImg } from '../components/BannerImg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export function BannerCarousel() {
  const banner = [
    {
      id: 1,
      img: banner1,
      description: 'Lorem',
    },
    {
      id: 2,
      img: banner2,
      description: 'Lorem',
    },
    {
      id: 3,
      img: banner3,
      description: 'Lorem',
    },
  ]

  return (
    <Container maxWidth='1920px' sx={{ textAlign: 'center', marginTop: '40px' }}>
      <Typography color='#2B3445' fontWeight='bold' fontSize='22px'>
        Ofertas y promociones
      </Typography>
      <Container disableGutters={true} maxWidth='1640px' sx={{ width: '1640px', height: '560px', marginTop: '38px' }}>
        <Carousel
          navButtonsAlwaysVisible
          NextIcon={<ArrowForwardIcon fontSize='large' />}
          PrevIcon={<ArrowBackIcon fontSize='large' />}
          sx={{ overflow: 'visible' }}
          navButtonsProps={{
            style: {
              backgroundColor: '#FFFFFF',
              color: '#7D879C',
              width: '95px',
              height: '95px',
            },
          }}
          navButtonsWrapperProps={{
            style: {
              top: 'calc(50% - 300px)',
            },
          }}
        >
          {banner.map(banImg => (
            <BannerImg key={banImg.id} {...banImg} />
          ))}
        </Carousel>
      </Container>
    </Container>
  )
}
