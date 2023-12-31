import Navbar from "../components/Navbar"
import Designs from "../components/sections/Designs"
import Footer from "../components/sections/Footer"
import theme from "../theme"

export default function Fun():JSX.Element {
  return (
    <>
      <div
        style={{
          background: theme.palette.secondary.main,
          paddingBottom: 150,
          height: "100vh"
        }}
      >
        <Navbar dark={false} />
        <Designs />
      </div>
      <Footer />
    </>
  )
}
