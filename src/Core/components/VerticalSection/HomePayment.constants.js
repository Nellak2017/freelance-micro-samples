const starterFeatures = [
    'Production up to 10,000 units per month',
    '24/7 technical support',
    'Access the production dashboard',
    'Initial setup guide'
]
const enterpriseFeatures = [
    'Unlimited production units',
    'Dedicated account manager',
    'Tailored manufacturing solutions',
    'Predictive production optimization'
]
export const TopData = { header: 'Tailored Plans for Your Manufacturing Scale', subHeader: 'Flexible pricing for any business size.' }
export const BottomData = [
    {
        key: 'Starter plan',
        planType: 'Starter',
        planDescription: 'This package offers the basic features you need to get started.',
        pricePerMonth: 39,
        featureList: starterFeatures,
    },
    {
        key: 'Enterprise plan',
        planType: 'Enterprise',
        planDescription: 'This package offers full access to all premium features.',
        pricePerMonth: 99,
        featureList: enterpriseFeatures,
    },
    {
        key: 'Professional plan',
        planType: 'Professional',
        planDescription: 'Designed for greater flexibility, this solution offers advanced tools for custome tailoring to your needs.',
    },
]