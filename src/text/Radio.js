export const text = `
const [selected, setSelected] = React.useState("");

<Radio
checked={selected === "a"}
value="a"
onChange={(e) => setSelected(e.target.value)}
/>
<Radio
color="red"
checked={selected === "b"}
value="b"
onChange={(e) => setSelected(e.target.value)}
/>
<Radio
color="purple"
checked={selected === "c"}
value="c"
onChange={(e) => setSelected(e.target.value)}
/>`;
