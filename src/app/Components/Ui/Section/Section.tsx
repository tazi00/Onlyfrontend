import { ReactNode } from "react";
import "./Style.scss";
type SectionsProps = { children: ReactNode; className: string };

function Section({ children, className = "" }: SectionsProps) {
  return <section className={`app_sec ${className}`}>{children}</section>;
}

export default Section;
