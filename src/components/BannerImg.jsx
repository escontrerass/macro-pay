import React from 'react'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export function BannerImg(props) {
  return (
    <Paper
      sx={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', display: 'flex', placeItems: 'center' }}
    >
      <img src={props.img} alt={props.description} height='520px' width='1660px' />
      <Button
        variant='contained'
        sx={{
          position: 'absolute',
          bottom: '50px',
          color: '#FFD300',
          backgroundColor: '#2B3445',
          width: '420px',
          height: '82px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Typography variant='h4' fontWeight='bold' sx={{ textTransform: 'none' }}>
          Sample Banner CTA
        </Typography>
      </Button>
    </Paper>
  )
}
