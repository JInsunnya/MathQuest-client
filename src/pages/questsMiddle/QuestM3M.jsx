import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M3M from '../../styles/questsMiddle/QuestM3MStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM3M = () => {
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
        <M3M.Container>
            <M3M.Header>
                <M3M.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M3M.BackgroundImage>
                <M3M.Header2>
                    <M3M.Year>{level}</M3M.Year>
                    <M3M.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M3M.Logo>
                </M3M.Header2>
                <M3M.Level>난이도 (중_{difficulty})</M3M.Level>
            </M3M.Header>
                <M3M.Level1 onClick={() => handleQuestPage('이차방정식')}>
                    <M3M.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3M.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M3M.Level1Photo>
                        <M3M.TextLevel1>LEVEL 1</M3M.TextLevel1>
                        <M3M.Level1Content>이차방정식</M3M.Level1Content>
                    </M3M.Level1Back>
                </M3M.Level1>
                <M3M.Level2 onClick={() => handleQuestPage('기본 확률과 통계')}>
                    <M3M.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3M.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M3M.Level2Photo>
                        <M3M.TextLevel2>LEVEL 2</M3M.TextLevel2>
                        <M3M.Level2Content>기본 확률과 통계</M3M.Level2Content>
                    </M3M.Level2Back>
                </M3M.Level2>
                <M3M.Level3 onClick={() => handleQuestPage('함수의 그래프')}>
                    <M3M.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3M.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M3M.Level3Photo>
                        <M3M.TextLevel3>LEVEL 3</M3M.TextLevel3>
                        <M3M.Level3Content>함수의 그래프</M3M.Level3Content>
                    </M3M.Level3Back>
                </M3M.Level3>
            <LevelFooter/>
        </M3M.Container>
    );
};

export default QuestM3M;