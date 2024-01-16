import { ReactNode } from "react";
import "./style.scss";

function Text({ children }: { children: ReactNode }) {
  return <div className="text">{children}</div>;
}

export default Text;
