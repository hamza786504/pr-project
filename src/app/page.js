import AppointmentSection from "./Componenets/AppointmentSection";
import Banner from "./Componenets/Banner";
import BlogSection from "./Componenets/BlogSection";
import BoostPresenceSection from "./Componenets/BoostPresenceSection";
import BusinessNetworkSection from "./Componenets/BusinessNetworkSection";
import CaseStudiesSection from "./Componenets/CaseStudiesSection";
import FeaturedSection from "./Componenets/FeaturedSection";
import HowItWorks from "./Componenets/HowItWorks";
import Marquee from "./Componenets/Marquee";
import Publishers from "./Componenets/Publishers";
import SalesFeaturesSection from "./Componenets/SalesFeaturesSection";
import WOWInit from "./wow-init";

export default function Home() {

  return (
    <>
      <WOWInit />
      
      <Banner />
      <BoostPresenceSection />
      <HowItWorks />
      <SalesFeaturesSection />
      <FeaturedSection />
      <AppointmentSection />
      <CaseStudiesSection />
      <BusinessNetworkSection />
      <Publishers />
      <BlogSection />
      <Marquee />
    </>
  );
}
