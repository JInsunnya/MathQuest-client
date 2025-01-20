import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M3H from '../../styles/questsHard/QuestM3HStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM3H = () => {
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
        <M3H.Container>
            <M3H.Header>
                <M3H.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M3H.BackgroundImage>
                <M3H.Header2>
                    <M3H.Year>{level}</M3H.Year>
                    <M3H.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M3H.Logo>
                </M3H.Header2>
                <M3H.Level>난이도 (상_{difficulty})</M3H.Level>
            </M3H.Header>
                <M3H.Level1 onClick={() => handleQuestPage('이차방정식')}>
                    <M3H.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3H.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M3H.Level1Photo>
                        <M3H.TextLevel1>LEVEL 1</M3H.TextLevel1>
                        <M3H.Level1Content>이차방정식</M3H.Level1Content>
                    </M3H.Level1Back>
                </M3H.Level1>
                <M3H.Level2 onClick={() => handleQuestPage('기본 확률과 통계')}>
                    <M3H.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3H.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M3H.Level2Photo>
                        <M3H.TextLevel2>LEVEL 2</M3H.TextLevel2>
                        <M3H.Level2Content>기본 확률과 통계</M3H.Level2Content>
                    </M3H.Level2Back>
                </M3H.Level2>
                <M3H.Level3 onClick={() => handleQuestPage('함수의 그래프')}>
                    <M3H.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M3H.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M3H.Level3Photo>
                        <M3H.TextLevel3>LEVEL 3</M3H.TextLevel3>
                        <M3H.Level3Content>함수의 그래프</M3H.Level3Content>
                    </M3H.Level3Back>
                </M3H.Level3>
            <LevelFooter/>
        </M3H.Container>
    );
};

export default QuestM3H;