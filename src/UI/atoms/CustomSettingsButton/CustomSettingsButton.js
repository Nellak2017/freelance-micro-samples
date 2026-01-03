import Box from '@mui/material/Box'
import { MdSettings } from 'react-icons/md'
import Link from 'next/link'
export const CustomSettingsButton = ({ sx, href= '/settings', title = 'Go to settings', size = 30 }) => (<Link href={href}><Box aria-label={title} title={title} display='flex' alignItems='center' sx={{ cursor: 'pointer', 'svg, path': { color: '#fff' }, ...sx }}><MdSettings aria-hidden='true' size={size} /></Box></Link>)
// TODO: Make more DRY by re-using the box on this and the other button as a more general atom so that we don't have to make a million custom-* variants