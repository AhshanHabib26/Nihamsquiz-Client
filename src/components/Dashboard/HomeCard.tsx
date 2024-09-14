import { CategoryLoader } from "@/loader/CategoryLoader";
import { useGetAllUsersQuery } from "@/redux/features/auth/authApi";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";

export const HomeCard = () => {
  const { data: category, isFetching: isFetchingCategory } =
    useGetAllCategoriesQuery("");
  const { data: post, isFetching: isFetchingPost } = useGetAllQuizQuery("");
  const { data: user, isFetching: isFetchingUser } = useGetAllUsersQuery("");

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="bg-green-300 p-10 text-center rounded-lg select-none">
        {isFetchingPost ? (
          <CategoryLoader />
        ) : (
          <p className="text-xl hind-siliguri-regular text-gray-700">
            {post?.data?.length}
          </p>
        )}
        <h1 className="text-xl hind-siliguri-regular text-gray-700 ">
          Total Post
        </h1>
      </div>
      <div className="bg-orange-300 p-10 text-center rounded-lg select-none">
        {isFetchingCategory ? (
          <CategoryLoader />
        ) : (
          <p className="text-xl hind-siliguri-regular text-gray-700">
            {category?.data?.length}
          </p>
        )}
        <h1 className="text-xl hind-siliguri-regular text-gray-700">
          Total Category
        </h1>
      </div>
      <div className="bg-slate-300 p-10 text-center rounded-lg select-none">
        <p className="text-xl hind-siliguri-regular text-gray-700">0</p>
        <h1 className="text-xl hind-siliguri-regular text-gray-700">
          Total Comment
        </h1>
      </div>
      <div className="bg-blue-300 p-10 text-center rounded-lg select-none">
        {isFetchingUser ? (
          <CategoryLoader />
        ) : (
          <p className="text-xl hind-siliguri-regular text-gray-700">
            {user?.data?.length}
          </p>
        )}
        <h1 className="text-xl hind-siliguri-regular text-gray-700">
          Total User
        </h1>
      </div>
    </div>
  );
};
