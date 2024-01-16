import { ReactNode } from "react";
import "./style.scss";

function FormCard({
  children,
  onsubmit,
}: {
  children: ReactNode;
  onsubmit: () => void;
}) {
  return (
    <div className="formcard">
      <form action="" onSubmit={onsubmit}>
        {children}
      </form>
    </div>
  );
}

export default FormCard;
