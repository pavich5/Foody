export const categories = [
  {
    id: "burgers",
    title: "Burgers",
    customizationOptions: ["Lettuce", "Tomato", "Pickles", "Cheese", "Bacon", "Onions", "Sauce"],
    description:
      "Our custom 100% Angus beef blend, never frozen, no hormones or antibiotics ever, humanely raised and grazed in the USA",
    items: [
      {
        id: 1,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2024_Q4_Black-Truffle_Menu-Product_1500x920_Burger_lg1724778352.jpeg",
        title: "Classic Chicken Burger",
        description: "Crispy chicken with fresh lettuce and tomato.",
        price: "$8.99",
        calories: "550 kcal",
      },
      {
        id: 2,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2024_Q4_Black-Truffle_Menu-Product_1500x920_Shroom_lg1725896351.jpeg",
        title: "Beef Burger",
        description: "Juicy Angus beef with melted cheese and pickles.",
        price: "$9.99",
        calories: "700 kcal",
      },
      {
        id: 3,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2024_Q4_Black-Truffle_Menu-Product_1500x920_Shack-Stack_lg1724778317.jpeg",
        title: "Veggie Burger",
        description: "Made with a savory veggie patty, fresh greens.",
        price: "$7.99",
        calories: "450 kcal",
      },
    ],
  },
  {
    id: "chicken-burgers",
    title: "Chicken Burgers",
    customizationOptions: ["Lettuce", "Tomato", "Pickles", "Cheese", "Bacon", "Onions", "Sauce"],
    description:
      "Delicious chicken burgers with crispy fried chicken and flavorful toppings.",
    items: [
      {
        id: 7,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Chicken_ChickenBites_1500x920_lg1663591211.jpeg",
        title: "Spicy Chicken Burger",
        description:
          "Crispy chicken, spicy mayo, lettuce, and pickles on a toasted bun.",
        price: "$10.99",
        calories: "550 kcal",
      },
      {
        id: 8,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Chicken_ChickenShack_1500x920_lg1663591157.jpeg",
        title: "Classic Chicken Burger",
        description: "Tender chicken breast, lettuce, tomato, and mayo.",
        price: "$12.99",
        calories: "600 kcal",
      },
      {
        id: 9,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2023-06_SHA_Avocado-Bacon_Digital-Menu_1500x920_Chicken_lg1689678280.jpeg",
        title: "BBQ Chicken Burger",
        description:
          "Grilled chicken with BBQ sauce, crispy onions, and cheddar cheese.",
        price: "$11.99",
        calories: "650 kcal",
      },
    ],
  },

  {
    id: "fries",
    title: "Fries",
    customizationOptions: ["Cheese", "Jalapeños", "Sour Cream", "Salsa", "Bacon"],
    description: "Golden, crispy fries with a variety of dipping sauces.",
    items: [
      {
        id: 10,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_CrinkleCutFries_BaconCheeseFries_1500x920_lg1663591959.jpeg",
        title: "Classic Fries",
        description: "Golden, crispy fries seasoned with sea salt.",
        price: "$3.99",
        calories: "400 kcal",
      },
      {
        id: 11,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_CrinkleCutFries_CheeseFries_1500x920_lg1663591946.jpeg",
        title: "Cheese Fries",
        description:
          "Crispy fries topped with melted cheddar cheese and bacon bits.",
        price: "$5.99",
        calories: "500 kcal",
      },
      {
        id: 12,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_CrinkleCutFries_Fries_1500x920_lg1663591933.jpeg",
        title: "Loaded Fries",
        description:
          "Fries topped with cheese, jalapeños, sour cream, and salsa.",
        price: "$6.99",
        calories: "550 kcal",
      },
    ],
  },
  {
    id: "iceCreams",
    title: "Ice Creams",
    customizationOptions: ["Chocolate Syrup", "Sprinkles", "Whipped Cream", "Caramel Sauce"],
    description:
      "Our creamy, dreamy ice creams are the perfect way to end your meal.",
    items: [
      {
        id: 4,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2024-11_SHA_Q4_HolidayShakes_ChristmasCookie_MenuProductPhoto_1500x920_lg1729864854.jpeg",
        title: "Vanilla Ice Cream",
        description: "Rich and creamy vanilla ice cream.",
        price: "$3.99",
        calories: "200 kcal",
      },
      {
        id: 5,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2024-11_SHA_Q4_HolidayShakes_ChocolateYuleLog_MenuProductPhoto_1500x920_lg1729864843.jpeg",
        title: "Chocolate Ice Cream",
        description: "Decadent chocolate ice cream with chunks of cocoa.",
        price: "$4.49",
        calories: "250 kcal",
      },
      {
        id: 6,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2024-11_SHA_Q4_HolidayShakes_AppleCiderDonut_MenuProductPhoto_1500x920_lg1729864830.jpeg",
        title: "Strawberry Ice Cream",
        description: "Sweet strawberry ice cream with real fruit.",
        price: "$3.99",
        calories: "220 kcal",
      },
    ],
  },
  {
    id: "drinks",
    customizationOptions: ["Extra Ice", "Lemon Wedge", "Sugar-Free Syrup"],
    title: "Drinks",
    description: "Refresh yourself with our delicious drinks menu.",
    items: [
      {
        id: 13,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Shakes_Vanilla_1500x920_lg1689592781.jpeg", // Same image
        title: "Lemonade",
        description: "Freshly squeezed lemonade with a hint of mint.",
        price: "$2.99",
        calories: "150 kcal",
      },
      {
        id: 14,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Shakes_Chocolate_1500x920_lg1689592744.jpeg", // Same image
        title: "Iced Tea",
        description: "Refreshing iced tea with a touch of lemon.",
        price: "$2.49",
        calories: "120 kcal",
      },
      {
        id: 15,
        image:
          "https://d2luv1saso99wi.cloudfront.net/2024-09_SHA_Q4-Q1_Beverages_App-Web-Kiosk-Product_Individual-Items_1500x920-03_lg1729864817.jpeg", // Same image
        title: "Soda",
        description:
          "Classic soda, choose from cola, lemon-lime, or root beer.",
        price: "$1.99",
        calories: "200 kcal",
      },
    ],
  },
];

export const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review:
      "The burgers are absolutely delicious! The best I've had in a long time.",
    date: "2024-10-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    review: "Great milkshakes and fries. I loved the seasonal specials too!",
    date: "2024-10-18",
  },
  {
    id: 3,
    name: "Sam Wilson",
    rating: 5,
    review:
      "Amazing service and fantastic food! Highly recommend the burgers and fries.",
    date: "2024-10-15",
  },
  {
    id: 4,
    name: "Emily Turner",
    rating: 5,
    review:
      "Absolutely love the shakes! So creamy and flavorful. Will definitely be back!",
    date: "2024-10-10",
  },
  {
    id: 5,
    name: "Liam Neeson",
    rating: 4,
    review:
      "Nice atmosphere, and the food was great. The fries were crispy and delicious.",
    date: "2024-10-5",
  },
  {
    id: 6,
    name: "Olivia Johnson",
    rating: 5,
    review:
      "Fast service, and the food was perfect. Highly recommend the signature burger.",
    date: "2024-10-2",
  },
];

export const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Click 'Add to Bag' on your favorite items and proceed to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    question: "Where is my order?",
    answer: "Track your order in the 'My Orders' section.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or canceled within 10 minutes after placing them in the 'My Orders' section.",
  },
  {
    question: "Do you offer contactless delivery?",
    answer: "Yes, you can choose contactless delivery during checkout.",
  },
  {
    question: "What are your delivery hours?",
    answer: "We deliver from 9 AM to 11 PM every day.",
  },
  {
    question: "How can I apply a discount code?",
    answer: "Enter the discount code at checkout in the 'Promo Code' section.",
  },
];

export const offers = [
  {
    title: "HOLIDAY SHAKES ARE BACK!",
    description:
      "Fa-la-la-in love with the sweetest, hand-spun sips of the season: Apple Cider Donut, Christmas Cookie, and Chocolate Yule Log—only for a limited time.",
    image:
      "https://shakeshack.com/sites/default/files/styles/hero_mobile/public/2024-11/2024-11_SHA_Q4_HolidayShakes_HomePageBanner_2880x1040.jpg?itok=B4Gy3oHP",
  },
  {
    title: "HOORAY IT'S FRYDAY",
    description:
      "Enjoy FREE fries on Fridays when you spend $10+, now thru 12/20! Order on the Shack App, online, or at a kiosk in-Shack with code FRYDAY.",
    image:
      "https://shakeshack.com/sites/default/files/styles/hero_desktop_wide/public/2023-08/2023-08-04_Summer-Fryday-Promo_Homepage.jpg?h=4bab7749&amp;itok=zB97HMBF",
  },
  {
    title: "EAT MORE ANTIBIOTIC-FREE CHICKEN​",
    description:
      "This football season get a FREE Chicken Shack with your $10+ purchase in-Shack at a kiosk, online, or via the Shack App with code CHICKENSUNDAY—every Sunday thru 12/15!​",
    image:
      "https://shakeshack.com/sites/default/files/styles/hero_desktop_wide/public/2024-09/2024_Q3-Chicken-Sundays_Web-Homepage.jpg?h=5dd92a1d&amp;itok=Xv8LBkUr",
  },
];

export const accessories = [
  {
    id: 1,
    title: "Hamburger Fridge Magnet",
    description: "A cool magnet to add a burger-loving touch to your fridge.",
    price: "$15.99",
    calories: "0",
    image: "https://www.bhaiplease.com/cdn/shop/files/SM_Burger_1_272ae75f-fda5-49e4-975b-83ef7f237b67_1024x1024@2x.jpg?v=1683026977",
  },
  {
    id: 2,
    title: "Milkshake Glass",
    description: "A classic glass designed to enjoy milkshakes in style and elegance.",
    price: "$9.99",
    calories: "0",
    image: "https://www.sublivagroup.com/uploads/Classic-Milkshake-Glass-385ml.png",
  },
  {
    id: 3,
    title: "Burger Keychain",
    description: "Carry your love for burgers wherever you go with this cute keychain.",
    price: "$5.99",
    calories: "0",
    image: "https://i.etsystatic.com/16150254/r/il/a68c6b/1576709705/il_fullxfull.1576709705_5xs0.jpg",
  },
  {
    id: 4,
    title: "Burger Recipe Book",
    description: "A recipe book filled with delicious burger ideas for every occasion.",
    price: "$7.99",
    calories: "0",
    image: "https://m.media-amazon.com/images/I/61AoDUKYT4L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "Burger Poster",
    description: "A vibrant poster to decorate your space and show your burger pride.",
    price: "$12.99",
    calories: "0",
    image: "https://i.etsystatic.com/19798459/r/il/d9d8c2/5126430447/il_fullxfull.5126430447_maje.jpg",
  },
  {
    id: 6,
    title: "Cheeseburger Notebook",
    description: "A fun and quirky notebook perfect for jotting down your burger ideas.",
    price: "$8.49",
    calories: "0",
    image: "https://ih1.redbubble.net/image.1146448012.8044/sn,x1000-pad,750x1000,f8f8f8.jpg",
  },
];
