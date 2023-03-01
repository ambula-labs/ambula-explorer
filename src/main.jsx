import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./routes/Landing/Landing.jsx";
import Product from "./routes/Product/Product.jsx";
import Error from "./routes/Error/Error.jsx";

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
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
