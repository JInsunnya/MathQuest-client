import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M2H from '../../styles/questsHard/QuestM2HStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM2H = () => {
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
        <M2H.Container>
            <M2H.Header>
                <M2H.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M2H.BackgroundImage>
                <M2H.Header2>
                    <M2H.Year>{level}</M2H.Year>
                    <M2H.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M2H.Logo>
                </M2H.Header2>
                <M2H.Level>난이도 (상_{difficulty})</M2H.Level>
            </M2H.Header>
                <M2H.Level1 onClick={() => handleQuestPage('일차방정식')}>
                    <M2H.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2H.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M2H.Level1Photo>
                        <M2H.TextLevel1>LEVEL 1</M2H.TextLevel1>
                        <M2H.Level1Content>일차방정식</M2H.Level1Content>
                    </M2H.Level1Back>
                </M2H.Level1>
                <M2H.Level2 onClick={() => handleQuestPage('연립방정식')}>
                    <M2H.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2H.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M2H.Level2Photo>
                        <M2H.TextLevel2>LEVEL 2</M2H.TextLevel2>
                        <M2H.Level2Content>연립방정식</M2H.Level2Content>
                    </M2H.Level2Back>
                </M2H.Level2>
                <M2H.Level3 onClick={() => handleQuestPage('함수의 기본 개념')}>
                    <M2H.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2H.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M2H.Level3Photo>
                        <M2H.TextLevel3>LEVEL 3</M2H.TextLevel3>
                        <M2H.Level3Content>함수의 기본 개념</M2H.Level3Content>
                    </M2H.Level3Back>
                </M2H.Level3>
            <LevelFooter/>
        </M2H.Container>
    );
};

export default QuestM2H;