import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const MYInput = ({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: TInputProps) => {
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
          className="w-full px-3 py-3 bg-[#FBFBFE] rounded-sm focus:outline-none"
        />
      )}
    />
  );
};

export default MYInput;
