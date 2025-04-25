import styles from './page.module.css';
import ProductSection from '../components/ProductSection';

async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Page() {
  const products = await fetchProducts();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Discover Our Products</h1>
        <p>Explore our latest collections and find the perfect product for you.</p>
      </section>
      <ProductSection products={products} />
    </main>
  );
}