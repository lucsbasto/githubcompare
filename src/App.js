import React, { Fragment } from "react";

import GlobalStyle from "./styles/global";
import "font-awesome/css/font-awesome.css";
import Main from "./pages/Main";

const App = () => (
    <Fragment>
        <GlobalStyle />
        <Main />
    </Fragment>
);

export default App;
