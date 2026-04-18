export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    id: "rada",
    name: "Рада Стоянова",
    role: "Founder & Event Curator",
    bio: "Подбира фестивалите и изгражда програми, които съчетават местна кухня, авторски продукти и културна атмосфера.",
  },
  {
    id: "nikola",
    name: "Никола Маринов",
    role: "Partnership Manager",
    bio: "Работи с шеф-готвачи, винени изби и регионални партньори, за да превръща всяко събитие в силно преживяване.",
  },
  {
    id: "teodora",
    name: "Теодора Пенева",
    role: "Experience Designer",
    bio: "Фокусира се върху посетителското изживяване, програмата на място и комуникацията преди и след събитията.",
  },
];
