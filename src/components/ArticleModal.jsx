import { useContext } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { appContext } from '../context/appContext'
import modalBanner from '../assets/modal.png'
import { Button, Divider, Paper } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export function ArticleModal(props) {
  const { modal, setModal } = useContext(appContext)
  const handleClose = () => setModal(false)

  const numberFormat = new Intl.NumberFormat('en-US')
  const priceDiscount = props?.price - props?.price * (props?.discount / 100)

  return (
    <>
      {props && (
        <div>
          <Modal className='modal' open={modal} onClose={handleClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 613,
                backgroundColor: '#fff',
                boxShadow: 24,
                overflow: 'hidden',
              }}
            >
              <Box sx={{ marginBottom: '29px' }}>
                <img src={modalBanner} alt='Hombre adulto con un teléfono en la mano' />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '40px' }}>
                <Box>{props.img && <img src={props?.img[0]} alt={props?.title} width={162} />}</Box>
                <Box>
                  <Typography
                    fontSize='20px'
                    fontWeight='bold'
                    color='#2B3445'
                  >{`${props.title} ${props.camera}MP`}</Typography>
                  <Typography
                    fontSize='20px'
                    fontWeight='bold'
                    color='#2B3445'
                  >{`${props.rom}GB ${props.ram}RAM`}</Typography>
                  <Typography fontSize='18px' color='#7D879C'>
                    Color seleccionado: <span className='color-modal'>Gris Ratón</span>
                  </Typography>
                </Box>
                <Box sx={{ alignSelf: 'start', justifySelf: 'end' }}>
                  <Typography fontSize='18px' fontWeight={600} color='#004AC1'>
                    ${numberFormat.format(priceDiscount)}
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'space-around', marginY: '25px' }}>
                <Typography fontSize='18px' fontWeight={600} color='#7D879C'>
                  1 ítem en tu carrito
                </Typography>
                <Typography fontSize='18px' fontWeight={600} color='#7D879C'>
                  Subtotal <span className='price-modal'>${numberFormat.format(priceDiscount)}</span>
                </Typography>
              </Box>
              <Divider />
              <Paper
                elevation={4}
                sx={{
                  marginTop: '18px',
                  width: '76px',
                  height: '76px',
                  borderRadius: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginX: 'auto',
                }}
              >
                <Box sx={{ borderRadius: '100%', border: '1px solid yellow', padding: '8px' }}>
                  <CheckIcon sx={{ color: '#004AC1', fontSize: '40px' }} />
                </Box>
              </Paper>
              <Box sx={{ marginTop: '10px', textAlign: 'center', marginBottom: '20px' }}>
                <Typography fontSize='20px' fontWeight={600} color='#2B3445'>
                  Te vas a llevar este celular por solo
                </Typography>
                <Typography fontSize='30px' fontWeight={600} color='#2B3445'>
                  $120 p/semana!
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant='contained'
                  color='primary'
                  sx={{ width: '303px', height: '67px', marginBottom: '20px' }}
                >
                  <Typography fontSize='20px'>COMPRAR A CRÉDITO</Typography>
                </Button>
                <Typography fontSize='20px' sx={{ marginBottom: '7px' }}>
                  o puedes
                </Typography>
                <Typography fontWeight={600} color='#004AC1' sx={{ marginBottom: '42px' }}>
                  Comprar a contado
                </Typography>
              </Box>
            </Box>
          </Modal>
        </div>
      )}
    </>
  )
}
