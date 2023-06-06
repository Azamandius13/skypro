function Game2Fun(){
const arr1 =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
;
const arr2 = arr1.sort(() => Math.random() - 0.5);
alert(arr2);
let anws1 = String(prompt('Чему равнялся первый элемент массива?'));
let anws2 = String(prompt('Чему равнялся последний элемент массива?'));
if( anws1 === arr2[0] && anws2 === arr2[6]){
    alert('Угадал оба, МОЛОДЕЦ!')
}
if( anws1 === arr2[0] && anws2 !== arr2[6]){
    alert('Первый угадал а второй нет!')
}
if( anws1 !== arr2[0] && anws2 === arr2[6]){
    alert('Первый не угадал ,а второй угадал!')
}
if( anws1 !== arr2[0] && anws2 !== arr2[6]){
    alert('Ничего не угадал!')
}
}


function Fun8task() {
    let mounth = prompt('Введите число от 1 до 12');
    if ( mounth <= 2 || mounth === 12 ) {
        alert('Зима')
    }
    if ( mounth >= 3 && mounth <= 5 ) {
        alert('Весна')
    }
    if ( mounth >= 6 && mounth <= 8 ) {
        alert('Лето')
    }
    if ( mounth >= 9 && mounth <= 11 ) {
        alert('Осень')
    }
    if ((typeof mounth === 'string')) {
        alert('Нужно ввести число от 1 до 12')
    }
     
}
  