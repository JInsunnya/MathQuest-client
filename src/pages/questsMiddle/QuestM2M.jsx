import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M2M from '../../styles/questsMiddle/QuestM2MStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM2M = () => {
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
        <M2M.Container>
            <M2M.Header>
                <M2M.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M2M.BackgroundImage>
                <M2M.Header2>
                    <M2M.Year>{level}</M2M.Year>
                    <M2M.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M2M.Logo>
                </M2M.Header2>
                <M2M.Level>난이도 (중_{difficulty})</M2M.Level>
            </M2M.Header>
                <M2M.Level1 onClick={() => handleQuestPage('일차방정식')}>
                    <M2M.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2M.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M2M.Level1Photo>
                        <M2M.TextLevel1>LEVEL 1</M2M.TextLevel1>
                        <M2M.Level1Content>일차방정식</M2M.Level1Content>
                    </M2M.Level1Back>
                </M2M.Level1>
                <M2M.Level2 onClick={() => handleQuestPage('연립방정식')}>
                    <M2M.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2M.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M2M.Level2Photo>
                        <M2M.TextLevel2>LEVEL 2</M2M.TextLevel2>
                        <M2M.Level2Content>연립방정식</M2M.Level2Content>
                    </M2M.Level2Back>
                </M2M.Level2>
                <M2M.Level3 onClick={() => handleQuestPage('함수의 기본 개념')}>
                    <M2M.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M2M.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M2M.Level3Photo>
                        <M2M.TextLevel3>LEVEL 3</M2M.TextLevel3>
                        <M2M.Level3Content>함수의 기본 개념</M2M.Level3Content>
                    </M2M.Level3Back>
                </M2M.Level3>
            <LevelFooter/>
        </M2M.Container>
    );
};

export default QuestM2M;