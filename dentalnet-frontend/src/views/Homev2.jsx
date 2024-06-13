import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Footer from '../components/home/Footer';
import StripeOne from '../components/home/StripeOne';
import StripeTwo from '../components/home/StripeTwo';
import WhoWeAre from '../components/home/WhoWeAre';
import MainFeatures from '../components/home/MainFeatures';
import Axios from '../axios/axiosInstance';


function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StripeOne/>
      <FeaturesSection />
      <TestimonialsSection />
      <MainFeatures/>
      <StripeTwo/>
      <WhoWeAre/>
      <Axios/>
      <Footer />
    </div>
  );
}

export default Home;