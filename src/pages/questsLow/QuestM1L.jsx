import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M1L from '../../styles/questsLow/QuestM1LStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM1L = () => {
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
        <M1L.Container>
            <M1L.Header>
                <M1L.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M1L.BackgroundImage>
                <M1L.Header2>
                    <M1L.Year>{level}</M1L.Year>
                    <M1L.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M1L.Logo>
                </M1L.Header2>
                <M1L.Level>난이도 (하_{difficulty})</M1L.Level>
            </M1L.Header>
                <M1L.Level1 onClick={() => handleQuestPage('정수와 유리수')}>
                    <M1L.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1L.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M1L.Level1Photo>
                        <M1L.TextLevel1>LEVEL 1</M1L.TextLevel1>
                        <M1L.Level1Content>정수와 유리수</M1L.Level1Content>
                    </M1L.Level1Back>
                </M1L.Level1>
                <M1L.Level2 onClick={() => handleQuestPage('비례식과 비례 배분')}>
                    <M1L.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1L.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M1L.Level2Photo>
                        <M1L.TextLevel2>LEVEL 2</M1L.TextLevel2>
                        <M1L.Level2Content>비례식과 비례 배분</M1L.Level2Content>
                    </M1L.Level2Back>
                </M1L.Level2>
                <M1L.Level3 onClick={() => handleQuestPage('기본 확률과 통계')}>
                    <M1L.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1L.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M1L.Level3Photo>
                        <M1L.TextLevel3>LEVEL 3</M1L.TextLevel3>
                        <M1L.Level3Content>기본 확률과 통계</M1L.Level3Content>
                    </M1L.Level3Back>
                </M1L.Level3>
            <LevelFooter/>
        </M1L.Container>
    );
};

export default QuestM1L;