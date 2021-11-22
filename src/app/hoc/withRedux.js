import { store } from "../../store/store";
import { Provider } from "react-redux";

const withRedux = (component) => () => {
  return <Provider store={store}>{component()}</Provider>;
};
export default withRedux;
