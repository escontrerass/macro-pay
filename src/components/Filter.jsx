import { useState, useContext, useEffect } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import OutlinedInput from '@mui/material/OutlinedInput'
import ListItemButton from '@mui/material/ListItemButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { appContext } from '../context/appContext'
import { priceCal } from '../util/appUtils'

const brandsNames = ['Xiaomi', 'Samsung', 'Motorola', 'Apple', 'HTC', 'Poco', 'LG', 'Sony']

export function Filter() {
  const { articlesData, filterData, setFilterData } = useContext(appContext)
  const [reviews, setReviews] = useState('')
  const handleChange = event => {
    setReviews(event.target.value)
  }

  const [checked, setChecked] = useState([])
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  useEffect(() => {
    if (Boolean(checked.length > 0)) {
      const auxFilter = articlesData.list.filter(article => checked.includes(article.brand))
      setFilterData(auxFilter)
    } else {
      setFilterData(articlesData.list)
    }
  }, [checked])

  const [startPrice, setStartPrice] = useState(0)
  const handleStartPrice = event => {
    setStartPrice(Number(event.target.value))
  }
  const [endPrice, setEndPrice] = useState(0)
  const handleEndPrice = event => {
    setEndPrice(Number(event.target.value))
  }

  useEffect(() => {
    if (Boolean(startPrice > 0) && Boolean(endPrice !== 0)) {
      const auxFilter = articlesData.list.filter(article => article.price >= startPrice && article.price <= endPrice)
      setFilterData(auxFilter)
    } else if (Boolean(startPrice > 0) && Boolean(startPrice.toString().length > 2)) {
      const auxFilter = articlesData.list.filter(article => priceCal(article.price, article.discount) >= startPrice)
      console.log(articlesData.list.map(article => article.price))
      setFilterData(auxFilter)
    } else if (Boolean(endPrice !== 0) && Boolean(endPrice.toString().length > 2)) {
      const auxFilter = articlesData.list.filter(article => priceCal(article.price, article.discount) <= endPrice)
      setFilterData(auxFilter)
    } else {
      setFilterData(articlesData.list)
    }
  }, [startPrice, endPrice])

  const [stars, setStars] = useState(0)
  const ratingChanged = (event, newValue) => {
    setStars(newValue)
  }
  useEffect(() => {
    if (stars > 0) {
      const auxFilter = articlesData.list.filter(article => article.rating >= stars)
      setFilterData(auxFilter)
    } else {
      setFilterData(articlesData.list)
    }
  }, [stars])

  return (
    <Container disableGutters={true} sx={{ width: '351px', padding: '0px', marginRight: '0px', marginLeft: '113' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #7D879C',
          borderRadius: '4px',
          width: '351px',
          height: '47px',
          overflow: 'hidden',
        }}
      >
        <Typography sx={{ padding: '20px', color: '#7D879C' }}>Ordenar por</Typography>
        <Select IconComponent={KeyboardArrowDownIcon} value={reviews} onChange={handleChange} displayEmpty>
          <MenuItem value=''>
            <Typography fontWeight='bold' sx={{ letterSpacing: '.05rem', color: '#2B3445' }}>
              Mejores reviews
            </Typography>
          </MenuItem>
        </Select>
      </Box>
      <Paper
        elevation={3}
        sx={{
          width: '351px',
          height: '684px',
          backgroundColor: '#FFFFFF',
          marginTop: '18px',
          paddingTop: '22px',
        }}
      >
        <Box sx={{ paddingLeft: '24px' }}>
          <Typography color='secondary' fontWeight='bold'>
            Marcas
          </Typography>
          <List disablePadding={true} sx={{ height: '225px', overflowY: 'scroll' }}>
            {brandsNames.map(brandName => {
              const labelId = `checkbox-list-${brandName}`
              return (
                <ListItem key={brandName} disablePadding>
                  <ListItemButton role={undefined} onClick={handleToggle(brandName)} dense>
                    <ListItemIcon>
                      <Checkbox
                        sx={{ padding: '0' }}
                        edge='start'
                        checked={checked.indexOf(brandName) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={brandName} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Divider />
        <Box sx={{ marginTop: '20.5px' }}>
          <Typography color='secondary' fontWeight='bold' sx={{ paddingLeft: '24px' }}>
            Precio
          </Typography>
          <Container
            sx={{
              display: 'flex',
              gap: '6px',
              alignItems: 'center',
              marginTop: '13px',
              marginBottom: '20.5px',
            }}
          >
            <OutlinedInput sx={{ height: '44px' }} placeholder='100' onChange={handleStartPrice} />
            <Typography>-</Typography>
            <OutlinedInput sx={{ height: '44px' }} placeholder='5,000' onChange={handleEndPrice} />
          </Container>
        </Box>
        <Divider />
        <Box sx={{ marginTop: '20.5px', paddingLeft: '24px' }}>
          <Typography color='secondary' fontWeight='bold'>
            Reviews
          </Typography>
          <Box sx={{ marginBottom: '16px' }}>
            <Rating value={stars} onChange={(event, newValue) => ratingChanged(event, newValue)} />
          </Box>
        </Box>
        <Divider />
        <Typography color='secondary' fontWeight='bold' sx={{ paddingLeft: '24px', marginY: '20.5px' }}>
          Memoria
        </Typography>
        <Divider />
        <Typography color='secondary' fontWeight='bold' sx={{ paddingLeft: '24px', marginY: '20.5px' }}>
          Rango
        </Typography>
        <Divider />
        <Typography color='secondary' fontWeight='bold' sx={{ paddingLeft: '24px', marginY: '20.5px' }}>
          Cámara
        </Typography>
      </Paper>
    </Container>
  )
}
