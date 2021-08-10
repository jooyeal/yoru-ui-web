export const text = `
const [selected, setSelected] = React.useState(false);

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
<CheckBox color="black" defaultChecked />`;
