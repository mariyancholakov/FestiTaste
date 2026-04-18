export type Offer = {
  id: string;
  title: string;
  summary: string;
  details: string;
  priceLabel: string;
  validity: string;
  highlight?: boolean;
};

export const offers: Offer[] = [
  {
    id: "early-bird",
    title: "Early Bird",
    summary: "30% отстъпка за ранни резервации",
    details:
      "Идеална опция за посетители, които искат да гарантират мястото си и да спестят от билета.",
    priceLabel: "-30%",
    validity: "Валидна до 31 май",
    highlight: true,
  },
  {
    id: "family-package",
    title: "Семеен пакет",
    summary: "4 билета на цената на 3",
    details:
      "Подходящо за семейни уикенди с повече дегустации, детски зони и споделени моменти.",
    priceLabel: "Спести 1 билет",
    validity: "Ограничени количества",
  },
  {
    id: "vip-tasting",
    title: "VIP дегустация",
    summary: "Всичко включено с премиум достъп",
    details:
      "Специални зони, среща с шеф-готвачи и селекция от напитки и дегустации за целия ден.",
    priceLabel: "120 лв",
    validity: "По предварителна резервация",
  },
  {
    id: "group-offer",
    title: "Групова оферта",
    summary: "20% отстъпка за 10+ човека",
    details:
      "Добър избор за екипни събития, приятелски компании и организирани групови посещения.",
    priceLabel: "-20%",
    validity: "За групи от 10 души",
  },
  {
    id: "weekend-gourmet-package",
    title: "Уикенд гурме пакет",
    summary: "2 нощувки + фестивал",
    details:
      "Комбинира участие във фестивал с хотелско настаняване и подбрана гурме програма.",
    priceLabel: "От 180 лв",
    validity: "Важи за избрани дати",
  },
];
