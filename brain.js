//files selecter
const ArrayFiles = document.querySelectorAll('.files');



const FilesNames = ["a", "b", "c", "d", "e", "f", "g", "h"];


let filenum = 0;

for (const i of ArrayFiles) {
    //counter
    let counter = 1;
    for (const e of i.children) {
        e.setAttribute("id", FilesNames[filenum] + counter);
        counter++
    }
    filenum++
}


//click on

const allsquare = document.getElementsByClassName("square");

const clickElement = []


for (const i of allsquare) {
    i.addEventListener('click', () => {
        if (clickElement.length > 0) {
            clickElement[0].removeAttribute("style");
            clickElement.length = 0;
        }

        const idElement = i.getAttribute("id");
        const innerHTMl = document.getElementById(idElement).innerHTML;

        if (innerHTMl.includes('black') || innerHTMl.includes('white')) {
            i.style.backgroundColor = 'rgb(223, 223, 48)';
            clickElement.push(i)
        }
    })
}

//Pawn is law

const arrayofpawn = [];

for (const i of FilesNames) {
    arrayofpawn.push(document.getElementById(i + 2))
}
for (const i of FilesNames) {
    arrayofpawn.push(document.getElementById(i + 7))
}

for (const i of arrayofpawn) {
    i.addEventListener('click', () => {
        const clickElement = i;
        const currentId = i.getAttribute('id');
        let change = currentId[1]
        const stepon = []
        
        for (let i = 0; i < 2; i++) {
            change++;
            stepon.push(document.getElementById(currentId[0] + change));
        }

        Hilight(stepon, clickElement)
    });
}

//Hilight dotes & law
const trackdots = [];

const Hilight = function (attachCircles,clickElement) {
    if (trackdots.length != 0) {
        usdodots(trackdots)
    }
    //dots show

    attachCircles.forEach((x) => {
        x.innerHTML = `<div class="dots"> </div>`;
        x.classList.add("flex");
        trackdots.push(x);
        x.addEventListener("click", function () {
            x.innerHTML = clickElement.innerHTML
            clickElement.innerHTML = "";
            const removedots =  attachCircles.filter(el =>el === i)
            usdodots(removedots)
    })

    
});
//dots law
const usdodots = funcrion (dotarray)
    dotarray.forEach((cur) => {
        cur.innerHTML = "";
       cur.classList.remove("flex");
    });
}
}
