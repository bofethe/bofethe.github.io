/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/mapAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bo Fethe",
  title: "Bo Fethe",
  subTitle: emoji(
    "A passionate Data Scientist solving geospatial analytical problems with experience with the ESRI platform, statistical programming, and ecological sciences."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1x8HzVXhJWRDvVgFq9jZiJPmW-qnEtLHGziyvN2Wf7zI/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bofethe",
  linkedin: "https://www.linkedin.com/in/bofethe/",
  gmail: "bofethe@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Descriptive, Predictive, and Prescriptive Analytics",
  skills: [
    emoji(
      "⚡ Use Machine Learning to uncover hidden trends"
    ),
    emoji(
      "⚡ Process geospatial data and develop Business Intelligence tools"
    ),
    emoji(
      "⚡ Use Azure, AWS, GCP, and Databricks to process big data on the cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-registered"
    },
    {
      skillName: "GIS",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt_logo.png"),
      subHeader: "Master of Science in Analytics",
      duration: "August 2025 (estimated)",
      desc: "Top 5 nationally ranked program in data science and analytics",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "University of North Carolina Wilmington",
      logo: require("./assets/images/uncw_logo.png"),
      subHeader: "Bachelor of Science in Environmental Science, Minor Biology",
      duration: "May 2013",
      desc: "NCAA Division 1 Student Athlete - Swimming",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "GIS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Statistical Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Solutions Engineer",
      company: "Hillsborough County",
      companylogo: require("./assets/images/county_logo.png"),
      date: "December 2023 – Present",
      desc: "Information Innovation Office / Performance Data and Analytics",
      descBullets: [
        "Create and schedule python scripts to automate data pulls and update public facing applications.",
        "Create and update applications using ArcGIS Maps SDK",
        "Administer the organization’s Azure DevOps for version control and Agile development."
      ]
    },
    {
      role: "GIS Team Lead / Geospatial Developer",
      company: "HNTB",
      companylogo: require("./assets/images/hntb_logo.jpeg"),
      date: "May 2017 – December 2023",
      desc: "Technology / Geospatial Department",
      descBullets: [
        "Manage the Tampa GIS department for a transportation engineering firm.",
        "Develop tools in python and R to analyze large datasets and predict spatial and temporal trends in ArcGIS Pro",
        "Build interactive dashboards and applications in ArcGIS Online and manage geospatial databases and web services"
      ]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Example projects I've worked on",
  projects: [
    {
      image: require("./assets/images/ebthumbnail.png"),
      projectName: "Predictive Analysis of Crash Incidents in Hillsborough County",
      projectDesc: `This repository analyzes crash data in Hillsborough County, Florida and uses various machine 
      learning models to predict the probablity of an incapacitating event occuring. The training data was obtained from 
      Signal Four Analytics and filtered to all crash events in Hillsborough County in 2023.`,
      footerLink: [
        {
          name: "Report",
          url: "https://github.com/bofethe/signal-four/blob/main/PredictiveCrashAnalysis-report.pdf"
        },
        {
          name: 'Dashboard',
          url: 'https://experience.arcgis.com/experience/131319e3bac346e8a3054e43ba6ee53b'
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/yahtzee.jpeg"),
      projectName: "Yahtzee Simulation",
      projectDesc: "This simulates the game of Yahtzee and tests various strategies by running Monte Carlo simulations.",
      footerLink: [
        {
          name: "Report",
          url: "https://github.com/bofethe/yahtzee/blob/master/ISYE6644_FinalProject_FetheBo.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Tutorials",
  subtitle:
    "I love to share my knowledge by creating tutorial Jupyter Notebooks",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/bofethe/python-training/blob/master/Pandas/pandasTutorial.ipynb",
      title: "Pandas",
      description:
        `Pandas provides efficient data structures through DataFrames and Series, which are designed to make working with 
        structured data (like tables) intuitive and efficient.`
    },
    {
      url: "https://github.com/bofethe/python-training/blob/master/sqlite3/sqlite3.ipynb",
      title: "SQLite3",
      description:
        `SQLite is particularly popular in environments where a full-scale 
        database might be unnecessary, such as small to medium-sized applications or local storage in web browsers.`
    },
    {
      url: "https://github.com/bofethe/python-training/blob/master/GIS-intro/Demo.ipynb",
      title: "Python in GIS",
      description:
        `The arcpy library can be used to run geoprocessing tools as you would in their desktop environment, while the arcgis library
        can connect to ArcGIS Online or ArcGIS Enterprise for cloud-based tasks.`
    },
    {
      url: "https://github.com/bofethe/python-training/tree/master/Logging",
      title: "Logging",
      description:
        `Logs are critical for production apps and can capture detailed info about what is happening at different stages of your app 
        and can be stored in files and displayed on the console.`
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Reach out to discuss a project or freelance work",
  number: "865-599-0990",
  email_address: "bofethe@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
