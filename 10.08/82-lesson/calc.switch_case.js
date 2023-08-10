function calculate(num2, num3, conclusion){
    let result

    switch(conclusion){
        case 'add':
            conclusion=num2+num3;
            break;
        case 'sub':
            conclusion=num2-num3;
            break;
    }
    return result
}
const num2 = 2;
const num3 = 3;

const addResult = calculate(num2, num3, 'add');
console.log(`result: ${num2}`);
console.log(`result: ${num3}`);
