import AnnouncementBar from "./Componenets/Announcementbar";
import Banner from "./Componenets/Banner";
import BlogSection from "./Componenets/BlogSection";
import BoostPresenceSection from "./Componenets/BoostPresenceSection";
import FeaturedSection from "./Componenets/FeaturedSection";
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
    </>
  );
}
