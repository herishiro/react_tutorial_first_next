import apidata from "../../../components/data";

export default function handler(req, res) {
	const {
		query: { id },
	} = req;
	debugger;

	res.json(apidata[id]);
}
