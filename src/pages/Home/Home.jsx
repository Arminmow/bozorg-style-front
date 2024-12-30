import Categories from "../../components/Categories/Categories";
import HeroSection from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Categories/>
    </>
  );
}

export default Home;
