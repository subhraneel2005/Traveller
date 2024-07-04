import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import TravelDeals from "@/components/TravelDeals";
import Image from "next/image";

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
