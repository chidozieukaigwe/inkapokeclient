type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Picarona",
      desc: "Sushi rice, ahi tuna, cucumber, grilled jalapeños, radish, avocado, wakame seaweed, spicy mayo, sesame seeds, nori.",
      img: "/inkapokepicarona.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Pachamama",
      desc: "Organic quinoa, salmon, edamame, radish, coriander, avocado, Peruvian corn, pachamanca mayo (smoked herbs), sesame seeds, nori.",
      img: "/inkapokepachamama.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Perricholi",
      desc: "Brown sushi rice, ahi tuna, avocado, Peruvian corn, cashew nuts, edamame, wakame seaweed, soja ginger, sesame seeds, nori.",
      img: "/inkapokeperricholi.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Brava",
      desc: "Brown sushi rice, prawns, radish, cucumber, carrot, avocado, crispy onions, spicy mayo, sesame seeds, nori.",
      img: "/inkapokebrava.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Grilled Chicken",
      desc: "Brown sushi rice, grilled chicken, avocado, edamame, sweet corn, spring onion, crispy onions, sriracha mayo, sesame seeds, nori.",
      img: "/inkapokegrilledchicken.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Chinita Brava",
      desc: "Fresh noodles, grilled spicy prawns, asparagus, avocado, cucumber, radish, grilled pineapple, crispy onions, spicy mayo, sesame seeds, nori.",
      img: "/inkapokechinitabrava.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Callao",
      desc: "Sushi rice, ahi tuna + salmon, coriander, radish, edamame, crispy onions, sweet corn, acevichado, sesame seeds, nori.",
      img: "/inkapokecallao.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Salmango",
      desc: "Brown sushi rice, salmon, mango, spring onion, wakame seaweed, crispy onions, Peruvian corn, Sriracha mayo, sesame seeds, nori.",
      img: "/inkapokesalmango.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Saflaquita",
      desc: "Brown sushi rice, tofu, wakame seaweed, carrot, crispy onions, pickled ginger, edamame, soja ginger, sesame seeds, nori.",
      img: "/inkapokesaflaquita.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  
  export const bowls: Products = [
    {
      id: 1,
      title: "Sriracha Tuna",
      desc: "Brown sushi rice, ahi tuna, grilled pineapple, pickled ginger, crispy onions, spring onion, edamame, Sriracha sauce, sesame seeds, nori.",
      img: "/inkapokesrirachatuna.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Sour Maui",
      desc: "Brown sushi rice, salmon, mango, coriander, edamame, radish, crispy onions, yuzu acevichado, sesame seeds, nori.",
      img: "/inkapokesourmaui.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Classic Hawaiian",
      desc: "Sushi rice, ahi tuna, fresh pineapple, crispy onions, spring onion, wakame seaweed, cucumber, spicy soja, sesame seeds, nori.",
      img: "/inkapokeclassichawaiian.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
        id: 4,
        title: "Picarona",
        desc: "Sushi rice, ahi tuna, cucumber, grilled jalapeños, radish, avocado, wakame seaweed, spicy mayo, sesame seeds, nori.",
        img: "/inkapokepicarona.png",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 5,
        title: "Pachamama",
        desc: "Organic quinoa, salmon, edamame, radish, coriander, avocado, Peruvian corn, pachamanca mayo (smoked herbs), sesame seeds, nori.",
        img: "/inkapokepachamama.png",
        price: 29.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
      {
        id: 6,
        title: "Perricholi",
        desc: "Brown sushi rice, ahi tuna, avocado, Peruvian corn, cashew nuts, edamame, wakame seaweed, soja ginger, sesame seeds, nori.",
        img: "/inkapokeperricholi.png",
        price: 24.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      },
  ];
  
  export const singleProduct: Product = {
    
        id: 1,
        title: "Brava",
        desc: "Brown sushi rice, prawns, radish, cucumber, carrot, avocado, crispy onions, spicy mayo, sesame seeds, nori.",
        img: "/inkapokebrava.png",
        price: 26.9,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 4,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
        ],
      
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "bowls",
      title: "Bowls",
      desc: "Wholesome Bowls, Vibrant Souls",
      img: "/inkapokemenuphoto.jpg",
      color: "white",
    },
    {
      id: 2,
      slug: "desserts",
      title: "Desserts",
      desc: "This is the desserts menu description",
      img: "/inkapokemenucoffee.jpg",
      color: "black",
    },
    {
      id: 3,
      slug: "salads",
      title: "Salads",
      desc: "This is the freshly made salads menu description",
      img: "/inkapokemenu.png",
      color: "white",
    },
  ];