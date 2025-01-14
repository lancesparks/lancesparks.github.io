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
              Led the front-end effort to modernize how Comcast sends their TV
              commercials instructions to partner networks.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Developed and maintained responsive, high-performance user
              interfaces using Angular, TypeScript, SCSS, CSS, and HTML,
              contributing to an 80% reduction in processing time.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Collaborated with UX designers to translate wireframes into
              functional web pages, and with back-end developers to integrate
              APIs and services seamlessly.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Implemented state management using NgRx to handle data from
              multiple APIs, ensuring seamless data flow within the application.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Utilized Docker Compose, Git, and NPM to streamline local
              development workflows and ensure efficient version control.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Maintained high-quality code by enforcing consistent test coverage
              through Jest and Cypress, improving code reliability.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Enhanced site security by integrating route guards, directing
              unauthorized requests to a secure SSO login.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Collaborated with cross-functional teams, including product
              managers and designers, to define and execute the development
              roadmap.
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
              Led the development of a proof-of-concept program that analyzed
              movement patterns, securing funding for a new department by
              demonstrating innovative front-end solutions.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Designed and developed a responsive data dashboard using React and
              TypeScript, providing real-time insights for the Future-Scape
              traffic division.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Collaborated with management and stakeholders to gather
              requirements and translate them into functional web interfaces.
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
              Developed interactive dashboards and front-end components to
              visualize complex financial data, enhancing decision-making
              processes.
            </Typography>
            <Typography sx={{ fontSize: 12 }}>
              Identified and resolved front-end bugs, reducing system downtime
              and improving the application's performance and user experience.
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
              University of Central Florida, Orlando FL
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
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
