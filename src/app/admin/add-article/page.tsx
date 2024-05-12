"use client";

import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYForm from "@/components/Forms/MYForm";
import MYInput from "@/components/Forms/MYInput";
import { FieldValues } from "react-hook-form";

const AddArticle = () => {
  const handleAddArticle = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen py-20 w-full max-w-[600px] mx-auto">
      {/* title */}
      <div className="text-center">
        <span className="text-[24px] font-semibold uppercase border-b-2 border-primary">
          Add Article
        </span>
      </div>

      {/* form */}
      <MYForm
        onSubmit={handleAddArticle}
        defaultValues={{
          image: "",
          title: "",
          desc: "",
        }}
      >
        <div className="m-8 space-y-3">
          <div>
            <label htmlFor="email" className="block mb-2 text-md">
              Article Image
            </label>
            <MYFileUploader name="image" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md">
              Article Title
            </label>
            <MYInput name="value" placeholder="Enter title" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md">
              Article Description
            </label>
            <MYInput name="category" placeholder="Enter description" />
          </div>
        </div>

        <div className="mx-8">
          <input
            className="bg-text w-full rounded-md py-3 text-white cursor-pointer"
            type="submit"
            value="Add Article"
          />
        </div>
      </MYForm>
    </div>
  );
};

export default AddArticle;
