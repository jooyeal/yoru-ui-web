import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MaterialColor from "./routes/MaterialColor/index";
import ButtonPage from "./pages/ButtonPage";
import TextFieldPage from "./pages/TextFieldPage";
import SelectPage from "./pages/SelectPage";
import TestPage from "./pages/TestPage";
import IconPage from "./pages/IconPage";
import CheckBoxPage from "./pages/CheckBoxPage";
import RadioPage from "./pages/RadioPage";
import ToolTipPage from "./pages/ToolTipPage";
import BadgePage from "./pages/BadgePage";
import HeaderBarPage from "./pages/HeaderBarPage";
import SideBarPage from "./pages/SideBarPage";

export default function Router({ children }) {
  return (
    <>
      <BrowserRouter>
        {children}
        <Switch>
          <Route path="/" exact component={MaterialColor} />
          <Route path="/materialcolor" exact component={MaterialColor} />
          <Route path="/component/button" exact component={ButtonPage} />
          <Route path="/component/textfield" exact component={TextFieldPage} />
          <Route path="/component/select" exact component={SelectPage} />
          <Route path="/testpage" exact component={TestPage} />
          <Route path="/component/icon" exact component={IconPage} />
          <Route path="/component/badge" exact component={BadgePage} />
          <Route path="/component/tooltip" exact component={ToolTipPage} />
          <Route path="/component/radio" exact component={RadioPage} />
          <Route path="/component/checkbox" exact component={CheckBoxPage} />
          <Route path="/component/headerbar" exact component={HeaderBarPage} />
          <Route path="/component/sidebar" exact component={SideBarPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
