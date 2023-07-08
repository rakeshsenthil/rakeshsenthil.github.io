// Skills Icons
import htmlIcon from "./images/html.svg"
// import cssIcon from "./images/css.svg"
// import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
// import designIcon from "./images/design.svg"
// import codeIcon from "./images/code.svg"

import pythonIcon from "./images/python.png"
import RIcon from "./images/R_logo.png"
import javaIcon from "/public/static/java-3d380d66f1701ab615ea3c159a610456.png"
// import javaIcon from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pikpng.com%2Fpngvi%2FiRbRmiw_datei-java-logo-svg-java-logo-svg-clipart%2F&psig=AOvVaw0qPCImkl_ZkIPlETwBLg2s&ust=1621211145884000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNji5aX4zPACFQAAAAAdAAAAABAI"


import postgresIcon from "./images/postgres.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

//Image Files
import myPicture from "./images/me_in_italy.jpg"
import fud from "./images/fud.png"
import gpt2 from "./images/gpt2.png"
import hiphop from "./images/hiphop.jpeg"
import social from "./images/social.jpeg"
import yelp from "./images/yelp.png"
import movie from "./images/movie.jpeg"
import ezStudy from "./images/ezstudy.png"
import health from "./images/health.png"
import hmda from "./images/HMDA.png"

export default {
  
  //   Header Details ---------------------
  name: "Rakesh",
  headerTagline: [
    //Line 1 For Header
    "Always Building.",
    //Line 2 For Header
    "Always Searching.",
    //Line 3 For Header
    "Always Learning.",
  ],
  //   Header Paragraph
  headerParagraph:
    "Glad to see that you're here! My name is Rakesh Senthilvelan, from the small town of Hillsborough, New Jersey and a graduate of the University of California, San Diego with a B.S. in Data Science with minors in Business and Cognitive Science. I'm a Staff Data Scientist at Booz Allen Hamilton. I hope this page can give you a bit more information about who I am and what I do.",

  //Contact Email
  contactEmail: "rsenthildev@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "FÜD", //Project Title - Add Your Project Title Here
      para:
        "A food inventory application that you can use with your roommates to save food. Developed using Node.js, Express framework, and MySQL database.", 
      //Project Image - Add Your Project Image Here
      imageSrc:
        fud,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/kentthai/food-inventory-webapp",
    },
    {
      title: "Analyzing Inequities in Housing Mortgage Data",
      para: "Analyzed whether there were significant inequities in lending outcomes based on race using Pandas, Numpy, and Seaborn.",
      imageSrc: hmda,
      url: "https://github.com/rakeshsenthil/DSC167_HMDA_Ethics/blob/main/Paper_1_Final.ipynb",

    },
    {
      title: "GPT-2 Text Generation of Presidential Speeches", 
      para:
        "Used the GPT-2 model along with inputted prefixes such as phrases, sentences, or paragraphs in order to see how each president would complete a certain speech based on its intro", 
      //Project Image - Add Your Project Image Here
      imageSrc:
        gpt2,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/ucsd-dsc-arts/dsc160-final-dsc160_final_group8",
    },
    {
      title: "A Data Science Look into Hip-Hop from 1980 to 2020", 
      para:
        "Determined whether popular terms for classifying hip hop (based on factors like period, geography, and subgenre) are visible in audio features.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        hiphop,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/ucsd-dsc-arts/dsc160-midterm-group-8",
    },
    {
      title: "Social Media Usage by Teenagers", //Project Title - Add Your Project Title Here
      para:
        "A data visualization dashboard that allows you to customize what demographics and filters you want to use in order to visualize different statistics and learn more about social media usage amongst different groups of teenagers.", 
      //Project Image - Add Your Project Image Here
      imageSrc:
        social,
      url: "https://public.tableau.com/profile/rakesh.senthilvelan#!/vizhome/Dashboard_Visuals/Story1?publish=yes",
    },
    {
      title: "Small Town, Better Yelp Reviews?", 
      para:
        "Could a restaurant’s location, specifically in relation to population, positively or negatively influence Yelp ratings? We find out.", 
      //Project Image - Add Your Project Image Here
      imageSrc:
        yelp,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/rakeshsenthil/YelpReviewsAnalysis/blob/master/FinalProject_group070.ipynb",
    },
    {
      title: "Predicting Movie Ratings Through Popularity and Similarity Recommender Systems",
      para:
        "This project was done to compare between different similarity models and combinations of said models to see which was the best at creating a movie recommendation model.", 
      //Project Image - Add Your Project Image Here
      imageSrc:
        movie,
      //Project URL - Add Your Project Url Here
      url: "https://drive.google.com/file/d/1Vw2QFhUOFUNLEpSo1pmxWyLEl4RozFnk/view",
    },
    {
      title: "EZStudy",
      para: "The main idea is that a student can upload a document of their notes to the website and the website will return study documents that the student can download.",
      imageSrc: ezStudy,
      url: "https://devpost.com/software/ezstudy-1vxmfs"
    },
    {
      title: "Health Readmission Avoidance",
      para: "This tool aims to create a simple and efficient communication between healthcare providers, specialists, doctors, pharmacists, and patients to make sure that it is easy for a patient to follow all the steps after being discharged from the hospital to avoid readmission.",
      imageSrc: health,
      url: "https://healthreadmissionavoidance.appspot.com/"
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My name is Rakesh Senthilvelan and I come from the small town of Hillsborough, New Jersey. Currently, I am working towards a B.S. in Data Science with a minor in Cognitive Science from the University of California, San Diego. I have always had an interest in business, technology, and finding solutions to problems. Pursuing this coursework allows me to engage in all of those plus some more.",
  aboutParaTwo:
    "I like to engage myself in areas that allow me to have a more holistic skillset. At my university, I am involved as the President of the UC San Diego Student Foundation, Co-Director of the SD Hacks Fellowship, and Professional Events Director at the Data Science Student Society. In addition, I work towards responsible and ethical Artificial Intelligence practices through my volunteerism at the Data Science Alliance in San Diego. Professionally, I have been working with health technology startup JoGo Health for the past three years in software devlopment and testing. I am currently working in a Software Engineering Co-op at Cisco where I am focusing on areas such as front end development, data engineering, and RESTful API development.",
  aboutParaThree:
    "My skillset is diverse in technology, business, and leadership areas. I have experience in languages such as Python, R, Java, JavaScript, HTML/CSS, and PostgreSQL. In addition, I am familiar with tools in visualization and UI/UX development such as Tableau and Figma. I am familiar with many libraries within said languages. Beyond this, I have experience in developing startup companies from the ground up through my experience with SD Hacks Fellowship, public relations and philanthropy through the UCSD Student Foundation, and event development and networking through the Data Science Student Society.",
  aboutImage:
    myPicture,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: pythonIcon,
      para:
        "I have experience in Python for use cases such as AI/ML, data analysis, and data visualization using libraries such as Pandas, Numpy, Seaborn, SKLearn, Dask, PySpark, Tensorflow, and PyTorch.",
    },
    {
      img: RIcon,
      para:
        "I have experience using R for cases in data analysis, visualization, statistics, and machine learning.",
    },
    {
      img: jsIcon,
      // img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pikpng.com%2Fpngvi%2FiRbRmiw_datei-java-logo-svg-java-logo-svg-clipart%2F&psig=AOvVaw0qPCImkl_ZkIPlETwBLg2s&ust=1621211145884000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNji5aX4zPACFQAAAAAdAAAAABAI",
      para:
        "I have experience using JavaScript for web development, data visualization, and application development. I have experience with libraries such as Gatsby, React, Node.js, D3.js, and Highcharts.",
    },
    {
      img: htmlIcon,
      para:
        "I have experience using HTML and CSS for web development purposes. I have experience using frameworks including Bootstrap and Pure.css",
    },
    {
      img: javaIcon,
      para:
        "I have experience in using Java for developing Android applications and data structures/algorithms.",
    },
    {
      img: postgresIcon,
      para:
        "I have experience using PostgreSQL for data engineering purposes in building databases, querying databases, and modifying databases.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Fun Facts",
  promotionPara:
    "A little bit about myself: I am very interested in cars, fashion, gear, and travel. I like to involve myself with local car culture whenever I can, explore new and vintage fashions, check out new gear for, well, just about everything, and travel to new places when I can. Feel free to reach out to me if you ever just want to chat!",


  contactSubHeading: "Feel free to reach out or check out my Github and LinkedIn!",
  social: [
    { img: githubIcon, url: "https://github.com/rakeshsenthil" },
    {img: linkedinIcon, url: "https://www.linkedin.com/in/rakesh-senthilvelan-470a16147/"}    
  ],

}
