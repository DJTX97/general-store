import ProductPage from "@/pages/ProductPage";
import { fetchData } from "@/utils/dataFetchingKit";
import { getRandomReviewCount } from "@/utils/dataFakerKit";
import { redirect } from "next/navigation";

interface Params {
  category: string;
  product: string[];
}

export default async function Product({ params }: { params: Params }) {
  const product = await fetchData(
    `https://dummyjson.com/products/${params.product[0]}`,
    { reviewCount: getRandomReviewCount(10) }
  );

  const categories = await fetchData(
    "https://dummyjson.com/products/categories"
  );
  // console.log(params);
  // console.log(product);

  if (params.product.length > 1 || !categories.includes(params.category)) {
    redirect(`/products/${product.category}/${product.id}`);
  }

  return <ProductPage params={params} product={product} />;
}
