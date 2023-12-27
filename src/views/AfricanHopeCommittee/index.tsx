import { useRef } from 'react'

import Navbar from "../../components/Navbar"
import Footer from "../../components/sections/Footer"
import Intro from './Intro'
import AhcDiscover from './AhcDiscover'
import AhcDefine from './AhcDefine'
import AhcBackToTop from './AhcBackToTop'

export default function AfricanHopeCommittee():JSX.Element {
  const topRef = useRef<any>()

  return <>
    <div style={{ backgroundColor: "#FFFFFF", paddingBottom: 50 }} ref={topRef}>
      <Navbar dark={false} />
      <Intro 
        projectTitle={"African Hope Committee Inc."} 
        projectClient={"African Hope Committee is a non profit organization incorporated in 2004 with the mission of empowering African immigrants and other ethnic groups in New York City through health education programs, immigration services and social support services."}
        projectLength={"Ongoing assignment and expected to be completed within the next two months."}
        projectGoal={"Revamp the company's website with a cleaner and more aesthetically pleasing appearance, prioritizing user-friendliness, simplicity, informativeness, and clarity."}
        roles={["UI/UX Design", "UX Research", "Information Architecture", "Wireframing"]}
        tools={["Figma", "Google Forms", "React Framework", "Typescript", "Material-UI"]}
        color={"#BD2024"}
      />
    </div>
    <AhcDiscover />
    <AhcDefine />
    <AhcBackToTop topRef={topRef}/>
    <Footer />
  </>
}
