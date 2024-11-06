import classes from "./Timeline.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

export default function CustomizedTimeline() {
  return (
    <div className={classes.timeLineContainer}>
      <h1 className="headingLarge fadeInUp animatedFast">Resume</h1>
      <Timeline position="alternate">
        <TimelineItem className="fadeInUp animatedFast">
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" component="span">
              Senior Software Developer
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Railroad19 - August 2019 - Current
            </Typography>

            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Led the front-end
              development for an enterprise project that corporate users utilize
              to create and send tv commercial instructions.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i>The new user interface
              has led business teams to report an 80% reduction in processing
              time and a 24% reduction in user errors
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Utilized various
              technologies including Angular 12+, Ag-Grid, Typescript, SCSS,
              CSS, HTML, Cypress, and Jest.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Implemented NG-RX to
              handle state management and utilize data from multiple APIs.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Maintained consistent
              test coverage utilizing Jest and Cypress.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Coordinated closely
              with business teams to assess and implement business requirements.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Handled site security
              by implementing route guards that forwarded unsigned requests to
              an SSO login.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="fadeInUp animatedSlow">
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" component="span">
              Solution Developer
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Deloitte - August 2018 - August 2019
            </Typography>

            <Typography sx={{ fontSize: 12 }}>
              Successfully led efforts to create a proof-of-concept program that
              tracked movement patterns, this led to securing funding for a new
              department <i className={classes.iconRight}>&#11044;</i>
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Created the end-to-end development of the data dashboard for the
              Future-Scape traffic division with the following technologies
              <i className={classes.iconRight}>&#11044;</i>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="fadeInUp animatedSlow2">
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" component="span">
              Solution Analyst
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Deloitte - August 2017 - August 2018
            </Typography>

            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Developed and
              executed complex SQL queries to analyze financial data.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              <i className={classes.iconLeft}>&#11044;</i> Demonstrated
              problem-solving skills by resolving various existing and new bugs,
              reducing system downtime, and improving overall efficiency.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <h1 className="headingLarge fadeInUp animatedSlow3">Education</h1>
      <Timeline position="alternate">
        <TimelineItem className="fadeInUp animatedSlow3">
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" component="span">
              Bachelor of Arts
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              <i className={classes.iconLeft}>&#11044;</i> University of Central
              Florida, Orlando FL
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="fadeInUp animatedSlow4">
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" component="span">
              Full Stack Certification
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              University of Central Florida, Orlando FL
              <i className={classes.iconRight}>&#11044;</i>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
