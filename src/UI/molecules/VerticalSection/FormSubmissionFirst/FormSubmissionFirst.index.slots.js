import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { FORM_SUBMISSION_FIRST } from '@/Core/components/VerticalSection/FormSubmissionFirst.constants'
import { useSnackbar } from '@/Application/hooks/shared/useSnackbar'
import { useFormSubmissionTemplate } from '@/Application/hooks/templates/FormSubmissionTemplate/useFormSubmissionTemplate'
import { AppSnackbar } from '@/UI/atoms/AppSnackBar/AppSnackBar'
import { PageContainer } from '../../PageContainer/PageContainer'
// fields: [{label:string, value: string}]
export const FormSubmissionFirst = ({ initialFields = [], state: { header, subHeader, primaryButton, secondaryButton, } = FORM_SUBMISSION_FIRST }) => {
    const { state: snackbarState, services: { showSuccess, showError, showInfo, closeSnackbar } } = useSnackbar()
    const { state: { fields, error } = {}, services: { deleteHandler } = {} } = useFormSubmissionTemplate?.({ initialData: initialFields, showError }) || {}
    const handleDelete = useCallback(async () => {
        await deleteHandler?.()
        if (!error) { fields?.length === 0 ? showInfo('Form already deleted') : showSuccess('Form Deleted') }
    }, [error, fields?.length, deleteHandler, showInfo, showSuccess])
    return (
        <PageContainer sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box id='form-submission-first-top' component='header' display='flex' flexDirection='column' gap={GAP} maxWidth='60%' aria-labelledby='form-submission-first-header' backgroundColor='background.paper' boxShadow={3} borderRadius={2} p={4}>
                <Typography id='form-submission-first-header' component='h1' variant='h1' fontWeight='normal' textAlign='center' mx={{ xs: 0, sm: GAP }}>{header}</Typography>
                <Typography component='h2' variant='h3' fontWeight='normal' textAlign='center' mx={{ xs: 0, sm: GAP }}>{subHeader}</Typography>
                <List>{fields?.map(({ label, value }) => (<Box key={label}><ListItem><ListItemText primary={label} secondary={value || 'Not Provided'} slotProps={{ secondary: { align: 'center' } }} /></ListItem><Divider /></Box>))}
                    {!fields?.length && <Typography textAlign={'center'} p={3}>No form submission yet</Typography>}
                </List>
                <Box id='form-submission-first-button-group' display='flex' justifyContent='center' gap={GAP}>
                    <Button href={primaryButton?.href} color={primaryButton?.color} aria-label={primaryButton?.label} title={primaryButton?.label}>{primaryButton?.label}</Button>
                    <Button href={secondaryButton?.href} color={secondaryButton?.color} aria-label={secondaryButton?.label} title={secondaryButton?.label} onClick={handleDelete}>{secondaryButton?.label}</Button>
                </Box>
                <AppSnackbar state={snackbarState} services={{ onClose: closeSnackbar }} />
            </Box>
        </PageContainer>
    )
}