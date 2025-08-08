import Image from "next/image";
import Banner from "./Banner/Banner";
import WatchSlider from "./Banner/Banner";
import NewArrival from "./component/NewArrivel";
import OurBrand from "./component/ourBrand";



export default function Home() {
  return (
    <>
    <WatchSlider/>
    <NewArrival/>
    <OurBrand/>
   </>
  );
}