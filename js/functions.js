const lineLenght = (text, lengthNumber) => text.length <= lengthNumber;

// Cтрока короче 20 символов
lineLenght('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
lineLenght('проверяемая строка', 18); // true
// Строка длиннее 10 символов
lineLenght('проверяемая строка', 10); // false

const isPolyndrom = (text) => {
  text = text.replaceAll(' ', '').toUpperCase();
  let reverseText = '';

  for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }

  return reverseText === text;
};

// Строка является палиндромом
isPolyndrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPolyndrom('ДовОд'); // true
// Это не палиндром
isPolyndrom('Кекс'); // false
// Это палиндром
isPolyndrom('Лёша на полке клопа нашёл '); // true

const getNumberOfString = (text) => {
  text = text.toString().replaceAll(' ', '');
  let number = '';
  for (let i = 0; i < text.length; i++) {
    if (!Number.isNaN(parseInt(text[i], 10))) {
      number += text[i];
    }
  }

  number = parseInt(number, 10);

  return number;
};

getNumberOfString('2023 год'); // 2023
getNumberOfString('ECMAScript 2022'); // 2022
getNumberOfString('1 кефир, 0.5 батона'); // 105
getNumberOfString('агент 007'); // 7
getNumberOfString('а я томат'); // NaN
getNumberOfString(2023); // 2023
getNumberOfString(-1); // 1
getNumberOfString(1.5); // 15

/* Функция, которая принимает время начала и конца рабочего дня,
  время старта и продолжительность встречи в минутах и возвращает true,
  если встреча не выходит за рамки рабочего дня, и false, если выходит.
*/

const getConvertToMinutes = (time) => {
  const result =
    parseInt(time.split(':')[0], 10) * 60 + parseInt(time.split(':')[1], 10);
  return result;
};

const isMeetingBeyondLimit = (
  startWork,
  endWork,
  startMeeting,
  durationMeeting
) => {
  const startWorkInMinutes = getConvertToMinutes(startWork);
  const endWorkInMinutes = getConvertToMinutes(endWork);
  const startMeetingInMinutes = getConvertToMinutes(startMeeting);

  return (
    startWorkInMinutes <= startMeetingInMinutes + durationMeeting &&
    endWorkInMinutes >= startMeetingInMinutes + durationMeeting
  );
};

isMeetingBeyondLimit('08:00', '17:30', '14:00', 90);
// console.log(isMeetingBeyondLimit('08:00', '17:30', '14:00', 90));
// console.log(isMeetingBeyondLimit('8:0', '10:0', '8:0', 120));
// console.log(isMeetingBeyondLimit('08:00', '14:30', '14:00', 90));
// console.log(isMeetingBeyondLimit('14:00', '17:30', '08:0', 90));
// console.log(isMeetingBeyondLimit('8:00', '17:30', '08:00', 900));
