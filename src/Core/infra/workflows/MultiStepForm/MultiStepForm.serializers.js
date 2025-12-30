import { snakeCaseWordToSentenceCaseWord, pickFields } from '@/Core/shared/global.domain'
import { ALL_STEPS_FIELDS } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'
// { [field]: value } | null => [{ [label from field in Sentence Case]: value }]
export const defaultFormSerializer = supabaseFormResponse => supabaseFormResponse?.length ? pickFields(supabaseFormResponse, ALL_STEPS_FIELDS.flat()).map(({ label, value }) => ({ label: snakeCaseWordToSentenceCaseWord(label), value})) : []