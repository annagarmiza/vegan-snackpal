import { Snack } from '../snack.interface';

export class SnackService {
  private snackPreference: Array<string> = [
    'ALL FLAV IS FAB',
    'sweetooth',
    'salty',
    'sour',
    'fruity',
    'mint',
    'yummyGummi',
    'hard Candy',
    'choclate',
    'spicy',
    'licorice',
    'liqour',
    'cotton',
    'caramel',
    'marshmallow',
    'creamy',
    'crunchy',
    'gluten free',
    'sugar free',
    'cookies',
    'chips',
    'peanuts',
    'nutty nut',
  ];

  private snacks: Array<Snack> = [
    {
      _id: '234',
      name: 'Baba',
      country: 'Israel',
      сompany: 'Osem',
      url: 'https://en.wikipedia.org/wiki/Bamba_(snack)',
      img: 'https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6901353/Catalog/6901353_7290000068787_L_1_Enlarge.jpg',
      category: 'snack',
      texture: 'light crunchy',
      flavour: 'salty peanut butter',
      description:
        'Bamba (Hebrew: במבה‎) is a peanut-butter-flavored snack manufactured by the Osem corporation in Kiryat Gat, Israel. Bamba is one of the leading snack foods produced and sold in Israel. It has been marketed since 1964[1] with no decline in sales. Bamba makes up 25% of the Israeli snack market.',
    },
    {
      _id: '235',
      name: 'Panda Choclate',
      country: 'Israel',
      сompany: 'Panda',
      url: 'https://pandachocolates.com/',
      img: 'https://www.chocolatepanda.co.il/wp-content/uploads/2015/08/%D7%A7%D7%9C%D7%90%D7%A1%D7%99.png',
      category: 'Choclate',
      texture: 'creamy',
      flavour: 'milk choclate sweet',
      description: '',
    },
    {
      _id: '235',
      name: 'Halva',
      country: 'Israel',
      сompany: 'Ahva',
      url: 'https://pandachocolates.com/',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLrBp7GzK4N_QDpgOz32h-c3f9LsR1aPmyg&usqp=CAU',
      category: 'sweet treat',
      texture: 'crumbly anf fluffy',
      flavour: 'nutty seasome seed paste sweet',
      description:
        'Halva is a traditional Middle Eastern fudge-like confection made with tahini (sesame seed paste), sugar, spices and nuts. In fact, the Arabic word halva translates to “sweetness.” Halva is semisweet, nutty flavor and crumbly, fluffy texture are what make it a uniquely delicious treat.',
    },
  ];
}
