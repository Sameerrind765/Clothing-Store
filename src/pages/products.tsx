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

type ProductsProps = {
  size?: string[];
  type?: string[];
  price?: { min: string; max: string };
  color?: string[];
  gender?: string[];
  start?: number;
  end?: number;
  search?: string; 
};

function Products({
  size = [],
  type = [],
  price = { min: '', max: '' },
  color = [],
  gender = [], // <-- Add this line
  start,
  end
}: ProductsProps) {
  let filteredProducts = products;

  if (size.length > 0) {
    filteredProducts = filteredProducts.filter(p =>
      Array.isArray(p.size) && p.size.some((sz: number | string) => size.includes(String(sz)))
    );
  }
  if (type.length > 0) {
    filteredProducts = filteredProducts.filter(p => type.includes(p.type));
  }
  if (color.length > 0) {
    filteredProducts = filteredProducts.filter(p =>
      p.colors && p.colors.some((c: string) => color.includes(c))
    );
  }
  if (gender.length > 0) {
    filteredProducts = filteredProducts.filter(p =>
      gender.includes(String(p.gender).toLowerCase())
    );
  }
  if (price.min) {
    filteredProducts = filteredProducts.filter(p => p.price >= Number(price.min));
  }
  if (price.max) {
    filteredProducts = filteredProducts.filter(p => p.price <= Number(price.max));
  }

  // Apply start/end slicing if provided
  const shownProducts =
    typeof start === "number" && typeof end === "number"
      ? filteredProducts.slice(start, end)
      : filteredProducts;

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