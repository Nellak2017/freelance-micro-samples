import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
export const AppSnackbar = ({ state: { open, message, severity }, services: { onClose } }) => (<Snackbar open={open} autoHideDuration={6000} onClose={onClose}><Alert onClose={onClose} severity={severity} variant='filled' sx={{ color: 'text.primary' }}>{message}</Alert></Snackbar>)