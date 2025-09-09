import { ItemCard } from "@/components/item-card"
import { ItemRow } from "@/components/item-row"
import { MenuSection } from "@/components/menu-section"
import { CoffeeSection } from "@/components/coffee-section"
import { CoffeeItemMultiSize } from "@/components/coffee-item-multi-size"
import { CoffeeItemSimple } from "@/components/coffee-item-simple"
import { AdditionalOptions } from "@/components/additional-options"
import { withBasePath } from "@/lib/utils"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] font-sans relative z-35">
      <div className="p-6 pt-8">
        <div className="max-w-4xl mx-auto">
          <div id="drinks">
            <CoffeeSection title="КоФейНаЯ КлАссИкА" sizeHeaders={["40мл", "300мл", "400мл", "500мл"]}>
              <CoffeeItemMultiSize
                title="ДВОЙНОЙ ЭСПРЕССО"
                sizes={[{ size: "40мл", price: "150" }, { size: "300мл" }, { size: "400мл" }, { size: "500мл" }]}
              />
              <CoffeeItemMultiSize
                title="АМЕРИКАНО"
                icons={["V", "L"]}
                sizes={[
                  { size: "40мл" },
                  { size: "300мл", price: "180" },
                  { size: "400мл", price: "200" },
                  { size: "500мл" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ФИЛЬТР-КОФЕ"
                sizes={[{ size: "40мл" }, { size: "300мл", price: "250" }, { size: "400мл" }, { size: "500мл" }]}
              />
              <CoffeeItemMultiSize
                title="КАПУЧИНО / ЛАТТЕ"
                icons={["V", "L", "G", "N"]}
                sizes={[
                  { size: "40мл" },
                  { size: "300мл", price: "220" },
                  { size: "400мл", price: "250" },
                  { size: "500мл", price: "270" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ЛАТТЕ с арахисовой пастой"
                icons={["N"]}
                sizes={[{ size: "40мл" }, { size: "300мл", price: "250" }, { size: "400мл" }, { size: "500мл" }]}
              />
              <CoffeeItemMultiSize
                title="МОККАЧИНО / ФЛЭТ УАЙТ"
                icons={["G", "N"]}
                sizes={[{ size: "40мл" }, { size: "300мл", price: "230" }, { size: "400мл" }, { size: "500мл" }]}
              />
              <CoffeeItemMultiSize
                title="КАКАО классическое"
                icons={["G", "N"]}
                sizes={[
                  { size: "40мл" },
                  { size: "300мл", price: "200" },
                  { size: "400мл", price: "260" },
                  { size: "500мл" },
                ]}
              />
              <CoffeeItemMultiSize
                title="РАФ"
                icons={["G"]}
                subtitle="классический /лавандовый / «Солёная карамель» / фисташковый / апельсиновый"
                sizes={[
                  { size: "40мл" },
                  { size: "300мл", price: "300" },
                  { size: "400мл", price: "340" },
                  { size: "500мл" },
                ]}
              />
              <CoffeeItemMultiSize
                title="РАФ «Халва»"
                icons={["G"]}
                sizes={[
                  { size: "40мл" },
                  { size: "300мл", price: "340" },
                  { size: "400мл", price: "380" },
                  { size: "500мл" },
                ]}
              />
            </CoffeeSection>

            <CoffeeSection title="КоФЕ БеЗ КоФеиНА" badge="новинка" sizeHeaders={["300 мл"]}>
              <tr>
                <td colSpan={2} className="pb-4">
                  <div className="bg-[#e8dcc0] p-2 rounded-lg mb-2 h-auto flex items-center justify-center w-40">
                    <span className="text-[#8B4513] text-sm font-medium">НА КОНЦЕНТРАТЕ</span>
                  </div>
                </td>
              </tr>
              <CoffeeItemSimple title="АМЕРИКАНО (декаф)" icons={["V", "L"]} price="360" volume="300 мл" />
              <CoffeeItemSimple
                title="КОФЕЙНЫЙ НАПИТОК С МОЛОКОМ (декаф)"
                icons={["V", "L", "G", "N"]}
                price="380"
                volume="300 мл"
              />
              <tr>
                <td colSpan={2} className="pt-4 pb-4">
                  <div className="bg-[#e8dcc0] p-2 rounded-lg mb-2 flex items-center justify-center w-40">
                    <span className="text-[#8B4513] text-sm font-medium">ИЗ ФИЛЬТР-ПАКЕТА</span>
                  </div>
                </td>
              </tr>
              <CoffeeItemSimple title="ЧЁРНЫЙ КОФЕ (декаф)" price="160" volume="300 мл" />
            </CoffeeSection>

            <CoffeeSection title="КОфейНыЕ НАпИткИ" sizeHeaders={["300 мл", "400 мл"]}>
              <CoffeeItemMultiSize
                title="ЭСПРЕССО-ТОНИК классический"
                icons={["L"]}
                sizes={[{ size: "300мл", price: "240" }, { size: "400мл" }]}
              />
              <CoffeeItemMultiSize
                title="ДЖУС-КОФЕ"
                icons={["V", "L"]}
                sizes={[{ size: "300мл", price: "360" }, { size: "400мл" }]}
              />
              <CoffeeItemMultiSize
                title="ДЖУС-КОФЕ на грейпфрутовом соке"
                icons={["V", "L"]}
                sizes={[{ size: "300мл", price: "480" }, { size: "400мл" }]}
              />
              <CoffeeItemMultiSize
                title="ДЖУС-КОФЕ на гранатовом соке"
                icons={["V", "L"]}
                sizes={[{ size: "300мл", price: "380" }, { size: "400мл" }]}
              />
            </CoffeeSection>

            <div id="author-coffee">
              <MenuSection title="АВТОРСКИЕ КОФЕЙНЫЕ НАПИТКИ">
                <div className="space-y-4">
                  <ItemRow title="АЙС-КОФЕ «Фраппучино с карамелью»" weight="400 мл" price="260" />
                  <ItemRow title="АЙС-КОФЕ «КОЛА»" weight="400 мл" price="280" />
                  <ItemRow title="АЙС-КОФЕ «ХАЛВА» / «АРАХИС»" weight="400 мл" price="300" />
                  <ItemRow title="ЭССПРЕССО-ТОНИК «Грейпфрут-Лаванда»" weight="400 мл" price="360" />
                  <ItemRow title="КОФЕ ГЛЯСЕ с фисташковой крошкой" weight="400 мл" price="340" />
                </div>
              </MenuSection>
            </div>

            <div id="author-lemonades">
              <MenuSection title="АВТОРСКИЕ ЛИМОНАДЫ">
                <div className="space-y-4">
                  <ItemRow title="«личи-ДРАГОНФРУТ»" weight="400 мл" price="300" />
                  <ItemRow title="«ГУАНАБАНА С МЯТОЙ»" weight="400 мл" price="280" />
                  <ItemRow title="НАПИТОК ШЕРБЕТ Гуанабана с мятой" weight="400 мл" price="300" />
                  <ItemRow title="НАПИТОК КОФЕЙНЫЙ «Время Лайма»" weight="400 мл" price="320" />
                  <ItemRow title="НАПИТОК «Карибский Ананас»" weight="400 мл" price="260" />
                </div>
              </MenuSection>
            </div>

            <AdditionalOptions
              options={[
                { title: "ДОП. ШОТ ЭСПРЕССО / ДОП. МАТЧА", price: "+60" },
                { title: "ДОП. ВЗРЫВНАЯ КАРАМЕЛЬ «Апельсин»", price: "+60" },
                { title: "ДОП. ВЗБИТЫЕ СЛИВКИ", price: "+70" },
                { title: "СИРОП «ФИСТАШКА»", price: "+20" },
                { title: "АПЕЛЬСИНОВАЯ ПАСТА / ТОПИНГ «СОЛЁНАЯ КАРАМЕЛЬ»", price: "+30" },
                { title: "КЛЕНОВЫЙ СИРОП", price: "+70" },
              ]}
              freeSyrups="БЕСПЛАТНЫЕ СИРОПЫ: банан / ваниль / карамель / кокос / макадамия / миндаль"
            />

            <CoffeeSection title="ЧАй" sizeHeaders={["300 мл", "400 мл"]}>
              <CoffeeItemMultiSize
                title="ЧАЙ ЛИСТОВОЙ"
                subtitle="чёрный классический / «Эрл Грей» зелёный классический / «Грин Жасмин»"
                sizes={[
                  { size: "300мл", price: "120" },
                  { size: "400мл", price: "120" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ЧАЙ ЛИСТОВОЙ «Молочный улун»"
                sizes={[
                  { size: "300мл", price: "140" },
                  { size: "400мл", price: "140" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ЧАЙ ЧЁРНЫЙ «Марокканский»"
                sizes={[
                  { size: "300мл", price: "180" },
                  { size: "400мл", price: "180" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ЧАЙ ЧЁРНЫЙ «Вкус столицы»"
                sizes={[
                  { size: "300мл", price: "260" },
                  { size: "400мл", price: "260" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ЛАТТЕ-МАТЧА"
                icons={["V", "L", "G", "N"]}
                sizes={[
                  { size: "300мл", price: "180" },
                  { size: "400мл", price: "180" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ЛАТТЕ-МАТЧА розовый «Таро-пинк»"
                icons={["V", "L", "G", "N"]}
                sizes={[
                  { size: "300мл", price: "320" },
                  { size: "400мл", price: "320" },
                ]}
              />
              <CoffeeItemMultiSize
                title="АЙС-МАТЧА с клубникой"
                icons={["V", "G", "N"]}
                sizes={[
                  { size: "300мл", price: "280" },
                  { size: "400мл", price: "280" },
                ]}
              />
            </CoffeeSection>

            <CoffeeSection title="МоЛоЧнЫЕ КоКТейЛИ с БананоМ" sizeHeaders={["300 мл", "400 мл"]}>
              <CoffeeItemMultiSize
                title="С МОРОЖЕНЫМ"
                sizes={[
                  { size: "300мл", price: "210" },
                  { size: "400мл", price: "210" },
                ]}
              />
              <CoffeeItemMultiSize
                title="КЛУБНИЧНЫЙ / С МАНГО"
                icons={["G", "N"]}
                sizes={[
                  { size: "300мл", price: "260" },
                  { size: "400мл", price: "260" },
                ]}
              />
              <CoffeeItemMultiSize
                title="ШОКОЛАДНЫЙ"
                sizes={[
                  { size: "300мл", price: "280" },
                  { size: "400мл", price: "280" },
                ]}
              />
            </CoffeeSection>

            <AdditionalOptions
              options={[
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
              ]}
            />
          </div>

          <div id="pancakes">
            <MenuSection title="БЛиНы">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин с ветчиной и сыром"
                  title="БЛИН С ВЕТЧИНОЙ И СЫРОМ"
                  weight="195 г"
                  price="250"
                />
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин с курицей и сыром"
                  title="БЛИН С КУРИЦЕЙ И СЫРОМ"
                  weight="194 г"
                  price="250"
                />
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин Цезарь"
                  title="БЛИН «ЦЕЗАРЬ»"
                  weight="239 г"
                  price="300"
                />
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин с форелью"
                  title="БЛИН С ФОРЕЛЬЮ, СЛИВОЧНЫМ СЫРОМ И РУКОЛОЙ"
                  weight="199 г"
                  price="380"
                />
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин с варёной сгущёнкой"
                  title="БЛИН С ВАРЁНОЙ СГУЩЁНКОЙ И ГРЕЦКИМ ОРЕХОМ"
                  weight="129 г"
                  price="100"
                />
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин со свежим бананом"
                  title="БЛИН СО СВЕЖИМ БАНАНОМ И ОРЕХОВОЙ ПАСТОЙ"
                  weight="179 г"
                  price="210"
                />
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин с творожной начинкой"
                  title="БЛИН С ТВОРОЖНОЙ НАЧИНКОЙ И БАНАНОМ"
                  weight="249 г"
                  price="210"
                />
                <ItemCard
                  imageSrc={withBasePath("/golden-pancakes.png")}
                  imageAlt="Блин с печёной грушей"
                  title="БЛИН С ПЕЧЁНОЙ ГРУШЕЙ, МЁДОМ И ГРЕЦКИМ ОРЕХОМ"
                  weight="204 г"
                  price="290"
                />
              </div>
            </MenuSection>
          </div>

          <div id="croissants">
            <MenuSection title="КРУАССАНЫ">
              <div className="space-y-4">
                <ItemRow title="КРУАССАН С ВЕТЧИНОЙ И СЫРОМ" weight="175 г" price="330" />
                <ItemRow title="КРУАССАН С ТОМАТАМИ, МОЦАРЕЛЛОЙ И СОУСОМ ПЕСТО" weight="180 г" price="290" />
                <ItemRow title="КРУАССАН С ФОРЕЛЬЮ, СЛИВОЧНЫМ СЫРОМ И РУКОЛОЙ" weight="170 г" price="420" />
                <ItemRow title="КРУАССАН С ШОКОЛАДОМ, БАНАНАНОМ И ГРЕЦКИМ ОРЕХОМ" weight="160 г" price="290" />
              </div>
            </MenuSection>
          </div>

          <div id="sandwiches">
            <MenuSection title="СЭНДВИЧИ">
              <div className="space-y-4">
                <ItemRow title="ИТАЛЬЯНСКАЯ КАРТОФЕЛЬНАЯ ВАФЛЯ С СЫРОМ И ВЕТЧИНОЙ" weight="187 г" price="330" />
                <ItemRow title="ВАФЛЯ С ПЕЧЁНОЙ ГРУШЕЙ, МЁДОМ И ОРЕХАМИ" weight="225 г" price="345" />
                <ItemRow title="СЭНДВИЧ КРОК-МАДАМ" weight="277 г" price="410" />
                <ItemRow title="СЭНДВИЧ КРОК-МЕСЬЕ" weight="237 г" price="380" />
              </div>
            </MenuSection>
          </div>

          <div id="breakfasts">
            <MenuSection title="ЗАВТРАКИ">
              <div className="space-y-4">
                <ItemRow title="ШАКШУКА «КЛАССИЧЕСКАЯ» С ХРУСТЯЩИМ ЛОМТИКАМИ ХЛЕБА" weight="286 г" price="262" />
                <ItemRow title="ЯИЧНИЦА-ГЛАЗУНЬЯ С ПИКАНТНОЙ СОСИСОЙ И ТОМАТАМИ" weight="247 г" price="310" />
                <ItemRow title="ОВОЩНАЯ ЯИЧНИЦА С ЧЕРРИ, СЛАДКИМ ПЕРЦЕМ, ЛУКОМ И ПАРМЕЗАНОМ" weight="" price="250" />
                <ItemRow
                  title="КАША МУЛЬТИЗЛАКОВАЯ СО СВЕЖЕЙ КЛУБНИКОЙ И МАЛИНОВЫМ ВАРЕНЬЕМ"
                  weight="300 г"
                  price="310"
                />
                <ItemRow title="МИНИ-ЧИРКЕКИ СО СМЕТАНОЙ И МАЛИНОВЫМ ВАРЕНЬЕМ" weight="210 г" price="287" />
              </div>
            </MenuSection>
          </div>

          <div id="pizza">
            <MenuSection title="ПИЦЦА">
              <div className="space-y-4">
                <ItemRow title="ПИЦЦА С ВЕТЧИНОЙ И СЫРОМ" weight="310 г" price="550" />
                <ItemRow title="ПИЦЦА «3 СЫРА»" weight="365 г" price="590" />
                <ItemRow title="ПИЦЦА С КУРИЦЕЙ, СЫРОМ И ТОМАТАМИ" weight="400 г" price="590" />
                <ItemRow title="ПИЦЦА С КОЛБАСКАМИ, БЕКОНОМ И СОЛЕНЬЯМИ" weight="457 г" price="620" />
              </div>
            </MenuSection>
          </div>

          <div id="dumplings">
            <MenuSection title="ПЕльмЕнИ и ВАрЕниКИ" titleMultiline={true}>
              <ItemRow title="ПЕЛЬМЕНИ С ГОВЯДИНОЙ И СВИНИНОЙ" weight="275 г" price="320" />
              <ItemRow title="ПЕЛЬМЕНИ С КУРИЦЕЙ" weight="265 г" price="307" />
              <ItemRow title="ВАРЕНИКИ С ТВОРОГОМ И СМЕТАНОЙ И СВЕЖИМИ ЯГОДАМИ" weight="265 г" price="237" />
              <ItemRow title="ВАРЕНИКИ ПОСТНЫЕ С КАРТОФЕЛЕМ" weight="250 г" price="215" />
            </MenuSection>
          </div>

          <div id="main-dishes">
            <MenuSection title="ВтоРыЕ БлюДА">
              <ItemRow title="ПАСТА «БОЛОНЬЕЗЕ»" weight="290 г" price="397" />
              <ItemRow title="СПАГЕТТИ «КАРБОНАРА»" weight="282 г" price="398" />
              <ItemRow title="ПАСТА С ШАМПИНЬОНАМИ И СЛИВОЧНЫМ СОУСОМ ИЗ БЕЛЫХ ГРИБОВ" weight="255 г" price="485" />
              <ItemRow title="ЛАЗАНЬЯ БОЛОНЬЕЗЕ" weight="250 г" price="397" />
              <ItemRow title="ВОК С КУРИЦЕЙ" weight="300 г" price="340" />
              <ItemRow title="МАКАРОНЫ ПОСТНЫЕ ПО-ФЛОТСКИ" weight="300 г" price="467" />
            </MenuSection>
          </div>
        </div>
      </div>
    </div>
  )
}
