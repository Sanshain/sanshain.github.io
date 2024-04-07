dom = document;
dom.get = dom.querySelector;

let direct = true;

function turn(event) {

    var last = dom.get('.mirror>div:not(.reverse)');
    var next = dom.get('.reverse');

    last.style.transform = `perspective(500px) rotateX(${direct ? '' : '-'}90deg)`;
    next.style.transform = `perspective(500px) rotateX(${direct ? '-' : ''}90deg)`;

    setTimeout(() => {

        dom.get('.back').classList.toggle('reverse');
        dom.get('.front').classList.toggle('reverse');

        setTimeout(() => {
            next.style.transform = "rotateX(0deg)";
            direct = !direct;
        }, 50);

    }, 600);

}

const container = document.querySelector('.mirror');
container.onclick = turn;