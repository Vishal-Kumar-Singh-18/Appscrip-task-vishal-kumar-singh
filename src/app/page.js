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
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor</p>
      </section>
      <ProductSection products={products} />
    </main>
  );
}