import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M2L from '../../styles/questsLow/QuestM2LStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM2L = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {level, difficulty} = location.state || {};

    const handleQuestPage = (chapter) => {
        if (level && difficulty && chapter) {
            navigate(`/questPage?level=${level}&difficulty=${difficulty}&chapter=${chapter}`);
        } else {
            console.error('전달할 데이터가 부족합니다:', { level, difficulty, chapter });
        }        
    };

    return(
        <M2L.Container>
            <M2L.Header>
                <M2L.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M2L.BackgroundImage>
                <M2L.Header2>
                    <M2L.Year>{level}</M2L.Year>
                    <M2L.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M2L.Logo>
                </M2L.Header2>
                <M2L.Level>난이도 (하_{difficulty})</M2L.Level>
            </M2L.Header>
                <M2L.Level1 onClick={() => handleQuestPage('일차방정식')}>
                    <M2L.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2L.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M2L.Level1Photo>
                        <M2L.TextLevel1>LEVEL 1</M2L.TextLevel1>
                        <M2L.Level1Content>일차방정식</M2L.Level1Content>
                    </M2L.Level1Back>
                </M2L.Level1>
                <M2L.Level2 onClick={() => handleQuestPage('연립방정식')}>
                    <M2L.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2L.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M2L.Level2Photo>
                        <M2L.TextLevel2>LEVEL 2</M2L.TextLevel2>
                        <M2L.Level2Content>연립방정식</M2L.Level2Content>
                    </M2L.Level2Back>
                </M2L.Level2>
                <M2L.Level3 onClick={() => handleQuestPage('함수의 기본 개념')}>
                    <M2L.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2L.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M2L.Level3Photo>
                        <M2L.TextLevel3>LEVEL 3</M2L.TextLevel3>
                        <M2L.Level3Content>함수의 기본 개념</M2L.Level3Content>
                    </M2L.Level3Back>
                </M2L.Level3>
            <LevelFooter/>
        </M2L.Container>
    );
};

export default QuestM2L;