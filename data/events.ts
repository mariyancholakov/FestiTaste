export type EventCategory =
  | "Улична храна"
  | "Вино"
  | "BBQ"
  | "Десерти"
  | "Традиционна кухня"
  | "Гурме";

export type EventMonth = "Юни" | "Юли" | "Август" | "Септември";
export type EventBadge = "Популярно" | "Ново";

export type FestivalEvent = {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  month: EventMonth;
  city: string;
  category: EventCategory;
  priceFrom: number;
  priceLabel: string;
  description: string;
  badge?: EventBadge;
  featured: boolean;
};

export const events: FestivalEvent[] = [
  {
    id: "sofia-street-food-fest",
    title: "Sofia Street Food Fest",
    date: "14 юни 2025",
    isoDate: "2025-06-14",
    month: "Юни",
    city: "София",
    category: "Улична храна",
    priceFrom: 15,
    priceLabel: "От 15 лв",
    description:
      "Ден, посветен на градските вкусове, музика на живо и щандове с авторска улична храна.",
    badge: "Популярно",
    featured: true,
  },
  {
    id: "plovdiv-wine-cheese-weekend",
    title: "Plovdiv Wine & Cheese Weekend",
    date: "28-29 юни 2025",
    isoDate: "2025-06-28",
    month: "Юни",
    city: "Пловдив",
    category: "Вино",
    priceFrom: 35,
    priceLabel: "От 35 лв",
    description:
      "Двудневно събитие с селекция от вина, фермерски сирена и дегустации с местни сомелиери.",
    badge: "Ново",
    featured: true,
  },
  {
    id: "varna-bbq-craft-beer-expo",
    title: "Varna BBQ & Craft Beer Expo",
    date: "12 юли 2025",
    isoDate: "2025-07-12",
    month: "Юли",
    city: "Варна",
    category: "BBQ",
    priceFrom: 25,
    priceLabel: "От 25 лв",
    description:
      "Аромат на пушено месо, демонстрации на грил майстори и български крафт бири до морето.",
    badge: "Популярно",
    featured: true,
  },
  {
    id: "burgas-summer-dessert-festival",
    title: "Burgas Summer Dessert Festival",
    date: "2 август 2025",
    isoDate: "2025-08-02",
    month: "Август",
    city: "Бургас",
    category: "Десерти",
    priceFrom: 18,
    priceLabel: "От 18 лв",
    description:
      "Сладкарски ателиета, летни десерти и авторски сладоледи с морско настроение.",
    badge: "Ново",
    featured: false,
  },
  {
    id: "veliko-tarnovo-traditional-taste-days",
    title: "Veliko Tarnovo Traditional Taste Days",
    date: "23 август 2025",
    isoDate: "2025-08-23",
    month: "Август",
    city: "В. Търново",
    category: "Традиционна кухня",
    priceFrom: 20,
    priceLabel: "От 20 лв",
    description:
      "Фестивал на автентичните рецепти, занаятчийски продукти и кулинарни демонстрации.",
    featured: false,
  },
  {
    id: "bansko-gourmet-escape",
    title: "Bansko Gourmet Escape",
    date: "20 септември 2025",
    isoDate: "2025-09-20",
    month: "Септември",
    city: "Банско",
    category: "Гурме",
    priceFrom: 55,
    priceLabel: "От 55 лв",
    description:
      "Бутиково гурме преживяване с дегустационно меню, гост-шефове и планинска атмосфера.",
    badge: "Популярно",
    featured: false,
  },
];
