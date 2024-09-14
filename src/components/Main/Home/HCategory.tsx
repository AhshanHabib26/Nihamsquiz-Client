import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import Container from "@/utils/Container";
import HCategoryCard from "./HCategoryCard";
import { TCategory } from "@/types/common.data";
import cloudImg from "../../../assets/icons/server.gif";
import MainLoader from "@/loader/MainLoader";

const HCategory = () => {
  const { data, isFetching } = useGetAllCategoriesQuery({});

  if (isFetching) {
    return (
      <div>
        <MainLoader />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Container>
        <h1 className="text-center mb-5 text-2xl hind-siliguri-semibold text-customPrimary">
          Quiz Category
        </h1>

        {data?.data && data.data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {data?.data?.map((category: TCategory) => (
              <HCategoryCard category={category} key={category._id} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img className="w-[150px]" src={cloudImg} alt="" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default HCategory;
