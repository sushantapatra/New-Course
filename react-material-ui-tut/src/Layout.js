import {
	Box,
	Container,
	Divider,
	Grid,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
} from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<Box sx={{ height: "100vh", margin: "20px" }}>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<Paper sx={{ width: 320 }}>
								<MenuList dense>
									<MenuItem>
										<ListItemText inset>
											<NavLink to="/">Home</NavLink>
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText inset>
											<NavLink to="/typography">
												Typography
											</NavLink>
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText inset>
											<NavLink to="/button">
												Button
											</NavLink>
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<NavLink to="/" />
										Home
									</MenuItem>
									<Divider />
									<MenuItem>
										<ListItemText>
											Add space before paragraph
										</ListItemText>
									</MenuItem>
									<MenuItem>
										<ListItemText>
											Add space after paragraph
										</ListItemText>
									</MenuItem>
									<Divider />
									<MenuItem>
										<ListItemText>
											Custom spacing...
										</ListItemText>
									</MenuItem>
								</MenuList>
							</Paper>
						</Grid>
						<Grid item xs={9}>
							<Paper>
								<Box
									sx={{
										height: "100vh",
										padding: "20px 40px",
									}}>
									<Outlet />
									{/* https://reactrouter.com/en/main/components/outlet */}
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Layout;
