import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export function SpecificDetail(props) {
  return (
    <Box sx={{ display: 'flex', marginTop: '12px' }}>
      <Typography sx={{ minWidth: '260px' }} fontSize={20} color='#2B3445'>
        {props.title}
      </Typography>
      <Typography fontWeight={700} fontSize={20} color='#2B3445'>
        {props.value}
      </Typography>
    </Box>
  )
}
