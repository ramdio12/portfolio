import { Helmet } from "react-helmet-async";

type TitleProps = {
  name: string;
};

const BrowserTitle = ({ name }: TitleProps) => {
  return (
    <Helmet>
      <title>{name}</title>
    </Helmet>
  );
};

export default BrowserTitle;
