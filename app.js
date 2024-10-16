//@ts-check

//@ts-expect-error
dom = document;
/**
 * @type {(s: string) => HTMLElement}
 */
//@ts-ignore
dom.get = dom.querySelector;

let direct = true;

function turn(event) {        

    if (event.target.tagName == 'IMG') {
        return;
        // document.location.href = 'https://github.com/Sanshain'
    }

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
//@ts-expect-error
container.onclick = turn;