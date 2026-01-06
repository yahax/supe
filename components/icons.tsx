import React from 'react';

interface IconProps {
  className?: string;
}

const createIcon = (path: React.ReactNode) => ({ className }: IconProps) => (
  <svg
    aria-hidden
    className={className ?? 'h-5 w-5'}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

export const WebIcon = createIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="3" ry="3" />
    <path d="M3 10h18" />
    <circle cx="7" cy="8" r="0.8" />
    <circle cx="11" cy="8" r="0.8" />
  </>
);

export const BrandingIcon = createIcon(
  <>
    <path d="M6 6h7l5 5-5 7H6l5-7-5-5z" />
    <circle cx="6" cy="6" r="1" />
  </>
);

export const SeoIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="6" />
    <path d="M15.5 15.5 21 21" />
    <path d="M9 11h4" />
    <path d="M11 9v4" />
  </>
);

export const AdsIcon = createIcon(
  <>
    <rect x="4" y="6" width="16" height="12" rx="3" />
    <path d="M8 12h4" />
    <path d="M12 10v4" />
    <path d="M6 8v1" />
    <path d="M18 15v1" />
  </>
);

export const CreativeIcon = createIcon(
  <>
    <path d="M5 19c5-6 9-10 14-14" />
    <path d="M12 5c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3z" />
    <path d="M8 17s1.5-1 4-1 4 1 4 1" />
  </>
);

export const CroIcon = createIcon(
  <>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M8 8h8v8H8z" />
    <path d="M12 4v4" />
    <path d="M12 16v4" />
  </>
);

export const AnalyticsIcon = createIcon(
  <>
    <path d="M4 17V7" />
    <path d="M10 17V5" />
    <path d="M16 17v-6" />
    <path d="M6 21h12" />
  </>
);

export const AutomationIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="6" />
    <path d="M12 6V3" />
    <path d="M18 12h3" />
    <path d="M12 18v3" />
    <path d="M3 12h3" />
    <path d="M9 9l1.5 1.5" />
    <path d="M15 9l-1.5 1.5" />
    <path d="M9 15l1.5-1.5" />
    <path d="M15 15l-1.5-1.5" />
  </>
);

export const StrategyIcon = createIcon(
  <>
    <path d="M5 19c2-5 6-10 10-14" />
    <path d="M7 7l-2 2" />
    <path d="M15 9l2 2" />
    <path d="M11 13l2 2" />
    <path d="M10 5h4" />
  </>
);

export const SupportIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M8 12a4 4 0 0 1 8 0" />
    <path d="M10 15h4" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
  </>
);

export type IconName =
  | 'web'
  | 'branding'
  | 'seo'
  | 'ads'
  | 'creative'
  | 'cro'
  | 'analytics'
  | 'automation'
  | 'strategy'
  | 'support';

export const icons: Record<IconName, React.ComponentType<IconProps>> = {
  web: WebIcon,
  branding: BrandingIcon,
  seo: SeoIcon,
  ads: AdsIcon,
  creative: CreativeIcon,
  cro: CroIcon,
  analytics: AnalyticsIcon,
  automation: AutomationIcon,
  strategy: StrategyIcon,
  support: SupportIcon,
};
