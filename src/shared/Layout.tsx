import "../styles/styles.scss";
import React, { useContext } from "react";
import ThemeContextWrapper, { ThemeContext } from "../theme/theme";
import Footer from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
	const { theme } = useContext(ThemeContext);

	return (
		<ThemeContextWrapper>
			<div data-theme={theme}>
				<Header />
				{children}
				<Footer />
			</div>
		</ThemeContextWrapper>
	);
}
