import * as React from "react";
import { ToggleThemeButton } from "../../theme/theme";

const yearString = (date: Date) =>
	date.toLocaleDateString("en-us", { year: "numeric" });

export default function Footer() {
	const year = yearString(new Date());
	const navigateToProfile = () => {
		window.location.href = "https://rickyxiaoyang.com";
	};
	return (
		<div
			className="footer"
			style={{ padding: "12px", fontSize: "12px", textAlign: "center" }}
		>
			<ToggleThemeButton />
			<div>
				©{year}{" "}
				<span style={{ cursor: "pointer" }} onClick={navigateToProfile}>
					rickyxiaoyang.com
				</span>
			</div>
		</div>
	);
}
