import { ReactNode } from "react";

type HeadingProps = { children: ReactNode; type: string };

type HeadingType = {
  [key: string]: React.ReactElement;
};

function Heading({ children, type }: HeadingProps) {
  const headingType: HeadingType = {
    h1: <h1>{children}</h1>,
    h2: <h2>{children}</h2>,
    h3: <h3>{children}</h3>,
    h4: <h4>{children}</h4>,
    h5: <h5>{children}</h5>,
    h6: <h6>{children}</h6>,
  };

  return <>{headingType[type]}</>;
}

export default Heading;
