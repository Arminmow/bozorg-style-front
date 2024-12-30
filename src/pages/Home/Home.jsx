import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Categories/>
      <Footer/>
    </>
  );
}

export default Home;
