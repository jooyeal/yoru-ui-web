export const text = `const title = <div>TITLE</div>;
const menu = <div>MENU</div>;
const login = <div>LOGIN</div>;

  <Container style={{ position: "relative" }}>
    <HeaderBar
      style={{ position: "absolute" }}
      left={{ align: "start", content: menu }}
      center={{ content: title }}
      right={{ align: "end", content: login }}
    />
  </Container>
  <Container style={{ position: "relative", backgroundColor: "tomato" }}>
    <HeaderBar
      style={{ position: "absolute" }}
      left={{ align: "center", content: menu }}
      center={{ content: title }}
      right={{ align: "start", content: login }}
    />
  </Container>

`;
