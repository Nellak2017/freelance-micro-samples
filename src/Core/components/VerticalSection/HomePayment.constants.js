// TODO: Make this section more data oriented. Meaning instead of hard coded buttons with hard coded href you fix it
const starterFeatures = [
    'Responsive and Mobile first design',
    'Pixel-perfect implementation from a design',
    'Basic interactivity (buttons, modals, forms)',
    'Fast load time & SEO friendly page structure'
]
const enterpriseFeatures = [
    'Multiple pages with navigations & routing',
    'Consistent styling and reusable components',
    'Forms or interactive UI elements',
    'Ready-to-deploy frontend optimized for performance'
]
export const TopData = { header: 'Project Types I Handle', subHeader: 'Simple, fast, frontend-focused projects.' }
export const BottomData = [
    {
        key: 'Landing Pages',
        planType: 'Landing Pages',
        planDescription: 'One page static landing page built with React/Next.js.',
        pricePerMonth: 39,
        featureList: starterFeatures,
    },
    {
        key: 'Multi-page static site',
        planType: 'Multi-page static site',
        planDescription: 'Small multi-page sites or dashboards.',
        pricePerMonth: 99,
        featureList: enterpriseFeatures,
    },
    {
        key: 'Custom components',
        planType: 'Custom components',
        planDescription: 'UI components, forms, or static apps you need.',
    },
]