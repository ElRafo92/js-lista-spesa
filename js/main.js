const shopList = [   
    'sedano', 
    'carote', 
    'cipolla', 
    'macinato di manzo', 
    'macinato di maiale', 
    'odori', 
    'concentrato di pomodoro', 
    'vino rosso', 
    'brodo vegetale', 
];     


let shopIndex = 0;

let ul = document.querySelector('.lista');




while (shopIndex <= shopList.length - 1) {
    let li = `<li>${shopList[shopIndex]}</li>`;
    ul.innerHTML += li;
    shopIndex ++;
};
