import Category from "@/components/category/Category";
import ProductGrid from "@/components/grid/ProductGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-grow bg-white">
      <Category/>
      <ProductGrid/>
    </div>
  );
}
