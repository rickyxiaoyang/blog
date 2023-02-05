import * as React from "react";
import { navigate } from "gatsby";
export function Header() {
	return (
		<div className="header" onClick={() => navigate("/")}>
			<div className="header-title accent">Ricky X. Yang</div>
			<div className="header-subtitle">a lifestyle / tech blog</div>
		</div>
	);
}
