import { Divider, Typography } from "@mui/material";
import React from "react";
const TypographyComponent = () => {
	return (
		<div>
			<Divider>
				<h1>Material UI Typography</h1>
			</Divider>
			<Typography variant="h1">This is a h1 tag</Typography>
			<Typography variant="h2">This is a h2 tag</Typography>
			<Typography variant="h3">This is a h3 tag</Typography>
			<Typography variant="h4">This is a h4 tag</Typography>
			<Typography variant="h5">This is a h5 tag</Typography>
			<Typography variant="h6">This is a h5 tag</Typography>
			<Typography>This is a p tag</Typography>
			<Typography variant="poster">poster</Typography>
		</div>
	);
};

export default TypographyComponent;
