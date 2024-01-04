import { Grid, Typography } from "@mui/material"

const textArray = [
  {
    title: "Design: ",
    text: "UI/UX Design, Visual Design, Interaction Design, Product Design, System Design, Web/Mobile",
  },
  {
    title: "Coding Languages: ",
    text: "Python, JavaScript, Java",
  },
  {
    title: "Tools Development: ",
    text: "HTML, CSS, Figma, Sketch, React.js, Jira, Microsoft Office",
  },
  {
    title: "Adobe Suite: ",
    text: "InDesign, Photoshop, Adobe XD",
  },
  {
    title: "UX Methods: ",
    text: "Usability Testing, User Flows, Prototyping, Sketching, Wireframing, Mockups",
  },
  {
    title: "Research: ",
    text: "User Research, Information Architecture, Research Synthesis, Data Analysis, Data Visualization",
  },
  {
    title: "Graphic Design: ",
    text: "Branding, Marketing, Package Design, Typography, Icon Design",
  },
  {
    title: "Languages: ",
    text: "Fluent in English and French",
  },
]


export default function Skills():JSX.Element {
  return (
    <Grid container paddingTop={5}>
      <Grid item xs={12}>
        <Typography variant="h1" fontWeight={400} style={{color: "#FE55A6"}} fontSize={80} fontFamily={"Kaisei Decol"}>
          Skills
        </Typography>
      </Grid>
      <Grid item xs={12} paddingTop={2}>
        {textArray.map((obj) => {
          return (
            <Grid paddingBottom={3} key={obj.title}>
              <Typography display="inline" fontWeight={700} variant="h6">{obj.title}</Typography>
              <Typography display="inline" variant="h6">{obj.text}</Typography>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
