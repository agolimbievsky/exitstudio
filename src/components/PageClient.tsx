"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Stats from "./Stats";
import WhyThisModelExists from "./WhyThisModelExists";
import WhatWeActuallyDo from "./WhatWeActuallyDo";
import WhatWeInstall from "./WhatWeInstall";
import HowItWorks from "./HowItWorks";
import Founders from "./Founders";
import TheLongGame from "./TheLongGame";
import FAQ from "./FAQ";
import ClosingCTA from "./ClosingCTA";
import Footer from "./Footer";
import ApplicationModal from "./ApplicationModal";

export default function PageClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navigation onApplyClick={openModal} />
      <main>
        <Hero onApplyClick={openModal} />
        <Stats />
        <WhyThisModelExists />
        <WhatWeActuallyDo />
        <WhatWeInstall />
        <HowItWorks />
        <Founders />
        <TheLongGame />
        <FAQ />
        <ClosingCTA onApplyClick={openModal} />
      </main>
      <Footer />
      <ApplicationModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
