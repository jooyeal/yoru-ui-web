import React from "react";
import Router from "./Router";
import HeaderBar from "@yoru_cha/yoru-ui-react/dist/HeaderBar";
import Icon from "@yoru_cha/yoru-ui-react/dist/Icon";
import IconButton from "@yoru_cha/yoru-ui-react/dist/IconButton";
import SideBar from "@yoru_cha/yoru-ui-react/dist/SideBar";
function App() {
  const [openSide, setOpenSide] = React.useState(false);
  return (
    <>
      <HeaderBar
        left={{
          content: (
            <IconButton onClick={() => setOpenSide((prev) => !prev)}>
              <Icon size="sm" color="#ffffff">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </Icon>
            </IconButton>
          ),
          align: "start",
        }}
        center={{ content: <div>YORU-UI</div>, align: "center" }}
        right={{ content: <div>right</div>, align: "end" }}
      ></HeaderBar>
      <div style={{ paddingTop: "4rem" }}>
        <Router>
          <SideBar
            routingList={[
              {
                title: "Yoru UI",
                content: [{ subTitle: "What is this?", to: "/" }],
              },
              {
                title: "Color List",
                content: [{ subTitle: "Material Color", to: "/materialcolor" }],
              },
              {
                title: "Component",
                content: [
                  { subTitle: "Badge", to: "/component/badge" },
                  { subTitle: "Button", to: "/component/button" },
                  { subTitle: "CheckBox", to: "/component/checkbox" },
                  { subTitle: "HeaderBar", to: "/component/headerbar" },
                  { subTitle: "Icon", to: "/component/icon" },
                  { subTitle: "Radio", to: "/component/radio" },
                  { subTitle: "Select", to: "/component/select" },
                  { subTitle: "SideBar", to: "/component/sidebar" },
                  { subTitle: "TextField", to: "/component/textfield" },
                  { subTitle: "ToolTip", to: "/component/tooltip" },
                ],
              },
              {
                title: "Effect",
                content: [
                  { subTitle: "Earth3D", to: "/effect/threeearth" },
                  {
                    subTitle: "Character Moving",
                    to: "/effect/charactermoving",
                  },
                  {
                    subTitle: "Physics",
                    to: "/effect/physics",
                  },
                  { subTitle: "Draggable List", to: "/effect/draggable" },
                  { subTitle: "SlidePaper", to: "/effect/slidepaper" },
                ],
              },
              {
                title: "TestPage",
                content: [{ subTitle: "Test", to: "/testpage" }],
              },
            ]}
            open={openSide}
            onClose={() => setOpenSide(false)}
          ></SideBar>
        </Router>
      </div>
    </>
  );
}

export default App;
