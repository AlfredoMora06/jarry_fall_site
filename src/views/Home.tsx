import Navbar from "../components/Navbar"
import JarryHere from "../components/sections/JarryHere"

export default function Home():JSX.Element {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(180deg, #FF9DCC 0%, #FE55A6 32.29%, #FF007A 71.35%, #FFF 100%)`,
          minHeight: "100vh" 
        }}
      >
        <Navbar dark={true} />
        <JarryHere />
      </div>
    </>
  )
}
