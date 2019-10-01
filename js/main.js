const listOfImgNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const listOfImgTitles = ['Wandering', 'Freedom', 'Walk', 'Green canyon', 'Mountain views', 'Sky is the limit', 'Here comes the sun', 'Live like this', 'Nature lover'];
const listOfImgDates = ['20.05.2017', '16.04.2002', '06.06.1994', '19.09.2003', '07.03.2005', '19.10.2009', '19.08.2006', '11.05.2004', '14.07.2003'];

if (listOfImgNames.length > 0){

    for (let i = 0; i < listOfImgNames.length; i++)
    {
        /*
            masonry class

        */

        //adding div with masonry__item class
        const masonry = document.getElementsByClassName('masonry')[0];
        const masonryItem = document.createElement('div');
        masonryItem.className = "masonry__item";
        masonry.appendChild(masonryItem);

        const item = document.getElementsByClassName('masonry__item')[i];

        //adding img with masonry__img class
        const img = document.createElement('img');
        img.className = "masonry__img"; //w3-image
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
        date.innerText = `${listOfImgDates[i]}`;
        descriptionItem.appendChild(date);
        

        /*
            modal class

        */
        //adding div with modal class to body
        const bodyModal = document.getElementsByTagName('body')[0];
        const modal = document.createElement('div');
        modal.className = "modal";
        bodyModal.appendChild(modal);

        //adding span with modal__close class
        
        const close = document.createElement('span');
        close.className = "modal__close";
        close.innerText = "x";
        modal.appendChild(close);

        //adding img with modal__img class
        const modalImg = document.createElement('img');
        modalImg.className = "modal__img";
        modal.appendChild(modalImg);

        //adding img with modal__img class
        const modalContent = document.createElement('div');
        modalContent.className = "modal__content";
        modal.appendChild(modalContent);

        
        document.getElementsByClassName("masonry__img")[i].onclick = function()
        {
            document.getElementsByClassName("modal")[i].style.display = "block";
            document.getElementsByClassName("modal__img")[i].src = `././img/${i+1}.jpg`;
            document.getElementsByClassName("modal__content")[i].innerHTML = `${listOfImgTitles[i]}, ${listOfImgDates[i]}`;
        }

        //let span = document.getElementsByClassName("modal__close")[0];

        document.getElementsByClassName("modal__close")[i].onclick = function() 
        {
            document.getElementsByClassName("modal")[i].style.display="none";
        }
    }

}  else {
    const noFiles = document.getElementsByClassName('header__title')[0];
    noFiles.innerText = "Gallery is empty, sorry!";
}