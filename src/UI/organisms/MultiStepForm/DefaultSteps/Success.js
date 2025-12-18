import Typography from '@mui/material/Typography'
import { SUCCESS_DATA } from '@/Core/components/MultiStepForm/Success/Success.constants'
export const Success = ({ state: { header, description } = SUCCESS_DATA }) => (
    <>
        <Typography variant='h2' align='center' py={4}>{header}</Typography>
        <Typography component='p' variant='body1' align='center'>{description}</Typography>
    </>)