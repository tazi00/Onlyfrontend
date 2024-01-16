import TextInput from "../Ui/TextInput";

function InputField({
  label,
  placeholder,
  ...rest
}: {
  label: string;
  type?: string;
  defaultValue: string;

  placeholder: string;
}) {
  return (
    <div className="input-field">
      <label htmlFor={label}>
        {label}
        <TextInput placeholder={placeholder} label={label} {...rest} />
      </label>
    </div>
  );
}

export default InputField;
