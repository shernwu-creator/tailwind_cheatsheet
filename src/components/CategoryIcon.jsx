import {
  Clapperboard,
  Crop,
  LayoutGrid,
  MonitorSmartphone,
  MoveHorizontal,
  Palette,
  Scaling,
  ScrollText,
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
  responsive: MonitorSmartphone,
  scroll: ScrollText,
  animation: Clapperboard,
  clip: Crop,
}

export function CategoryIcon({ name, ...props }) {
  const Icon = icons[name] || Sparkles
  return <Icon {...props} />
}
