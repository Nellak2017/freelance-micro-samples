import { useQuery } from '@tanstack/react-query'
import { handleGetFormClientSide } from '@/Infra/workflows/MultiStepFormSubmission.handlers'
export const useFormFields = initialData => useQuery({
    queryKey: ['formFields'],
    initialData,
    queryFn: handleGetFormClientSide,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    staleTime: 0,
})