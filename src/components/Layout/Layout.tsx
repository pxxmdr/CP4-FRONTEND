import { Navbar } from "../NavBar/NavBar";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Navbar />
    </>
  );
};
