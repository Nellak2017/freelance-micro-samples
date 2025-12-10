import Typography from '@mui/material/Typography'
// TODO: Extract to constants file
export const Success = () => (
    <>
        <Typography variant='h2' align='center' sx={{ py: 4 }}>Thank you!</Typography>
        <Typography component='p' align='center'>This is a portfolio demo form. No data is submitted or emailed.</Typography>
    </>)