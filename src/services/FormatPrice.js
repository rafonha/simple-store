export function formatPrice(number) {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(
        number,
      )
}