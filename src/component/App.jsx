import { Component } from "react";

import StickerList from "./StickerList.jsx";
import Choise from "./Choice.jsx";

export default class App extends Component {
  state = { label: "" };

  onStickerClick = (event) => this.setState({ label: event.target.alt });

  render = () => (
    <>
      <StickerList onStickerClickProp1={this.onStickerClick} />
      <Choise text={this.state.label} />
    </>
  );
}
