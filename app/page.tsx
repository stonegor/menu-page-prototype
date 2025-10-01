import { ItemCard } from "@/components/item-card"
import { ItemRow } from "@/components/item-row"
import { MenuSection } from "@/components/menu-section"
import { CoffeeSection } from "@/components/coffee-section"
import { CoffeeItemMultiSize } from "@/components/coffee-item-multi-size"
import { CoffeeItemSimple } from "@/components/coffee-item-simple"
import { AdditionalOptions } from "@/components/additional-options"
import {
  coffeeClassic,
  coffeeDecaf,
  coffeeDrinks,
  authorCoffee,
  authorLemonades,
  additionalOptions1,
  tea,
  milkshakes,
  additionalOptions2,
  pancakes,
  croissants,
  sandwiches,
  breakfasts,
  lunches,
  mainDishes,
} from "./menu-data"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] font-sans relative z-35">
      <div className="p-6 pt-8">
        <div className="max-w-4xl mx-auto">
          <div id="drinks">
            <CoffeeSection title={coffeeClassic.title} sizeHeaders={coffeeClassic.sizeHeaders}>
              {coffeeClassic.items.map((item, index) => (
                <CoffeeItemMultiSize
                  key={index}
                  title={item.title}
                  icons={item.icons}
                  subtitle={item.subtitle}
                  sizes={item.sizes}
                />
              ))}
            </CoffeeSection>

            <CoffeeSection title={coffeeDecaf.title} badge={coffeeDecaf.badge} sizeHeaders={coffeeDecaf.sizeHeaders}>
              <tr>
                <td colSpan={2} className="pb-4">
                  <div className="bg-[#e8dcc0] p-2 rounded-lg mb-2 h-auto flex items-center justify-center w-40">
                    <span className="text-[#8B4513] text-sm font-medium">НА КОНЦЕНТРАТЕ</span>
                  </div>
                </td>
              </tr>
              {coffeeDecaf.concentrateItems.map((item, index) => (
                <CoffeeItemSimple
                  key={index}
                  title={item.title}
                  icons={item.icons}
                  price={item.price}
                  volume={item.volume}
                />
              ))}
              <tr>
                <td colSpan={2} className="pt-4 pb-4">
                  <div className="bg-[#e8dcc0] p-2 rounded-lg mb-2 flex items-center justify-center w-40">
                    <span className="text-[#8B4513] text-sm font-medium">ИЗ ФИЛЬТР-ПАКЕТА</span>
                  </div>
                </td>
              </tr>
              {coffeeDecaf.filterItems.map((item, index) => (
                <CoffeeItemSimple key={index} title={item.title} price={item.price} volume={item.volume} />
              ))}
            </CoffeeSection>

            <CoffeeSection title={coffeeDrinks.title} sizeHeaders={coffeeDrinks.sizeHeaders}>
              {coffeeDrinks.items.map((item, index) => (
                <CoffeeItemMultiSize key={index} title={item.title} icons={item.icons} sizes={item.sizes} />
              ))}
            </CoffeeSection>

            <div id="author-coffee">
              <MenuSection title={authorCoffee.title}>
                <div className="space-y-4">
                  {authorCoffee.items.map((item, index) =>
                    item.image_url ? (
                      <ItemCard
                        key={index}
                        imageSrc={item.image_url}
                        imageAlt={item.title}
                        title={item.title}
                        weight={item.weight}
                        price={item.price}
                        description={item.description}
                        composition={item.composition}
                      />
                    ) : (
                      <ItemRow
                        key={index}
                        title={item.title}
                        weight={item.weight}
                        price={item.price}
                        description={item.description}
                        composition={item.composition}
                      />
                    ),
                  )}
                </div>
              </MenuSection>
            </div>

            <div id="author-lemonades">
              <MenuSection title={authorLemonades.title}>
                <div className="space-y-4">
                  {authorLemonades.items.map((item, index) =>
                    item.image_url ? (
                      <ItemCard
                        key={index}
                        imageSrc={item.image_url}
                        imageAlt={item.title}
                        title={item.title}
                        weight={item.weight}
                        price={item.price}
                        description={item.description}
                        composition={item.composition}
                      />
                    ) : (
                      <ItemRow
                        key={index}
                        title={item.title}
                        weight={item.weight}
                        price={item.price}
                        description={item.description}
                        composition={item.composition}
                      />
                    ),
                  )}
                </div>
              </MenuSection>
            </div>

            <AdditionalOptions options={additionalOptions1.options} freeSyrups={additionalOptions1.freeSyrups} />

            <CoffeeSection title={tea.title} sizeHeaders={tea.sizeHeaders}>
              {tea.items.map((item, index) => (
                <CoffeeItemMultiSize
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  icons={item.icons}
                  sizes={item.sizes}
                />
              ))}
            </CoffeeSection>

            <CoffeeSection title={milkshakes.title} sizeHeaders={milkshakes.sizeHeaders}>
              {milkshakes.items.map((item, index) => (
                <CoffeeItemMultiSize key={index} title={item.title} icons={item.icons} sizes={item.sizes} />
              ))}
            </CoffeeSection>

            <AdditionalOptions options={additionalOptions2.options} />
          </div>

          <div id="pancakes">
            <MenuSection title={pancakes.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pancakes.items.map((item, index) =>
                  item.image_url ? (
                    <ItemCard
                      key={index}
                      imageSrc={item.image_url}
                      imageAlt={item.title}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ) : (
                    <ItemRow
                      key={index}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ),
                )}
              </div>
            </MenuSection>
          </div>

          <div id="croissants">
            <MenuSection title={croissants.title}>
              <div className="space-y-4">
                {croissants.items.map((item, index) =>
                  item.image_url ? (
                    <ItemCard
                      key={index}
                      imageSrc={item.image_url}
                      imageAlt={item.title}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ) : (
                    <ItemRow
                      key={index}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ),
                )}
              </div>
            </MenuSection>
          </div>

          <div id="sandwiches">
            <MenuSection title={sandwiches.title}>
              <div className="space-y-4">
                {sandwiches.items.map((item, index) =>
                  item.image_url ? (
                    <ItemCard
                      key={index}
                      imageSrc={item.image_url}
                      imageAlt={item.title}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ) : (
                    <ItemRow
                      key={index}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ),
                )}
              </div>
            </MenuSection>
          </div>

          <div id="breakfasts">
            <MenuSection title={breakfasts.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {breakfasts.items.map((item, index) =>
                  item.image_url ? (
                    <ItemCard
                      key={index}
                      imageSrc={item.image_url}
                      imageAlt={item.title}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ) : (
                    <ItemRow
                      key={index}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ),
                )}
              </div>
            </MenuSection>
          </div>

          <div id="lunches">
            <MenuSection title={lunches.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lunches.items.map((item, index) =>
                  item.image_url ? (
                    <ItemCard
                      key={index}
                      imageSrc={item.image_url}
                      imageAlt={item.title}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ) : (
                    <ItemRow
                      key={index}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      description={item.description}
                      composition={item.composition}
                    />
                  ),
                )}
              </div>
            </MenuSection>
          </div>

          <div id="main-dishes">
            <MenuSection title={mainDishes.title}>
              {mainDishes.items.map((item, index) =>
                item.image_url ? (
                  <ItemCard
                    key={index}
                    imageSrc={item.image_url}
                    imageAlt={item.title}
                    title={item.title}
                    weight={item.weight}
                    price={item.price}
                    description={item.description}
                    composition={item.composition}
                  />
                ) : (
                  <ItemRow
                    key={index}
                    title={item.title}
                    weight={item.weight}
                    price={item.price}
                    description={item.description}
                    composition={item.composition}
                  />
                ),
              )}
            </MenuSection>
          </div>
        </div>
      </div>
    </div>
  )
}