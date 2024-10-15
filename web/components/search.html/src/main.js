//@ts-check

import { render } from 'preact';
import App from './App';

let root = document.querySelector('#search');

if (root) {

    //@ts-expect-error                                                                              App  <- `cann't found name react`
    render(<App onFocus={onFocus} onBlur={onOut} />, root);
}



const mirror = document.querySelector('div.mirror')
const background = document.querySelector('.background');


function onFocus(e) {

    if (mirror && root && background) {

        mirror['style'].opacity = '0.1';
        root['style'].top = '5vh';
        
        background['style'].opacity = '.5';
        background['style'].zIndex = '0';
        background['style'].backgroundColor = '#CFD9EC'; // 'rgb(51, 51, 51)';
    }
    else {
        
        console.warn("Mirror or other block doesn't found")
    }
}

function onOut() {

    if (mirror && root && background) {
        
        mirror['style'].opacity = null;        
        root['style'].top = null;
    
        background['style'].opacity = null;
        background['style'].zIndex = null;
        background['style'].backgroundColor = null;
    }
}