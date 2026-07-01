import React from 'react';
import ProductLists from '../components/ProductLists';

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <ProductLists category={category} params="products" />
    </div>
  );
};

export default ProductsPage;
