import { useState, useEffect } from "react";
import styled from "styled-components";
import PercentageBlock from "./percentage-block.jsx";
import Player_Api from './api-player-mock.jsx';


const ButtonSelectDays = styled.button`
width: 73px;
height: 24px;
margin: 10px;
border-radius: 26px;
background: ${props => props.selected ? 'black' : 'blue'};
`;

const TextDescriptionWrapp = styled.div`
padding: 12px;
text-align: center;
`;

const ChartOne = styled.p`
padding: 12px 12px 6px 12px;
`;

const InfoFooterDescription = styled.p`
background: ${props => props.color};
border-radius: 3px;
width: 33px;
height: 23px;
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
        const defaultData = Player_Api?.find(item => item.default);
        setSelectedDaysElement(defaultData);
    },[])

    const changeDays = item => {
        selectedDaysElement(item);
    };

    return (
        <div>
            <TextDescriptionWrapp>
                <small>Description</small>
            </TextDescriptionWrapp>
            <div>
                {Player_Api.map(item => (
                    <ButtonSelectDays
                        key={item.duration}
                        name={`button-${item.duration}`}
                        onClick={() => changeDays(item)}
                        selected={
                            selectedDaysElement.duration === item.duration
                        }
                    >
                        {item.duration}
                    </ButtonSelectDays>
                ))}
            </div>
            <ChartOne>
                <PercentageBlock 
                    name={Player}
                    total={selectedDaysElement.playinDurationavarage}
                    current={selectedDaysElement.playingDuration}
                />
            </ChartOne>
        </div>
    )
}