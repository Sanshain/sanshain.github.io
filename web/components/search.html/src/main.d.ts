declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

// that's bug:

// interface CSSStyleDeclaration{
//     boxShadow: string | undefined
// }


type RarelyUsedKeys = 'BracketRight' | 'BracketLeft' | 'AltLeft' | 'ControlLeft' | 'AltRight' | 'ControlRight' | 'MetaLeft' | 'MetaRight' | 'KeyZ' | 'KeyA' | 'KeyX';

interface KeyboardEnhancedEvent extends KeyboardEvent {
    code: RarelyUsedKeys | 'KeyC' | 'KeyV' | 'KeyS' | 'Enter' | 'NumpadEnter' | 'Delete' | 'Escape' | 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'Tab' | string & {};
}

interface DOMElement extends Element {
    tagName: Uppercase<keyof HTMLElementTagNameMap> | string & {}
}