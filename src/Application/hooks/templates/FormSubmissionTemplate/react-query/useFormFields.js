import { useQuery } from '@tanstack/react-query'
import { handleGetFormClientSide } from '@/Infra/workflows/MultiStepFormSubmission.handlers'
import { REACT_QUERY_KEYS } from '@/Core/shared/global.constants'
const { APP_FORM: { FIELDS } } = REACT_QUERY_KEYS
export const useFormFields = initialData => useQuery({ queryKey: [FIELDS], queryFn: handleGetFormClientSide, initialData, })