export interface ContactCardData {
  /** Emoji or icon identifier */
  icon: string;
  /** Card title */
  title: string;
  /** Primary content (e.g., phone number) */
  primary?: string;
  /** Secondary lines of text */
  lines?: string[];
  /** Optional href for clickable cards */
  href?: string;
  /** Optional subtitle below primary */
  subtitle?: string;
}

export interface BusinessHours {
  /** Day or day range label */
  day: string;
  /** Hours text */
  hours: string;
  /** Whether this day is closed */
  isClosed?: boolean;
}
