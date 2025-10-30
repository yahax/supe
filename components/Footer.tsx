export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} WINBOX. Tous droits réservés.</p>
        <nav className="flex gap-4 opacity-80">
          <a href="/fr">FR</a>
          <a href="/ar">AR</a>
          <a href="/fr/contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
