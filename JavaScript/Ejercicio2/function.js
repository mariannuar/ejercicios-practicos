/* Author: Mariana Núñez Arguedas 
** Exercise: 2
*/

let getNumber = document.querySelector('#sendNumber');
getNumber.addEventListener('click', calculateFactorial, true);

function calculateFactorial(){

    const number = document.querySelector('#number').value;
    let factorial = 1;

    for(let count = number; count > 0; count--){
        factorial *= count;
    }
    document.querySelector('#factorial').innerHTML = number + "!  =" + factorial;
}
