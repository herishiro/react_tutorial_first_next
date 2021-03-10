import React, { useState } from "react";
import useSWR from "swr";

function Params() {
	const [pref, setPref] = useState({ id: 0, item: "name" });
	const [address, setAddress] = useState(`/api/hello/${pref.id}/${pref.item}`);
	const { data, err } = useSWR(address);
	const onChange = (event) => {
		pref.id = event.target.value;
		setPref(pref);
		setAddress(`/api/hello/${pref.id}/${pref.item}`);
	};

	const onSelect = (event) => {
		pref.item = event.target.value;
		setPref(pref);
		setAddress(`/api/hello/${pref.id}/${pref.item}`);
	};
	return (
		<div>
			<h5 className="mb-4">{JSON.stringify(data)}</h5>
			<input type="number" onChange={onChange} className="form-control mb-2" />
			<select onChange={onSelect} className="form-control form-control-sm">
				<option value="name">Name</option>
				<option value="mail">Mail</option>
				<option value="age">Age</option>
			</select>
		</div>
	);
}

export default Params;
