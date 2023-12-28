import { useRef } from 'react'

import Navbar from "../../components/Navbar"
import Footer from "../../components/sections/Footer"
import IntroBrandFluence from './IntroBrandFluence'
import IntroBrandFluenceBackToTop from './BrandFluenceBackToTop'
import BrandFluenceDiscover from './BrandFluenceDiscover'


export default function BrandFluence():JSX.Element {
  const topRef = useRef<any>()

  return <>
    <div style={{ backgroundColor: "#FFFFFF", paddingBottom: 50 }} ref={topRef}>
      <Navbar dark={false} />
      <IntroBrandFluence
        projectTitle={"BrandFluence App"} 
        projectLength={"2 months"}
        projectGoal={" To design an application that converts social media interactions into revenue for users, influencers, and brands."}
        roles={["UI/UX Design", "UX Research", "Information Architecture"]}
        tools={["Figma", "Google Forms"]}
        color={"#FFABAB"}
      />
    </div>
    <BrandFluenceDiscover />
    <IntroBrandFluenceBackToTop topRef={topRef}/>
    <Footer />
  </>
}
