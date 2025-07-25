import AnnouncementBar from "./Componenets/Announcementbar";
import Banner from "./Componenets/Banner";
import BlogSection from "./Componenets/BlogSection";
import BoostPresenceSection from "./Componenets/BoostPresenceSection";
import BusinessNetworkSection from "./Componenets/BusinessNetworkSection";
import FeaturedSection from "./Componenets/FeaturedSection";
import Footer from "./Componenets/Footer";
import Header from "./Componenets/Header";
import HowItWorks from "./Componenets/HowItWorks";
import SalesFeaturesSection from "./Componenets/SalesFeaturesSection";
import WOWInit from "./wow-init";

export default function Home() {

  return (
    <>
      <WOWInit />
      <AnnouncementBar />
      <Header />
      <Banner />
      <BoostPresenceSection />
      <HowItWorks />
      <SalesFeaturesSection />
      <FeaturedSection />
      <BlogSection />
      <BusinessNetworkSection />
      <Footer />
    </>
  );
}
