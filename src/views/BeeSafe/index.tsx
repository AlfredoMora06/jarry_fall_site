import { useRef } from 'react'
import { useTheme, useMediaQuery } from "@mui/material"


import Navbar from "../../components/Navbar"
import Footer from "../../components/sections/Footer"
import ProjectBody from '../../components/sections/ProjectBody'
import Discover from './Discover'
import Define from './Define'
import BeeSafeDevelop from './BeeSafeDevelop'
import BackToTop from './BackToTop'
import DiscoverSecond from './DiscoverSecond'


export default function BeeSafe():JSX.Element {
  const topRef = useRef<any>()
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"))

  return <>
    <div style={{ backgroundColor: "#FFFFFF", paddingBottom: 50 }} ref={topRef}>
      <Navbar dark={false} />
      <ProjectBody 
        projectTitle={"BeeSafe App"} 
        imageSrc={"jarry_fall/ouemaddipmzc94rfammc"}
        projectLength={"5-day sprint"}
        projectGoal={"To analyze an already existing app idea and then redirect the app into a new app idea. This app is based on fostering a community and depending on your “neighbor” for safety."}
        roles={["UI/UX Design", "UX Research", "Information Architecture"]}
        tools={["Figma", "Google Forms"]}
        color={"#E6B301"}
        isMobile={isMobile}
      />
    </div>
    <Discover isMobile={isMobile} />
    <Define />
    <BeeSafeDevelop />
    <DiscoverSecond />
    <BackToTop topRef={topRef}/>
    <Footer />
  </>
}
