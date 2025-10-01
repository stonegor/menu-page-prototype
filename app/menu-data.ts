export const coffeeClassic = {
  title: "КоФейНаЯ КлАссИкА",
  sizeHeaders: ["40мл", "300мл", "400мл", "500мл"],
  items: [
    {
      title: "ДВОЙНОЙ ЭСПРЕССО",
      sizes: [{ size: "40мл", price: "150" }, { size: "300мл" }, { size: "400мл" }, { size: "500мл" }],
    },
    {
      title: "АМЕРИКАНО",
      icons: ["V", "L"],
      sizes: [
        { size: "40мл" },
        { size: "300мл", price: "180" },
        { size: "400мл", price: "200" },
        { size: "500мл" },
      ],
    },
    {
      title: "ФИЛЬТР-КОФЕ",
      sizes: [{ size: "40мл" }, { size: "300мл", price: "250" }, { size: "400мл" }, { size: "500мл" }],
    },
    {
      title: "КАПУЧИНО / ЛАТТЕ",
      icons: ["V", "L", "G", "N"],
      sizes: [
        { size: "40мл" },
        { size: "300мл", price: "220" },
        { size: "400мл", price: "250" },
        { size: "500мл", price: "270" },
      ],
    },
    {
      title: "ЛАТТЕ с арахисовой пастой",
      icons: ["N"],
      sizes: [{ size: "40мл" }, { size: "300мл", price: "250" }, { size: "400мл" }, { size: "500мл" }],
    },
    {
      title: "МОККАЧИНО / ФЛЭТ УАЙТ",
      icons: ["G", "N"],
      sizes: [{ size: "40мл" }, { size: "300мл", price: "230" }, { size: "400мл" }, { size: "500мл" }],
    },
    {
      title: "КАКАО классическое",
      icons: ["G", "N"],
      sizes: [
        { size: "40мл" },
        { size: "300мл", price: "200" },
        { size: "400мл", price: "260" },
        { size: "500мл" },
      ],
    },
    {
      title: "РАФ",
      icons: ["G"],
      subtitle: "классический /лавандовый / «Солёная карамель» / фисташковый / апельсиновый",
      sizes: [
        { size: "40мл" },
        { size: "300мл", price: "300" },
        { size: "400мл", price: "340" },
        { size: "500мл" },
      ],
    },
    {
      title: "РАФ «Халва»",
      icons: ["G"],
      sizes: [
        { size: "40мл" },
        { size: "300мл", price: "340" },
        { size: "400мл", price: "380" },
        { size: "500мл" },
      ],
    },
  ],
}

export const coffeeDecaf = {
  title: "КоФЕ БеЗ КоФеиНА",
  badge: "новинка",
  sizeHeaders: ["300 мл"],
  concentrateItems: [
    { title: "АМЕРИКАНО (декаф)", icons: ["V", "L"], price: "360", volume: "300 мл" },
    {
      title: "КОФЕЙНЫЙ НАПИТОК С МОЛОКОМ (декаф)",
      icons: ["V", "L", "G", "N"],
      price: "380",
      volume: "300 мл",
    },
  ],
  filterItems: [{ title: "ЧЁРНЫЙ КОФЕ (декаф)", price: "160", volume: "300 мл" }],
}

export const coffeeDrinks = {
  title: "КОфейНыЕ НАпИткИ",
  sizeHeaders: ["300 мл", "400 мл"],
  items: [
    {
      title: "ЭСПРЕССО-ТОНИК классический",
      icons: ["L"],
      sizes: [{ size: "300мл", price: "240" }, { size: "400мл" }],
    },
    {
      title: "ДЖУС-КОФЕ",
      icons: ["V", "L"],
      sizes: [{ size: "300мл", price: "360" }, { size: "400мл" }],
    },
    {
      title: "ДЖУС-КОФЕ на грейпфрутовом соке",
      icons: ["V", "L"],
      sizes: [{ size: "300мл", price: "480" }, { size: "400мл" }],
    },
    {
      title: "ДЖУС-КОФЕ на гранатовом соке",
      icons: ["V", "L"],
      sizes: [{ size: "300мл", price: "380" }, { size: "400мл" }],
    },
  ],
}

export const authorCoffee = {
  title: "АВТОРСКИЕ КОФЕЙНЫЕ НАПИТКИ",
  items: [
    { title: "АЙС-КОФЕ «Фраппучино с карамелью»", weight: "400 мл", price: "260" },
    { title: "АЙС-КОФЕ «КОЛА»", weight: "400 мл", price: "280" },
    { title: "АЙС-КОФЕ «ХАЛВА» / «АРАХИС»", weight: "400 мл", price: "300" },
    { title: "ЭССПРЕССО-ТОНИК «Грейпфрут-Лаванда»", weight: "400 мл", price: "360" },
    { title: "КОФЕ ГЛЯСЕ с фисташковой крошкой", weight: "400 мл", price: "340" },
  ],
}

export const authorLemonades = {
  title: "АВТОРСКИЕ ЛИМОНАДЫ",
  items: [
    { title: "«личи-ДРАГОНФРУТ»", weight: "400 мл", price: "300" },
    { title: "«ГУАНАБАНА С МЯТОЙ»", weight: "400 мл", price: "280" },
    { title: "НАПИТОК ШЕРБЕТ Гуанабана с мятой", weight: "400 мл", price: "300" },
    { title: "НАПИТОК КОФЕЙНЫЙ «Время Лайма»", weight: "400 мл", price: "320" },
    { title: "НАПИТОК «Карибский Ананас»", weight: "400 мл", price: "260" },
  ],
}

export const additionalOptions1 = {
  options: [
    { title: "ДОП. ШОТ ЭСПРЕССО / ДОП. МАТЧА", price: "+60" },
    { title: "ДОП. ВЗРЫВНАЯ КАРАМЕЛЬ «Апельсин»", price: "+60" },
    { title: "ДОП. ВЗБИТЫЕ СЛИВКИ", price: "+70" },
    { title: "СИРОП «ФИСТАШКА»", price: "+20" },
    { title: "АПЕЛЬСИНОВАЯ ПАСТА / ТОПИНГ «СОЛЁНАЯ КАРАМЕЛЬ»", price: "+30" },
    { title: "КЛЕНОВЫЙ СИРОП", price: "+70" },
  ],
  freeSyrups: "БЕСПЛАТНЫЕ СИРОПЫ: банан / ваниль / карамель / кокос / макадамия / миндаль",
}

export const tea = {
  title: "ЧАй",
  sizeHeaders: ["300 мл", "400 мл"],
  items: [
    {
      title: "ЧАЙ ЛИСТОВОЙ",
      subtitle: "чёрный классический / «Эрл Грей» зелёный классический / «Грин Жасмин»",
      sizes: [
        { size: "300мл", price: "120" },
        { size: "400мл", price: "120" },
      ],
    },
    {
      title: "ЧАЙ ЛИСТОВОЙ «Молочный улун»",
      sizes: [
        { size: "300мл", price: "140" },
        { size: "400мл", price: "140" },
      ],
    },
    {
      title: "ЧАЙ ЧЁРНЫЙ «Марокканский»",
      sizes: [
        { size: "300мл", price: "180" },
        { size: "400мл", price: "180" },
      ],
    },
    {
      title: "ЧАЙ ЧЁРНЫЙ «Вкус столицы»",
      sizes: [
        { size: "300мл", price: "260" },
        { size: "400мл", price: "260" },
      ],
    },
    {
      title: "ЛАТТЕ-МАТЧА",
      icons: ["V", "L", "G", "N"],
      sizes: [
        { size: "300мл", price: "180" },
        { size: "400мл", price: "180" },
      ],
    },
    {
      title: "ЛАТТЕ-МАТЧА розовый «Таро-пинк»",
      icons: ["V", "L", "G", "N"],
      sizes: [
        { size: "300мл", price: "320" },
        { size: "400мл", price: "320" },
      ],
    },
    {
      title: "АЙС-МАТЧА с клубникой",
      icons: ["V", "G", "N"],
      sizes: [
        { size: "300мл", price: "280" },
        { size: "400мл", price: "280" },
      ],
    },
  ],
}

export const milkshakes = {
  title: "МоЛоЧнЫЕ КоКТейЛИ с БананоМ",
  sizeHeaders: ["300 мл", "400 мл"],
  items: [
    {
      title: "С МОРОЖЕНЫМ",
      sizes: [
        { size: "300мл", price: "210" },
        { size: "400мл", price: "210" },
      ],
    },
    {
      title: "КЛУБНИЧНЫЙ / С МАНГО",
      icons: ["G", "N"],
      sizes: [
        { size: "300мл", price: "260" },
        { size: "400мл", price: "260" },
      ],
    },
    {
      title: "ШОКОЛАДНЫЙ",
      sizes: [
        { size: "300мл", price: "280" },
        { size: "400мл", price: "280" },
      ],
    },
  ],
}

export const additionalOptions2 = {
  options: [
    {
      title: "ПРИГОТОВИТЬ НА РАСТИТЕЛЬНОМ НАПИТКЕ",
      subtitle: "кокосовом / миндальном / фундучном / банановом",
      price: "+60",
      icons: ["G"],
    },
    {
      title: "ПРИГОТОВИТЬ БЕЗ ЛАКТОЗЫ",
      price: "+60",
      icons: ["N"],
    },
  ],
}

export const pancakes = {
  title: "БЛиНы",
  items: [
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин с ветчиной и сыром",
      title: "БЛИН С ВЕТЧИНОЙ И СЫРОМ",
      weight: "195 г",
      price: "250",
    },
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин с курицей и сыром",
      title: "БЛИН С КУРИЦЕЙ И СЫРОМ",
      weight: "194 г",
      price: "250",
    },
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин Цезарь",
      title: "БЛИН «ЦЕЗАРЬ»",
      weight: "239 г",
      price: "300",
    },
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин с форелью",
      title: "БЛИН С ФОРЕЛЬЮ, СЛИВОЧНЫМ СЫРОМ И РУКОЛОЙ",
      weight: "199 г",
      price: "380",
    },
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин с варёной сгущёнкой",
      title: "БЛИН С ВАРЁНОЙ СГУЩЁНКОЙ И ГРЕЦКИМ ОРЕХОМ",
      weight: "129 г",
      price: "100",
    },
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин со свежим бананом",
      title: "БЛИН СО СВЕЖИМ БАНАНОМ И ОРЕХОВОЙ ПАСТОЙ",
      weight: "179 г",
      price: "210",
    },
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин с творожной начинкой",
      title: "БЛИН С ТВОРОЖНОЙ НАЧИНКОЙ И БАНАНОМ",
      weight: "249 г",
      price: "210",
    },
    {
      imageSrc: "/golden-pancakes.png",
      imageAlt: "Блин с печёной грушей",
      title: "БЛИН С ПЕЧЁНОЙ ГРУШЕЙ, МЁДОМ И ГРЕЦКИМ ОРЕХОМ",
      weight: "204 г",
      price: "290",
    },
  ],
}

export const croissants = {
  title: "КРУАССАНЫ",
  items: [
    { title: "КРУАССАН С ВЕТЧИНОЙ И СЫРОМ", weight: "175 г", price: "330" },
    { title: "КРУАССАН С ТОМАТАМИ, МОЦАРЕЛЛОЙ И СОУСОМ ПЕСТО", weight: "180 г", price: "290" },
    { title: "КРУАССАН С ФОРЕЛЬЮ, СЛИВОЧНЫМ СЫРОМ И РУКОЛОЙ", weight: "170 г", price: "420" },
    { title: "КРУАССАН С ШОКОЛАДОМ, БАНАНАНОМ И ГРЕЦКИМ ОРЕХОМ", weight: "160 г", price: "290" },
  ],
}

export const sandwiches = {
  title: "СЭНДВИЧИ",
  items: [
    { title: "ИТАЛЬЯНСКАЯ КАРТОФЕЛЬНАЯ ВАФЛЯ С СЫРОМ И ВЕТЧИНОЙ", weight: "187 г", price: "330" },
    { title: "ВАФЛЯ С ПЕЧЁНОЙ ГРУШЕЙ, МЁДОМ И ОРЕХАМИ", weight: "225 г", price: "345" },
    { title: "СЭНДВИЧ КРОК-МАДАМ", weight: "277 г", price: "410" },
    { title: "СЭНДВИЧ КРОК-МЕСЬЕ", weight: "237 г", price: "380" },
  ],
}

export const breakfasts = {
  title: "ЗАВТРАКИ",
  items: [
    { title: "ШАКШУКА «КЛАССИЧЕСКАЯ» С ХРУСТЯЩИМ ЛОМТИКАМИ ХЛЕБА", weight: "286 г", price: "262" },
    { title: "ЯИЧНИЦА-ГЛАЗУНЬЯ С ПИКАНТНОЙ СОСИСОЙ И ТОМАТАМИ", weight: "247 г", price: "310" },
    { title: "ОВОЩНАЯ ЯИЧНИЦА С ЧЕРРИ, СЛАДКИМ ПЕРЦЕМ, ЛУКОМ И ПАРМЕЗАНОМ", weight: "", price: "250" },
    {
      title: "КАША МУЛЬТИЗЛАКОВАЯ СО СВЕЖЕЙ КЛУБНИКОЙ И МАЛИНОВЫМ ВАРЕНЬЕМ",
      weight: "300 г",
      price: "310",
    },
    { title: "МИНИ-ЧИРКЕКИ СО СМЕТАНОЙ И МАЛИНОВЫМ ВАРЕНЬЕМ", weight: "210 г", price: "287" },
  ],
}

export const pizza = {
  title: "ПИЦЦА",
  items: [
    { title: "ПИЦЦА С ВЕТЧИНОЙ И СЫРОМ", weight: "310 г", price: "550" },
    { title: "ПИЦЦА «3 СЫРА»", weight: "365 г", price: "590" },
    { title: "ПИЦЦА С КУРИЦЕЙ, СЫРОМ И ТОМАТАМИ", weight: "400 г", price: "590" },
    { title: "ПИЦЦА С КОЛБАСКАМИ, БЕКОНОМ И СОЛЕНЬЯМИ", weight: "457 г", price: "620" },
  ],
}

export const dumplings = {
  title: "ПЕльмЕнИ и ВАрЕниКИ",
  titleMultiline: true,
  items: [
    { title: "ПЕЛЬМЕНИ С ГОВЯДИНОЙ И СВИНИНОЙ", weight: "275 г", price: "320" },
    { title: "ПЕЛЬМЕНИ С КУРИЦЕЙ", weight: "265 г", price: "307" },
    { title: "ВАРЕНИКИ С ТВОРОГОМ И СМЕТАНОЙ И СВЕЖИМИ ЯГОДАМИ", weight: "265 г", price: "237" },
    { title: "ВАРЕНИКИ ПОСТНЫЕ С КАРТОФЕЛЕМ", weight: "250 г", price: "215" },
  ],
}

export const mainDishes = {
  title: "ВтоРыЕ БлюДА",
  items: [
    { title: "ПАСТА «БОЛОНЬЕЗЕ»", weight: "290 г", price: "397" },
    { title: "СПАГЕТТИ «КАРБОНАРА»", weight: "282 г", price: "398" },
    { title: "ПАСТА С ШАМПИНЬОНАМИ И СЛИВОЧНЫМ СОУСОМ ИЗ БЕЛЫХ ГРИБОВ", weight: "255 г", price: "485" },
    { title: "ЛАЗАНЬЯ БОЛОНЬЕЗЕ", weight: "250 г", price: "397" },
    { title: "ВОК С КУРИЦЕЙ", weight: "300 г", price: "340" },
    { title: "МАКАРОНЫ ПОСТНЫЕ ПО-ФЛОТСКИ", weight: "300 г", price: "467" },
  ],
}
