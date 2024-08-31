import Navbar from "@/components/navbar/top-navbar";
import Footer from "@/components/footer";

type LayoutProps = {
  hideFooter?: boolean;
  children: React.ReactNode;
};

const Layout = ({ hideFooter, children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    {hideFooter ? null : <Footer />}
  </>
);

export default Layout;
