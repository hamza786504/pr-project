import AnnouncementBar from "./Componenets/Announcementbar";
import Banner from "./Componenets/Banner";
import BoostPresenceSection from "./Componenets/BoostPresenceSection";
import Header from "./Componenets/Header";
import HowItWorks from "./Componenets/HowItWorks";
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
    </>
  );
}
