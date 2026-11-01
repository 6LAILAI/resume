import type { ProfileConfig } from '../schema/profile'

export interface PersonaPresetMeta {
  id: 'ai-builder' | 'creative-designer' | 'indie-founder' | 'research-scholar'
  label: string
  shortLabel: string
  badge: string
  description: string
  profile: ProfileConfig
}

// 来来的个人站点只展示本人档案，不再提供通用职业人设模板切换。
export const GENERIC_PERSONA_PRESETS: readonly PersonaPresetMeta[] = []
