const reactjsHeading = React.createElement(
  "h1",
  { id: "jumper" },
  "Hello Javascript"
);
const reactjsRoot = ReactDOM.createRoot(
  document.getElementById("react-js-root")
);
reactjsRoot.render(reactjsHeading);
