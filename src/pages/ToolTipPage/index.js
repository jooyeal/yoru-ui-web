import React from "react";
import AceEditor from "react-ace";
import ToolTip from "@yoru_cha/yoru-ui-react/dist/Tooltip";
import IconButton from "@yoru_cha/yoru-ui-react/dist/IconButton";
import Icon from "@yoru_cha/yoru-ui-react/dist/Icon";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import { text } from "../../text/ToolTip";
import { Wrapper, Container, ContainerNav } from "../style";
import { Button } from "@yoru_cha/yoru-ui-react";

export default function ToolTipPage() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  return (
    <Wrapper>
      <h1 style={{ fontSize: "48px", fontWeight: "600" }}>Tool Tip</h1>
      <p style={{ color: "tomato" }}>This component needs modification</p>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        Tooltips display informative text when users hover over, focus on, or
        tap an element
      </h2>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        It is designed to be user-friendly, and it's easy to use
      </h2>
      <br></br>
      <Container>
        <ToolTip content="tooltip" direction="top" position="40" delay={1000}>
          <Button>click</Button>
        </ToolTip>
        <ToolTip
          content="tooltip"
          direction="bottom"
          position="40"
          delay={1000}
        >
          <Button>click</Button>
        </ToolTip>
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
