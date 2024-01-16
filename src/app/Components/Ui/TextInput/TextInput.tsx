import "./style.scss";

type TextInputProps = {
  placeholder: string;
  label: string;
};

function TextInput({ placeholder, label, ...rest }: TextInputProps) {
  return (
    <input
      className="glb-input"
      id={label}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default TextInput;
