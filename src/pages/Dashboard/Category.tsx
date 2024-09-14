/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaginationCard } from "@/components/Dashboard/PaginationCard";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardLoader } from "@/loader/DashboardLoader";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/redux/features/category/categoryApi";
import { TResponse } from "@/types";
import { TCategory } from "@/types/common.data";
import { Eye, HardDrive, ListPlus, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const AllCategoryPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isFetching } = useGetAllCategoriesQuery({ page, limit });
  const total = data?.meta?.total ?? 0;
  const [deleteCategory] = useDeleteCategoryMutation();

  const deleteHandler = async (id: string) => {
    const toastId = toast.loading("Deleting...");

    try {
      const res = (await deleteCategory(id)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId, duration: 1500 });
      } else {
        toast.success("Category deleted successfully", {
          id: toastId,
          duration: 1000,
        });
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? `Error: ${err.message}` : "Something went wrong";
      toast.error(errorMessage, { id: toastId, duration: 1500 });
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/dashboard/create-category/${id}`);
  };

  const renderTableRows = () => {
    return data?.data?.map((item: TCategory) => (
      <TableRow key={item._id}>
        <TableCell>
          <div className="flex items-center gap-2">
            {item.image === null ? (
              <img src={item.imageUrl} className="w-8" />
            ) : (
              <img src={item.image} className="w-8" />
            )}
            {item.name}
          </div>
        </TableCell>
        <TableCell className="flex items-center gap-3 justify-end cursor-pointer">
          <Eye size={20} color="#363636" />
          <SquarePen
            onClick={() => handleEdit(item._id)}
            size={20}
            color="green"
          />
          <Trash2
            onClick={() => deleteHandler(item._id)}
            size={20}
            color="red"
          />
        </TableCell>
      </TableRow>
    ));
  };

  if (isFetching) {
    return (
      <div>
        <DashboardLoader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-end justify-end">
        <Link
          to="/dashboard/create-category"
          className="flex items-center bg-black text-white px-4 py-3 gap-2 rounded-lg text-md"
        >
          <ListPlus />
          Add Category
        </Link>
      </div>
      <div>
        <Separator className="my-5" />
        {data?.data?.length === 0 ? (
          <div className="flex items-center justify-center flex-col mt-20">
            <HardDrive size={40} className=" text-gray-400" />
            <h1 className="text-gray-400">No Category Found</h1>
          </div>
        ) : (
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{renderTableRows()}</TableBody>
            </Table>
            <div className="my-5">
              <PaginationCard
                page={page}
                limit={limit}
                total={total}
                onPageChange={(newPage) => setPage(newPage)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
