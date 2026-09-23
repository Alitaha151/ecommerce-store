const BASE_URL = 'https://muhammadfarhandeveloper.github.io/E-Commerce-fakeapi';

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products.json`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/category.json`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
};

export const fetchProductById = async (id) => {
  const products = await fetchProducts();
  const product = products.find((p) => p.id === Number(id));
  if (!product) throw new Error('Product not found');
  return product;
};