import About from "./components/about/page";
import Home from "./components/home/page";
import Menu from "./components/menu/page";

function App(){

    function cleanDocumentPage(){
        const page = document.querySelector(".page");
        const pageContent = document.querySelector(".pageContent");
        page.removeChild(pageContent);
    }

    function loadPage(pageName){
        const page = document.querySelector(".page");
     
        if(pageName === "about"){
            const currentPage = About();
            currentPage.className="pageContent";
            page.appendChild(currentPage);
        }
        else if(pageName === "menu"){
            const currentPage = Menu();
            currentPage.className="pageContent";
            page.appendChild(currentPage);
        }
        else{
            const currentPage = Home();
            currentPage.className="pageContent";
            page.appendChild(currentPage);
        }

    }

    const homeButton = document.querySelector('.homeButton');

    homeButton.addEventListener('click', () => {
        cleanDocumentPage();
        loadPage("home");
    });

    const aboutButton = document.querySelector('.aboutButton');

    aboutButton.addEventListener('click', () => {
        cleanDocumentPage();
        loadPage("about");
    });

    const menuButton = document.querySelector('.menuButton');

    menuButton.addEventListener('click', () => {
        cleanDocumentPage();
        loadPage("menu");
    });

    const page = document.createElement('div');
    page.className="page";

    const homePage = Home();
    homePage.className="pageContent";

    page.appendChild(homePage);

    return page;
}

const content = document.querySelector('#content')
content.appendChild(App());