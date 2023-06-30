const NAME = [
  'Анна',
  'Олег',
  'Михаил',
  'Иван',
  'Марина',
  'Наташа',
  'Игорь',
  'Полина',
  'Максим',
  'Григорий',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Я пыталась заниматься йогой, но в позе лотоса уснула.',
  'Я опять съела сладкое. А все потому, что каждую секунду в мире 200 человек празднуют свой день рождения!',
  'Воскресенье — еще один способ сказать: «Какой чудесный день!»',
];

const AVATAR_COUNTER = {
  min: 1,
  max: 6,
};

const LIKES_COUNTER = {
  min: 15,
  max: 200,
};

const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 30;

// Получение случайного числа из диапазона

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного элемента из массива

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

// Получение случайного числа из диапазона без повторения

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateAvatar = () =>
  `img/avatar-${getRandomInteger(AVATAR_COUNTER.min, AVATAR_COUNTER.max)}.svg`;
const generateUrl = () =>
  `photos/${createRandomIdFromRangeGenerator(1, PHOTOS_COUNT)()}.jpg`;

// Получение одного или двух комментариев

const createMessage = () => {
  const messageCount = getRandomInteger(1, 2);
  const message = [];
  for (let i = 1; i <= messageCount; i++) {
    message.push(getRandomArrayElement(COMMENTS));
  }
  return message.join(' ');
};

// объекты массива — список комментариев, оставленных другими пользователями к фотографии

const createCommentPhoto = () => ({
  id: createRandomIdFromRangeGenerator(1, 100)(),
  avatar: generateAvatar(),
  message: createMessage(),
  name: getRandomArrayElement(NAME),
});

// объекты массива — описание фотографии, опубликованной пользователем

const createPhotoDescription = () => ({
  id: createRandomIdFromRangeGenerator(1, PHOTOS_COUNT)(),
  url: generateUrl(),
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_COUNTER.min, LIKES_COUNTER.max),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_COUNT) },
    createCommentPhoto
  ),
});

const photoDescription = Array.from(
  { length: PHOTOS_COUNT },
  createPhotoDescription
);

// eslint-disable-next-line no-console
console.log(photoDescription);
