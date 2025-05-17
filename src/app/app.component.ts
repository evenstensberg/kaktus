import { Component, OnInit } from '@angular/core';
// @ts-ignore
import confetti from 'canvas-confetti';

interface MenuItem {
  price?: string;
  category?: string;
  title?: string;
  allergies?: string;
  src?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kaktus';

  allergies = [
    'Hvetegluten',
    'Skalldyr',
    'Egg',
    'Fisk',
    'Peanøtt',
    'Soya',
    'Melk',
    'Nøtter',
    'Selleri',
    'Sennep',
    'Sesam',
    'Sulfitt',
    'Lupin',
    'Bløtdyr',
  ];
  Salads = [
    {
      price: '192,-',
      category: 'Salat',
      title:
        'Ost & Skinkesalat - Isbergsalat, ost, skinke, agurk, mais, ananas, tomat, dressing',
      allergies: '1, 3, 7',
      src: 'assets/salad.png',
    },
    {
      price: '192,-',
      category: 'Salat',
      title:
        'Kyllingsalat - Isbergsalat, kylling, agurk, tomat, mais, ananas, dressing',
      allergies: '1, 3, 7',
      src: 'assets/salad.png',
    },
    {
      price: '192,-',
      category: 'Salat',
      title:
        'Gresk salat - Isbergsalat, fetaost, agurk, tomat, mais, oliven, løk, dressing',
      allergies: '1, 3, 7',
      src: 'assets/salad.png',
    },
    {
      price: '192,-',
      category: 'Salat',
      title:
        'Kebab salat - Isbergsalat, kebabkjøtt, agurk, mais, tomat, løk, dressing',
      allergies: '1, 3, 7',
      src: 'assets/salad.png',
    },
  ];
  Burgers = [
    {
      price: '138,-',
      category: 'Burger',
      title: 'Hamburger 160gr i brød',
      allergies: '1, 3, 7, 11',
      src: 'assets/hamburger.png',
    },
    {
      price: '155,-',
      category: 'Burger',
      title: 'Hamburgertallerken 160gr med pommes frites',
      allergies: '1, 3, 7, 11',
      src: 'assets/hamburger.png',
    },
    {
      price: '198,-',
      category: 'Burger',
      title: 'Dobbeltburger 2x160gr i brød',
      allergies: '1, 3, 7, 11',
      src: 'assets/hamburger.png',
    },
    {
      price: '225,-',
      category: 'Burger',
      title: 'Dobbeltburger tallerken, pommes frites',
      allergies: '1, 3, 7, 11',
      src: 'assets/hamburger.png',
    },
    {
      price: '159,-',
      category: 'Burger',
      title:
        'BBQ burger 160gr med bbq-saus, løkringer, ost, salat og hvitløksdressing',
      allergies: '1, 3, 7, 10, 11',
      src: 'assets/hamburger.png',
    },
    {
      price: '165,-',
      category: 'Burger',
      title:
        'BBQ burger tallerken 160gr med pommes frites, bbq-saus, løkringer, ost, salat og hvitløksdressing',
      allergies: '1, 3, 7, 11',
      src: 'assets/hamburger.png',
    },
  ];
  Kebabs = [
    {
      price: '149,-',
      category: 'Kebab',
      title:
        'Kebab i pita - kebabkjøtt, isbergsalat, agurk, mais, saus og pitabrød',
      allergies: '1',
      src: 'assets/kebab.png',
    },
    {
      price: '198,-',
      category: 'Kebab',
      title: 'Kebabrull - kebabkjøtt, isbergsalat, agurk, mais, lefse',
      allergies: '1',
      src: 'assets/kebab.png',
    },
    {
      price: '198,-',
      category: 'Kebab',
      title: 'Kebabtallerken - kebabkjøtt, salat, pommes frites, saus',
      allergies: '1',
      src: 'assets/kebab.png',
    },
  ];
  Pastas = [
    {
      price: '189,-',
      category: 'Pasta',
      title: 'Bolognese - Spaghetti med kjøttsaus',
      allergies: '1, 9',
      src: 'assets/noodles.png',
    },
    {
      price: '199,-',
      category: 'Pasta',
      title: 'Carbonara - Spaghetti med bacon, løk og eggeplomme',
      allergies: '1, 7, 9',
      src: 'assets/noodles.png',
    },
    {
      price: '215,-',
      category: 'Pasta',
      title:
        'Husets pasta - Penne, biffkjøtt, paprika, løk, tomat og fløtesaus',
      allergies: '1, 7, 9',
      src: 'assets/noodles.png',
    },
    {
      price: '215,-',
      category: 'Pasta',
      title: 'Con carne - Penne, biffkjøtt, paprika, løk og fløtesaus',
      allergies: '1, 7, 9',
      src: 'assets/noodles.png',
    },
    {
      price: '215,-',
      category: 'Pasta',
      title: 'Pasta Indiana - Penne, kylling, paprika, løk og karrisaus',
      allergies: '1, 7, 9',
      src: 'assets/noodles.png',
    },
  ];
  Fishes = [
    {
      price: '229,-',
      category: 'Fisk',
      title:
        'Fish & Chips - panert torskefilet, sylteagurk, remulade og pommes frites',
      allergies: '1, 3, 4, 10',
      src: 'assets/fishing.png',
    },
    {
      price: '229,-',
      category: 'Fisk',
      title: 'Rødspette - panert rødspette, salat, remulade og pommes frites',
      allergies: '1, 3, 4, 10',
      src: 'assets/fishing.png',
    },
  ];
  Meats = [
    {
      price: '199,-',
      category: 'Kjøtt',
      title: 'Løvbifftallerken - salat, pommes frites og bernaise',
      allergies: '3, 9, 10',
      src: 'assets/steak.png',
    },
    {
      price: '255,-',
      category: 'Kjøtt',
      title:
        'Biffsnadder - indrefilet, løk, champignons, paprika, pommes frites og bearnaise',
      allergies: '3, 9, 10',
      src: 'assets/steak.png',
    },
    {
      price: '255,-',
      category: 'Kjøtt',
      title:
        'Kyllingsnadder - kyllingfilet, løk, paprika, champignons, pommes frites og bearnaise',
      allergies: '3, 9, 10',
      src: 'assets/steak.png',
    },
    {
      price: '255,-',
      category: 'Kjøtt',
      title:
        'Svinefilet - 2 medallioner svin indrefilet, grillet ananas og bacon',
      allergies: '3, 9, 10',
      src: 'assets/steak.png',
    },
    {
      price: '265,-',
      category: 'Kjøtt',
      title:
        'Kylling Philadephia - kyllingfilet, bacon, salat, Philadephiasaus og pommes frites',
      allergies: '7',
      src: 'assets/steak.png',
    },
    {
      price: '330,-',
      category: 'Kjøtt',
      title: 'Biff indrefilet - salat, pommes frites og valgfri saus',
      allergies: '3, 9, 10',
      src: 'assets/steak.png',
    },
    {
      price: '330,-',
      category: 'Kjøtt',
      title:
        'Filetto Monza - okse indrefilet, gorgonzolasaus, champignons, paprika, salat, pommes frites',
      allergies: '7',
      src: 'assets/steak.png',
    },
    {
      price: '330,-',
      category: 'Kjøtt',
      title:
        'Meksikansk biff - okse indrefilet, pommes frites, sterk mexicansk saus og salat',
      allergies: '10, 11',
      src: 'assets/steak.png',
    },
    {
      price: '330,-',
      category: 'Kjøtt',
      title:
        'Black & White - okse indrefilet, svin indrefilet, salat, bearnaise, peppersaus og pommes frites',
      allergies: '3, 7, 9, 10',
      src: 'assets/steak.png',
    },
    {
      price: '335,-',
      category: 'Kjøtt',
      title:
        'Biff A La Rosa - okse indrefilet, salat, pommes frites, rødvinssaus med champignons og bacon',
      allergies: '7, 9, 10',
      src: 'assets/steak.png',
    },
  ];
  Children = [
    {
      price: '99,-',
      category: 'Barn',
      title: 'Pølse - med pommes frites',
      allergies: '7',
      src: 'assets/avatar.png',
    },
    {
      price: '120,-',
      category: 'Barn',
      title: 'Hamburgertallerken - hamburger i brød med salat og pommes frites',
      allergies: '1, 3, 7, 11',
      src: 'assets/avatar.png',
    },
    {
      price: 'Se pizza meny',
      category: 'Barn',
      title: 'Barne pizza - velg fra pizzamenyen, avslag kr 40,-',
      allergies: '1, 7, 9, 10',
      src: 'assets/avatar.png',
    },
  ];
  Pizza = [
    {
      price: '120/220/245,-',
      category: 'Pizza',
      title: 'Margerita - tomatsaus og ost',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '135/225/245,-',
      category: 'Pizza',
      title: 'Vesuvio - skinke',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '135/225/245,-',
      category: 'Pizza',
      title: 'Capricossa - skinke og champignons',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '135/225/245,-',
      category: 'Pizza',
      title: 'Hawaii - skinke og ananas',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '135/222/245,-',
      category: 'Pizza',
      title: 'Ado - pepperoni, ananas og løk',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Mama Mia - skinke, kjøttdeig og løk',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Aylish - pepperoni, kjøttdeig og løk',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Santana - skinke, kjøttdeig, løk og paprika',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Alamos - kylling, skinke og ananas',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285-,',
      category: 'Pizza',
      title: 'Vegetar - champignon, paprika, løk, tomat og oliven',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Bello - pepperoni, salami, bacon og sterk kjøttdeig',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Montana - skinke, pepperoni, salami og bacon',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Pompeii - skinke, champignon, bacon og løk',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Herkules - skinke, pepperoni, bacon, kjøttdeig og løk',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Arena - biff, løk og bearnaise',
      allergies: '1, 3, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Bambino - biff, pepperoni, champignon, løk og bearnaise',
      allergies: '1, 3, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: "Flisa pizza'n - biff, pepperoni, kjøttdeig, skinke og mais",
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Matador - biff, pepperoni og skinke',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Tor - biff, bacon, skinke og kylling',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Mexicali - biff, skinke, bacon, løk og paprika',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Tinini - biff, skinke og ananas',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Odin - biff, skinke, bacon, pepperoni og løk',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Santos - biff, pepperoni, skinke, løk og mais',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: "Fleicher'n - biff, pepperoni og løk",
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Ciao Caio - biff, champignon, løk, paprika, tomat og bearnaise',
      allergies: '1, 3, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Våler - skinke, pepperoni, løk og mais',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Åsnes spesial - skinke, bacon og champignon',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149/265/285,-',
      category: 'Pizza',
      title: 'Granlund - kylling, ananas og karri',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Kjellmyra - biff, bacon og kebab',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '135,-',
      category: 'Pizza',
      title: 'Calzone (innbakt) med skinke',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '149,-',
      category: 'Pizza',
      title: 'Calzone spesial (innbakt) med skinke, bacon og løk',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title:
        'Kebabpizza - kebabkjøtt, isbergsalat, agurk, tomat, løk og kebabsaus',
      allergies: '1, 3, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title:
        'Mexicana - tacokjøtt, løk, hvitløk, jalapenos, tacokrydder og tacosaus',
      allergies: '1, 3, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title:
        'Acapulco - biff, champignon, løk, hvitløk, tacokrydder, tacosaus og jalapenos',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title:
        'Amigo - biff, kjøttdeig, løk, paprika, jalapenos, tacokrydder og tacosaus',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title:
        'Kaktus - tacokjøtt, paprika, nachos, jalapenos, tacokrydder og tacosaus',
      allergies: '1, 7, 9, 10',
      src: 'assets/pizza.png',
    },
    {
      price: '170/275/299,-',
      category: 'Pizza',
      title: 'Velg selv - velg inntil 5 ingredienser',
      allergies: 'Ingen',
      src: 'assets/pizza.png',
    },
  ];
  Dessert = [
    {
      price: '105,-',
      category: 'Dessert',
      title: 'Iskrem - 3 kuler vaniljeis, krem og sjokoladesaus',
      allergies: '3, 7',
      src: 'assets/cake.png',
    },
    {
      price: '125,-',
      category: 'Dessert',
      title: 'Eplekake',
      allergies: '1, 3, 7',
      src: 'assets/cake.png',
    },
    {
      price: '125,-',
      category: 'Dessert',
      title: 'Sjokoladefondant',
      allergies: '1, 3, 7',
      src: 'assets/cake.png',
    },
  ];

  Drinks = [
    {
      price: '30,-',
      category: 'Drikke',
      title: 'Kaffe og te',
      allergies: 'Ingen',
      src: 'assets/soda.png',
    },
    {
      price: '40,-',
      category: 'Drikke',
      title: 'Mineralvann - 0.5L',
      allergies: 'Ingen',
      src: 'assets/soda.png',
    },
    {
      price: '60,-',
      category: 'Drikke',
      title: 'Mineralvann - 1.5L',
      allergies: 'Ingen',
      src: 'assets/soda.png',
    },
    {
      price: '25,-',
      category: 'Drikke',
      title: 'Kuli',
      allergies: 'Ingen',
      src: 'assets/soda.png',
    },
  ];

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  navigateToId(name: string) {
    document?.getElementById(name)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  constructor() {}
  celebrate() {
    var duration = 4 * 1000;
    var end = Date.now() + duration;
    var scalar = 3;
    var flag = confetti.shapeFromText({ text: '🇳🇴', scalar });
    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 105,
        origin: { x: 0 },
        shapes: [flag],
        scalar
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 155,
        origin: { x: 1 },
        shapes: [flag],
        scalar
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  ngOnInit(): void {
    this.celebrate()
  }
}
