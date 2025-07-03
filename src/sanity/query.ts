export const allProductsQuery = `*[_type == "product"]{
  _id, name, price, colors,
  image { asset->{url} }
}`;