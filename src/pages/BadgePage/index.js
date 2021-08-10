import React from "react";
import AceEditor from "react-ace";
import Badge from "@yoru_cha/yoru-ui-react/dist/Badge";
import IconButton from "@yoru_cha/yoru-ui-react/dist/IconButton";
import Icon from "@yoru_cha/yoru-ui-react/dist/Icon";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import { text } from "../../text/Badge";
import { Wrapper, Container, ContainerNav } from "../style";
import { Button } from "@yoru_cha/yoru-ui-react";

export default function BadgePage() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  return (
    <Wrapper>
      <h1 style={{ fontSize: "48px", fontWeight: "600" }}>Badge</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        Badge generates a small badge to the top-right of its child(ren)
      </h2>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        It is designed to be user-friendly, and it's easy to use
      </h2>
      <br></br>
      <Container>
        <div style={{ display: "flex", gap: "15px" }}>
          <Badge content={count} color="tomato">
            <Icon size="sm">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </Icon>
          </Badge>
          <Button onClick={() => setCount((prev) => prev + 1)}>plus</Button>
          <Button
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            minus
          </Button>
        </div>
        <Badge content={12} color="green">
          <Icon size="md">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </Icon>
        </Badge>
        <Badge content={12} color="#AB47BC">
          <Icon size="lg">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
          </Icon>
        </Badge>
      </Container>
      <ContainerNav>
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          <Icon>
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
          </Icon>
        </IconButton>
      </ContainerNav>
      {open ? (
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
