/* Cart Cost Variables start */
let cartItemCost = 0;
let deliveryFee = 0; /* Kosten nach Berechnung der Lieferkosten (Warenkorb höher als 30€ - 0€ bei weniger 8€) */
let deliveryFeeCost = 8; /* Lieferkosten */
let freeDeliveryCost = 0;
let cartTotalCost = 0;
let freeDeliveryLimit = 30; /* Ab 30€ keine Lieferkosten */
let differenceToFreeDelivery = 0;
let emptyCartTotalCost = 0;

/* Cart Cost Variables end */

let Menu = {
  appetizer: [
    {
      name: "Bruschetta",
      description: "geröstetes Brot mit Tomaten, Basilikum, Knoblauch und Olivenöl",
      price: 5.5,
    },
    {
      name: "Caprese",
      description: "Tomaten-Mozzarella-Salat mit Basilikum",
      price: 6.0,
    },
    {
      name: "Antipasti-Platte",
      description: "Auswahl an italienischen Vorspeisen",
      price: 8.5,
    },
    {
      name: "Carpaccio",
      description: "dünn geschnittenes Rindfleisch mit Parmesan und Rucola",
      price: 4.5,
    },
    {
      name: "Bavarese alla Spuma",
      description: "frisches Weißbier mit einer leichten Schaumkrone und zarten Weißwürstchen",
      price: 7.0,
    },
  ],
  mainCourse: [
    {
      name: "Margherita",
      description: "Tomatensauce, Mozzarella, frisches Basilikum",
      price: 8.0,
    },
    {
      name: "Pepperoni",
      description: "Tomatensauce, Mozzarella, scharfe Peperoni",
      price: 9.5,
    },
    {
      name: "Quattro Stagioni",
      description: "Tomatensauce, Mozzarella, Schinken, Pilze, Artischocken, Oliven",
      price: 10.0,
    },
    {
      name: "Vegetariana",
      description: "Tomatensauce, Mozzarella, Paprika, Zucchini, Auberginen, Pilze",
      price: 9.0,
    },
    {
      name: "Bavaria",
      description: "Tomatensauce, Schafskäse, hauchzarte Leberkäsescheiben, Bärlauchcreme",
      price: 10.5,
    },
    {
      name: "Hawai",
      description: "Tomatensauce, Mozzarella, Schinken, Ananas",
      price: 9.5,
    },
  ],
  dessert: [
    {
      name: "Tiramisu",
      description: "klassisches italienisches Dessert mit Mascarpone, Espresso und Kakao",
      price: 4.5,
    },
    {
      name: "Panna Cotta",
      description: "cremiger Vanillepudding mit Beerensauce",
      price: 4.0,
    },
    {
      name: "Gelato Misto",
      description: "verschiedene Sorten italienisches Eis",
      price: 3.5,
    },
    {
      name: "Cannoli",
      description: "knusprige Teigröllchen gefüllt mit süßer Ricotta-Creme",
      price: 4.2,
    },
    {
      name: "Affogato",
      description: "Vanilleeis mit heißem Espresso übergossen",
      price: 4.8,
    },
    {
      name: "Birra Bianca Cremosa",
      description: "gekühltes Weißbier mit luftiger Schaumkrone",
      price: 3.5,
    },
  ],
};

let cart = {
  item: [],
};
