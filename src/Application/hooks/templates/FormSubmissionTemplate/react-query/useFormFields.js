import { useQuery } from '@tanstack/react-query'
import { handleGetFormClientSide } from '@/Infra/workflows/MultiStepFormSubmission.handlers'
export const useFormFields = initialData => useQuery({ queryKey: ['formFields'], queryFn: handleGetFormClientSide, initialData, })