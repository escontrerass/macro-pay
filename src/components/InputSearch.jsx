import { useState, useContext, useEffect } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { appContext } from '../context/appContext'

const categories = ['Todas', 'Celulares', 'Tablets', 'Motos']

export function InputSearch() {
  const { articlesData, setCategory, category, setFilterData } = useContext(appContext)
  const handleChange = event => {
    if (event.target.value !== 0) setCategory(event.target.value)
  }

  const [searchInput, setSearchInput] = useState('')
  const handleSearch = event => {
    setSearchInput(event.target.value)
  }

  useEffect(() => {
    if (searchInput.length >= 3) {
      setFilterData(articlesData.list.filter(data => data.title.toLowerCase().includes(searchInput)))
    } else {
      setFilterData(articlesData.list)
    }
  }, [searchInput])

  return (
    <InputBase
      onChange={handleSearch}
      placeholder='Encuentra el producto que necesitas'
      sx={{
        backgroundColor: '#fff',
        borderRadius: '50px',
        paddingLeft: '10px',
        height: '44px',
        width: '563px',
        overflow: 'hidden',
      }}
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position='end'>
          <Select
            className='category-search'
            color='warning'
            value=''
            onChange={handleChange}
            displayEmpty
            sx={{
              width: '200px',
              backgroundColor: '#7D879C',
              color: '#FFF',
            }}
          >
            <MenuItem value='' disabled>
              <Typography variant='body2'>Todas las características</Typography>
            </MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={category} value={index}>
                <Typography variant='body2'>{category}</Typography>
              </MenuItem>
            ))}
          </Select>
        </InputAdornment>
      }
    />
  )
}
