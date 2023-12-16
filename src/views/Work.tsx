import Navbar from "../components/Navbar"
import MyWork from "../components/sections/MyWork"
import theme from "../theme"

export default function Work():JSX.Element {
  return (
    <>
      <div
        style={{
          background: theme.palette.secondary.main,
          paddingBottom: 220,
        }}
      >
        <Navbar dark={false} />
        <MyWork />
      </div>
    </>
  )
}
