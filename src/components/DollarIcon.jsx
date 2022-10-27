import Box from '@mui/material/Box'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

export function DollarIcon() {
  return (
    <Box sx={{ borderRadius: '100%', border: '2px solid #D8E0E9', padding: '2px' }}>
      <Box sx={{ borderRadius: '100%', border: '1px solid #D8E0E9', padding: '1px' }}>
        <AttachMoneyIcon fontSize='large' sx={{ color: '#D8E0E9' }} />
      </Box>
    </Box>
  )
}
