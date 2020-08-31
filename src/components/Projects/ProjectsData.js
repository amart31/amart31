import appDevImg from "../../img/appDev.svg";
import businessImg from "../../img/business.svg";
import codingImg from "../../img/coding.svg";
import DigMarketingImg from "../../img/marketing.svg";

export const ProjectsData = [
  {
    title: "ARMA Seda Pega Application",
    text:
      "Pega application for tracking Near Earth Objects (NEOs). Configured an Enterprise Class Structure to implement rule reusability and enforce best practices. Established SLAs in order to ensure timely completion of assignments. Added REST-Connectors and Service-REST rules to consume and expose application data. Modified UI rules harness, skin, sections to ensure the user experience is maximized and worker efficiency increased.",
    imgSrc: appDevImg,
    imgSrcM: appDevImg,
    imgAlt: "ARMA Seda Pega life cycle screenshot",
    link: "#",
    btnTxt: "Coming Soon",
  },
  {
    title: "Tourist Car Rental Pega App",
    text:
      "Designed a Case life cycle to manage the car rental case type for Tourist Car Rental. Configured and added Data Types to the Pega System of Record in order to store records properly. Created Report Definitions and reports to help management and stakeholders visualize business and process metrics. Routed assignments to the most appropriate parties to ensure accounts and reservations are approved or denied in a timely fashion.",
    imgSrc: businessImg,
    imgSrcM: businessImg,
    imgAlt: "Tourist Car Rental Pega Project introduction",
    link: "#",
    btnTxt: "Coming Soon",
  },
  {
    title: "TRMS Java Full Stack Project",
    text:
      "Reimbursement System built with Java, PostgresSQL, AWS, and more to help manage the process of reimbursing employees for expenses. All employees can login, submit requests, and view past tickets and pending requests. Created a DAO pattern to manage access to the database and created views and actions to represent each employees category needs. Used AJAX calls to request and submit data from the to the backend.",
    imgSrc: codingImg,
    imgSrcM: codingImg,
    imgAlt: "TRMS Java Project introduction image",
    link: "https://github.com/amart31/NewTrms",
    btnTxt: "See more",
  },
  {
    title: "React-Closet Full Stack Project",
    text:
      "React project created with the goal of being the internet home of a hotel chain. This project has a ReactJS frontend and uses Contentful for content management.",
    imgSrc: DigMarketingImg,
    imgSrcM: DigMarketingImg,
    imgAlt: "React Resort Project homepage screenshoot",
    link: "https://github.com/amart31/final-project-frontend",
    btnTxt: "See more",
  },
];
