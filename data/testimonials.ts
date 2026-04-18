export type Testimonial = {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "maria-sofia",
    name: "Мария Николова",
    role: "Кулинарен ентусиаст",
    city: "София",
    quote:
      "Организацията беше отлична, а фестивалът в София ми даде шанс да открия нови вкусове и любими местни брандове.",
    rating: 5,
  },
  {
    id: "ivan-plovdiv",
    name: "Иван Димитров",
    role: "Любител на виното",
    city: "Пловдив",
    quote:
      "Комбинацията от вино, сирена и уютна атмосфера направи уикенда в Пловдив едно от най-приятните ни градски преживявания.",
    rating: 5,
  },
  {
    id: "elena-varna",
    name: "Елена Георгиева",
    role: "Блогър за пътуване",
    city: "Варна",
    quote:
      "Харесва ми, че платформата събира събития от различни градове и ги представя ясно, красиво и много вдъхновяващо.",
    rating: 5,
  },
];
