import Box from '@mui/material/Box'
import { FormNav } from '@/UI/molecules/Nav/Nav'
import { VerticalSection } from '@/UI/molecules/VerticalSection/VerticalSection'
import { FormSubmissionFirst } from '@/UI/molecules/VerticalSection/FormSubmissionFirst/FormSubmissionFirst.index.slots'
export const FormSubmissionTemplate = ({ fields }) => ( // fields: [{label:string, value: string}]
    <Box id='root' display='flex' flexDirection='column' alignItems='center' height='100vh'>
        <FormNav />
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100%' width='100%'>
            <VerticalSection aria-label='Form Submission Section'>
                <FormSubmissionFirst fields={fields} />
            </VerticalSection>
        </Box>
    </Box>
)
// TODO: Add react query for auto sync of the fetched data
// TODO: Pre-fill the form when the user clicks "edit" for UX purposes
// TODO: Add Snackbar feedback for Delete form submission (it is unclear it was deleted and since it isn't auto synced yet it is not obvious at all)