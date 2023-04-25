let left = document.querySelector('bi-caret-left-fill')[0];
let right = document.querySelector('bi-caret-right-fill')[0];
let cards = document.querySelector('cards')[0];

/*make the card move to the left*/
left.addEventListener('click', ()=> {
    cards.scrollLeft -= 340;
});

/*make the card move to the right*/
right.addEventListener('click', ()=>{ 
    cards.scrollleft += 340;
});

let poster = document.getElementById('Poster');
let title = document.getElementById('title');
let price = document.getElementById('price_cont');

/*when the card is clicked, the poster, title and price will change*/
Array.from(dcoument.getElementByclassName('card')).forEach((ele, i)=> {
    ele.addEventListener('click', ()=> {
        poster.src = ele.getElementByTagName('img')[0].src;
    });
});
        
