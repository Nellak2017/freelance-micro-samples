// This is not traditional slots but rather default implementations
import { AvatarLink } from './AvatarLink'
import { LOGO_TITLE, LOGO_ALT, LOGO_SOURCE } from '@/Core/shared/global.constants'
export const Logo = ({ state: { src = LOGO_SOURCE, alt = LOGO_ALT, tooltip = LOGO_TITLE, to = '/', size = 40, preload = true } = {} }) => (<AvatarLink state={{ src, alt, tooltip, to, size, preload }} />)