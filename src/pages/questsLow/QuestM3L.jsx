import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M3L from '../../styles/questsLow/QuestM3LStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM3L = () => {
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
        <M3L.Container>
            <M3L.Header>
                <M3L.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M3L.BackgroundImage>
                <M3L.Header2>
                    <M3L.Year>{level}</M3L.Year>
                    <M3L.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M3L.Logo>
                </M3L.Header2>
                <M3L.Level>난이도 (하_{difficulty})</M3L.Level>
            </M3L.Header>
                <M3L.Level1 onClick={() => handleQuestPage('이차방정식')}>
                    <M3L.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3L.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M3L.Level1Photo>
                        <M3L.TextLevel1>LEVEL 1</M3L.TextLevel1>
                        <M3L.Level1Content>이차방정식</M3L.Level1Content>
                    </M3L.Level1Back>
                </M3L.Level1>
                <M3L.Level2 onClick={() => handleQuestPage('기본 확률과 통계')}>
                    <M3L.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3L.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M3L.Level2Photo>
                        <M3L.TextLevel2>LEVEL 2</M3L.TextLevel2>
                        <M3L.Level2Content>기본 확률과 통계</M3L.Level2Content>
                    </M3L.Level2Back>
                </M3L.Level2>
                <M3L.Level3 onClick={() => handleQuestPage('함수의 그래프')}>
                    <M3L.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3L.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M3L.Level3Photo>
                        <M3L.TextLevel3>LEVEL 3</M3L.TextLevel3>
                        <M3L.Level3Content>함수의 그래프</M3L.Level3Content>
                    </M3L.Level3Back>
                </M3L.Level3>
            <LevelFooter/>
        </M3L.Container>
    );
};

export default QuestM3L;