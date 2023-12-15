import project_1 from "../assets/img/project_website_clone_project.png";
import project_2 from "../assets/img/website_clone2.jpg";
import project_3 from "../assets/img/cookbook2.jpg";
import project_4 from "../assets/img/foodiebruv2_1280x720.png";


export const projects = [
    {
        "id":1,
        "name":"Website Clone",
        "subname":"A Front-end only Website Clone",
        "img":project_1,
        "tech":"React,Typescript,CSS",
        "description":"This is a clone from a website. Made with several functional components with the help of react and typescript.",
        "note":"Some of the contents were changed and removed.",
        "github":"https://github.com/ramdio12/website_clone",
        "demo":"https://websiteclone.vercel.app/"
    },{
        "id":2,
        "name":"AlgoNum Guessing Game",
        "subname":"A Number guessing game with Algorand BlockChain",
        "img":project_2,
        "tech": "PyTeal, Algorand Smart Contract, React Js, CSS",
        "description":"This is a project I made during my internship. AlgoNum is a basic number guessing game with Algorand blockchain deployed on tesnet. The mechanics of the game is that you need to guess the number in 6 times (5+1 for mercy bonus). The game will end once you guess it right or when the number of tries runs out. Every time you play, you will be spending at least 0.001 ALGO",
        "note":"To play this you need a pera wallet app installed on the mobile phone . Go to Settings > Developer Settings > Node Settings > Node Settings and choose testnet. Go to Algorand dispenser to fund your account. You can also watch the video demo.",
        "github":"https://github.com/ramdio12/AlgoNum_Guessing_Game",
        "demo":"https://algo-num-guessing-game.vercel.app/",
        "video_demo": "https://drive.google.com/drive/folders/1XQrcQ8OUc7AFSRpUcvwnSEfJecx7543b",
        "backend":"https://github.com/ramdio12/Algonum_Smart_Contract"
    }
    ,{
        "id":3,
        "name":"CookBook Web Application",
        "subname":"Web application with PHP REST API Authentication/CRUD & PDF exporter",
        "img":project_3,
        "tech": "React Typescript,Tailwind CSS,PHP,MySql",
        "description":"This web app I created are for the food enthusiasts or people who wanted to share their recipes online and also for those who wanted to learn how to cook. I think the distinction of this web app from the other recipe website is that it gives everyone an opportunity to share or learn about making dishes (exchanging ideas in other terms ) . Aside from creating recipes, the users can also  download or export the other user's recipes: from web to PDF.",
        "note":" You need to create an account first and log in before entering the main page. I have not subscribed to premium on 000webhost yet, only delete function is unavailable. So I replace it with a function where a user can download or save a recipe in PDF",
        "github":"https://github.com/ramdio12/cookbook",
        "demo":"https://mycookbook.vercel.app/"
    }
    ,{
        "id":4,
        "name":"FoodieBruv",
        "subname":"Landing Page Front End with react-scroll",
        "img":project_4,
        "tech": "React JS,Tailwind CSS",
        "description":"A front end landing page for a restaurant website.It does not only display food menus, but also the contact info of the resto as well. A visitor can navigate from top to bottom with navbar menus or the scroll to top button when going to the home or hero section.",
        "note":" You can freely browse on my website, just click the demo",
        "github":"https://github.com/ramdio12/restaurant_website",
        "demo":"https://foodiebruv.vercel.app/"
    }
]