import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';

export const metadata: Metadata = {
  title: 'Ashish Kadian | SRE & DevOps Engineer Portfolio',
  description: 'Portfolio of Ashish Kadian, a Site Reliability Engineer (SRE), DevOps, and Cloud Security specialist. Showcasing skills, projects, and experience in building resilient and scalable cloud infrastructure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
