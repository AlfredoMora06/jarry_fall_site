import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"
import MyWork from "../components/sections/MyWork"
import theme from "../theme"

export default function Work():JSX.Element {
  return (
    <>
      <div
        style={{
          background: theme.palette.secondary.main,
          paddingBottom: 100,
        }}
      >
        <Navbar dark={false} />
        <MyWork />
      </div>
      <Footer />
    </>
  )
}
