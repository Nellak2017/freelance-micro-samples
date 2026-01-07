import { getFormDefaultState } from '@/Infra/workflows/MultiStepForm.handlers'
import { FormSampleTemplate } from '@/UI/templates/FormSample/FormSampleTemplate'
// NOTE: Since we are using Page router we have to do this at the Page level and then prop drill down to the component. App router would address that issue
export const FormSample = ({ serverStep, defaultValues }) => (<FormSampleTemplate serverStep={serverStep} defaultValues={defaultValues} />)
export const getServerSideProps = async (ctx) => ({ props: { serverStep: ctx.query['form-step'] ?? '0', defaultValues: await getFormDefaultState(ctx) } })
export default FormSample

/* 

1. !user (passing)
    O Form sample is DEFAULT_VALUES
    O Form submission is inaccessible
    O Submitting form fails

2. user & form (passing)
    O Form sample is stored form values
    O Form submission is accessible and is form values
    O Delete form succeeds

3. user & !form (passing)
    O Form sample is default but with email filled
    O Form submission is accessible and is empty with placeholder
    O Submitting form succeeds

*/