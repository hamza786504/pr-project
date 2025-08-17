import AppointmentSection from "./Componenets/AppointmentSection";
import Banner from "./Componenets/Banner";
import BlogSection from "./Componenets/BlogSection";
import BoostPresenceSection from "./Componenets/BoostPresenceSection";
import BusinessNetworkSection from "./Componenets/BusinessNetworkSection";
import CaseStudiesSection from "./Componenets/CaseStudiesSection";
import Faq from "./Componenets/Faq";
import FeaturedSection from "./Componenets/FeaturedSection";
import HowItWorks from "./Componenets/HowItWorks";
import Marquee from "./Componenets/Marquee";
import Packages from "./Componenets/Packages";
import Publishers from "./Componenets/Publishers";
import SalesFeaturesSection from "./Componenets/SalesFeaturesSection";
import TrustedPartners from "./Componenets/TrustedPartners";


export default function Home() {


  return (
    <>

      <Banner />
      <Publishers />
      <BoostPresenceSection />
      <HowItWorks />
      <SalesFeaturesSection />
      <TrustedPartners />
      <FeaturedSection />
      <AppointmentSection />
      <CaseStudiesSection />
      <Packages />
      <BusinessNetworkSection />
      <Faq />
      <BlogSection />
      <Marquee />
    </>
  );
}
