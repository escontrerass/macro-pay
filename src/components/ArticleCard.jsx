import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { appContext } from '../context/appContext'

export function ArticleCard(props) {
  const { id, title, rating, price, discount, img } = props
  const navigate = useNavigate()
  const [favorite, setFavorite] = useState(false)
  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  const numberFormat = new Intl.NumberFormat('en-US')
  const priceDiscount = price - price * (discount / 100)

  const [ratingValue, setRatingValue] = useState(rating)

  const { setModal, setAddCart, addCart, articlesData } = useContext(appContext)
  const handleOpen = () => {
    setAddCart(props)
    setModal(true)
  }

  const handleSelect = () => {
    setAddCart(props)
    navigate(`/${articlesData.categoryName}/${id}`)
  }

  return (
    <Paper className='article-card' sx={{ width: '385px', height: '605px', borderRadius: '20px' }}>
      <Container
        onClick={handleSelect}
        sx={{
          height: '425px',
          display: 'flex',
          placeItems: 'center',
          position: 'Relative',
          marginBottom: '20px',
          boxShadow: ' 0px 2px 5px -3px rgba(0,0,0,0.51)',
          cursor: 'pointer',
        }}
      >
        <IconButton onClick={handleFavorite} sx={{ position: 'absolute', top: '5px', right: '10px' }}>
          {!favorite ? <FavoriteBorderIcon fontSize='large' /> : <FavoriteIcon fontSize='large' />}
        </IconButton>
        {img && <img src={img[0]} alt='Article' height='405px' width='350px' />}
        {Boolean(props.discount) && (
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
              {props.discount}%
            </Typography>
          </Box>
        )}
      </Container>
      <Container sx={{ height: '160px' }}>
        <Box>
          <Box display='flex' justifyContent='space-between'>
            <Box>
              <Typography fontWeight={600} color='#2B3445' onClick={handleSelect} sx={{ cursor: 'pointer' }}>
                {title}
              </Typography>
              <Rating value={ratingValue} precision={0.5} size='large' />
            </Box>
            <Box>
              <Typography variant='h4' fontWeight='bold' color='secondary'>
                ${numberFormat.format(priceDiscount)}
              </Typography>
              {Boolean(priceDiscount < price) && (
                <Typography textAlign='end' color='#7D879C' variant='h6' sx={{ textDecoration: 'line-through' }}>
                  ${numberFormat.format(price)}
                </Typography>
              )}
            </Box>
          </Box>
          <Box display='flex' justifyContent='space-between' mt='10px'>
            <Box>
              <Typography color='#7D879C'>$120 p/semana</Typography>
              <Typography color='#7D879C'>o $520 p/mes</Typography>
            </Box>
            <Button
              onClick={handleOpen}
              variant='contained'
              color='primary'
              sx={{ width: '117px', height: '43px', marginTop: '10px' }}
            >
              <Typography fontWeight='bold' textTransform='none'>
                Lo Quiero!
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  )
}
