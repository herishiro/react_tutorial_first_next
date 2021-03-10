import useSWR from "swr";

function UseSWR(props) {
	const { data } = useSWR("./data.json");
	return (
		<div>
			<h5 className="mb-4">
				{data != undefined ? data.message : "error occured!"}
			</h5>
			<table className="table table-dark">
				<thead className="table-dark">
					<tr>
						<th>Name</th>
						<th>Mail</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{data != undefined ? (
						data.data.map((val, key) => {
							return (
								<tr key={key}>
									<th>{val.name}</th>
									<td>{val.mail}</td>
									<td>{val.age}</td>
								</tr>
							);
						})
					) : (
						<tr>
							<th></th>
							<td>no data</td>
							<td></td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default UseSWR;
