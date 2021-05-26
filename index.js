
window.onload = function() {
    document.getElementById ("button_id").onclick = sending; //на клик добавляем обработчик
};

function sending() {
    let text_mess = document.getElementById ("input_message").value; //получаем сообщение из инпата
    // console.log(text_mess);
    let divElement = createNewDivElement(); //вызов функции создания нового дивака
    createNewDivResponderElement(); //вызов ф-и созд ответа чатбота
    createNewAdvertisementElement(); //вызов реклабных сообщений (поставил рандомное срабатывание и таймер)
    divElement.textContent = text_mess;//сообщение записываем
    document.getElementById ("input_message").value = "";//сообщение обнуляем
    return text_mess;
}

function deleting_message () {
    let delete_message = document.getElementsByClassName("sender_message_style"); //поиск элементов, созданных с вкл чекбоксом
    let lengh_test = delete_message.length; //поиск последнего элемента. Просто ремув почему-то не работал, пришлось искать такое решение
    while ((el = delete_message[lengh_test-1])) { //счётчик для определения последнего эл-та
        el.parentNode.removeChild(el);
      }
}
function createNewDivElement() {
    let body = document.body;
    let divElement = document.createElement('div'); //создание див
    let mess_deleting = document.getElementById ("check_delete");
    if (mess_deleting.checked) { //проверка на чекбокс
        // console.log("checked");
        setTimeout(deleting_message, 5000); //таймаут на ф-ю удаления
	}
	else {
		// console.log("unchecked");
    }
    divElement.classList.add('sender_message_style'); // добавления класса к диваку
    body.appendChild(divElement);
    return divElement;
}
function createNewDivResponderElement() { //ф-я создания дивака для чатбота
    if ( responder_answer(5) > 2) { // специально добавил рандом, чтобы не всегда срабатывала, для более "человечного" поведения
        let Responder_body = document.body;
        let div_Responder_Element = document.createElement('div');
        div_Responder_Element.classList.add('responder_message_style');
        div_Responder_Element.textContent = random_responder_message(); // выбор ответа из пула, рандомно
        Responder_body.appendChild(div_Responder_Element); 
        return div_Responder_Element;
    }
    
}
function createNewAdvertisementElement() { // функция для рекламных всплывашек через алерт
    if ( responder_answer(5) > 3) { // Включается рандоmно, вероятность должна быть меньше, чем ответ чатбокса 
       setTimeout(ad_message, 2000); // таймаут тоже есть
    }
}

function ad_message(){ 
    let temp = random_advertisement_message(); //выбор из пула рандомного ответа
    alert(temp);
}

function responder_answer(max) { // Рандомизатор вероятности ответа
    return Math.floor(Math.random() * max);
  }
  

function random_responder_message() { //Пул для рандомных ответов чатбота
    let pull = ["Что ты за белиберду пишешь?",
    "Я не понимаю, повтори пожалуйста",
    "Ну сколько можно?!?",
    "Пожалуйста, не пиши мне.",
    "Что, опять????",
    "Ух... Я тебя не понимаю. ",
    "Не пиши в этом месенджере, тут пного рекламы(((. ",
    "Ты что, пъяный? "]
    let random = Math.floor(Math.random() * pull.length);
    return pull[random];
}

function random_advertisement_message() { //Пул для рандомных ответов
    let pull = ["Лучшие девушки вашего города находятся прямо...",
    "Никто не знал! Но всего 2 ложки простой соды смогут увеличить...",
    "Учёные обнаружили новую мутацию COVID-19. Для того, чтобы уберегти себя всего лишь необходимо...",
    "Скажи НЕТ бедности! самый быстрый способ заработать не выходя из дома заключается в...",
    "Эту загадку смог решить только Эйнштейн! Дано: 4 л. пива, горсть солёного арахиса и ...",
    "Вас достала реклама? Хотите её отключить? Для этого необходимо всего..."]
    let random = Math.floor(Math.random() * pull.length);
    return pull[random];
}
