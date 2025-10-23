import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/three/Showcase.jsx";
import Highlights from "./components/three/Highlights.jsx";
import Features from "./components/three/Features.jsx";
import Footer from "./components/three/Footer.jsx";
import Performance from "./components/three/Performance.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Highlights />
            <Footer />
        </main>
    )
}
export default App

