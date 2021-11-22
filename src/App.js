import React from "react";
import { withReduxAndRouter } from "./app/hoc/index";
import Layout from "./app/layout/Layout";

function App() {
  return <Layout />;
}

export default withReduxAndRouter(App);
