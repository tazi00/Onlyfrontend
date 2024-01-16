import { Fragment } from "react";
import { InputField } from "..";
import { FormCard, Heading, InputSubmit, Text } from "../Ui";
export type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
};

type FormProps = {
  title: string;
  data: InputProps[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
function Form({ title, data, onChange, onsubmit }: FormProps) {
  return (
    <FormCard onsubmit={onsubmit}>
      <Heading type="h2">{title}</Heading>
      <Text>Please Provide Your Credentials</Text>
      <div className="gap-1" />
      {data.map((d) => {
        return (
          <Fragment key={d.label}>
            <InputField
              placeholder={d.placeholder}
              label={d.label}
              type={d.type}
              name={d.name}
              value={d.value}
             
              onChange={onChange}
            />
            <div className="gap-1" />
          </Fragment>
        );
      })}
      <div className="gap-5" />
      <InputSubmit label="submit" />
    </FormCard>
  );
}

export default Form;
