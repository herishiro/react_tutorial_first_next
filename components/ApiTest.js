import React, { useState } from "react";
import useSWR from "swr";

function ApiTest(props) {
	const [address, setAddress] = useState("/api/hello");
	const { data, err } = useSWR(address);
	const onChange = (event) => {
		setAddress("/api/hello/" + event.target.value);
	};
	return (
		<div>
			<h5 className="mb-4">{JSON.stringify(data)}</h5>
			<input type="number" onChange={onChange} className="form-control" />
		</div>
	);
}

export default ApiTest;
