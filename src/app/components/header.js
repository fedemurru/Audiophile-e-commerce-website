"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./mobileNav";

export default function Header() {
	const [isShown, setIsShown] = useState(false);

	function handleClick() {
		setIsShown(!isShown);
	}

	return (
		<header className="flex justify-between">
			{!isShown ? (
				<button onClick={handleClick}>
					<Image
						width="100"
						height="100"
						src="/hamburger.svg"
						alt="hamburger"
					/>
				</button>
			) : (
				<MobileNav isShown={isShown} setIsShown={setIsShown} />
			)}
			<Image
				width="100"
				height="100"
				src="./shopping_cart.svg"
				alt="shopping_cart"
			/>
		</header>
	);
}
