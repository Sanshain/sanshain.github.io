export function debounce<Func extends Function>(func: Func, delay: number): Func {

    let inAwaiting = false;

    const wrapper = function () {
        if (!inAwaiting) {

            let result = func(...arguments);

            inAwaiting = true;
            setTimeout(() => inAwaiting = false, delay);

            return result;
        }
    };

    //@ts-expect-error
    return wrapper as Func;
}