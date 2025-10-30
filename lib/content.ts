import type { Locale } from './i18n'

export const copy: Record<Locale, any> = {
  fr: {
    nav: { services: 'Services', cases: 'Réalisations', about: 'À propos', contact: 'Contact' },
    hero: {
      h1: 'Design Premium. Sites Web rapides. Croissance mesurable.',
      sub: "On transforme votre vision en résultats concrets — plus de leads, plus de ventes, une image de marque qui inspire confiance.",
      ctaPrimary: 'Parler à un expert',
      ctaSecondary: 'Voir nos réalisations'
    },
    services: {
      title: 'Nos Services',
      items: [
        { icon: '🖥️', title: 'Sites Web & eCommerce', desc: 'Vitrines, boutiques, SEO technique, Core Web Vitals.' },
        { icon: '✨', title: 'Branding & Identité', desc: 'Plateforme de marque, logos, guidelines, UI kits.' },
        { icon: '📈', title: 'Growth Marketing', desc: 'Paid media, emailing, funnels, analytics & CRO.' }
      ]
    },
    cases: { title: 'Études de cas', subtitle: 'Impact mesuré, résultats concrets.' },
    testimonials: { title: 'Ils nous font confiance' },
    cta: { text: 'Un projet à lancer ? Discutons objectifs et budget optimal.' },
    contact: {
      title: 'Contact',
      success: 'Merci ! Notre équipe revient vers vous sous 24h ouvrées.'
    }
  },
  ar: {
    nav: { services: 'الخدمات', cases: 'الأعمال', about: 'من نحن', contact: 'اتصال' },
    hero: {
      h1: 'تصميم بريميوم. مواقع سريعة. نمو قابل للقياس.',
      sub: 'نحوّل رؤيتك إلى نتائج ملموسة — مزيد من العملاء والثقة والمبيعات.',
      ctaPrimary: 'تحدث مع خبير',
      ctaSecondary: 'شاهد الأعمال'
    },
    services: {
      title: 'خدماتنا',
      items: [
        { icon: '🖥️', title: 'مواقع ومتاجر', desc: 'مواقع تعريفية ومتاجر، سيو تقني وأداء ممتاز.' },
        { icon: '✨', title: 'الهوية البصرية', desc: 'منصة العلامة، شعارات ودليل استخدام.' },
        { icon: '📈', title: 'النمو والتسويق', desc: 'إعلانات مدفوعة، بريد تسويقي، تحليلات وتحسين التحويل.' }
      ]
    },
    cases: { title: 'دراسات حالة', subtitle: 'أثر مقاس ونتائج ملموسة.' },
    testimonials: { title: 'يثق بنا' },
    cta: { text: 'هل لديك مشروع؟ فلنناقش الأهداف والميزانية المثلى.' },
    contact: { title: 'اتصال', success: 'شكراً لك! سنتواصل خلال 24 ساعة عمل.' }
  }
}
