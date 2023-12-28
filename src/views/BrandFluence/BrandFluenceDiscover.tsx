import { Container, Grid, Typography } from '@mui/material'
import BrandFluenceComparisonTable from './BrandFluenceComparisonTable'

//@ts-ignore
import circleArrowsIcon from "../../assets/circleArrowsIcon.svg"
//@ts-ignore
import instagramIcon from "../../assets/instagramIcon.svg"
//@ts-ignore
import heartIcon from "../../assets/heartIcon.svg"
//@ts-ignore
import rewardIcon from "../../assets/rewardIcon.svg"
//@ts-ignore
import handshakeIcon from "../../assets/handshakeIcon.svg"


export default function BrandFluenceDiscover():JSX.Element {
  const quantDataArray = [
    {
      image: instagramIcon,
      title: 'INSTAGRAM',
      description: `Is our subject’s preferred social media app`
    },
    {
      image: heartIcon,
      title: 'ENGAGEMENT',
      description: `Passive followers is our influencers primary challenge`
    },
    {
      image: circleArrowsIcon,
      title: 'DAILY',
      description: `Is how often the majority of our subject’s use social media`
    },
    {
      image: rewardIcon,
      title: '90%',
      description: `Of our user’s would appreciate rewards for engagement`
    },
    {
      image: handshakeIcon,
      title: '100%',
      description: `Of our brands need a new strategy for active forms of engagement`
    }
  ]

  return (
    <div>
      <div style={{ backgroundColor: "#FFABAB" }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingY={10} >
            <Typography variant='h4' fontWeight={700} style={{color: "white"}}>
              DISCOVER
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{paddingTop: 50}}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                PAIN POINT
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                USERS:
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Users are <strong style={{color: "#FFABAB"}}>frequently swayed by influencers' posts on social media</strong>, driving them towards <strong style={{color: "#FFABAB"}}>costly purchases</strong> they desire. Yet, as they grapple with the challenge of balancing these aspirations with budget constraints, they also find themselves <strong style={{color: "#FFABAB"}}>unrewarded</strong> for organically boosting the brand's viewership.
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                INFLUENCERS:
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                In a landscape as dynamic as social media, influencers envision a world where <strong style={{color: "#FFABAB"}}>sustained engagement is the norm</strong>, not the exception. Yet, they often grapple with the <strong style={{color: "#FFABAB"}}>challenge of maintaining long-term interactions</strong> from their followers, even as they passionately work towards their goals and seek to consistently capture hearts and likes.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                BRANDS:
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Many brands have a large number of <strong style={{color: "#FFABAB"}}>passive followers</strong> on social media platforms. These are individuals who might follow a brand’s profile or influencers who promote the brand but rarely engage in meaningful ways. Their engagement might be limited to occasional likes or views but <strong style={{color: "#FFABAB"}}>does not translate into more active forms</strong> of engagement like sharing content, commenting, visiting the brand’s website, or making purchases. This passive behavior represents a missed opportunity for brands.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                MARKET RESEARCH
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                During the discovery stage, our primary focus was on creating a novel method for followers and influencers to connect and engage on social media while simultaneously benefiting brands partnering with influencers. We actively addressed potential business challenges, visualized desired outcomes, examined various user types, and tackled anticipated obstacles. This thorough approach, which included analyzing competitors like "Social Ladder," "Clever," and "Skeepers," allowed us to formulate a well-informed project strategy. By researching platforms that enhance the experience for influencers and brands, we laid the groundwork for integrating users (followers/customers) into the solution. Our <strong style={{color: "#FFABAB"}}>competitive advantage</strong> over other platforms lies in providing a space for the <strong style={{color: "#FFABAB"}}>Monetization of Everyday Behavior</strong> and the <strong style={{color: "#FFABAB"}}>Inclusion of Users in the Solution</strong>. This ensures that our solutions are not only innovative but also beneficial for all participants in our platform.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                FEATURE COMPARISON CHART
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The feature comparison chart serves as a valuable tool for juxtaposing the features of our app with those of our competitors. This aids in the swift identification of market trends and openings.              
              </Typography>
              <br/>
              <Typography variant="h6">
                This analysis played a pivotal role in guiding the development of our app idea by providing a clear and concise overview of key functionalities. It facilitated a systematic evaluation of our app's features alongside competitors, allowing us to identify trends and uncover potential gaps in the market. We were able to make informed decisions, ensuring that our app not only stood out with innovative features but also addressed user needs more effectively than existing solutions.              
              </Typography>
            </Grid>
          </Grid>

          <BrandFluenceComparisonTable />

          <Grid container paddingTop={5}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                USER RESEARCH
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                After our market research, we moved onto user research. We started with a survey, which we sent out through email to our contacts.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Our subjects consisted of influencers, brands, and people of all different ages and backgrounds that enjoy using social media on a daily basis.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Quantitative Data: Surveys
              </Typography>
              <br/>
              <Typography variant="h6">
                We gathered 86 surveys through Google Forms, yielding valuable insights into influencers' preferences for maintaining consistent engagement with their followers, the dynamics of brand-influencer partnerships, and the expectations of social media users. Additionally, we explored how users wish to recive benefits when engaging with influencers and brand products.
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={4} container justifyContent={"center"} style={{background: "#FFABAB"}}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "white", letterSpacing: ".2rem", }}>
                QUANTITATIVE DATA
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5}>
            { quantDataArray.map((item) => {
                const {image, title, description} = item
                return (
                  <Grid item xs={12} md={2.4} key={title} paddingX={1}>
                    <Grid item container justifyContent={"center"}>
                      <img src={image} alt={title}/>
                    </Grid>
                    <Typography variant='h6' fontWeight={700} align='center'>{title}</Typography>
                    <Typography variant='h6' align='center'>{description}</Typography>
                  </Grid>
                )
              })
            }
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Qualitative Data: Interviews              
              </Typography>
              <br/>
              <Typography variant="h6">
                We conducted interviews with a total of 30 individuals, all of whom had experience with Instagram and at least one other social media app. The interviewees consisted of 10 users, 10 influencers and 10 brands.              
              </Typography>
              <br/>
              <Typography variant="h6">
                This method was beneficial, providing me with a deeper understanding of our users' desires while developing our app features. 
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                User Observations
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                User observations in the design process involve closely watching and analyzing how individuals interact with an app, providing valuable insights into their behavior, preferences, and challenges. These observations inform design decisions, helping designers create more intuitive and user-friendly interfaces that cater to the needs and expectations of the target audience. Below are questions we generated in order to create a deeper understanding for our users.              
              </Typography>
            </Grid>
          </Grid>

          {/* TODO -- Images */}

          <Grid container paddingTop={5}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                QUESTIONS WE ASKED OURSELVES AS A TEAM
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                What will move people who “like” your application into the “love” category? 
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Enhanced User Experience: Continuously improve the user interface and experience. Ensure that the app is user-friendly, intuitive, and aesthetically pleasing. Address user feedback and make regular updates to enhance usability.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Value Proposition: Clearly communicate the value our app provides to users. Highlight the benefits of earning rewards by engaging with influencer posts, such as exclusive discounts, early access, or unique experiences. 
              </Typography>
              <br/>
              <Typography variant="h6">
                Personalization: Tailor the user experience. Provide personalized content recommendations based on user preferences and behaviors. Make users feel that the app understands and caters to their interests. 
              </Typography>
              <br/>
              <Typography variant="h6">
                Community Building: Foster a sense of community within the app. Encourage users to interact with each other, share experiences, and create a network. This can be done through user forums, chat features, or challenges that promote user engagement. 
              </Typography>
              <br/>
              <Typography variant="h6">
                Influencer Engagement: Strengthen relationships with influencers. Ensure that the influencers associated with your app are active and engaging with the audience. Collaborate with them to create unique and appealing content.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Describe ONE SURPRISING opportunity for UGC (User generated content). 
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Encouraging users to create and share short video testimonials or stories about their positive experiences with products they've purchased using their earned rewards. This can serve as authentic and persuasive content that not only showcases the value of the app but also the products or services of the brands it promotes. These user-generated video testimonials could be featured prominently on the app and shared on social media, creating a sense of trust and authenticity among potential users and customers.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Describe how your product could be profitable. 
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Subscription Plans: Offer premium subscription plans that provide users with enhanced features, faster point accumulation, or access to exclusive influencer content.             
              </Typography>
              <br/>
              <Typography variant="h6">
                Brands' Partnership Fees: Charge brands and companies a fee to feature their products and promotions within the app. This could include featured posts by influencers or prominent placement in the app's store. 
              </Typography>
              <br/>
              <Typography variant="h6">
                Advertising: Display targeted ads within the app, either from brands looking to reach the app's user base or from third-party advertisers. 
              </Typography>
              <br/>
              <Typography variant="h6">
                Commission on Sales: Take a percentage of the sales generated when users redeem their earned rewards at a brand's store. This incentivizes brands to participate and engage with the app.  
              </Typography>
              <br/>
              <Typography variant="h6">
                Sponsored Challenges: Create sponsored engagement challenges or contests where brands pay to have their products featured as rewards for users who complete specific tasks or engage with influencer content.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Influencer Partnerships: Charge influencers and brands a fee for promoting their content or products within the app, especially if it leads to increased engagement and conversions.              
              </Typography>
            </Grid>
          </Grid>

        </Container>

      </div>
      
    </div>
  )
}
