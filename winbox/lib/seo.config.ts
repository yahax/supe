import { type DefaultSeoProps } from "next-seo";

export const defaultSeoConfig: DefaultSeoProps = {
  titleTemplate: "%s | WINBOX",
  defaultTitle: "WINBOX — Design Premium & Growth",
  description:
    "WINBOX conçoit des identités fortes, des sites ultra-performants et des stratégies de croissance mesurables.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://winbox.ma",
    siteName: "WINBOX",
    images: [
      {
        url: "https://winbox.ma/og-image.svg",
        width: 1200,
        height: 630,
        alt: "WINBOX — Design Premium & Growth"
      }
    ]
  },
  twitter: {
    handle: "@winbox",
    site: "@winbox",
    cardType: "summary_large_image"
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico"
    }
  ]
};
