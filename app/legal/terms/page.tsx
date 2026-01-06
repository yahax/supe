export const metadata = {
  title: 'Terms of Service | WINBOX.MA',
  description: 'Terms governing the use of WINBOX.MA services and website.'
};

export default function TermsPage() {
  return (
    <div className="section-shell py-16 space-y-6">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">Legal</p>
      <h1 className="text-4xl font-semibold">Terms of Service</h1>
      <div className="card-surface p-6 space-y-4 text-sm text-white/70 leading-relaxed">
        <p>Use of this site implies acceptance of these terms. Content is provided for informational purposes and does not constitute a binding offer.</p>
        <p>Engagements are governed by mutually signed statements of work and master service agreements outlining scope, fees, and confidentiality.</p>
        <p>All intellectual property created under paid engagements is transferred to the client upon full payment unless otherwise specified.</p>
        <p>We reserve the right to update these terms at any time. Continued use of the site following updates indicates acceptance.</p>
        <p>For questions regarding these terms, contact contact@winbox.ma.</p>
      </div>
    </div>
  );
}
