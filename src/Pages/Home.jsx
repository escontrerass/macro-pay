import Container from '@mui/material/Container'
import { Filter } from '../components/Filter'
import { ListArticles } from '../components/ListArticles'
import { BannerCarousel } from '../components/BannerCarousel'
import { BestSeller } from '../components/BestSeller'

export function Home() {
  return (
    <Container
      maxWidth='1620px'
      disableGutters={true}
      sx={{ marginTop: '33px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Container disableGutters={true} maxWidth='1920px' sx={{ display: 'flex' }}>
        <Filter />
        <ListArticles />
      </Container>
      <BannerCarousel />
      <BestSeller title='Nuestros Productos Más Vendidos' />
    </Container>
  )
}
