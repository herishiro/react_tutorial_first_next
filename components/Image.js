const MyImage = (props) => {
	const filePath = "./" + props.fileName;
	const size = props.size + "px";

	return <img src={filePath} width={size} border="1" alt="" />;
};

export default MyImage;
