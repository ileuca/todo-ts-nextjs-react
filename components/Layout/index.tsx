import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
