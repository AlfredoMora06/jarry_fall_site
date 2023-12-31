import Navbar from "../components/Navbar"
import AboutMe from "../components/sections/AboutMe"
import Footer from "../components/sections/Footer"
import theme from "../theme"

export default function About():JSX.Element {
  return (
    <>
      <div
        style={{
          background: theme.palette.secondary.main,
          paddingBottom: 80,
        }}
      >
        <Navbar dark={false} />
        <AboutMe />
      </div>
      <Footer />
    </>
  )
}
