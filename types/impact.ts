export interface BusinessStat {
  id: string;
  numericValue?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  displayValue?: string;
  label: string;
  sublabel?: string;
}
