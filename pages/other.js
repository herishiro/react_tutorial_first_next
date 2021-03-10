import Layout from "../layouts/Layout";
import Link from "next/Link";

export default function Other() {
	const title = "Other";

	return (
		<div>
			<Layout header="Next.js" title="Other page.">
				<div className="card p-4 text-center">
					<h5 className="mb-4">This is Other page</h5>
					<Link href="./">
						<button className="btn btn-primary">&lt;&lt; Back to Top</button>
					</Link>
				</div>
			</Layout>
		</div>
	);
}

// <style jsx>
// 	{`
// 		h1 {
// 			text-align: center;
// 		}
// 		h2 {
// 			text-align: center;
// 			margin: 0px 5px;
// 			color: #aad;
// 			font-size: 36pt;
// 			font-weight: bold;
// 		}
// 		p {
// 			text-align: left;
// 			margin: 0px 5px;
// 			color: blue;
// 			font-size: 18pt;
// 		}
// 	`}
// </style>;
