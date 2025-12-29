import { handleGetForm } from "@/Infra/workflows/MultiStepForm.handlers"
import { FormSubmissionTemplate } from "@/UI/templates/FormSubmission/FormSubmissionTemplate"
export const FormSubmission = ({ fields }) => (<FormSubmissionTemplate fields={fields} />)
export const getServerSideProps = async (_) => {
    const { data, error } = await handleGetForm()
    return error ? { props: { fields: [] } } : { props: { fields: data } }
}
export default FormSubmission