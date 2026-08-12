interface BadgeProps {
  text: string;
  /** Show a pulsing dot before the text */
  showDot?: boolean;
}

export function Badge({ text, showDot = false }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium">
      {showDot && <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />}
      {text}
    </div>
  );
}
