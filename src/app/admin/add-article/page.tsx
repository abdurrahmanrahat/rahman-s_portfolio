"use client";

import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYForm from "@/components/Forms/MYForm";
import MYInput from "@/components/Forms/MYInput";
import { FieldValues } from "react-hook-form";

const image_hoisting_token = process.env.NEXT_PUBLIC_imgBB_token;
console.log(image_hoisting_token);

const AddArticle = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  const handleAddArticle = (values: FieldValues) => {
    console.log(values);

    const formData = new FormData();
    formData.append("image", values.image);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const image = imgResponse.data.display_url;
          console.log(image);
          // add article to db
        }
      });
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
