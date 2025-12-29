import './globals.css';

export const metadata = {
  title: 'My Project',
  description: 'Built with Same.new',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}