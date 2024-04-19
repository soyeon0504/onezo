import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import Layout from "./layouts/Layout";
import router from "./routes/root";
// import { Wrap } from "./styles/basic";


// const App = () => {
//   return (
//     <>
//     <Layout />
//     <MainPage />
//     <MenuPage />
//     </>
//   );
// };

const App = () => {
	return <>
		<RouterProvider router={router} />
	</>
}

export default App;