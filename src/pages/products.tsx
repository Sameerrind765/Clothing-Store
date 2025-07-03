import Card from '../components/card';
import ProductsData from "../data/products.json";

const imageImports = import.meta.glob('/public/products/*.jpg', { eager: true });
const imageMap: Record<string, string> = {};

Object.entries(imageImports).forEach(([path, mod]: [string, any]) => {
  const filename = path.split('/').pop()!;
  imageMap[filename] = mod.default;
});

const products = ProductsData.map((prod: any, index: number) => ({
  ...prod,
  id: prod.id ?? index + 1,
  image: prod.image[0],
}));

function Products({ start, end }: { start?: number; end?: number }) {
  const shownProducts = start !== undefined && end !== undefined
    ? products.slice(start, end)
    : products;

  return (
    <div className="m-5 container flex gap-8 justify-center flex-wrap">
      {shownProducts.map(product => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          alt={product.alt}
          colors={product.colors}
        />
      ))}
    </div>
  );
}

export default Products;