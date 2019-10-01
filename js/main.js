const listOfImgNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const listOfImgTitles = ['Wędrówka', 'Wolność', 'Spacer', 'Zielony kanion', 'Górskie widoki', 'W chmurach', 'Przbijające słońce', 'Tak mieszkać', 'Natura'];


for (let i = 0; i < listOfImgNames.length; i++)
{
    //adding div with masonry__item class
    const masonry = document.getElementsByClassName('masonry')[0];
    const masonryItem = document.createElement('div');
    masonryItem.className = "masonry__item";
    masonry.appendChild(masonryItem);

    const item = document.getElementsByClassName('masonry__item')[i];

    //adding img with masonry__img class
    const img = document.createElement('img');
    img.className = "masonry__img w3-image";
    img.src = `././img/${i+1}.jpg`;
    item.appendChild(img);
  

    //adding div with masonry__description class
    const description = document.createElement('div');
    description.className = "masonry__description";
    item.appendChild(description);

    const descriptionItem = document.getElementsByClassName('masonry__description')[i];

    //adding p with masonry__description--title class
    const title = document.createElement('p');
    title.className = "masonry__description--title";
    title.innerText = `${listOfImgTitles[i]}`;
    descriptionItem.appendChild(title);

    //adding p with masonry__description--date class
    const date = document.createElement('p');
    date.className = "masonry__description--date";
    date.innerText = `10.02.200${i}`;
    descriptionItem.appendChild(date);
    
}

for (let i = 0; i < listOfImgNames.length; i++)
{
document.getElementsByTagName("img")[i].addEventListener("click", () => {
    console.log("WOOW");
})}



// const showImage = () => {
//     image = document.querySelector(img);    
//     image.addEventListener("click", change);
// }

const change = () => {
    //  let obraz = document.getElementsByTagName(img);
    //  obraz.styles.width = "100%";
    console.log("JUZ");

}