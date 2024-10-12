import bloglist from "./blog";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#7b00ff, #000000", //"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mathias",
  middleName: "",
  lastName: "Nguyen-Van-Duong",
  message: " | Student | Rower | Climber | Engineer | Programmer | ",
  icons: [
    // using font awesome icons
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mathias-nguyen-van-duong-a189522aa/",
    },
    {
      image: "fa-github",
      url: "https://github.com/matnvd",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mathiasnvd/",
    },
    {
      image: "fa-youtube",
      url: "https://youtube.com/@mathiasnvd",
    },
    {
      image: "fa-youtube-square", //square-youtube?
      url: "https://youtube.com/@Howdareyou77",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot_launchx_pfp.jpg"),
  imageSize: 375,
  message:
    "3.6 Hi I’m Mathias Nguyen-Van-Duong, a current senior at Ridgewood High School. I'm a rowing, French, and tech enthusiast who has mixed passions in engineering, computer science, and linguistics who happened to have some spare time and wanted to make a cool-looking website.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "matnvd", //i.e."johnDoe12Gh"
  reposLength: 2,
  // specificRepos: ["Row-City", "bluebubbles-app"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  // message: "v1.4 message",
  message: [
    "Ridgewood Crew: Bow/Coxswain",
    "Boy Scouts: Anticipated Eagle Scout/SPL",
    "United States Law Enforcement Coalition: Ambassador",
    "Special Needs Siblings and Friends Club: Co-president",
    "French Club: President",
    "Applied Engineering Club: Co-president/Team Leader",
    "Computer Club: President",
    "National History Day Club: Co-president",
  ],
  images: [
    { 
      img: require("../assets/img/crew_leader.png"), 
      label: "Ridgewood Crew [2021 - Pres.]", 
      paragraph: "Coxing our JV 8+ last year; placed 4th at Garden State Scholastic Championship" 
    },
    { 
      img: require("../assets/img/scout_leader.png"), 
      label: "Boy Scouts [2014 - Pres.]", 
      paragraph: "Working on my Eagle Scout Project for the New Day Program with a couple other scouts" 
    },
    { 
      img: require("../assets/img/uslec_leader.png"), 
      label: "United States Law Enforcement Coalition [2023 - Pres]", 
      paragraph: "Giving a speech as a USLEC Intern where I would lead as an Ambassador later" 
    },
    { 
      img: require("../assets/img/special_needs_leader.png"), 
      label: "Special Needs Siblings and Friends Club [2022 - Pres]", 
      paragraph: "Our World Down Syndrome Day event last year (my poster is in the back!)" 
    },
    { 
      img: require("../assets/img/applied_engineering_leader.png"), 
      label: "Applied Engineering Club [2021 - Pres]", 
      paragraph: "Our NJ STEAM Tank Regionals mentor meeting with my InfoBand team" 
    },
    { 
      img: require("../assets/img/french_club_leader.png"), 
      label: "French Club [2022 - Pres]", 
      paragraph: "Discussing and preparing our field trip to the Montclair State University French Day" 
    },
    { 
      img: require("../assets/img/computer_club_leader.png"), 
      label: "Computer Club [2021 - Pres]", 
      paragraph: "Leading a meeting with a jam about encoding particle physics in a simple Replit" 
    },
    { 
      img: require("../assets/img/nhd_leader.png"), 
      label: "National History Day Club [2023 - Pres]", 
      paragraph: "My NHD YouTube video entry that I would present later at Monmouth University" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'United States Law Enforcement Coalition: Intern | Ambassador',
      companylogo: require('../assets/img/uslec.png'),
      date: 'August 2023 – Present',
    },
    {
      role: 'Mathnasium: Math Instructor',
      companylogo: require('../assets/img/mathnasium.png'),
      date: 'September 2024 – Present',
    },
  ]
}





// Blog SECTION
const blog = {
  show: true,
  heading: "Blogs",
  data: bloglist
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mathiasnvd07@gmail.com",
};

export { about, blog, experiences, getInTouch, leadership, mainBody, navBar, repos, skills };

