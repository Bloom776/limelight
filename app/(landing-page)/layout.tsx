export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-obsidian text-brand-platinum">
      <main className="flex-1">{props.children}</main>
      <footer className="py-12 text-center text-sm text-brand-platinum/40 relative z-10 border-t border-brand-charcoal bg-brand-obsidian font-sans">
        <p>© 2026 Limelight CS Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
