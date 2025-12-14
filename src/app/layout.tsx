import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

// 1. Load the new fonts
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  weight: ['400', '500', '700']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Snehashis OS',
  description: 'Portfolio Operating System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body 
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} font-sans bg-black text-white overflow-hidden antialiased selection:bg-orange-500/30`}
        suppressHydrationWarning
      >
        {/* --- GLOBAL NOISE TEXTURE --- */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        {/* --- ENHANCED AURORA BACKGROUND --- */}
        <div className="fixed inset-0 z-[-10]">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-violet-900/20 blur-[120px] animate-blob mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute top-[40%] left-[40%] w-[60%] h-[60%] rounded-full bg-orange-900/10 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>
        
        {/* Keyframe Styles */}
        <style>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 20s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 4s;
          }
          .animation-delay-4000 {
            animation-delay: 8s;
          }
        `}</style>

        <main className="h-screen w-full relative flex flex-col font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}