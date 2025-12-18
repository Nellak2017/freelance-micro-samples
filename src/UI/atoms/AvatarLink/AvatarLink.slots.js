// This is not traditional slots but rather default implementations
import { AvatarLink } from './AvatarLink'
import { LOGO_TITLE, LOGO_ALT, LOGO_SOURCE, LOGO_SOURCE_LARGE } from '@/Core/shared/global.constants'
const baseLogoState = { alt: LOGO_ALT, tooltip: LOGO_TITLE, to: '/', size: 40, preload: true, }
export const Logo = ({ state = {} }) => (<AvatarLink state={{ ...baseLogoState, src: LOGO_SOURCE, ...state }} />)
export const LargeLogo = ({ state = {} }) => (<AvatarLink state={{ ...baseLogoState, src: LOGO_SOURCE_LARGE, ...state }} />)