import { Component } from "react";
import styled from "styled-components";

export default class Sticker extends Component {
  render = () => {
    const MyLi = styled.li`
      cursor: pointer;
      transition: 1s;

      & > img {
        filter: drop-shadow(0px 4px 3px rgba(0, 0, 0));
      }
    `;

    return (
      <MyLi>
        <img
          src={this.props.img}
          alt={this.props.label}
          onClick={this.props.onStickerClickProp2}
        />
      </MyLi>
    );
  };
}
