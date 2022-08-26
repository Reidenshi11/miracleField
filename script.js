const   WORD_BLOCK = document.querySelector('.word');
const   WORD_BLOCK_ALL = document.querySelectorAll('.word');
const   WORD_CHOISE_BLOCK_ALL = document.querySelectorAll('.choise');
const   WORD_LETTER_BLOCK_ALL = document.querySelectorAll('.letter');
const   RIDDLE_TEXT = document.querySelector('.riddle');
const   SIGN = ['1','2','3','4','5','6','7','8','9','0','Ё','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю',' '];
const   MIRACLE = [
        {word: 'Спартак Москва123', riddle: ` Какая футбольная команда в начале своего создания носила название 'Пищевик'? `},
        {word: 'Спартак Москва', riddle: ` Какая футбольная команда в начале своего создания носила название 'Пищевик'? `},
        {word: 'Реал Мадрид', riddle: ` Какая футбольная команда выйграла ЛЧ 2022г ? `},
        {word: 'Катар', riddle: ` В какой стране, проходил финал клубного чепионата мира 2019 ?`},
        {word: 'Ливерпуль', riddle: ` Кто стал победителем ФИФА 2019 ?`},
        {word: 'Алиссон', riddle: ` Кто признан лучшим вратарем в 2019 году по версии ФИФА ?`},
        {word: 'Криштиану Роналду', riddle: ` Кто является лучшим бомбардиров за всю историю сборной Португалии ?`},
        {word: 'Англия', riddle: ` В какой стране появился и начал развиваться футбол ?`},
        {word: 'Уругвай', riddle: ` В какой стране впервые проходил Кубок мира ФИФА ?`},
        {word: 'Автогол', riddle: ` Как называется гол, который футболист забил в свои ворота ?`},
        {word: 'Бразилия', riddle: ` Сборная какой страны чаще всего становилось победителм чемпионатов мира ?`},
        {word: 'Хет-рик', riddle: ` Что оформил игрок, забивший 3 мяча за один матч ?`},
        {word: 'Реал Мадрид', riddle: ` Какой футбольный клуб в 20 веке 5 раз подряд становился победителем Лиги Чемпионов ?`},
        {word: 'Халк', riddle: ` Кто является автором самого сильного удара в футболе, согласно данным на начало 2020г ?`},
        {word: 'Пенальти', riddle: ` Как называется штрафной удар, который совершают по воротам на расстоянии 11 метров ?`},
        {word: 'Эвертон', riddle: ` Какой клуб записал больше всего поражений в истории АПЛ ?`}
]
const BTN_RESET = document.getElementById('btn_reset');


console.log('WORD_BLOCK_ALL:', WORD_BLOCK_ALL);
console.log('WORD_BLOCK_ALL:', WORD_BLOCK_ALL.length);


console.log(MIRACLE[0].word.length);
console.log(MIRACLE[0].riddle.length);
console.log(MIRACLE[0].word[0]);
let numberLetter = +(MIRACLE[0].word.length);
let numberLetterRiddle = +(MIRACLE[0].riddle.length);
let currentWordRiddle = [];
// let currentTextRiddle = '';
let currentTextRiddle = '';
let textRiddle = [];
let right = 0;


// BTN_RESET.onclick

/////////////Функция Рандома/////////////////////////////////////////////////

function mathrandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    mathRandom = Math.floor(Math.random()*(max-min+1)+min);
    return mathRandom;
}

//////////////////////////////////////////////////////////////////////


function funcRandomRiddle() {
let randRiddle = mathrandom(1, 15);
let numberLetter = +(MIRACLE[randRiddle].word.length);
let numberLetterRiddle = +(MIRACLE[randRiddle].riddle.length);
let numberCircles = 0;
for(j=0; j<numberLetter; j++) {
    currentWordRiddle[j] = MIRACLE[randRiddle].word[j].toUpperCase(); ////toUpperCase - делает все буквы заглавными
    numberCircles++;
}

for(i=0; i<numberLetterRiddle; i++) {
    currentTextRiddle = currentTextRiddle + MIRACLE[randRiddle].riddle[i];
    // let textRiddle = MIRACLE[randRiddle].riddle[i];
    // currentTextRiddle[i] = MIRACLE[randRiddle].riddle[i];
}

removeDom(numberCircles, +(WORD_BLOCK_ALL.length));
}

function removeDom(min, max) {
    for(i=min; i < max; i++) {
        WORD_BLOCK_ALL[i].remove();
    }
}


console.log('currentWordRiddle1:', currentWordRiddle);
console.log('textRiddle:', textRiddle);

function funcRiddle() {
   
    // RIDDLE_TEXT.textContent = `${currentTextRiddle}`;
    OutToScreen(`${currentTextRiddle}`);
    for (j=0; j<numberLetter; j++) {
        // let signScreen = '';
        // currentWordRiddle[j].textContent = SIGN[signValue];
        WORD_BLOCK_ALL[j].textContent = currentWordRiddle[j];
    }
    console.log('currentWordRiddle2:',currentWordRiddle);
    console.log('currentTextRiddle:',currentTextRiddle);
}

   
function invisibleBlock() {
    for(i=0; i< +(WORD_BLOCK_ALL.length); i++)
        if(WORD_BLOCK_ALL[i].textContent == false) {
            WORD_BLOCK_ALL[i].classList.add('invisible');
        }
    
}


console.log(WORD_BLOCK);
console.log(typeof (WORD_BLOCK_ALL));
console.log(WORD_BLOCK_ALL);
console.log(WORD_LETTER_BLOCK_ALL);
console.log(WORD_CHOISE_BLOCK_ALL);
console.log(SIGN);
console.log('WORD_BLOCK_ALL.length:', WORD_BLOCK_ALL.length);


// for (i=0; i<=9; i++) {
//     console.log (`WORD_BLOCK_ALL[${i}]:`, WORD_BLOCK_ALL[i].textContent);
// }


let wordText = document.querySelector('.word_text');
let currentWords = '';
let pushChoise = null;




//////////////Случайные значения ячеек при перезапуске страницы////////////////

function RandomNumber() {
for (i=0; i<=9; i++) {
    let signValue = mathrandom(0,43);
    WORD_BLOCK_ALL[i].textContent = SIGN[signValue];
    console.log (`WORD_BLOCK_ALL[${i}]:`, WORD_BLOCK_ALL[i].textContent);
}
}

// RandomNumber()
console.log

///////////////////////////////////////////////////////////////////////////

//////////Открывание ячеек по нажатию мыши//////////////////////////////////

WORD_BLOCK_ALL.forEach(button => {
    button.addEventListener('click', function(){
        button.classList.add('word_anim');
        let classAss = function removeClass(){
            button.classList.remove('word_fontSize');
        }
        let classAssFuck = function removeClass(){
            button.classList.remove('word_anim');
        }
        let addAss = function removeClass(){
            button.classList.add('word_fontSize');
        }
        setTimeout(classAss, 1600);
        setTimeout(classAssFuck, 1500);
        setTimeout(addAss, 4000);
    })
})

/////////////////////////////////////////////////////////////////////////////
//////////Функция нажатия мышью цифр и заглушка их////////////////////////////

WORD_CHOISE_BLOCK_ALL.forEach(button => {
    button.addEventListener('click', function(){
        button.classList.add('choise_over');
        button.classList.remove('choise');
        pushChoise = button.textContent;
        console.log('pushChoise:', pushChoise);
        console.log(typeof pushChoise);
        pushButton(pushChoise);
    })
})

//////////Функция нажатия мышью букв и заглушка их////////////////////////////

WORD_LETTER_BLOCK_ALL.forEach(button => {
    button.addEventListener('click', function(){
        button.classList.add('letter_over');
        button.classList.remove('letter');
        pushChoise = button.textContent;
        console.log('pushChoise:', pushChoise);
        console.log(typeof pushChoise);
        pushButtonLetter(pushChoise);
        if (right == true) {
            button.classList.add('letter_over_right');
            right = 0;
        }
        else {
            button.classList.add('letter_over_unright');
            right = 0;
        };
    })
})

//////////////////////////////////////////////////////////////////////////////
/////////Делает видимыми цифры в ячейках//////////////////////////////////////

function ASSFUCK(blockWord) {
         blockWord.classList.add('word_anim');
         let classAss = function removeClass(){
             blockWord.classList.remove('word_fontSize');
             blockWord.classList.add('word_over');
         }
         let classAssFuck = function removeClass(){
             blockWord.classList.remove('word_anim');
         }
         setTimeout(classAss, 1600);
         setTimeout(classAssFuck, 1500);
 }

 /////Поиск по значения нажатых цифр в в соответствующих знаяениях ячеек////////

function pushButton(number) {
    for (i=0; i<WORD_BLOCK_ALL.length; i++) {
        if (number === +(WORD_BLOCK_ALL[i].textContent)) {
            ASSFUCK(WORD_BLOCK_ALL[i]);
                }
            }
        }

/////Поиск по значения нажатых букв в соответствующих знаяениях ячеек////////

function pushButtonLetter(letter) {
    for (i=0; i<WORD_BLOCK_ALL.length; i++) {
        if (letter === WORD_BLOCK_ALL[i].textContent) {
            ASSFUCK(WORD_BLOCK_ALL[i]);
            right = 1;
                }
            }
            return right;
        }

////////////////////////////////////////////////////////////////////////////////
///////////////Вывод на экран текста загадки////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

        function OutToScreen(currentArray) {
            
            let numberRepeat = 0;

            function outScreen(blockText) {
                function screenArea() {
                    function write() {
                        for (i=0; i < 1; i++) {
                            RIDDLE_TEXT.textContent = RIDDLE_TEXT.textContent + blockText[numberRepeat];
                        }
                    }
                    write();
                    numberRepeat++;
                }

                let timerWord = setInterval(() => {
                    screenArea();
                    if (numberRepeat >=  +(blockText.length)) {
                        clearInterval(timerWord);
                    }
                }, 70);}

                function stringToArray(stringBlock) {
                    for (i=0; i < +(stringBlock.length); i++) {
                        currentArray[i] = stringBlock[i];
                    }
                }

                stringToArray(currentArray[0]);
                outScreen(currentArray);
            }

            const root = document.documentElement;

            colorFon.onclick = () => {
                root.style.setProperty('--color-fon', `${inputColor.value}`)
            }

            colorArea.onclick = () => {
                root.style.setProperty('--color-area', `${inputColor.value}`)
            }



///////////////////////////////////////////////////////////////////////////////
        
    
        funcRandomRiddle();
        funcRiddle();
        invisibleBlock();
        
