// ({ [label of string]: function }) => [{ title: string, label: string, href: string, onClick: function }]
// Invariants: Must be 1-to-1 mapping of input label list to output label list (same length list) or else it will have undefined for the handler
export const makeAuthenticatedNavButtonData = buttonClickHandlers => ([{ title: 'Log out', label: 'Log out', href: '/' }, { title: 'App', label: 'App', href: '/form-submission' },].map(data => ({ ...data, onClick: buttonClickHandlers?.[data?.label] })))
// TODO: RE-USE the with function made in core shared domain to simplify logic here