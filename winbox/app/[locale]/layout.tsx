import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { defaultSeoConfig } from "@/lib/seo.config";
import { localBusinessSchema, organizationSchema } from "@/lib/schemas";

const locales = ["fr", "ar"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!locales.includes(params.locale as (typeof locales)[number])) {
    notFound();
  }

  const t = await getTranslations({ locale: params.locale, namespace: "meta" });

  return {
    metadataBase: new URL("https://winbox.ma"),
    title: t("title.home"),
    description: t("description.home"),
    alternates: {
      canonical: params.locale === "fr" ? "https://winbox.ma/fr" : `https://winbox.ma/${params.locale}`,
      languages: {
        fr: "https://winbox.ma/fr",
        ar: "https://winbox.ma/ar"
      }
    },
    openGraph: {
      title: t("title.home"),
      description: t("description.home"),
      url: params.locale === "fr" ? "https://winbox.ma/fr" : `https://winbox.ma/${params.locale}`,
      locale: params.locale === "fr" ? "fr_FR" : "ar_MA"
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const dir = locale === "ar" ? "rtl" : "ltr";
  const gaId = process.env.NEXT_PUBLIC_GA4;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DefaultSeo {...defaultSeoConfig} />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </NextIntlClientProvider>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
                // TODO: Implement Consent Mode integration once CMP is ready
              `}
            </Script>
          </>
        ) : null}
        {pixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
              // TODO: Map consent mode with CMP signals
            `}
          </Script>
        ) : null}
        <Script id="jsonld-organization" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="jsonld-localbusiness" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
      </body>
    </html>
  );
}
