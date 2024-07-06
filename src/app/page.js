import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import TravelDeals from "../components/TravelDeals";



export default function Home() {
  return (
    <div>
      <HomePage/>
      <Destinations/>
      <TravelDeals/>
      <Footer/>
    </div>
  );
}
