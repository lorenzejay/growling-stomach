import React from "react";
import { NativeBaseProvider, ScrollView } from "native-base";
import theme from "../theme";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};
const AppContainer = ({ children }: Props) => {
  return (
    // <NativeBaseProvider theme={theme}>
    <>
      <ScrollView>{children}</ScrollView>
      <Footer />
    </>
    // </NativeBaseProvider>
  );
};

export default AppContainer;
