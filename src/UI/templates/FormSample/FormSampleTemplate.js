import Box from '@mui/material/Box'
import { MultiStepForm } from '@/UI/organisms/MultiStepForm/MultiStepForm'
import { StepForm } from '@/UI/organisms/MultiStepForm/MultiStepForm.slots'
import { Nav, StandardContainer, CenterContainer } from '@/UI/molecules/Nav/Nav'
import { LeftSlot, RightSlot, CustomLink } from '@/UI/molecules/Nav/Nav.slots'

const formSamplePageNavLinks = [{ key: 'Home', title: 'Home', label: 'Home', href: '/' }] // TODO: Extract to constants file
export const FormSampleTemplate = ({ serverStep }) => (
    <Box>
        <Nav>
            <StandardContainer px={3} py={3} flexDirection={{ xs: 'column', md: 'row' }}>
                <StandardContainer gap={6} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <LeftSlot /><CenterContainer><Box component='ul' display='flex' alignItems='center' gap={2} aria-label='Main Navigation Links'>{formSamplePageNavLinks?.map(({ key, title, label, href }) => (<CustomLink title={title} key={key} component='li' aria-label={`Link to ${label}`} href={href}>{label}</CustomLink>))}</Box></CenterContainer>
                </StandardContainer>
                <RightSlot />
            </StandardContainer>
        </Nav>
        <MultiStepForm><StepForm serverStep={serverStep} /></MultiStepForm>
    </Box>
)