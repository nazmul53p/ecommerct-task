import Categories from "./components/Categories";
import Explore from "./components/Explore";
import Explore2 from "./components/Explore2";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PreOrders from "./components/PreOrders";
import Sliders from "./components/Sliders";
import Testimonial from "./components/Testimonial";
import Trending from "./components/Trending";

function App() {
	return (
		<>
			<NavBar />
			<Sliders />
			<Trending />
			<Categories />
			<PreOrders />
			<Explore />
			<Explore2 />
			<Testimonial />
			<Footer />
		</>
	);
}

export default App;
