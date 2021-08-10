import React from "react";
import Select from "@yoru_cha/yoru-ui-react/dist/Select";
import AceEditor from "react-ace";
import IconButton from "@yoru_cha/yoru-ui-react/dist/IconButton";
import Icon from "@yoru_cha/yoru-ui-react/dist/Icon";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import { Wrapper, Container, ContainerNav } from "../style";
import { text as simpleSelect } from "../../text/SimpleSelect";

export default function TextFieldPage() {
  const [simpleOpen, setSimpleOpen] = React.useState(false);
  const list = [
    "apple",
    "banana",
    "car",
    "dress",
    "element",
    "fork",
    "grape",
    "hook",
  ];
  return (
    <Wrapper>
      <h1 style={{ fontSize: "48px", fontWeight: "600" }}>Select</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        This is a select box containing a label
      </h2>
      <h2 style={{ fontSize: "24px", fontWeight: "400" }}>
        It is designed to be user-friendly, and it's easy to use
      </h2>
      <br></br>
      <Container>
        <Select list={list} />
        <Select label="label" list={list} color="#EF5350" />
        <Select label="label" list={list} width="12rem" />
        <Select label="label" list={list} width="12rem" initValue="banana" />
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
          value={simpleSelect}
        ></AceEditor>
      ) : null}
    </Wrapper>
  );
}
