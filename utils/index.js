export const formatMoney = (price) => {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price);
}