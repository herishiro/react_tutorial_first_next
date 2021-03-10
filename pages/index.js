import Layout from "../layouts/Layout";
import Params from "../components/Params";
import Link from "next/Link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<style jsx>
				{`
					.btn {
						display: block;
						margin: 20px auto;
					}
				`}
			</style>
			<Layout header="Next.js" title="Top page.">
				<div className="alert alert-primary text-center">
					<h5 className="h5">Welcome to next.js!</h5>
					<Params />
					<Link href="./other" className="page-link">
						<button className="btn btn-primary">
							Go to Other page &gt;&gt;
						</button>
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
