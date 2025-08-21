import { Component } from "react";
import styled from "styled-components";

export default class Choise extends Component {
  render = () => {
    const ChoiseText = styled.p`
      background: gray;
      color: white;
      font-size: 3.57rem;
      text-align: center;
    `;

    return <ChoiseText>{!this.props.text ? "Ви не вибрали жодного стікера" : this.props.text}</ChoiseText>
  };
}
