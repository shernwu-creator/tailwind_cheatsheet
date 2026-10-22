import {
  LayoutGrid,
  MoveHorizontal,
  Palette,
  Scaling,
  Sparkles,
  Type,
} from 'lucide-react'

const icons = {
  type: Type,
  spacing: MoveHorizontal,
  palette: Palette,
  layout: LayoutGrid,
  sizing: Scaling,
  effects: Sparkles,
}

export function CategoryIcon({ name, ...props }) {
  const Icon = icons[name] || Sparkles
  return <Icon {...props} />
}
