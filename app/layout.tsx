import '@/app/ui/global.css'
import { inter } from './ui/fonts';

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
