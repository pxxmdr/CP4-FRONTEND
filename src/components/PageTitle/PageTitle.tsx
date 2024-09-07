import { Title } from "./PageTitle.style";

interface TitleProps {
  title: string;
}

export const PageTitle = ({ title }: TitleProps) => {
  return <Title >{title}</Title>;
};
