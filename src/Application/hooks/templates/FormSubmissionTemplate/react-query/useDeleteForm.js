import { handleDeleteForm } from '@/Infra/workflows/MultiStepFormSubmission.handlers'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/Core/shared/global.constants'
const { APP_FORM: { FIELDS } } = REACT_QUERY_KEYS
export const useDeleteForm = (showError) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (...args) => {
            const result = await handleDeleteForm(...args)
            return result?.error ? Promise.reject(result.error) : result?.data
        }, // NOTE: Needed for backend fetch and to detect supabase errors as values without throwing
        onMutate: async () => { // NOTE: Optimistic Update. Clears form fields instantly
            await queryClient.cancelQueries([FIELDS])
            const previous = queryClient.getQueryData([FIELDS])
            queryClient.setQueryData([FIELDS], [])
            return { previous }
        },
        onError: (err, _variables, context) => { showError?.(err); queryClient.setQueryData([FIELDS], context?.previous) }, // NOTE: Rolls back Optimistic Update if it fails. showError is here so it avoids race conditions that show up when errors happen
        onSettled: () => { queryClient.invalidateQueries([FIELDS]) } // NOTE: Guarantees React Query Cache stays in sync with server even in optimistic rollback case. It also handles Supabase errors as well.
    })
}