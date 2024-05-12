"use client";

import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYForm from "@/components/Forms/MYForm";
import MYInput from "@/components/Forms/MYInput";
import MYTextArea from "@/components/Forms/MYTextArea";
import { useCreateProjectIntoDbMutation } from "@/redux/api/projectsApi";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

export const defaultProjectValue = {
  projectName: "",
  projectImage: null,
  shortDesc: "",
  features: {
    one: "",
    two: "",
    three: "",
  },
  technology: "",
  liveLink: "",
  githubClient: "",
  githubServer: "",
};

const image_hoisting_token = process.env.NEXT_PUBLIC_imgBB_token;

const AddProject = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  const [createProjectIntoDb] = useCreateProjectIntoDbMutation();

  const handleAddProject = (values: FieldValues) => {
    const formData = new FormData();
    formData.append("image", values.projectImage);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgResponse) => {
        if (imgResponse.success) {
          const image = imgResponse.data.display_url;

          values.projectImage = image;
          console.log(values);

          // send to db
          try {
            const res = await createProjectIntoDb(values).unwrap();
            console.log(res);

            if (res.success) {
              toast.success(res?.message);
            }
          } catch (error: any) {
            console.error(error.message);
          }
        }
      });
  };

  return (
    <div className="min-h-screen py-20 w-full">
      {/* title */}
      <div className="text-center">
        <span className="text-[24px] font-semibold uppercase border-b-2 border-primary">
          Add Project
        </span>
      </div>

      {/* form */}
      <MYForm onSubmit={handleAddProject} defaultValues={defaultProjectValue}>
        <div className="m-8 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 ">
            <label htmlFor="email" className="block mb-2 text-md">
              Project Image
            </label>
            <MYFileUploader name="projectImage" />
          </div>

          <div className="col-span-12 md:col-span-6">
            <label htmlFor="email" className="block mb-2 text-md">
              Project Title
            </label>
            <MYInput name="projectName" placeholder="Enter title" />
          </div>

          <div className="col-span-12">
            <label htmlFor="email" className="block mb-2 text-md">
              Project Description
            </label>
            <MYTextArea
              name="shortDesc"
              rows={4}
              placeholder="Enter short description"
            />
          </div>
          <div className="col-span-12">
            <label htmlFor="email" className="block mb-2 text-md">
              Project Features
            </label>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">
                <MYInput name="features.one" placeholder="One" />
              </div>
              <div className="col-span-12 md:col-span-4">
                <MYInput name="features.two" placeholder="Two" />
              </div>
              <div className="col-span-12 md:col-span-4">
                <MYInput name="features.three" placeholder="Three" />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <label htmlFor="email" className="block mb-2 text-md">
              Live URL
            </label>
            <MYInput name="liveLink" placeholder="Enter live url" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <label htmlFor="email" className="block mb-2 text-md">
              Project Technology
            </label>
            <MYInput name="technology" placeholder="Enter technology" />
          </div>

          <div className="col-span-12 md:col-span-6">
            <label htmlFor="email" className="block mb-2 text-md">
              Github Client URL
            </label>
            <MYInput name="githubClient" placeholder="Enter client url" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <label htmlFor="email" className="block mb-2 text-md">
              Github Server URL
            </label>
            <MYInput name="githubServer" placeholder="Enter server url" />
          </div>
        </div>

        <div className="mx-8">
          <input
            className="bg-text w-full rounded-md py-3 text-white cursor-pointer"
            type="submit"
            value="Add Project"
          />
        </div>
      </MYForm>
    </div>
  );
};

export default AddProject;
