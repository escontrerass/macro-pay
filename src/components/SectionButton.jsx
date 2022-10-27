import React from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '16px',
  textTransform: 'none',
  color: theme.palette.common.main,
  padding: '0px',
  borderBottom: '2px solid rgba(255, 193, 112, 0)',
  borderRadius: '0px',
  lineHeight: '1.1rem',
  minWidth: '0px',

  '&:hover': {
    color: theme.palette.secondary.main,
  },
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    bottom: '-.2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '10%',
    width: '15px',
    backgroundColor: theme.palette.primary.main,
  },
}))

export function SectionButton(props) {
  return <CustomButton>{props.title}</CustomButton>
}
