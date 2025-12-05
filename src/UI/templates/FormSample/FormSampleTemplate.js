import { MultiStepForm } from '@/UI/organisms/MultiStepForm/MultiStepForm'

// TODO: Consider the implications of moving all main components that are slotted (like MultiStepForm) into templates folder instead so that the other layers hold the default slot implementations we use, but the templates hold the general form
export const FormSampleTemplate = ({}) => (<MultiStepForm />)