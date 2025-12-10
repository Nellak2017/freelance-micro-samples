// This is not traditional slots but rather default implementations
import { AvatarLink } from './AvatarLink'
import { LOGO_TITLE, LOGO_ALT, LOGO_SOURCE, LOGO_SOURCE_LARGE } from '@/Core/shared/global.constants'
// TODO: Fix slight DRY violation here
export const Logo = ({ state: { src = LOGO_SOURCE, alt = LOGO_ALT, tooltip = LOGO_TITLE, to = '/', size = 40, preload = true } = {} }) => (<AvatarLink state={{ src, alt, tooltip, to, size, preload }} />)
export const LargeLogo = ({ state: { src = LOGO_SOURCE_LARGE, alt = LOGO_ALT, tooltip = LOGO_TITLE, to = '/', size = 40, preload = true } = {} }) => (<AvatarLink state={{ src, alt, tooltip, to, size, preload }} />)