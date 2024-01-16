import "./style.scss";

function InputSubmit({ label }: { label: string }) {
  return <input className="glb-submit" type="submit" value={label} />;
}

export default InputSubmit;
