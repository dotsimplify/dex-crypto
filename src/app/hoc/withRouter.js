import { BrowserRouter } from "react-router-dom";
const withRouter = (component) => () => {
  return <BrowserRouter>{component()}</BrowserRouter>;
};

export default withRouter;
