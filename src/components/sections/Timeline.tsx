import { Grid, Typography, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles<Theme>((theme) => ({
  timeline: {
    margin: "0 auto",
    maxWidth: "750px",
    padding: "25px",
    display: "grid",
    gridTemplateColumns: "1fr 3px 1fr",
    color: "#000000"
  },
  timeline__component: {
    margin: "0 20px 20px 20px"
  },

  /* LEAVE TILL LAST */
  timeline__component__bottom: {
    marginBottom: 0
  },

  timeline__middle: {
    position: "relative",
    background: "#000000"
  },
  timeline__point: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "15px",
    height: "15px",
    background: "#000000",
    borderRadius: "50%",
  },
  
  /* LEAVE TILL LAST */
  timeline__point__bottom: {
    top: "initial",
    bottom: 0
  },
  timeline__date__right: {
    textAlign: "right"
  },
  
  timeline__title: {
    margin: 0,
    fontSize: "1.15em",
  },
  timeline__paragraph: {
    lineHeight: 1.5,
  }

}))



export default function Timeline():JSX.Element {
  const classes = useStyles()

  return (
    <Grid container paddingTop={15}>
      <Grid item xs={12} md={4}>
        <Typography variant="h1" fontWeight={400} style={{color: "#000000"}} fontSize={50}>
          Background 🎓
        </Typography>
        <Typography variant="h6">
          A snippet about my educational and professional background.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <div className={classes.timeline}>
          <div className={classes.timeline__component}>
            <div className={`${classes.timeline__date} ${classes.timeline__date__right}`}>
              <Grid container item justifyContent={"center"}>
                <Grid item>
                  <Typography align="center" fontWeight="bold">Sep 2023-Present</Typography>
                  <Typography align="center">New York University</Typography>
                  <Typography align="center">MS-CEI</Typography>
                </Grid>
              </Grid>
              
            </div>
          </div>
          <div className={classes.timeline__middle}>
            <div className={classes.timeline__point}></div>
          </div>
          <div className={classes.timeline__component}>
            <Typography className={classes.timeline__title}>
              I have been accepted into the Masters of Computing, Entrepreneurship and Innovation program at NYU. My program has provided me with the know-how and skills to become the next best CEO. I’ve designed innovative technology solutions for challenges facing society today and translated these ideas to successful entrepreneurial efforts.            
            </Typography>
          </div>
          <div className={classes.timeline__component}>
            <Typography className={classes.timeline__title}>
              I graduated from Drew University in May of 2023, focusing my studies in computer science, business, and dance while taking leadership roles in project management, design, marketing and product strategy. I worked in roles that focused on people - studying human centered design, behavioral trends and patterns, learning about the human psyche, and working with focus groups to understand and enhance the user experience.
            </Typography>
            <Typography className={classes.timeline__title}>
              I didn't even remove the jumper in the background before recording that video 🤣
            </Typography>
          </div>
          <div className={classes.timeline__middle}>
            <div className={classes.timeline__point}></div>
          </div>
          <div className={classes.timeline__component}>
            <div className={classes.timeline__date}>May 2023</div>
          </div>
          <div className={classes.timeline__component}>
            <div className={`${classes.timeline__date} ${classes.timeline__date__right}`}>Aug 2019-Present</div>
          </div>
          <div className={classes.timeline__middle}>
            <div className={classes.timeline__point}></div>
          </div>
          <div className={classes.timeline__component}>
            <p className={classes.timeline__title}>
              I am the leader of design and marketing strategies. I provide impactful, innovative, and data-driven digital solutions. By creating website designs, graphic designs, and serving as the IT support manager, I contribute to the seamless integration of technology and aesthetics, ensuring optimal functionality and a visually appealing digital presence.            
            </p>
          </div>
          <div className={`${classes.timeline__component} ${classes.timeline__component__bottom}`}>
          </div>
          <div className={classes.timeline__middle}>
            <div className={classes.timeline__point}></div>
            <div className={`${classes.timeline__point} ${classes.timeline__point__bottom}`}></div>
          </div>
          <div className={`${classes.timeline__component} ${classes.timeline__component__bottom}`}>
            <div className={classes.timeline__date}>Aug 2019-Present</div>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
