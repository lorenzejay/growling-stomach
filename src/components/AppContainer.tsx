import React from "react";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};
const AppContainer = ({ children }: Props) => {
  return (
    <NativeBaseProvider theme={theme}>
      {children}
      <Footer />
    </NativeBaseProvider>
  );
};

export default AppContainer;
