import library from "../assets/projects_images/library.png";
import cgpa from "../assets/projects_images/cgpa.png";
import party from "../assets/projects_images/party.png";
import movieapp from "../assets/projects_images/movieapp.png";
import covid from "../assets/projects_images/covid.png";
import weshop from "../assets/projects_images/weshop.png";
import diu from "../assets/projects_images/diu.png";
import ainews from "../assets/projects_images/ai-news.png";
import gitSearch from "../assets/projects_images/git-search.png";
import partymanaged from "../assets/projects_images/partymanaged.png";
import mern_ecommerce from "../assets/projects_images/mern_ecommerce.png";
import expense from "../assets/projects_images/expense.png";
import food from "../assets/projects_images/food.png";
import power from "../assets/projects_images/power.png";
import dhakalegal from "../assets/projects_images/dhakalegal.png";
import memegen from "../assets/projects_images/memegen.png";
import contacts from "../assets/projects_images/contacts.png";
import doctor from "../assets/projects_images/doctor.png";
import coursehub from "../assets/projects_images/coursehub.png";
import bmi from "../assets/projects_images/bmi.png";
import pace from "../assets/projects_images/pace.png";
import invoice from "../assets/projects_images/invoice.png";
import breakingbad from "../assets/projects_images/breakingbad.png";
import blog from "../assets/projects_images/blogs.png";
import foodOrder from "../assets/projects_images/foodOrder.png";

const projectsData = [
  {
    id: 1,
    name: "AI News & Weather App",
    image: ainews,
    deployed_url: "https://news360.netlify.app/",
    github_url: "https://github.com/rashedabir/ai-news-app",
    category: ["react.js", "alan"],
  },
  {
    id: 2,
    name: "MERN E-Commerce Site",
    image: mern_ecommerce,
    deployed_url: "https://we-shop-bd.web.app/",
    github_url: "https://github.com/rashedabir/ecommerce_site",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 3,
    name: "E-Learn Site",
    image: coursehub,
    deployed_url: "https://coursehub-bd.web.app/",
    github_url: "https://github.com/rashedabir/Course_Hub_Learning_Site",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 4,
    name: "Expense Tracker",
    image: expense,
    deployed_url: "https://expense-trackerbd.herokuapp.com/",
    github_url: "https://github.com/rashedabir/expense_tracker",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 5,
    name: "invoice manage system",
    image: invoice,
    deployed_url: "https://entkreis.herokuapp.com/",
    github_url: "https://github.com/rashedabir/invoice_management_system",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 6,
    name: "blog site",
    image: blog,
    deployed_url: "https://codeblogs-tech.web.app/",
    github_url: "https://github.com/rashedabir/code_blogs",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 7,
    name: "food order system",
    image: foodOrder,
    deployed_url: "https://hungry-naki.web.app/",
    github_url: "https://github.com/rashedabir/food_order_system",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 8,
    name: "Github User Founder",
    image: gitSearch,
    deployed_url: "https://git-searcher-2155.web.app/git-search",
    github_url: "https://github.com/rashedabir/git-search/tree/master",
    category: ["react.js"],
  },
  {
    id: 9,
    name: "Party Management System",
    image: party,
    deployed_url: "https://party-managed.herokuapp.com/",
    github_url: "https://github.com/rashedabir/party-managed",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 10,
    name: "CGPA Calculator",
    image: cgpa,
    deployed_url: "https://cgpa-find.web.app/",
    github_url: "https://github.com/rashedabir/cgpa_finder",
    category: ["react.js", "redux"],
  },
  {
    id: 11,
    name: "Movie Flex",
    image: movieapp,
    deployed_url: "https://movie-flex-55.web.app/",
    github_url: "https://github.com/rashedabir/movie-flex/tree/main",
    category: ["react.js", "node.js"],
  },
  {
    id: 12,
    name: "Corona Virus Report",
    image: covid,
    deployed_url: "https://rashedabir.github.io/covid19-report/",
    github_url: "https://github.com/rashedabir/covid19-report/tree/master",
    category: ["react.js", "node.js"],
  },
  {
    id: 13,
    name: "Wee Shop",
    image: weshop,
    deployed_url: "https://weeshop.netlify.app/",
    github_url: "https://github.com/rashedabir/we-shop",
    category: ["react.js"],
  },
  {
    id: 14,
    name: "Power-X",
    image: power,
    deployed_url: "https://power-x55.web.app/",
    github_url: "https://github.com/rashedabir/power-x",
    category: ["react.js"],
  },
  {
    id: 15,
    name: "dhaka legal practice",
    image: dhakalegal,
    deployed_url: "https://dhaka-legal.web.app/",
    github_url: "https://github.com/rashedabir/dhaka_legal_practice",
    category: ["react.js", "redux"],
  },
  {
    id: 16,
    name: "DIU academic result",
    image: diu,
    deployed_url: "https://diu-result.web.app/",
    github_url: "https://github.com/rashedabir/diu_academic_result",
    category: ["react.js", "node.js"],
  },
  {
    id: 17,
    name: "meme generator",
    image: memegen,
    deployed_url: "https://meme-gen55.web.app/",
    github_url: "https://github.com/rashedabir/meme_generator",
    category: ["react.js"],
  },
  {
    id: 18,
    name: "Party Managed App",
    image: partymanaged,
    deployed_url: "",
    github_url: "https://github.com/rashedabir/party_managed_APP",
    category: ["java"],
  },
  {
    id: 19,
    name: "contacts book",
    image: contacts,
    deployed_url: "https://contacts-books.web.app/",
    github_url: "https://github.com/rashedabir/contacts_book",
    category: ["react.js", "redux"],
  },
  {
    id: 20,
    name: "Doctors Appoinment",
    image: doctor,
    deployed_url: "https://doctor-vai.web.app/",
    github_url: "https://github.com/rashedabir/doctor_vai",
    category: ["react.js", "redux"],
  },
  {
    id: 21,
    name: "BMI Calculator",
    image: bmi,
    deployed_url: "https://bmi-calculator55.web.app/",
    github_url: "https://github.com/rashedabir/bmi_calculator",
    category: ["react.js"],
  },
  {
    id: 22,
    name: "pace Calculator",
    image: pace,
    deployed_url: "https://space-runner55.web.app/",
    github_url: "https://github.com/rashedabir/smart_pace_calculator",
    category: ["react.js", "redux"],
  },
  {
    id: 23,
    name: "Food Recipe Search",
    image: food,
    deployed_url: "https://find-recipe55.web.app/",
    github_url: "https://github.com/rashedabir/food-recipe-search",
    category: ["react.js"],
  },
  {
    id: 24,
    name: "breaking bad Characters",
    image: breakingbad,
    deployed_url: "https://thebreakingbad-55.netlify.app/",
    github_url: "https://github.com/rashedabir/breaking_bad_characters",
    category: ["react.js"],
  },
  {
    id: 25,
    name: "Library Management System",
    image: library,
    deployed_url: "",
    github_url: "https://github.com/rashedabir/Library_management_oracle",
    category: ["java", "oracle"],
  },
];

export default projectsData;
