import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { useWatch, useFormContext } from 'react-hook-form'
import { FormPreamble } from './DefaultSteps.slots.helpers'
import { snakeCaseObjectToSentenceCaseList } from '@/Core/shared/global.domain'
export const Confirm = ({ activeStep = 2, children, ...rest }) => {
    const { control } = useFormContext()
    const values = useWatch({ control }) || {}
    return (
        <Box display='flex' flexDirection='column' gap={3} width='100%' {...rest}>
            <FormPreamble activeStep={activeStep} />
            <List disablePadding>{(snakeCaseObjectToSentenceCaseList(values))?.map(({ label, value }) => (<Box key={label}><ListItem><ListItemText primary={label} secondary={value || 'Not Provided'} /></ListItem><Divider /></Box>))}</List>
            {children}
        </Box>
    )
}