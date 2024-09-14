/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { TResponse } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardLoader } from "@/loader/DashboardLoader";
import {
  useCreateCategoryMutation,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/features/category/categoryApi";

export const CreateCategoryPage = () => {
  const [imageError, setImageError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [postId, setPostId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Fetch single post data if ID is available
  const { data: category, isFetching: isFetchingPost } = useGetSingleCategoryQuery(
    id || "",
    {
      skip: !id,
    }
  );

  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  // Set form fields when post data is fetched
  useEffect(() => {
    if (category) {
      setName(category?.data?.name || "");
      setDescription(category?.data?.description || "");
      setImagePreview(category?.data?.image || "");
      setPostId(category?.data?._id || null);
      setImageUrl(category?.data?.imageUrl || null);
      setImage(null);
    }
  }, [category]);

  // Handle file input change
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.currentTarget.files?.[0];
      if (!file) return;

      // Validate file size and type
      if (file.size > 1048576) {
        setImageError("File size exceeds 1MB");
        return;
      }

      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setImageError("Invalid file type");
        return;
      }

      setImageError(null);
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    },
    []
  );

  // Remove image preview
  const removeImage = useCallback(() => {
    setImage(null);
    setImagePreview(null);
  }, []);

  // Quill editor modules
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  if (isFetchingPost) {
    return <DashboardLoader />;
  }

  // Handle form submission
  const handleSubmit = async () => {
    if (!name || !description) {
      toast.error("Please fill in all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("imageUrl", imageUrl);

    if (image) {
      formData.append("file", image);
    }

    const toastId = toast.loading(
      postId ? "Category updating..." : "Category creating..."
    );

    try {
      const response = postId
        ? ((await updateCategory({
            id: postId,
            data: formData,
          })) as TResponse<any>)
        : ((await createCategory(formData)) as TResponse<any>);

      if (response.error) {
        toast.error(response.error.data.message, {
          id: toastId,
          duration: 1500,
        });
      } else {
        toast.success(
          postId ? "Post updated successfully" : "Post created successfully",
          {
            id: toastId,
            duration: 1000,
          }
        );
        resetForm();
        navigate("/dashboard/all-category");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(`Error: ${errorMessage}`, { id: toastId, duration: 1500 });
    }
  };

  // Reset form fields
  const resetForm = () => {
    setImage(null);
    setImagePreview(null);
    setDescription("");
    setName("");
    setPostId(null);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
        {!imagePreview && (
          <div className="flex justify-center items-center">
            <input
              id="images"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="images"
              className="cursor-pointer bg-slate-700 text-white px-4 py-3 rounded shadow hover:bg-slate-600"
            >
              Choose a file
            </label>
          </div>
        )}

        {imageError && <p className="text-sm text-red-600">{imageError}</p>}

        {imagePreview && (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-[800px] h-[250px] rounded-lg"
            />
            <button
              onClick={removeImage}
              className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1"
              aria-label="Remove Image"
            >
              <Trash2 className="text-red-500" />
            </button>
          </div>
        )}
      </div>
      <div>
        <Input
          className="h-[50px] mt-5"
          placeholder="Enter image URL ( Leave empty if uploading a file)"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="my-5">
        <Input
          className="h-[50px]"
          type="text"
          placeholder="Category Name"
          aria-label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <ReactQuill
          modules={modules}
          theme="snow"
          value={description}
          onChange={setDescription}
          className="h-[250px] flex flex-1 flex-col"
        />
      </div>
      <div className="mt-20 lg:mt-14">
        <Button type="button" onClick={handleSubmit} size="lg">
          {postId ? "Update Category" : "Add Category"}
        </Button>
      </div>
    </div>
  );
};
