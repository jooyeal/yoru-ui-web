export const text = `
const [openDefault, setOpenDefault] = React.useState(false);
const [openFruitBar, setOpenFruitBar] = React.useState(false);
const [openNameBar, setOpenNameBar] = React.useState(false);

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
`;
