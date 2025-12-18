import { FormSampleTemplate } from '@/UI/templates/FormSample/FormSampleTemplate'
// NOTE: Since we are using Page router we have to do this at the Page level and then prop drill down to the component. App router would address that issue
export const getServerSideProps = async (context) => ({ props: { serverStep: context.query['form-step'] ?? '0' } })
export const FormSample = ({ serverStep }) => (<FormSampleTemplate serverStep={serverStep} />)
export default FormSample