export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="pill mb-6">Coming soon</span>
      <h1 className="max-w-2xl text-balance text-4xl md:text-6xl font-bold leading-tight">
        Stop Creating. <span className="italic text-primary">Start Selling.</span>
      </h1>
      <p className="mt-5 max-w-xl text-balance text-lg text-body">
        The NeuroSpicy Witch Vault is on its way. For the Divinely Distracted Goddesses &amp; Starseeds alike.
      </p>
      <p className="mt-10 text-sm text-body">
        © 2026 NeuroSpicy Mystic | For the Divinely Distracted Goddesses &amp; Starseeds alike
        <br />
        <a href="mailto:support@neurospicymystic.com" className="text-primary-700 hover:underline">
          support@neurospicymystic.com
        </a>{' '}
        ·{' '}
        <a href="mailto:info@neurospicymystic.com" className="text-primary-700 hover:underline">
          info@neurospicymystic.com
        </a>
      </p>
    </main>
  );
}
