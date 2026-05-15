import type { LucideIcon } from 'lucide-react';

export function Icon({ icon: Component, size = 18 }: { icon: LucideIcon; size?: number }) {
  return <Component size={size} aria-hidden="true" />;
}
