import { ToastContainer } from "react-toastify";
import { ReduxProvider } from "@/redux/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  title: "Xit App",
  description: "Your app description"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer autoClose={3000} />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

