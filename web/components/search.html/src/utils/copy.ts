export function copyText(e: KeyboardEnhancedEvent) {
    console.log(e.code)    
    if (e.code == 'Escape' && e.ctrlKey) {
        alert(9)
    }    
}


