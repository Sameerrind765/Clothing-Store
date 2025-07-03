import { useEffect, useState } from "react";
import { client } from "../sanity/client"; // Adjust the path as needed

type Product = {
    _id: string;
    title: string;
    price: number;
    image: {
        asset: {
            url: string;
        };
    };
};

export default function TestSanity() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        client
            .fetch<Product[]>(
                `*[_type == "production"]{ _id, title, price, image { asset->{url} } }`,
                {},
                { signal: controller.signal }
            )
            .then((data: Product[]) => {
                setProducts(data);
                setLoading(false);
                console.log("Fetched products:", data);
            })
            .catch((err: unknown) => {
                if (err instanceof Error && err.name !== "AbortError") {
                    console.error("Sanity fetch failed:", err);
                    console.log("Error details:", err);
                }
                setLoading(false);
            });

        return () => {
            controller.abort(); // cleanup
        };
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Fetched Products</h1>

            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <ul className="space-y-2">
                    {products.map((product) => (
                        <li key={product._id} className="p-4 border rounded shadow">
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            <p className="text-gray-700">Price: Rs {product.price}</p>
                            <img src={product.image.asset.url} alt={product.title} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
