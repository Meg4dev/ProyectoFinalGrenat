//! Este archivo js contiene las clases para crear objetos y sus propiedades. Los productos no cuentan con su precio original, solo uno de ejemplo.
class Guitarras {
  constructor(brand, model, price, img, stock, category, id) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.img = img;
    this.stock = Math.ceil(Math.random() * (20 - 5) + 5);
    this.category = category;
    this.id = id;
  }
}

class Bajos {
  constructor(brand, model, price, img, stock, category, id) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.img = img;
    this.stock = Math.ceil(Math.random() * (20 - 5) + 5);
    this.category = category;
    this.id = id;
  }
}

class Amplificadores {
  constructor(brand, model, power, price, img, stock, category, id) {
    this.brand = brand;
    this.model = model;
    this.power = power;
    this.price = price;
    this.img = img;
    this.stock = Math.ceil(Math.random() * (20 - 5) + 5);
    this.category = category;
    this.id = id;
  }
}

class Accesorios {
  constructor(brand, model, price, img, stock, category, id) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.img = img;
    this.stock = Math.ceil(Math.random() * (20 - 5) + 5);
    this.category = category;
    this.id = id;

  }
}

const guitarrasElectricasGibson = [
  new Guitarras(
    "Gibson",
    "Les Paul Standard",
    2800,
    `images/lespaulstandard.jpg`,
    "Guitarras Electricas",
    "GS-GA573",
  ),
  new Guitarras(
    "Gibson",
    "Les Paul Standard '50s",
    2700,
    `images/product-lespaulstandard50s.jpg`,
    "Guitarras Electricas",
    "GS-DF5521",
  ),
  new Guitarras(
    "Gibson",
    "Les Paul Studio",
    1600,
    `images/product-lespaulstudio.png`,
    "Guitarras Electricas",
    "GS-KJ5122",
  ),
  new Guitarras(
    "Gibson",
    "Les Paul Classic",
    1300,
    `images/product-lespaulclassic.png`,
    "Guitarras Electricas",
    "GS-L3423",

  ),
  new Guitarras(
    "Gibson",
    "SG Standard",
    2500,
    `images/product-sgstandard.png`,
    "Guitarras Electricas",
    "GS-SD3423",
  ),
  new Guitarras(
    "Gibson",
    "SG Custom",
    2300,
    `images/product-sgcustom.jpg`,
    "Guitarras Electricas",
    "GS-SDBFD3",
  ),
  new Guitarras("Gibson", "Explorer", 1900, 'images/product-explorer.jpg', "Guitarras Electricas", "GS-AS234"),

  new Guitarras(
    "Gibson",
    "Flying V",
    2400,
    `images/product-flyingv.jpg`,
    "Guitarras Electricas",
    "GS-SDSH23S",
  ),
  new Guitarras("Gibson", "Firebird", 2850, 'images/product-firebird.jpg', "Guitarras Electricas", "GS-S133S",),
  new Guitarras("Gibson", "J-45", 1500, 'images/product-j-45.jpg', "Guitarras Acusticas"),
  new Guitarras("Gibson", "Hummingbird", 1450, 'images/product-hummingbird.jpg', "Guitarras Acusticas"),
  new Guitarras("Gibson", "J-200", 1200, 'images/product-sj-200.jpg', "Guitarras Acusticas"),
];


const guitarrasElectricasFender = [
  new Guitarras(
    "Fender",
    "Stratocaster",
    `$` + 1200,
    'images/product-fenderstratocaster.jpg',
    "Guitarras Electricas",
    "F-SD3423",

  ),
  new Guitarras(
    "Fender",
    "Ultra Stratocaster",
    1400,
    'images/product-ultrastratocaster.jpg',
    "Guitarras Electricas",
    "F-SD954389",

  ),
  new Guitarras(
    "Fender",
    "Player Telecaster",
    1200,
    'images/product-playertelecaster.jpg',
    "Guitarras Electricas",
    "F-SD5y452",
  ),
  new Guitarras(
    "Fender",
    "Jazzmaster",
    1100,
    'images/product-jazzmaster.jpg',
    "Guitarras Electricas",
    "F-SD3423",
  ),
  new Guitarras(
    "Fender",
    "Performer Mustang",
    1300,
    'images/product-performermustang.jpg',
    "Guitarras Electricas",
    "F-SD1263",
  ),
  new Guitarras(
    "Fender",
    "Ultra Telecaster",
    1600,
    'images/product-ultratelecaster.jpg',
    "Guitarras Electricas",
    "F-SD7423",
  ),
  new Guitarras("Fender", "Jaguar", 1150, 'images/product-jaguar.jpg', "Guitarras Electricas", "F-SD6323"),
  new Guitarras("Fender", "FA-125 Dreadnought", 1125, 'images/product-fa-125dreadnought.jpg', "Guitarras Acusticas"),
  new Guitarras("Fender", "Newporter Player", 1100, 'images/product-newporterplayer.jpg', "Guitarras Acusticas"),
  new Guitarras("Fender", "Redondo Player", 900, 'images/product-redondoplayer.jpg', "Guitarras Acusticas"),
];

const guitarrasElectricasESP = [
  new Guitarras("ESP", "Eclipse", 1200, 'images/product-eclipse.jpg', "Guitarras Electricas", "ESP-53223",),
  new Guitarras(
    "ESP",
    "Horizon NT-II",
    1400,
    'images/product-horizonnt-ii.jpg',
    "Guitarras Electricas",
    "ESP-87873",
    198
  ),
  new Guitarras("ESP", "Arrow", 1750, 'images/product-arrow.jpg', "Guitarras Electricas", "ESP-3423",),
  new Guitarras(
    "ESP Signature",
    "LTD KH-602",
    1850,
    'images/product-ltdkh-602.jpg',
    "Guitarras Electricas",
    "ESP-KH3421513",
  ),
  new Guitarras(
    "ESP Signature",
    "ESP KH-2",
    1850,
    'images/product-kh2.png',
    "Guitarras Electricas",
    "ESP-KH325",
  )
];

const guitarrasElectricasSquier = [
  new Guitarras(
    "Squier",
    "Stratocaster",
    140,
    'images/product-squierstratocaster.jpg',
    "Guitarras Electricas",
    "SQ-270443"
  ),
  new Guitarras(
    "Squier",
    "Telecaster",
    160,
    'images/product-telecaster.jpg',
    "Guitarras Electricas",
    "SQ-527823"
  ),
  new Guitarras(
    "Squier",
    "'50s Telecaster",
    260,
    'images/product-50stelecaster.jpg',
    "Guitarras Electricas",
    "SQ-21211"
  ),
  new Guitarras(
    "Squier",
    "'60s Jazzmaster",
    200,
    'images/product-60sjazzmaster.jpg',
    "Guitarras Electricas",
    "SQ-219360"
  ),
  new Guitarras(
    "Squier",
    "'70s Jaguar",
    180,
    'images/product-70sjaguar.jpg',
    "Guitarras Electricas",
    "SQ-21208"
  ),
  new Guitarras(
    "Squier",
    "Squier 2000",
    190,
    'images/product-squier2000.jpg',
    "Guitarras Electricas",
    "SQ-08911"
  ),
];


const guitarrasAcusticasYamaha = [
  new Guitarras("Yamaha", "FG800", 670, 'images/product-fg800.jpg', "Guitarras Acusticas"),
  new Guitarras("Yamaha", "APX600", 500, 'images/product-apx600.jpg', "Guitarras Acusticas"),
  new Guitarras("Yamaha", "LL6 ARE", 750, 'images/product-ll6are.jpg', "Guitarras Acusticas"),
];


const bajosFender = [
  new Bajos("Fender", "Precision Bass", 1400, 'images/poduct-precisionbass.jpg', "Bajos"),
  new Bajos("Fender", "Jazz Bass", 1350, 'images/product-jazzbass.jpg', "Bajos"),
  new Bajos("Fender", "Mustang Bass", 1150, 'images/product-mustangbass.jpg', "Bajos"),
  new Bajos("Fender", "Jaguar Bass", 1200, 'images/product-jaguarbass.jpg', "Bajos"),
];

const bajosIbanez = [
  new Bajos("Ibanez", "SR Series", 900, 'images/product-srseries.jpg', "Bajos"),
  new Bajos("Ibanez", "BTB Series", 870, 'images/product-btbseries.jpg', "Bajos"),
  new Bajos("Ibanez", "Talman Bass", 750, 'images/product-talmanbass.jpg', "Bajos"),
];


const bajosYamaha = [
  new Bajos("Yamaha", "BB Series", 560, 'images/product-bbseries.jpg', "Bajos"),
  new Bajos("Yamaha", "TRBX Series", 650, 'images/product-trbxseries.jpg', "Bajos"),
  new Bajos("Yamaha", "RBX Series", 580, 'images/product-rbxseries.jpg', "Bajos"),
];

const amplificadoresGuitarra = [
  new Amplificadores(
    "Marshall",
    "DSL40CR",
    "40W",
    400,
    'images/product-dsl40cr40w.jpg',
    "Amplificadores de guitarra"
  ),
  new Amplificadores(
    "Marshall",
    "MG30GFX",
    "30W",
    350,
    'images/product-mg30gfx.jpg',
    "Amplificadores para guitarra"
  ),
  new Amplificadores(
    "Fender",
    "Champion 100",
    "100W",
    650,
    'images/product-champion100100w.jpg',
    "Amplificadores para guitarra"
  ),
  new Amplificadores(
    "Fender",
    "Blues Junior IV",
    "15W",
    200,
    'images/product-bluesjunioriv15w.jpg',
    "Amplificadores para guitarra"
  ),
  new Amplificadores(
    "Fender",
    "Rumble 500",
    "500W",
    600,
    'images/product-rumble500500w.jpg',
    "Amplificadores para bajo"
  ),
  new Amplificadores(
    "Fender",
    "Bassman 800",
    "800W",
    750,
    'images/product-bassman800800w.jpg',
    "Amplificadores para bajo"
  ),
  new Amplificadores(
    "Ampeg",
    "SVT-CL",
    "300W",
    350,
    'images/product-svtcl300w.jpg',
    "Amplificadores para bajo"
  )
];


const AccesoriosInstrumentos = [
  new Accesorios('ROSS', 'Cable Plug', 10400, 'images/product-cableross.png', 'Accesorios', 120),
  new Accesorios('Jim Dunlop', 'Puas', 8400, 'images/product-puasguitarra.png', 'Accesorios', 87),
  new Accesorios('Bajo Magma', 'Correa para guitarra', 7850, 'images/product-correaguitarra.png', 'Accesorios', 77),
  new Accesorios('Afinador', 'Para guitarras y bajos.', 11900, 'images/product-afinador.png', 'Accesorios', 56),
];


const Productos = {
  guitarrasElectricasGibson, guitarrasElectricasFender, guitarrasElectricasESP, guitarrasElectricasSquier, guitarrasAcusticasYamaha, bajosFender, bajosIbanez, bajosYamaha, amplificadoresGuitarra, AccesoriosInstrumentos
}


//! Creacion de archivo productos.json

 const fs = require('fs');

 const ProductosJSON = JSON.stringify(Productos, null, 4);

fs.writeFile('productos.json', ProductosJSON, function (err) {
  if (err) {
      console.error('Error al guardar el archivo:', err);
  } else {
      console.log('Archivo guardado correctamente como productos.json');
  }
});
