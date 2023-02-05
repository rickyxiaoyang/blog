import * as React from "react";
import { ToggleThemeButton } from "../../theme/theme";

const yearString = (date: Date) =>
	date.toLocaleDateString("en-us", { year: "numeric" });

export default function Footer() {
	const year = yearString(new Date());
	return (
		<div
			className="footer"
			style={{ padding: "12px", fontSize: "12px", textAlign: "center" }}
		>
			<ToggleThemeButton />
			<div>
				©{year} <span>rickyxiaoyang.com</span>
			</div>
		</div>
	);
}
