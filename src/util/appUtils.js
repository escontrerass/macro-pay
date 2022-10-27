export function priceCal(price, discount) {
  return price - price * (discount / 100)
}

export function categoryName(category) {
  switch (category) {
    case 1:
      return 'Celulares'
      break
    case 2:
      return 'Tablets'
      break
    case 3:
      return 'Motos'
      break
    default:
      break
  }
}
