export const metadata = {
  title: "Healthy AI Food",
  description: "Mangia sano, con la tua AI personale.",
};
import "./../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="text-gray-800">
        <div className="container py-6">{children}</div>
      </body>
    </html>
  );
}
