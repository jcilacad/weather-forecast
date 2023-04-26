import { Roboto } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Weather forecast",
  description:
    "Search weather forecast for 5 days with data every 3 hours by city name",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
