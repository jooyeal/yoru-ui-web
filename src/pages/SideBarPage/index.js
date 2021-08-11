import React from "react";
import SideBar from "@yoru_cha/yoru-ui-react/dist/SideBar";
import AceEditor from "react-ace";
import IconButton from "@yoru_cha/yoru-ui-react/dist/IconButton";
import Icon from "@yoru_cha/yoru-ui-react/dist/Icon";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import { Wrapper, Container, ContainerNav } from "../style";
import { text } from "../../text/SideBar";
import { Button } from "@yoru_cha/yoru-ui-react";

export default function SideBarPage() {
  const [simpleOpen, setSimpleOpen] = React.useState(false);
  const [openDefault, setOpenDefault] = React.useState(false);
  const [openFruitBar, setOpenFruitBar] = React.useState(false);
  const [openNameBar, setOpenNameBar] = React.useState(false);
  return (
    <Wrapper>
      <h1 style={{ fontSize: "48px", fontWeight: "600" }}>Header Bar</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        The Header Bar displays information and actions relating to the current
        screen
      </h2>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        It is designed to be user-friendly, and it's easy to use
      </h2>
      <br></br>
      <Container>
        <Button onClick={() => setOpenDefault(true)}>open default</Button>
        <Button onClick={() => setOpenFruitBar(true)}>open fruit</Button>
        <Button onClick={() => setOpenNameBar(true)}>open name</Button>
        <SideBar open={openDefault} onClose={() => setOpenDefault(false)} />
        <SideBar
          routingList={[
            {
              title: "fruit",
              content: [
                { subTitle: "apple", to: "/apple" },
                { subTitle: "banana", to: "/banana" },
                { subTitle: "cherry", to: "/cherry" },
              ],
            },
          ]}
          open={openFruitBar}
          onClose={() => setOpenFruitBar(false)}
        ></SideBar>
        <SideBar
          routingList={[
            {
              title: "name",
              content: [
                { subTitle: "ann", to: "/ann" },
                { subTitle: "bob", to: "/bob" },
                { subTitle: "chris", to: "/chris" },
              ],
            },
            {
              title: "language",
              content: [
                { subTitle: "english", to: "/english" },
                { subTitle: "korean", to: "/korean" },
                { subTitle: "japanese", to: "/japanese" },
              ],
            },
          ]}
          open={openNameBar}
          onClose={() => setOpenNameBar(false)}
        ></SideBar>
      </Container>
      <ContainerNav>
        <IconButton onClick={() => setSimpleOpen((prev) => !prev)}>
          <Icon>
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
          </Icon>
        </IconButton>
      </ContainerNav>
      {simpleOpen ? (
        <AceEditor
          mode="javascript"
          theme="chaos"
          width="64rem"
          height="15rem"
          fontSize={18}
          readOnly={true}
          name="editor-simple-button"
          value={text}
        ></AceEditor>
      ) : null}
    </Wrapper>
  );
}
