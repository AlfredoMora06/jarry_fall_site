import Navbar from "../components/Navbar"
import AboutMe from "../components/sections/AboutMe"
import theme from "../theme"

export default function About():JSX.Element {
  return (
    <>
      <div
        style={{
          background: theme.palette.secondary.main,
          paddingBottom: 220,
        }}
      >
        <Navbar dark={false} />
        <AboutMe />
      </div>
    </>
  )
}
