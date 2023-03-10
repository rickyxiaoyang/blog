import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

export const ThemeContext = createContext<{
	theme: Theme;
	changeTheme: (theme: Theme) => void;
}>({
	theme: "light",
	changeTheme: () => {},
});

export default function ThemeContextWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	let local: Theme = "light";
	useEffect(() => {
		const param = retrieveThemeParam() as Theme;
		if (param) {
			changeTheme(param);
		} else {
			local = localStorage?.getItem("theme") as Theme;
			changeTheme(local);
		}
	}, []);
	const [theme, setTheme] = useState<Theme>(local);

	function changeTheme(theme: Theme) {
		setTheme(theme);
		localStorage.setItem("theme", theme);
	}

	useEffect(() => {
		switch (theme) {
			case "light":
				document.body.classList.add("light");
				document.body.classList.remove("dark");
				break;
			case "dark":
				document.body.classList.add("dark");
				document.body.classList.remove("light");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function ToggleThemeButton() {
	const { theme, changeTheme } = useContext(ThemeContext);
	const otherMode = theme === "dark" ? "light" : "dark";
	return (
		<>
			<button
				className="link-button accent"
				onClick={() => changeTheme(otherMode)}
			>
				Enter {otherMode} mode
			</button>
		</>
	);
}

function retrieveThemeParam(): string | null {
	const params = new URLSearchParams(window.location.search);
	return params.get("theme");
}
