import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./routes/Landing/Landing.jsx";
import Product from "./routes/Product/Product.jsx";
import Build from "./routes/Build/Build.jsx";
import About from "./routes/About/About";
import Error from "./routes/Error/Error.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Landing />,
			},
			{
				path: "product",
				element: <Product />,
			},
			{
				path: "build",
				element: <Build />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ParallaxProvider>
		<RouterProvider router={router} />
	</ParallaxProvider>
);
