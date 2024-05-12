import { Controller, useFormContext } from "react-hook-form";

const MYFileUploader = ({ name }: { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <input
          {...field}
          type="file"
          value={value?.fileName}
          onChange={(e) => onChange((e?.target as HTMLInputElement).files?.[0])}
          className="w-full px-3 py-2 bg-[#EEEEF2] rounded-md focus:outline-none"
          required
        />
      )}
    />
  );
};

export default MYFileUploader;
