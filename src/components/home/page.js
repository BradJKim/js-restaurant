import Icon from './best-pizza-los-angeles-kyle-moreno.jpg';

export default function Home(){
    const element = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = "Best Pizza on the internet";
    element.appendChild(header);

    const image = new Image();
    image.src = Icon;
    element.appendChild(image);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "We have good pizza you should get some of our pizza!";
    element.appendChild(paragraph);

    return element;
}