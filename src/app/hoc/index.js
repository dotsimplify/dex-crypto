import { compose } from "redux";
import withRedux from "./withRedux";
import withRouter from "./withRouter";

export const withReduxAndRouter = compose(withRouter, withRedux);
