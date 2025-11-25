import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import Image from 'next/image'
import { SiSpeedtest } from 'react-icons/si'
import { ICON_SIZE } from '@/Core/shared/global.constants'
import Rating from '@mui/material/Rating'

const HomeFirstCard = ({ state: { height }, children, ...rest }) => (
    <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        height={height}
        overflow='hidden'
        position='relative' // for images
        borderRadius={3}
        boxShadow={3}
        {...rest}
    >
        {children}
    </Box>
)
const GAP = 3
const DefaultChildren = <>
    <Box id='home-first-top' display='flex' flexDirection='column' gap={GAP} maxWidth={MAX_CONTENT_WIDTH * .60}>
        <Typography component='h1' variant='h1' fontWeight='normal'>The Future of Manufacturing with Latest Technology</Typography>
        <Typography component='h2' variant='h3' fontWeight='normal'>Expert tech to elevate your manufacturing. Let's take your business further.</Typography>
        <Box id='home-first-button-group' display='flex' justifyContent='center' gap={GAP}>
            <Button>Get Started</Button>
            <Button
                sx={(theme) => ({
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    '&:hover': {
                        backgroundColor: theme.palette.background.paperBackground,
                        color: theme.palette.text.secondary,
                    }
                })}
            >Try Demo</Button>
        </Box>
    </Box>
    <Box id='home-first-bottom' display='flex' flexDirection='column' alignItems='center' gap={GAP} width='100%'>
        <Box display='flex' alignItems='center' justifyContent='center' gap={GAP}><Rating name='read-only' value={5} readOnly /><Typography component='legend'>5.0</Typography></Box>
        <Typography>from 80+ reviews</Typography>
        <Box display='flex' width='100%' alignItems='flex-end' gap={GAP}>
            <HomeFirstCard state={{ height: '400px' }}>
                <Image src='/stockBuildingOne.jpg' alt='Stock image' fill />
            </HomeFirstCard>
            <HomeFirstCard state={{ height: '300px' }}
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                })}
            >
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' px={3}>
                    <Typography component='h3' variant='h2'>
                        100+
                    </Typography>
                    <Typography variant='h4' width='50%' textAlign='center'>
                        Our esteemed clients and partners
                    </Typography>
                </Box>
            </HomeFirstCard>
            <HomeFirstCard state={{ height: '200px' }} sx={theme => ({ backgroundColor: theme.palette.background.paper })}>

                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' width='100%' px={GAP}>

                    <Box display='flex' alignItems='center' gap={GAP}>
                        <Typography>Total Projects</Typography>
                        <Box display='flex' alignItems='center' gap={2}>
                            <SiSpeedtest /><Typography>8%</Typography>
                        </Box>
                    </Box>
                    <Typography variant='h2'>1951+</Typography>
                    <Box display='flex' alignItems='center' gap={2}>
                        <Typography>Increase of </Typography>
                        <Typography sx={theme => ({ color: theme.palette.success.main })}>126</Typography>
                        <Typography>this month </Typography>
                    </Box>
                </Box>

            </HomeFirstCard>
            <HomeFirstCard state={{ height: '300px' }}
                sx={(theme) => ({
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                })}
            >
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' px={GAP}>
                    <Typography component='h3' variant='h2'>
                        6+
                    </Typography>
                    <Typography variant='h4' width='50%' textAlign='center' >
                        Years of dedicated service.
                    </Typography>
                </Box>
            </HomeFirstCard>
            <HomeFirstCard state={{ height: '400px' }}
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                })}
                alignItems='flex-end'
            >
                <Box display='flex' flexDirection='column' mx={GAP} my={6} gap={GAP}>
                    <Box sx={(theme) => ({ 'path': { color: theme.palette.primary.contrastText, } })}><SiSpeedtest size={ICON_SIZE} /></Box>
                    <Typography variant='h3' sx={(theme) => ({ color: theme.palette.primary.contrastText, })}>
                        Achieve Optimal Efficiency and Boost Productivity
                    </Typography>
                </Box>

            </HomeFirstCard>
        </Box>
    </Box>
</>
export const VerticalSection = ({ children = DefaultChildren, ...rest }) => (
    <Box display='flex' flexDirection='column' alignItems='center' maxWidth={MAX_CONTENT_WIDTH} width='100%' gap={GAP} {...rest}>
        {children}
    </Box>
)