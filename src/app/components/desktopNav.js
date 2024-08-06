import Link from "next/link";

export default function DesktopNav() {
	return (
		<ul className="flex">
			<li>
				<Link to="/headphones">Headphones</Link>
			</li>
			<li>
				<Link to="/speakers">Speakers</Link>
			</li>
			<li>
				<Link to="/earphones">Earphones</Link>
			</li>
		</ul>
	);
}
