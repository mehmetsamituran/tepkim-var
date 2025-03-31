export const brands = Array.from({ length: 26 }, (_, i) => ({
  name: String.fromCharCode(65 + i) + ' Brand',
  logo: `https://via.placeholder.com/100/0000FF/FFFFFF?text=${String.fromCharCode(65 + i)}`,
  description: `This is a short description about ${String.fromCharCode(65 + i)} Brand. It is a well-known company that provides high-quality products.`,
}));