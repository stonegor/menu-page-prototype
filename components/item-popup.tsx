"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ItemPopupProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  title: string
  weight: string
  price: string
}

export function ItemPopup({ isOpen, onClose, imageSrc, imageAlt, title, weight, price }: ItemPopupProps) {
  const mockDescription =
    "Этот восхитительный блин приготовлен по традиционному рецепту с использованием только свежих ингредиентов высшего качества. Идеально подходит для завтрака или легкого обеда."

  const mockNutrition = {
    proteins: Math.floor(Math.random() * 15) + 8, // 8-22g
    fats: Math.floor(Math.random() * 12) + 5, // 5-16g
    carbs: Math.floor(Math.random() * 25) + 20, // 20-44g
    calories: Math.floor(Math.random() * 150) + 200, // 200-349 kcal
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto bg-[#f5f1e8] border-[#8B4513]/20 p-3 md:p-6">
        <DialogHeader className="pb-2 md:pb-4">
          <DialogTitle className="text-lg md:text-xl font-bold text-[#8B4513] uppercase font-title">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 md:space-y-4">
          {/* Mock Video Player */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8B4513]/20 to-[#8B4513]/40">
              <div className="text-center text-white">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 md:mb-2 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[8px] md:border-l-[12px] border-l-white border-y-[6px] md:border-y-[8px] border-y-transparent ml-1"></div>
                </div>
                <p className="text-xs md:text-sm">Видео приготовления</p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-3 md:space-y-4">
            <div className="space-y-1 md:space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-[#8B4513] font-semibold">Вес:</span>
                <span className="text-xs md:text-sm text-[#8B4513]">{weight}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-[#8B4513] font-semibold">Цена:</span>
                <span className="text-xl md:text-2xl font-bold text-[#8B4513]">{price} ₽</span>
              </div>
            </div>

            <div className="bg-[#8B4513]/5 rounded-lg p-2 md:p-3">
              <h4 className="text-xs md:text-sm font-semibold text-[#8B4513] mb-2 uppercase">
                Пищевая ценность на порцию
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8B4513]/80">Белки:</span>
                  <span className="text-[#8B4513] font-medium">{mockNutrition.proteins}г</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B4513]/80">Жиры:</span>
                  <span className="text-[#8B4513] font-medium">{mockNutrition.fats}г</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B4513]/80">Углеводы:</span>
                  <span className="text-[#8B4513] font-medium">{mockNutrition.carbs}г</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B4513]/80">Калории:</span>
                  <span className="text-[#8B4513] font-medium">{mockNutrition.calories} ккал</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#8B4513]/20 pt-2 md:pt-4">
              <h4 className="text-xs md:text-sm font-semibold text-[#8B4513] mb-1 md:mb-2 uppercase">Описание</h4>
              <p className="text-xs md:text-sm text-[#8B4513] leading-relaxed">{mockDescription}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
