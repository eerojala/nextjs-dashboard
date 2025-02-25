import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | Acme Dashboard', default: 'Acme Dashboard' },
  description: 'THe official Next.js Course Dashboard, built with App Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // antialised is a separate tailwind css class
  return (
    <html lang="en">
      <body className={`${inter.className} antialised`} >{children}</body> 
    </html>
  );
}
