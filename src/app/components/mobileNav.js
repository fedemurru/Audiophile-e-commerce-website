import Link from "next/link";

export default function MobileNav({ isShown, setIsShown }) {
	function handleMobileNav() {
		setIsShown(!isShown);
	}
	return (
		<>
			<ul>
				<li>
					<Link href="/headphones">Headphones</Link>
				</li>
				<li>
					<Link href="/speakers">Speakers</Link>
				</li>
				<li>
					<Link href="/earphones">Earphones</Link>
				</li>
				<button onClick={handleMobileNav}>X</button>
			</ul>
		</>
	);
}
