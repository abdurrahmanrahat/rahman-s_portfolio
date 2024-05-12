import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  placeholder?: string;
  rows: number;
};

const MYTextArea = ({ name, placeholder, rows }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <textarea
          {...field}
          placeholder={placeholder}
          rows={rows}
          className="w-full px-3 py-3 bg-[#EEEEF2] rounded-md focus:outline-none"
          required
        ></textarea>
      )}
    />
  );
};

export default MYTextArea;
