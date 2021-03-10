import React, { useState } from "react";

function JsonTable(props) {
	const url = "./data.json";
	const [data, setData] = useState({ message: "", data: [] });

	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return setData(data);
		});
	return (
		<div>
			<h5 className="mb-4">{data.message}</h5>
			<table className="table bg-white">
				<thead className="table-dark">
					<tr>
						<th>Name</th>
						<th>Mail</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{data.data.map((val, key) => {
						return (
							<tr key={key}>
								<td>{val.name}</td>
								<td>{val.mail}</td>
								<td>{val.age}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default JsonTable;
