
// word of snake_case string => word of Sentence case string
export const snakeCaseWordToSentenceCaseWord = word => word.replace(/_/g, ' ').replace(/^./, c => c.toUpperCase())
// (values: { [field of snake_case string]: value of string }) => [{ label: field of Sentence case string, value }] 
export const snakeCaseObjectToSentenceCaseList = values => Object.entries(values).map(([label, value]) => ({ label: snakeCaseWordToSentenceCaseWord(label), value }))
// ({ [field of string]: value of string }, [allowed of string]) => [{ [label from field]: string, value: string }]
export const pickFields = (record, allowed) => allowed.filter(field => field in record).map(field => ({ label: field, value: record?.[field] }))
