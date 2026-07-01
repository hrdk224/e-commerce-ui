import Image from 'next/image';
import ProductLists from './components/ProductLists';

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-3/1 mb-12">
        <Image src="/featured.png" alt="hero banner" fill />
      </div>
      <ProductLists category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
