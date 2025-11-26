
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
  title: "Xit App",
  description: "Your app description"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

