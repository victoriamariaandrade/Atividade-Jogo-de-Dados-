import type { Metadata } from 'next';
import './globals.css';
import ThemeToggle from './components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Jogo de Dados',
  description: 'Um jogo de dados entre 2 jogadores com 5 rodadas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
