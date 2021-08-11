import React from "react";
import HeaderBar from "@yoru_cha/yoru-ui-react/dist/HeaderBar";
import AceEditor from "react-ace";
import IconButton from "@yoru_cha/yoru-ui-react/dist/IconButton";
import Icon from "@yoru_cha/yoru-ui-react/dist/Icon";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import { Wrapper, Container, ContainerNav } from "../style";
import { text } from "../../text/HeaderBar";

export default function HeaderBarPage() {
  const [simpleOpen, setSimpleOpen] = React.useState(false);
  const title = <div>TITLE</div>;
  const menu = <div>MENU</div>;
  const login = <div>LOGIN</div>;
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
      <Container style={{ position: "relative" }}>
        <HeaderBar
          style={{ position: "absolute" }}
          left={{ align: "start", content: menu }}
          center={{ content: title }}
          right={{ align: "end", content: login }}
        />
      </Container>
      <Container style={{ position: "relative" }}>
        <HeaderBar
          style={{ position: "absolute", backgroundColor: "tomato" }}
          left={{ align: "center", content: menu }}
          center={{ content: title }}
          right={{ align: "start", content: login }}
        />
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
