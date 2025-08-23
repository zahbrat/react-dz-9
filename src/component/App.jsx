import { Component } from "react";

import StickerList from "./StickerList.jsx";
import Choise from "./Choice.jsx";

export default class App extends Component {
  state = { label: "", image: "" };

  onStickerClick = (event) => this.setState({ label: event.target.alt, image: event.target.src });

  render = () => (
    <>
      <StickerList onStickerClickProp1={this.onStickerClick} />
      <Choise text={this.state.label} image={this.state.image} />
    </>
  );
}
