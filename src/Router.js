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
import ThreeEarth from "./effectPages/ThreeEarth";
import SimpleCharacterMoving from "./effectPages/SimpleCharacterMoving";
import Physics from "./effectPages/Physics";
import Draggable from "./effectPages/Draggable";
import SlidePaper from "./effectPages/SlidePaper";
import Unfold from "./effectPages/Unfold";
import Scroll from "./effectPages/Scroll";
import Trail from "./effectPages/Trail";
import MouseTracer from "./effectPages/MouseTracer";

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
          <Route path="/effect/threeearth" exact component={ThreeEarth} />
          <Route
            path="/effect/charactermoving"
            exact
            component={SimpleCharacterMoving}
          />
          <Route path="/effect/physics" exact component={Physics} />
          <Route path="/effect/draggable" exact component={Draggable} />
          <Route path="/effect/slidepaper" exact component={SlidePaper} />
          <Route path="/effect/unfold" exact component={Unfold} />
          <Route path="/effect/scroll" exact component={Scroll} />
          <Route path="/effect/trail" exact component={Trail} />
          <Route path="/effect/mousetracer" exact component={MouseTracer} />
          <Route
            path="/effect/transitiongrid"
            exact
            component={TransitionGrid}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}
