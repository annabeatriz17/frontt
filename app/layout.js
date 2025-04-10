import "../styles/globals.css";

export const metadata = {
  title: "Donuts",
};
export default function RootLayout({ children }) {
  return (
		<html>
			<body>{children}</body>
		</html>
  );
}
