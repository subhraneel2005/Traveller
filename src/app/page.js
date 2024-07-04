import Destinations from "@/components/Destinations";
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
    </div>
  );
}
