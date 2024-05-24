import PizzaImage from './best-pizza-los-angeles-kyle-moreno.jpg'
import './style.css'

export default function Menu(){
    const element = document.createElement('div');
    
    // Create title
    const title = document.createElement('h1');
    title.innerHTML = "Current Available Menu";

    element.appendChild(title);

    // Creating menu with images (tmp images)
    const menu = document.createElement('div'); 
    menu.classList.add('menuBar');

    const pizzaImage1 = new Image();
    pizzaImage1.src = PizzaImage;
    pizzaImage1.width = "200";
    pizzaImage1.height = "200";
    pizzaImage1.classList.add('menuItem');

    menu.appendChild(pizzaImage1);

    const pizzaImage2 = new Image();
    pizzaImage2.src = PizzaImage;
    pizzaImage2.width = "200";
    pizzaImage2.height = "200";
    pizzaImage2.classList.add('menuItem');

    menu.appendChild(pizzaImage2);

    const pizzaImage3 = new Image();
    pizzaImage3.src = PizzaImage;
    pizzaImage3.width = "200";
    pizzaImage3.height = "200";
    pizzaImage3.classList.add('menuItem');

    menu.appendChild(pizzaImage3); 

    const pizzaImage4 = new Image();
    pizzaImage4.src = PizzaImage;
    pizzaImage4.width = "200";
    pizzaImage4.height = "200";
    pizzaImage4.classList.add('menuItem');

    menu.appendChild(pizzaImage4); 

    element.appendChild(menu);
    
    return element;
}