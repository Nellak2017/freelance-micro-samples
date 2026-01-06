export const PREAMBLE_DATA = { header: 'Tell Me About Your Project', subHeader: 'A clean, modern multi-step form built with accessible components and responsive design.', labels: ['Personal Details', 'Requirements', 'Review'], }
// --- All steps
// TODO: In the App Layer (not here!) pre-fill the form with email if signed in and no user data or the form submission. If not signed in then don't pre-fill anything
export const FORM_DATA = [
    {
        fullName: { label: 'Full Name', defaultValue: '', fieldName: 'full_name', htmlFor: 'name', placeholder: 'Full Name', autoComplete: 'given-name', isRequired: true, rules: { required: 'Full Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } } },
        email: { label: 'Email', defaultValue: '', fieldName: 'email', htmlFor: 'email', placeholder: 'name@example.com', autoComplete: 'email', isRequired: true, rules: { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address', }, maxLength: { value: 50, message: 'Email must be at most 50 characters', }, } },
        companyName: { label: 'Company Name', defaultValue: '', fieldName: 'company_name', htmlFor: 'name', placeholder: 'Company Name', autoComplete: 'organization', isRequired: false, },
        role: { label: 'Role', defaultValue: 'Founder', fieldName: 'role', htmlFor: 'select', isRequired: false, options: ['Founder', 'Hiring Manager', 'Product Owner', 'Other'] },
    },
    {
        estimatedTimeline: { label: 'Estimated Timeline', defaultValue: 'ASAP', fieldName: 'estimated_timeline', htmlFor: 'select', isRequired: true, options: ['ASAP', '1-2 weeks', '1 month', 'Not sure yet'] },
        budgetRange: { label: 'Budget Range', defaultValue: '$200-$400', fieldName: 'budget_range', htmlFor: 'select', isRequired: true, options: ['$200-$400', '$400-$800', '$800+', 'Not sure'] },
        projectDescription: { label: 'Project Description', fieldName: 'project_description', htmlFor: 'name', placeholder: 'Tell me about your project here..', defaultValue: '', isRequired: true, rules: { required: 'Project Description is required' } },
    }
]
export const DEFAULT_VALUES = Object.assign({}, ...FORM_DATA.map(step => Object.fromEntries(Object.entries(step).map(([key, field]) => [field.fieldName || key, field.defaultValue]))))
export const ALL_STEPS_FIELDS = FORM_DATA.map(step => Object.keys(step).map(key => step[key].fieldName || key)) // [[first step field names], [second step], ...]