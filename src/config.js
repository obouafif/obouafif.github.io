// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
import newLogo from "./images/mylogo.png"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/mylight.png";
import HeroDark from "./images/mydark.png";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/mylogo.png";


export const githubUsername = "obouafif";

// Navbar Logo image
export const navLogo = newLogo;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills (grouped by category; icons from https://icon-sets.iconify.design/)
 **************************************************************
*/
export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { id: 1, skill: <Icon icon="simple-icons:python" className="display-4" />, name: "Python" },
      { id: 2, skill: <Icon icon="simple-icons:cplusplus" className="display-4" />, name: "C/C++" },
      { id: 3, skill: <Icon icon="logos:matlab" className="display-4" />, name: "Matlab" },
      { id: 4, skill: <Icon icon="file-icons:tex" className="display-4" />, name: "LaTeX" },
    ],
  },
  {
    category: "AI & Vision Frameworks",
    skills: [
      { id: 1, skill: <Icon icon="simple-icons:pytorch" className="display-4" />, name: "PyTorch" },
      { id: 2, skill: <Icon icon="simple-icons:pytorch" className="display-4" />, name: "LibTorch" },
      { id: 3, skill: <Icon icon="simple-icons:tensorflow" className="display-4" />, name: "TensorFlow" },
      { id: 4, skill: <Icon icon="simple-icons:tensorflow" className="display-4" />, name: "TensorFlow.JS" },
      { id: 5, skill: <Icon icon="simple-icons:keras" className="display-4" />, name: "Keras" },
      { id: 6, skill: <Icon icon="simple-icons:scikitlearn" className="display-4" />, name: "Sklearn" },
      { id: 7, skill: <Icon icon="simple-icons:opencv" className="display-4" />, name: "OpenCV" },
      { id: 8, skill: <Icon icon="simple-icons:opengl" className="display-4" />, name: "OpenGL" },
    ],
  },
  {
    category: "ML Optimization",
    skills: [
      { id: 1, skill: <Icon icon="simple-icons:ray" className="display-4" />, name: "Ray Tune" },
      { id: 2, skill: <Icon icon="simple-icons:pandas" className="display-4" />, name: "Pandas" },
    ],
  },
  {
    category: "Version Control & Deployment",
    skills: [
      { id: 1, skill: <Icon icon="bi:git" className="display-4" />, name: "Git" },
      { id: 2, skill: <Icon icon="simple-icons:dvc" className="display-4" />, name: "DVC" },
      { id: 3, skill: <Icon icon="simple-icons:pytest" className="display-4" />, name: "Pytest" },
      { id: 4, skill: <Icon icon="simple-icons:docker" className="display-4" />, name: "Docker" },
      { id: 5, skill: <Icon icon="simple-icons:poetry" className="display-4" />, name: "Poetry" },
    ],
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];


export const formspreeUrl = "https://formspree.io/f/xojjerap";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
