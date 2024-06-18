import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppFooter from "./components/footer/Footer";
import Header from "./components/header/Header";
import IndexPage from "./pages/index/Index";
import ProductsPage from "./pages/products/Products";

function App() {
	return (
		<div
			style={
				{
					// minHeight: "150vh",
				}
			}
		>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="" element={<IndexPage />} />
					<Route path="products" element={<ProductsPage />} />
				</Routes>
				<AppFooter />
			</BrowserRouter>
		</div>
	);
}

export default App;
