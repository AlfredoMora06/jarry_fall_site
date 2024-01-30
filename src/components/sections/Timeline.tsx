import { Grid, Typography, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

//@ts-ignore
import Point from "../../assets/Point.png"
import theme from "../../theme"

const useStyles = makeStyles<Theme>(() => ({
  timeline: {
    margin: "0 auto",
    maxWidth: "750px",
    padding: "25px",
    display: "grid",
    gridTemplateColumns: "0.35fr 3px 1fr",
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
    background: "repeating-linear-gradient(to bottom,transparent 0 4px,black 4px 8px) 80%/2px 100% no-repeat"
  },
  timeline_pink_point: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "25px",
    height: "25px",
    background: "#FF007A",
    borderRadius: "50%",
  },
  timeline_pink_point_png: {
    position: "absolute",
    top: 0,
    left: "60%",
    transform: "translateX(-50%)",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    background:  theme.palette.secondary.main,
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



export default function Timeline({isMobile}: {isMobile: boolean}):JSX.Element {
  const classes = useStyles()

  return (
    <Grid container paddingTop={15}>
      <Grid item xs={12} md={3}>
        <Typography 
          variant="h1" 
          fontWeight={400} 
          style={{color: "#000000"}} 
          fontSize={40} 
          align={isMobile ? 'center' : 'left'}
          pb={isMobile ? 1 : 0}
        >
          Background 🎓
        </Typography>
        <Typography variant="h6" fontSize={18} align={isMobile ? 'center' : 'left'} pb={isMobile ? 1 : 0}>
          A snippet about my educational and professional background.
        </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
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
            <div className={classes.timeline_pink_point_png}>
              <img src={Point} alt="Point" style={{width: "100%"}}/>
            </div>
          </div>
          <div className={classes.timeline__component}>
            <Typography className={classes.timeline__title}>
              I have been accepted into the Masters of Computing, Entrepreneurship and Innovation program at NYU. My program has provided me with the know-how and skills to become the next best CEO. I’ve designed innovative technology solutions for challenges facing society today and translated these ideas to successful entrepreneurial efforts.            
            </Typography>
          </div>
          {/* New point */}
          <div className={`${classes.timeline__date} ${classes.timeline__date__right}`}>
            <Grid container item justifyContent={"center"}>
              <Grid item>
                <Typography align="center" fontWeight="bold">May 2023</Typography>
                <Typography align="center">Graduated from</Typography>
                <Typography align="center">Drew University</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.timeline__middle}>
            <div className={classes.timeline_pink_point}></div>
          </div>
          <div className={classes.timeline__component}>
            <Typography className={classes.timeline__title}>
              I graduated from Drew University in May of 2023, focusing my studies in computer science, business, and dance while taking leadership roles in project management, design, marketing and product strategy. I worked in roles that focused on people - studying human centered design, behavioral trends and patterns, learning about the human psyche, and working with focus groups to understand and enhance the user experience.
            </Typography>
          </div>
          {/* New point */}
          <div className={`${classes.timeline__date} ${classes.timeline__date__right}`}>
            <Grid container item justifyContent={"center"}>
              <Grid item>
                <Typography align="center" fontWeight="bold">May-July 2022</Typography>
                <Typography align="center">Rochester Institute</Typography>
                <Typography align="center">of Technology</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.timeline__middle}>
            <div className={classes.timeline_pink_point}></div>
          </div>
          <div className={classes.timeline__component}>
            <Typography className={classes.timeline__title}>
              I was a researcher for the Computational Sensing for Human-Centered AI REU program. My project was about recognizing cognitive stressors by utilizing electrodermal activity and machine learning models. Are there notable differences in physiological signals caused by different types of cognitive stress? Can we develop effective detectors that can distinguish between different types of cognitive stress? The short answer is YES and to capture our data, my teammate and I used iMotions Software and the Empatica E4 wristband. We also used the optimizable K-Nearest Neighbors machine learning model and MATLAB to analyze data. Though this project was not design based, it helped me realize that understanding human interactions and experiences involves more than just data analysis—it requires a holistic approach that integrates technology with human behavior. Through studying physiological signals and utilizing machine learning in this program, I discovered the profound impact of design on user experiences. Analyzing people with computer vision software and engaging in live interactions fueled my interest in UI/UX design, inspiring me to pursue a path that combines technology and user-centric design to enhance overall human well-being.           
            </Typography>
          </div>
          {/* Bottom points */}
          <div className={`${classes.timeline__component} ${classes.timeline__component__bottom}`}>
            <div className={`${classes.timeline__date} ${classes.timeline__date__right}`}>
              <Grid container item justifyContent={"center"}>
                <Grid item>
                  <Typography align="center" fontWeight="bold">Aug 2019-Present</Typography>
                  <Typography align="center">African Hope</Typography>
                  <Typography align="center">Committee Inc.</Typography>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className={classes.timeline__middle}>
            <div className={classes.timeline_pink_point}></div>
          </div>
          <div className={`${classes.timeline__component} ${classes.timeline__component__bottom}`}>
            <Typography className={classes.timeline__title}>
              I am the leader of design and marketing strategies. I provide impactful, innovative, and data-driven digital solutions. By creating website designs, graphic designs, and serving as the IT support manager, I contribute to the seamless integration of technology and aesthetics, ensuring optimal functionality and a visually appealing digital presence.            
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
