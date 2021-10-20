import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput: FC<InputProps> = props => {
  return (
    <input
      {...props}
      className="ring-none outline-none border-none rounded ring-2 ring-gray-200 focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default TextInput;
