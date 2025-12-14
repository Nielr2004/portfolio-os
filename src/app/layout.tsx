import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Snehashis Roy | Portfolio OS',
  description: 'Data Analyst & Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* Removed "inter.className" and used standard sans-serif font stack */}
      <body className="font-sans bg-neutral-950 text-white overflow-x-hidden antialiased">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-950 to-neutral-950 -z-10" />
        
        <main className="min-h-screen flex flex-col items-center justify-start pt-12 pb-32 px-4 sm:px-6">
          <div className="w-full max-w-3xl space-y-6">
            {children}
          </div>
        </main>
        
        {/* We need to import Dock here, assuming you already have the component */}
        {/* <Dock /> */}
      </body>
    </html>
  );
}