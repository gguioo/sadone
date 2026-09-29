// SadOne 图标注册表入口（合并自然系 + 生活系）
import { NATURE_ICONS } from './icons-nature'
import { LIFE_ICONS } from './icons-life'

export const DOODLES = { ...NATURE_ICONS, ...LIFE_ICONS }
export { NATURE_ICONS, LIFE_ICONS }
export type { DoodleDef } from './icons-nature'
