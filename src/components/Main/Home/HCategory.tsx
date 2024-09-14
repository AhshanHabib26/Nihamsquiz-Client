import { DashboardLoader } from "@/loader/DashboardLoader";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import Container from "@/utils/Container";
import HCategoryCard from "./HCategoryCard";
import { TCategory } from "@/types/common.data";

const HCategory = () => {
  const { data, isFetching } = useGetAllCategoriesQuery({});

  if (isFetching) {
    return (
      <div>
        <DashboardLoader />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Container>
        <h1 className="text-center mb-5 text-2xl hind-siliguri-semibold text-customPrimary">
          Quiz Category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {data?.data?.map((category: TCategory) => (
            <HCategoryCard category={category} key={category._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HCategory;
