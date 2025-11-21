import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
};

const MYInput = ({ name, label, type = "text", placeholder }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className="w-full px-3 py-3 bg-[#EEEEF2] rounded-md focus:outline-hidden"
          required
        />
      )}
    />
  );
};

export default MYInput;
