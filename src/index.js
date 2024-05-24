import About from "./components/about/page";
import Home from "./components/home/page";
import Menu from "./components/menu/page";

const pageLoader = (function () {
    let currentPage = "home";

    // maps page names to matching page.js
    const pagesMap = {
        "about": About(),
        "home": Home(),
        "menu": Menu(),
    }

    // Function to remove current page content
    function cleanDocumentPage(){
        const page = document.querySelector(".page");
        const pageContent = document.querySelector(".pageContent");
        page.removeChild(pageContent);
    } 

    // Function to load new page as page content
    function loadPage(pageName){
        const page = document.querySelector(".page");
        const nextPage = pagesMap[pageName];

        if(nextPage != null){
            cleanDocumentPage();
            
            nextPage.className="pageContent";
            
            page.appendChild(nextPage);
            currentPage = pageName;
        }
    }

    return { loadPage };
})();

function App(){

    // page & page content initial setup
    const page = document.createElement('div');
    page.className='page';

    const pageContent = document.createElement('div');
    pageContent.className='pageContent';
    
    page.appendChild(pageContent);

    // Button liseners to remove current page content and replace with new page
    const homeButton = document.querySelector('.homeButton');
    homeButton.addEventListener('click', () => {
        pageLoader.loadPage("home");
    });

    const aboutButton = document.querySelector('.aboutButton');
    aboutButton.addEventListener('click', () => {
        pageLoader.loadPage("about");
    });

    const menuButton = document.querySelector('.menuButton');
    menuButton.addEventListener('click', () => {
        pageLoader.loadPage("menu");
    });

    return page;
}

const content = document.querySelector('#content')
content.appendChild(App());
pageLoader.loadPage("home");