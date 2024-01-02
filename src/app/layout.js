import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import GlobalState from "@/context/GlobalContext";
import Navber from "@/components/Navber/Navber";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import ChatModal from "@/components/ChatModal/ChatModal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalState>
          <ThemeProvider>
            <Navber></Navber>
            <main className="flex flex-col bg-slate-50">{children}</main>
            <ChatModal></ChatModal>
            <ScrollToTopButton></ScrollToTopButton>
          </ThemeProvider>
        </GlobalState>
      </body>
    </html>
  );
}
