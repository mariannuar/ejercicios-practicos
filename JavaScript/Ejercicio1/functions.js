/* Author: Mariana Núñez Arguedas 
** Exercise: 1
*/

//FIRST ARRAY
const firstArray = [2, 3, 4, 6];
let answerFirstArray = [];
let firstArrayProduct;

function firstArrayFunction(firstArray){

    for(let counts = 0; counts < firstArray.length; counts++){
        firstArrayProduct = 1;

        for(let index = 0; index < firstArray.length; index++){
            if(counts !== index){ 
                firstArrayProduct *= firstArray[index];
            }
        }

        answerFirstArray.push(firstArrayProduct);
    }
    return answerFirstArray;
}

const firstArrayContainer = document.querySelector('#firstArray');
firstArrayContainer.innerHTML = '[' + firstArrayFunction(firstArray) + ']';
document.querySelector('#firstTitle').innerHTML = '[' + firstArray + ']';


//SECOND ARRAY
const secondArray = [123, 67, 890, 4];
let answerSecondArray = [];
let secondArrayProduct;

function secondArrayFunction(secondArray){

    for(let counts = 0; counts < secondArray.length; counts++){
        secondArrayProduct = 1;

        for(let index = 0; index < secondArray.length; index++){
            if(counts !== index){ 
                secondArrayProduct *= secondArray[index];
            }
        }

        answerSecondArray.push(secondArrayProduct);
    }
    return answerSecondArray;
}

const secondArrayContainer = document.querySelector('#secondArray');
secondArrayContainer.innerHTML = '[' + secondArrayFunction(secondArray) + ']';
document.querySelector('#secondTitle').innerHTML = '[' + secondArray + ']';


//THIRD ARRAY
const thirdArray = [2, 3, 7, 9, 4, 5, 6, 9, 12];
let answerThirdArray = [];
let thirdArrayProduct;

function thirdArrayFunction(thirdArray){

    for(let counts = 0; counts < thirdArray.length; counts++){
        thirdArrayProduct = 1;

        for(let index = 0; index < thirdArray.length; index++){
            if(counts !== index){ 
                thirdArrayProduct *= thirdArray[index];
            }
        }

        answerThirdArray.push(thirdArrayProduct);
    }
    return answerThirdArray;
}

const thirdArrayContainer = document.querySelector('#thirdArray');
thirdArrayContainer.innerHTML = '[' + thirdArrayFunction(thirdArray) + ']';
document.querySelector('#thirdTitle').innerHTML = '[' + thirdArray + ']';