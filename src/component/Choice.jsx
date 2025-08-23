import { Component } from "react";
import styled from "styled-components";

export default class Choise extends Component {
  render = () => {
    const ChoiseText = styled.div`
      background: gray;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      text-align: center;
      font-size: 3rem;
      gap: 1rem;
      padding: 0.5rem;
    `;

    return (
      <ChoiseText>
        <p>
          {!this.props.text ? "Ви не вибрали жодного стікера" : this.props.text}
        </p>
        {this.props.text && (<img src={this.props.image} alt={this.props.text} width="50"/>)}
      </ChoiseText>
    );
  };
}
