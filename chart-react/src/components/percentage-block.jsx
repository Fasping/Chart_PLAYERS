import styled from "styled-components";
import { charge, showFromDown } from "./animation-chart";

const Container = styled.div`
  height: 36px;
  margin-bottom: 12px;
  animation: ${showFromDown} 2s ease-in-out;
  background-color: gray;
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px;
 

  .bar {
    border-radius: 3px;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: (${(props) => props.percentage});
    width: ${(props) => props.percentage}%;
    animation: ${(props) => charge(props.percentage)} 2s ease-in-out;
    animation-fill-mode: forwards;
  }

  p{
    z-index: 1;
  }
`;

export default function PercentageBlock({ name, total, current }) {
    const percentage = (current * 100) / total;

    return (
        <Container percentage={percentage}>
            <p>{name}</p>
            <div className="bar" />
        </Container>
    );
}
