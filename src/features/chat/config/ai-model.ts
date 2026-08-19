import OpenAI from '@/shared/assets/icons/ai-logos/openai.svg'
import Deepseek from '@/shared/assets/icons/ai-logos/deepseek.svg'
import Gemini from '@/shared/assets/icons/ai-logos/gemini.svg'
import Grok from '@/shared/assets/icons/ai-logos/grok.svg'
import Kimi from '@/shared/assets/icons/ai-logos/kimi.svg'
import Qwen from '@/shared/assets/icons/ai-logos/qwen.svg'
import Claude from '@/shared/assets/icons/ai-logos/claude.svg'

export const AIModels = [
  {
    label: 'GPT 5.6',
    value: 'gpt-5.6',
    icon: OpenAI
  },
  {
    label: 'Deepseek V4',
    value: 'deepseek-v4',
    icon: Deepseek
  },
  {
    label: 'Claude Sonnet 4.5',
    value: 'sonnet-4.5',
    icon: Claude
  },
  {
    label: 'Gemini 3 Pro',
    value: 'gemini-3-pro',
    icon: Gemini
  },
  {
    label: 'Kimi K3',
    value: 'kimi-k3',
    icon: Kimi
  },
  {
    label: 'Grok',
    value: 'grok',
    icon: Grok
  },
  {
    label: 'Qwen 3.8 Max',
    value: 'qwen-3.8-max',
    icon: Qwen
  }
]
