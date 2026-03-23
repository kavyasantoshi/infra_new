import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import AboutFirstSection from "../components/about/AboutFirstSection.jsx";
import AboutSecondSection from "../components/about/AboutSecondSection.jsx";
import AboutThirdSection from "../components/about/AboutThirdSection.jsx";

function AboutPage() {
    return (
        <>
        <Header />
        <AboutFirstSection />
        <AboutSecondSection />
        <AboutThirdSection />
        <Footer />
        </>
    )
}

export default AboutPage;