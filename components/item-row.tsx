interface ItemRowProps {
  title: string
  weight: string
  price: string
}

export function ItemRow({ title, weight, price }: ItemRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-0">
      <span className="text-sm font-semibold text-[#8B4513] uppercase">{title}</span>
      <span className="text-xs text-[#8B4513] sm:text-right">
        {weight} <span className="text-lg font-bold ml-2">{price} ₽</span>
      </span>
    </div>
  )
}
