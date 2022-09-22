import { useState, useEffect } from "react";
import styled from "styled-components";
import PercentageBlock from "./percentage-block.jsx";
import PlayerApi from './api-player-mock.jsx';


const ButtonSelectDays = styled.button`
text-align: center;
width: 73px;
height: 24px;
margin: 10px;
border-radius: 26px;
background: ${props => props.selected ? 'green' : 'yellow'};
`;

const TextDescriptionWrapp = styled.div`
padding: 12px;
text-align: center;
`;

const ChartOne = styled.div`
  padding: 12px 12px 6px 12px;
`;

const InfoFooterDescription = styled.p`
display: flex;
align-items: center;
justify-content: left;
padding: 6px 12px 12px 12px;
`;

const InfoFooterDescriptionColorBox = styled.p`
background: ${props => props.color};
border-radius: 3px;
width: 43px;
height: 33px;
left: 12px;
display: flex;
align-items: center;
justify-content: left;
margin-left: ${props => props.margin && '20px'};
margin-right: 4px;
`;

export default function Chart() {
    const [selectedDaysElement, setSelectedDaysElement] = useState({});

    useEffect(() => {
        const defaultData = PlayerApi?.find(item => item.default);
        setSelectedDaysElement(defaultData);
    },[])

    const changeDays = item => {
        setSelectedDaysElement(item);
    };

    return (
      <div>
        <TextDescriptionWrapp>
          <h4>
            Some charts that show information from a mock api compared to
            all the other players in the game,
          </h4>
          <h4>
            and you can also change the buttons between 7, 30, 90 or 180 days to
            see the comparison between week, month, quarter or 6 months
          </h4>
        </TextDescriptionWrapp>
        <div>
          {PlayerApi.map((item) => (
            <ButtonSelectDays
              key={item.duration}
              name={`button-${item.duration}`}
              onClick={() => changeDays(item)}
              selected={selectedDaysElement.duration === item.duration}
            >
              {item.duration}
            </ButtonSelectDays>
          ))}
        </div>
        <ChartOne>
          <PercentageBlock
            name=<p>Playing Duration</p>
            total={selectedDaysElement.playingDurationAvarage}
            current={selectedDaysElement.playingDuration}
          />
          <PercentageBlock
            name=<p>Days Playing</p>
            total={selectedDaysElement.daysPlayingAvarage}
            current={selectedDaysElement.daysPlaying}
          />
          <PercentageBlock
            name=<p>Withdrawn</p>
            total={selectedDaysElement.withdrawnAvarage}
            current={selectedDaysElement.withdrawn}
          />
          <PercentageBlock
            name=<p>Games Lost</p>
            total={selectedDaysElement.depositedAvarage}
            current={selectedDaysElement.deposited}
          />
        </ChartOne>
        <div>
          <InfoFooterDescription>
            <InfoFooterDescriptionColorBox color="greenyellow" />
            <small> Player </small>
            <InfoFooterDescriptionColorBox color="grey" margin />
            <small> Other players </small>
          </InfoFooterDescription>
        </div>
      </div>
    );
}