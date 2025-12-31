const starterFeatures = [
    'API integration (REST / JSON)',
    'Forms with validation & submission',
    'Authentication flows (Supabase / third-party)',
    'Responsive, mobile-first UI',
    'SEO-friendly and fast-loading pages',
]
const enterpriseFeatures = [
    'Frontend MVP architecture (Next.js)',
    'Multiple pages with routing & protected views',
    'API-driven UI and client-side state',
    'Supabase or backend-as-a-service integration',
    'Production-ready frontend optimized for performance',
]
export const TopData = {
    header: 'Project Types I Handle',
    subHeader: 'Frontend-heavy MVPs with real integrations and production-ready UI.',
}
export const BottomData = [
    {
        key: 'Landing Pages',
        planType: 'Landing Pages',
        planDescription: 'High conversion landing pages with real forms, analytics, and API integration.',
        featureList: starterFeatures,
        buttonText: 'View Sample Project',
        buttonHref: '/form-sample',
    },
    {
        key: 'MVP Web Apps',
        planType: 'MVP Web Apps',
        planDescription: 'Frontend focused MVPs with authentication, APIs, and real user flows.',
        featureList: enterpriseFeatures,
        buttonText: 'View Sample Project',
        buttonHref: '/form-sample',
    },
    {
        key: 'Custom Integrations',
        planType: 'Custom Integrations',
        planDescription: 'API integrations, auth flows, dashboards, and custom frontend features.',
        buttonText: 'Request Demo Project',
        buttonHref: '/form-sample',
    },
]