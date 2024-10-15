declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

// that's bug:

// interface CSSStyleDeclaration{
//     boxShadow: string | undefined
// }