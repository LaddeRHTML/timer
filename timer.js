let deadLine = 'ваша дата';

function getTimeRemaining(endtime) { /* произвольное название фукнции */
    let t = Date.parse(endtime) - Date.parse(new Date()), /* отнимаем от взятой даты(та что в переменной), ту которая стоит у пользователя при заходе на страницу */
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));

    return { /* вывод полученных значений и завершение функции */
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id, endtime) { /* произвольная функция */
    let timer = document.getElementById(id), /* значения из вашей вертски */
        hours = timer.querySelector('название вашей секции с часами'),
        minutes = timer.querySelector('название вашей секции с минутами'),
        seconds = timer.querySelector('название вашей секции с секундами'),
        timeInterval = setInterval(updateClock, 1000);  /* запускает функцию гетклок */ 
        
    function updateClock() { /* функция по обновлению времени  */
        let t = getTimeRemaining(endtime);

        function  plusZero(chislo) { /* функция для постановки 0 перед одиночиным цифрами */
            if (chislo <= 9) {
                return '0' + chislo;
            } else 
                return chislo;
            }
        hours.textContent = plusZero(t.hours); /* помещает данный из return в верстку */
        minutes.textContent = plusZero(t.minutes); /* помещает данный из return в верстку */ 
        seconds.textContent = plusZero(t.seconds); /* помещает данный из return в верстку */

        if (t.total <= 0) { /* условие, при котором все отрицательные значения в таймере принимают вид нуля */
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        } 
    }
}
setClock('timer', deadLine);