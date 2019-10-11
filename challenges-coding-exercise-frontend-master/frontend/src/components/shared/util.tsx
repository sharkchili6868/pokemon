export const elementGenerator = (count: number, element: any) => {
    const divs: any[] = [];
    for(let x = 1; x <= count; x++){
        divs.push(element);
    }
    return divs;
}

export const debounce = (func:any, wait: any) => {
    let timeout; 
    return (...args: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    }
}