import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import ButtonComponent from "./components/ButtonComponent";
import TypographyComponent from "./components/TypographyComponent";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<App />} />
			<Route path="typography" element={<TypographyComponent />} />
			<Route path="button" element={<ButtonComponent />} />
			{/* <Route path="contact" element={<Contact />} />
			{/* Dynamic route */}
			{/* <Route path="user/:id" element={<User />} /> */}
			{/* https://reactrouter.com/en/main/start/overview#nested-routes */}
			{/* <Route
				loader={githubInfoLoader}
				path="github"
				element={<Github />}
			/> */}
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
