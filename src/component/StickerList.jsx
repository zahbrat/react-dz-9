import { Component } from "react";
import styled from "styled-components";

import stickers from "../stickers.json"
import Sticker from "./Sticker";

export default class StickerList extends Component {
  render = () => {
    const StickerListUl = styled.ul`
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem 7rem;
    `

    return (
      <StickerListUl>
        {stickers.map((el) => (
          <Sticker
            img={el.img}
            label={el.label}
            key={Math.floor(100000 + Math.random() * 900000)}
            onStickerClickProp2={this.props.onStickerClickProp1}
          />
        ))}
      </StickerListUl>
    );
  };
}