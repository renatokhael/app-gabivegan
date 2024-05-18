const MENU = [
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "X-React",
        price: 24.9,
        description:
          "Um hamburger vegano tão bonito que me deu fome enquanto eu fazia esse layout para o projeto...",
        cover: require("../../assets/products/cover/01.jpg"),
        thumbnail: require("../../assets/products/thumbnail/01.jpg"),
        ingredients: [
          "Pão brioche vegano;",
          "2x hambúrgueres de grão-de-bico de 80g;",
          "Queijo cheddar vegano;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho vegano da casa;",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "X-JavaScript",
        price: 34.9,
        description:
          "Os ingredientes desse hambúrguer vegano mudam toda semana, então você sempre terá uma surpresa...",
        cover: require("../../assets/products/cover/02.jpg"),
        thumbnail: require("../../assets/products/thumbnail/02.jpg"),
        ingredients: [
          "Pão brioche vegano;",
          "2x hambúrgueres de lentilha de 80g;",
          "Queijo cheddar vegano;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho vegano da casa;",
        ],
      },
      {
        id: "3",
        title: "X-Cobol",
        price: 32.7,
        description:
          "Aquele hambúrguer vegano que não podemos tirar do cardápio devido aos clientes mais antigos da hamburgueria...",
        cover: require("../../assets/products/cover/03.jpg"),
        thumbnail: require("../../assets/products/thumbnail/03.jpg"),
        ingredients: [
          "Pão brioche vegano;",
          "2x hambúrgueres de feijão preto de 80g;",
          "Queijo cheddar vegano;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho vegano da casa;",
        ],
      },
      {
        id: "4",
        title: "X-Tailwind",
        price: 29.9,
        description:
          "Aquele que você não gosta de primeira, mas depois fica viciado e não consegue mais largar...",
        cover: require("../../assets/products/cover/04.jpg"),
        thumbnail: require("../../assets/products/thumbnail/04.jpg"),
        ingredients: [
          "Pão brioche vegano;",
          "2x hambúrgueres de quinoa de 80g;",
          "Queijo cheddar vegano;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho vegano da casa;",
        ],
      },
    ],
  },
  {
    title: "Sobremesa",
    data: [
      {
        id: "5",
        title: "Sorvete com Brownie",
        price: 18.9,
        description:
          "Uma sobremesa vegana deliciosa para saborear. Escolha o sorvete vegano e a calda que desejar...",
        cover: require("../../assets/products/cover/05.jpg"),
        thumbnail: require("../../assets/products/thumbnail/05.jpg"),
        ingredients: [
          "1x Brownie vegano;",
          "1x Bola de sorvete vegano a sua escolha",
          "Escolha sua calda vegana;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 22.9,
        description:
          "Um delicioso Cupcake vegano para adoçar. Escolha o sabor que você gosta...",
        cover: require("../../assets/products/cover/06.jpg"),
        thumbnail: require("../../assets/products/thumbnail/06.jpg"),
        ingredients: ["Escolha o sabor vegano;", "Chantilly vegano;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Hmmm, coquinha!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/06.jpg"),
        cover: require("../../assets/products/cover/06.jpg"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche vegano...",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
