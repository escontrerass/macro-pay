import { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Rating from '@mui/material/Rating'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import { appContext } from '../context/appContext'
import { categoryName } from '../util/appUtils'
import { IconVisa } from '../components/IconVisa'
import { Link } from 'react-router-dom'
import { BestSeller } from '../components/BestSeller'
import { LinearProgress, List, ListItem, ListItemIcon, ListItemText, Paper, Slider } from '@mui/material'
import { SpecificDetail } from '../components/SpecificDetail'
import CheckIcon from '@mui/icons-material/Check'
import smile from '../assets/smile.png'
import { DollarIcon } from '../components/DollarIcon'

export function ArticleSelected(props) {
  const { title, price, img, brand, discount, rating } = props
  const { category } = useContext(appContext)
  const nameCategory = categoryName(category)

  const [favorite, setFavorite] = useState(false)
  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  const numberFormat = new Intl.NumberFormat('en-US')
  const priceDiscount = price - price * (discount / 100)

  const [ratingValue, setRatingValue] = useState(rating)

  return (
    <Container
      maxWidth='1920px'
      disableGutters={true}
      sx={{
        marginTop: '33px',
        marginX: '155px',
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        marginBottom: '320px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '18px' }}>
        <Link to='/'>
          <Button variant='outlined' color='common' sx={{ width: '125px', height: '33px' }}>
            <Typography fontSize='10px' color='#707070' textTransform='none'>
              Volver a resultados
            </Typography>
          </Button>
        </Link>
        <Typography fontSize='12px' color='#004AC1'>
          {`${nameCategory}/${brand}/`}
          <span className='article-model'>{`${title}`}</span>
        </Typography>
      </Box>
      <Box sx={{ width: '1620px', height: '644px', marginTop: '19px', display: 'flex' }}>
        <Box>
          <Box sx={{ overflow: 'hidden', borderRadius: '10px', width: '142px', height: '148px', marginBottom: '17px' }}>
            <img src={img[0]} alt={title} width={143} height={148} />
          </Box>
          <Box sx={{ overflow: 'hidden', borderRadius: '10px', width: '142px', height: '148px', marginBottom: '17px' }}>
            <img src={img[1]} alt={title} width={143} height={148} />
          </Box>
          <Box sx={{ overflow: 'hidden', borderRadius: '10px', width: '142px', height: '148px', marginBottom: '17px' }}>
            <img src={img[0]} alt={title} width={143} height={148} />
          </Box>
          <Box sx={{ overflow: 'hidden', borderRadius: '10px', width: '142px', height: '148px' }}>
            <img src={img[1]} alt={title} width={143} height={148} />
          </Box>
        </Box>
        <Box
          sx={{
            width: '428px',
            height: '642px',
            marginLeft: '19px',
            overflow: 'hidden',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <IconButton onClick={handleFavorite} sx={{ position: 'absolute', top: '5px', right: '10px' }}>
            {!favorite ? <FavoriteBorderIcon fontSize='large' /> : <FavoriteIcon fontSize='large' />}
          </IconButton>
          {img && <img src={img[0]} alt='Article' height='642px' width='428px' />}
          {Boolean(discount) && (
            <Box
              sx={{
                position: 'absolute',
                bottom: '20px',
                left: '14px',
                width: '98px',
                height: '98px',
                backgroundColor: '#E6406D',
                borderRadius: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography fontWeight='bold' fontSize='40px' color='#FFFFFF'>
                {discount}%
              </Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ marginTop: '19px', marginLeft: '59px' }}>
          <Box sx={{ width: '970px', height: '334px', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ width: '435px' }}>
                <Typography
                  fontSize='40px'
                  color='#2B3445'
                >{`${title} ${props?.camera}MP ${props?.rom}GB, ${props?.ram}GB RAM`}</Typography>
                <Rating value={ratingValue} precision={0.5} size='large' />
              </Box>
              <Box sx={{ textAlign: 'end' }}>
                <Typography variant='h4' fontWeight='bold' color='secondary'>
                  ${numberFormat.format(priceDiscount)}
                </Typography>
                {Boolean(priceDiscount < price) && (
                  <Typography textAlign='end' color='#7D879C' variant='h6' sx={{ textDecoration: 'line-through' }}>
                    ${numberFormat.format(price)}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', columnGap: '8px' }}>
                  <IconVisa />
                  <IconVisa />
                  <IconVisa />
                  <IconVisa />
                </Box>
              </Box>
            </Box>
            <Typography color='#2B3445' sx={{ marginTop: '20px' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sapiente consequuntur libero
              reiciendis pariatur eum doloribus exercitationem repellat voluptatibus animi hic eos nostrum, totam amet!
              Voluptatibus quod pariatur qui neque?
            </Typography>
            <Typography color='#004AC1' sx={{ marginTop: '6px', cursor: 'pointer' }}>
              - Ver más -
            </Typography>
            <Box
              sx={{
                width: '422px',
                backgroundColor: '#D8E0E9',
                display: 'flex',
                alignSelf: 'end',
                justifyContent: 'center',
                paddingY: '16px',
                borderRadius: '8px',
              }}
            >
              <ShieldOutlinedIcon fontSize='large' />
              <Box>
                <Typography fontWeight='bold' fontSize='14px'>
                  Compra segura con Macropay Protect
                </Typography>
                <Typography fontSize='12px'>Devolución gratis (30 días)/12 meses de garantía de fabrica</Typography>
              </Box>
            </Box>
            <Typography fontSize='12px' color='#E6406D' sx={{ alignSelf: 'end', marginTop: '12px' }}>
              La promoción vence en 24d 12h:43m
            </Typography>
          </Box>
          <Box></Box>
        </Box>
        <Box></Box>
      </Box>
      <Typography fontSize='22px' fontWeight='bold' color='#2B3445' sx={{ marginTop: '46px' }}>
        Información Detallada del Producto
      </Typography>
      <Box sx={{ width: '1620px', marginTop: '29px', display: 'flex' }}>
        <Box sx={{ width: '766px', display: 'flex', gap: '19px', flexWrap: 'wrap' }}>
          {img && <img src={img[1]} alt='Article' height='558px' width='373px' className='detail-img' />}
          {img && <img src={img[0]} alt='Article' height='558px' width='373px' className='detail-img' />}
          {img && <img src={img[0]} alt='Article' height='558px' width='373px' className='detail-img' />}
          {img && <img src={img[1]} alt='Article' height='558px' width='373px' className='detail-img' />}
        </Box>
        <Box>
          <Box sx={{ marginLeft: '61px', marginTop: '40px', display: 'flex', columnGap: '69px' }}>
            <Typography fontWeight={700} fontSize={20}>
              Otras Especificaciones
            </Typography>
            <Typography fontSize={20}>Reviews(3)</Typography>
          </Box>
          <LinearProgress
            color='secondary'
            variant='determinate'
            value={30}
            sx={{ marginLeft: '50px', marginTop: '5px', width: '795px' }}
          />
          <Box sx={{ marginTop: '20px' }}>
            <Box sx={{ marginLeft: '72px' }}>
              <SpecificDetail title='Fabricante' value='Sample' />
              <SpecificDetail title='Peso del producto' value='50 gr' />
              <SpecificDetail title='Dimensiones' value='11 x 10 x 0.4 pulgadas' />
              <SpecificDetail title='País de Origen' value='China' />
              <SpecificDetail title='Número de modelo' value='13687' />
              <SpecificDetail title='Color' value='Plata' />
              <SpecificDetail title='Material' value='Silicon plástico' />
              <SpecificDetail title='Cantidad de piezas' value='4' />
              <SpecificDetail title='Características especiales' value='Resistente al agua' />
              <SpecificDetail title='Componentes incluidos' value='Audífonos, Cargador y Manual de usuario' />
            </Box>
            <Box sx={{ paddingLeft: '58px', display: 'flex' }}>
              <Box>
                <Typography fontSize={28} color='#FFFFFF' sx={{ width: '233px' }}>
                  Lleva este celular a Crédito!
                </Typography>
                <Typography fontSize={24} color='#FFD300'>
                  ¿Qué necesitas?
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: '#A2D456' }} />
                    </ListItemIcon>
                    <ListItemText>Tu cuenta de Facebook</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: '#A2D456' }} />
                    </ListItemIcon>
                    <ListItemText>Tu INE Vigente</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: '#A2D456' }} />
                    </ListItemIcon>
                    <ListItemText>Correo electrónico</ListItemText>
                  </ListItem>
                </List>
              </Box>
              <Paper sx={{ width: '375px', textAlign: 'center', paddingX: '40px' }}>
                <Box sx={{ marginTop: '48px', marginBottom: '22px' }}>
                  <img src={smile} alt='Cara sonriente azul' width={84} />
                </Box>
                <Typography fontWeight={700} fontSize={25} color='#2B3445'>
                  ¿Te falta una lanita?
                </Typography>
                <Typography fontSize={18} color='#2B3445' sx={{ marginTop: '26px' }}>
                  ENGANCHE $520,00
                </Typography>
                <Typography fontSize={18} color='#2B3445'>
                  PAGO SEMANAL $125,00
                </Typography>
                <Slider color='secondary' sx={{ marginTop: '16px' }} />
                <Typography textAlign='start' sx={{ marginBottom: '22px' }}>
                  Enganche
                </Typography>
                <Button variant='contained' sx={{ width: '295px', height: '72px' }}>
                  <Typography fontWeight='bold' textTransform='none' fontSize={22}>
                    Aplica ahora
                  </Typography>
                </Button>
                <Typography fontSize={12} color='#B4B4B4' sx={{ marginTop: '12px', marginBottom: '46px' }}>
                  *Hasta $2,000 de manera fácil, rápida y confiable
                </Typography>
              </Paper>
              <Box sx={{ position: 'absolute' }}>
                <DollarIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <BestSeller title='Productos Relacionados' />
    </Container>
  )
}
