export const metadata = {
  title: 'Privacy Policy | WINBOX.MA',
  description: 'Privacy practices for WINBOX.MA including data handling, analytics, and contact information.'
};

export default function PrivacyPage() {
  return (
    <div className="section-shell py-16 space-y-6">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">Legal</p>
      <h1 className="text-4xl font-semibold">Privacy Policy</h1>
      <div className="card-surface p-6 space-y-4 text-sm text-white/70 leading-relaxed">
        <p>We collect contact details submitted through forms and store them securely for the purpose of responding to your inquiries.</p>
        <p>Analytics and tracking are used to understand site performance and are configured with privacy-respecting defaults. Data is never sold or shared with third parties outside of essential service providers.</p>
        <p>You may request data access or deletion at any time by emailing contact@winbox.ma.</p>
        <p>For clients, data processing follows signed agreements, NDAs, and compliance requirements.</p>
        <p>This policy may be updated periodically; continued use of the site constitutes acceptance.</p>
      </div>
    </div>
  );
}
