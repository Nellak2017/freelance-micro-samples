import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { useWatch, useFormContext } from 'react-hook-form'
import { FormPreamble } from './DefaultSteps.slots.helpers'
export const Confirm = ({ activeStep = 2, children, ...rest }) => {
    const { control } = useFormContext()
    const values = useWatch({ control }) || {}
    const fields = Object.entries(values).map(([label, value]) => ({ label: label.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()), value }))
    return (
        <Box display='flex' flexDirection='column' gap={3} width='100%' {...rest}>
            <FormPreamble activeStep={activeStep} />
            <List disablePadding>{fields?.map(({ label, value }) => (<Box key={label}><ListItem><ListItemText primary={label} secondary={value || 'Not Provided'} /></ListItem><Divider /></Box>))}</List>
            {children}
        </Box>
    )
}