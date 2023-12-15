import { Button, Divider, Typography } from "@mui/material";
import React from "react";
const ButtonComponent = () => {
	return (
		<>
			<Divider>
				<h1>Material UI Input Components</h1>
			</Divider>
			<Typography variant="h4">Basic button</Typography>
			<Typography>
				The Button comes with three variants: text (default), contained,
				and outlined.
			</Typography>
			<Divider sx={{ margin: "20px" }} />
			<Button variant="text" sx={{ margin: "10px" }}>
				Text
			</Button>
			<Button variant="contained" sx={{ margin: "10px" }} color="success">
				Contained
			</Button>
			<Button variant="outlined" sx={{ margin: "10px" }}>
				Outlined
			</Button>

			<Button
				variant="contained"
				color="success"
				sx={{ margin: "30px" }}
				onClick={() => alert("Clicked")}>
				Click me
			</Button>

			<Typography variant="h4" sx={{ marginTop: "20px" }}>
				Text button
			</Typography>
			<Typography>
				Text buttons are typically used for less-pronounced actions,
				including those located: in dialogs, in cards. In cards, text
				buttons help maintain an emphasis on card content.
			</Typography>
			<Divider sx={{ margin: "20px" }} />
			<Button>Primary</Button>
			<Button disabled>Disabled</Button>
			<Button href="#text-buttons">Link</Button>

			<Typography variant="h4" sx={{ marginTop: "20px" }}>
				Contained button
			</Typography>
			<Typography>
				Contained buttons are high-emphasis, distinguished by their use
				of elevation and fill. They contain actions that are primary to
				your app.
			</Typography>
			<Divider sx={{ margin: "20px" }} />
			<Button variant="contained" sx={{ margin: "20px" }}>
				Contained
			</Button>
			<Button variant="contained" disabled sx={{ margin: "20px" }}>
				Disabled
			</Button>
			<Button variant="contained" href="/" sx={{ margin: "20px" }}>
				Link
			</Button>
			<Button
				variant="contained"
				disableElevation
				sx={{ margin: "20px" }}>
				Disable elevation
			</Button>
		</>
	);
};

export default ButtonComponent;
