import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Магазин", "Mac", "iPhone", "Поддержка"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "A17 Pro.",
      "Чип, меняющий индустрию",
      "Новаторское решение",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Титан", "Сильный. Легкий. Профессиональный."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max обладает",
      "самым большим оптическим зумом",
      "в истории iPhone. Далеко.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Новая кнопка действия", "Что будет делать ваша?"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const footerLinks = [
  "Политика конфиденциальности",
  "Правила пользования",
];