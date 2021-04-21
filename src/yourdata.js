// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

//Image Files
import myPicture from "./images/me_in_italy.jpg"
import fud from "./images/fud.png"
import gpt2 from "./images/gpt2.png"
import hiphop from "./images/hiphop.jpeg"
import social from "./images/social.jpeg"

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
    "Glad to see that you're here! My name is Rakesh Senthilvelan, from the small town of Hillsborough, New Jersey. I'm a current Data Science student at the University of California, San Diego. I hope this page can give you a bit more information about who I am and what I do.",

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
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    myPicture,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",


  contactSubHeading: "Feel free to reach out or check out my Github and LinkedIn!",
  social: [
    { img: githubIcon, url: "https://github.com/rakeshsenthil" },
    {img: linkedinIcon, url: "https://www.linkedin.com/in/rakesh-senthilvelan-470a16147/"}    
  ],

}
