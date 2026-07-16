import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clínica Iara Marinho | Beleza em destaque',
  description: 'Sobrancelhas, cílios, micropigmentação, estética facial e formação profissional em Parauapebas.',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
