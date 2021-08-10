import React from "react";
import { Menu } from "@material-ui/icons";
import { Button } from "@yoru_cha/yoru-ui-react";
import { IconButton } from "@yoru_cha/yoru-ui-react";
import { Icon } from "@yoru_cha/yoru-ui-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import { text as simpleText } from "../../text/SimpleButton";
import { text as iconText } from "../../text/IconButton";
import { Wrapper, Container, ContainerNav } from "../style";

export default function ButtonPage() {
  const [singleOpen, setSingleOpen] = React.useState(false);
  const [iconOpen, setIconOpen] = React.useState(false);
  return (
    <Wrapper>
      <h1 style={{ fontSize: "48px", fontWeight: "600" }}>Button</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        Buttons are an essential element in UI
      </h2>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        These buttons are prepared for user convenience
      </h2>
      <br></br>
      <h3 style={{ fontSize: "36px", fontWeight: "600" }}>Simple Buttons</h3>
      <Container>
        <Button>click</Button>
        <Button size="sm" color="#AB47BC">
          click
        </Button>
        <Button size="md" color="#EF5350">
          click
        </Button>
        <Button size="lg">click</Button>
        <Button size="md" disabled={true}>
          click
        </Button>
      </Container>
      <ContainerNav>
        <IconButton onClick={() => setSingleOpen((prev) => !prev)}>
          <Icon>
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
          </Icon>
        </IconButton>
      </ContainerNav>
      {singleOpen ? (
        <AceEditor
          mode="javascript"
          theme="chaos"
          width="64rem"
          height="15rem"
          fontSize={18}
          readOnly={true}
          name="editor-simple-button"
          value={simpleText}
        ></AceEditor>
      ) : null}
      <br></br>
      <br></br>
      <h3 style={{ fontSize: "36px", fontWeight: "600" }}>Icon Buttons</h3>
      <Container>
        <IconButton>
          <Icon>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </Icon>
        </IconButton>
        <IconButton>
          <Menu />
        </IconButton>
        <IconButton>
          <Icon size="sm" color="#EF5350">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </Icon>
        </IconButton>
        <IconButton>
          <Icon size="md" color="#AB47BC">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </Icon>
        </IconButton>
        <IconButton disabled={true}>
          <Icon size="lg">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </Icon>
        </IconButton>
      </Container>
      <ContainerNav>
        <IconButton onClick={() => setIconOpen((prev) => !prev)}>
          <Icon>
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
          </Icon>
        </IconButton>
      </ContainerNav>
      {iconOpen ? (
        <AceEditor
          mode="javascript"
          theme="chaos"
          width="64rem"
          height="15rem"
          fontSize={18}
          readOnly={true}
          name="editor-simple-button"
          value={iconText}
        ></AceEditor>
      ) : null}
    </Wrapper>
  );
}
