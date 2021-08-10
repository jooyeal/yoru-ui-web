import React from "react";
import AceEditor from "react-ace";
import CheckBox from "@yoru_cha/yoru-ui-react/dist/CheckBox";
import IconButton from "@yoru_cha/yoru-ui-react/dist/IconButton";
import Icon from "@yoru_cha/yoru-ui-react/dist/Icon";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import { text } from "../../text/CheckBox";
import { Wrapper, Container, ContainerNav } from "../style";

export default function CheckBoxPage() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  return (
    <Wrapper>
      <h1 style={{ fontSize: "48px", fontWeight: "600" }}>CheckBox</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        Checkboxes allow the user to select one or more items from a set
      </h2>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        It is designed to be user-friendly, and it's easy to use
      </h2>
      <br></br>
      <Container>
        <CheckBox
          checked={selected}
          onChange={(e) => setSelected(e.target.checked)}
        />
        <CheckBox color="red" defaultChecked />
        <CheckBox
          color="purple"
          checked={selected}
          onChange={(e) => setSelected(e.target.checked)}
        />
        <CheckBox color="black" defaultChecked />
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
