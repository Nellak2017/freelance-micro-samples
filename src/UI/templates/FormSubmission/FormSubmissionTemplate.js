import Box from '@mui/material/Box'
import { CenterContainer, Nav, StandardContainer } from '@/UI/molecules/Nav/Nav'
import { VerticalSection } from '@/UI/molecules/VerticalSection/VerticalSection'
import { FormSubmissionFirst } from '@/UI/molecules/VerticalSection/FormSubmissionFirst/FormSubmissionFirst.index.slots'
import { FORM_SAMPLE_PAGE_NAV_LINKS } from '@/Core/templates/FormSampleTemplate.constants'
import { LeftSlot, MiddleSlot, RightSlot } from '@/UI/molecules/Nav/Nav.slots'
export const FormSubmissionTemplate = ({ fields }) => ( // fields: [{label:string, value: string}]
    <Box id='root' display='flex' flexDirection='column' alignItems='center' height='100vh'>
        <Nav>
            <StandardContainer px={3} py={3} flexDirection={{ xs: 'column', md: 'row' }}>
                <StandardContainer gap={6} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <LeftSlot /><CenterContainer><MiddleSlot state={{ links: FORM_SAMPLE_PAGE_NAV_LINKS }} /></CenterContainer>
                </StandardContainer>
                <RightSlot />
            </StandardContainer>
        </Nav>
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100%' width='100%'>
            <VerticalSection aria-label='Form Submission Section'>
                <FormSubmissionFirst fields={fields} />
            </VerticalSection>
        </Box>
    </Box>
)
// TODO: Add react query for auto sync of the fetched data
// TODO: Since this Nav variant is used twice (here and in Form Sample template), make this an exported slot composition
// TODO: Pre-fill the form when the user clicks "edit" for UX purposes
// TODO: Add Snackbar feedback for Delete form submission (it is unclear it was deleted and since it isn't auto synced yet it is not obvious at all)