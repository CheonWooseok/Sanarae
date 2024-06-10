import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppFooter from "./components/footer/Footer";
import Header from "./components/header/Header";
import IndexPage from "./pages/index/Index";

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
				</Routes>
				<AppFooter />
			</BrowserRouter>
		</div>
	);
}

export default App;
