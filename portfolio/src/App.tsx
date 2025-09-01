import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Assignment1 from "./projects/Assignment1/Assignment1";
import Assignment2 from "./projects/Assignment2/Assignment2";
import Assignment3 from "./projects/Assignment3/Assignment3";
import GuestHouse from "./projects/guest-house/guest-house";
import "./App.css";

function App() {
	return (
		<Router>
			<main className="bg-gray-50 min-h-screen">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/assignment1/*" element={<Assignment1 />} />
					<Route path="/assignment2/*" element={<Assignment2 />} />
					<Route path="/assignment3/*" element={<Assignment3 />} />
					<Route path="/guest-house/*" element={<GuestHouse />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
