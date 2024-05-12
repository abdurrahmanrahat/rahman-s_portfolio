"use client";

import MYForm from "@/components/Forms/MYForm";
import MYInput from "@/components/Forms/MYInput";
import { useCreateSkillIntoDbMutation } from "@/redux/api/skillsApi";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const AddSkill = () => {
  const [createSkillIntoDb] = useCreateSkillIntoDbMutation();

  const handleAddSkill = async (values: FieldValues) => {
    try {
      const res = await createSkillIntoDb(values).unwrap();

      if (res.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen py-20 w-full max-w-[600px] mx-auto">
      {/* title */}
      <div className="text-center">
        <span className="text-[24px] font-semibold uppercase border-b-2 border-primary">
          Add Skill
        </span>
      </div>

      {/* form */}
      <MYForm
        onSubmit={handleAddSkill}
        defaultValues={{
          title: "",
          value: "",
          category: "",
        }}
      >
        <div className="m-8 space-y-3">
          <div>
            <label htmlFor="email" className="block mb-2 text-md">
              Skill Title
            </label>
            <MYInput name="title" placeholder="Enter title" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md">
              Skill Range
            </label>
            <MYInput name="value" placeholder="Enter a value" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md">
              Skill Category
            </label>
            <MYInput name="category" placeholder="Enter category" />
          </div>
        </div>

        <div className="mx-8">
          <input
            className="bg-text w-full rounded-md py-3 text-white cursor-pointer"
            type="submit"
            value="Add Skill"
          />
        </div>
      </MYForm>
    </div>
  );
};

export default AddSkill;
