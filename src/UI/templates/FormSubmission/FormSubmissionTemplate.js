import Box from '@mui/material/Box'
import { FormNav } from '@/UI/molecules/Nav/Nav'
import { VerticalSection } from '@/UI/molecules/VerticalSection/VerticalSection'
import { FormSubmissionFirst } from '@/UI/molecules/VerticalSection/FormSubmissionFirst/FormSubmissionFirst.index.slots'
export const FormSubmissionTemplate = ({ initialFields }) => ( // initialFields and fields: [{ label:string, value: string }]
    <Box id='root' display='flex' flexDirection='column' alignItems='center' height='100vh'>
        <FormNav />
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100%' width='100%'>
            <VerticalSection aria-label='Form Submission Section'>
                <FormSubmissionFirst initialFields={initialFields} />
            </VerticalSection>
        </Box>
    </Box>
)