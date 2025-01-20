import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as M1M from '../../styles/questsMiddle/QuestM1MStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestM1M = () => {
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
        <M1M.Container>
            <M1M.Header>
                <M1M.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M1M.BackgroundImage>
                <M1M.Header2>
                    <M1M.Year>{level}</M1M.Year>
                    <M1M.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M1M.Logo>
                </M1M.Header2>
                <M1M.Level>난이도 (중_{difficulty})</M1M.Level>
            </M1M.Header>
                <M1M.Level1 onClick={() => handleQuestPage('정수와 유리수')}>
                    <M1M.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1M.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M1M.Level1Photo>
                        <M1M.TextLevel1>LEVEL 1</M1M.TextLevel1>
                        <M1M.Level1Content>정수와 유리수</M1M.Level1Content>
                    </M1M.Level1Back>
                </M1M.Level1>
                <M1M.Level2 onClick={() => handleQuestPage('비례식과 비례 배분')}>
                    <M1M.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1M.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M1M.Level2Photo>
                        <M1M.TextLevel2>LEVEL 2</M1M.TextLevel2>
                        <M1M.Level2Content>비례식과 비례 배분</M1M.Level2Content>
                    </M1M.Level2Back>
                </M1M.Level2>
                <M1M.Level3 onClick={() => handleQuestPage('기본 확률과 통계')}>
                    <M1M.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1M.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M1M.Level3Photo>
                        <M1M.TextLevel3>LEVEL 3</M1M.TextLevel3>
                        <M1M.Level3Content>기본 확률과 통계</M1M.Level3Content>
                    </M1M.Level3Back>
                </M1M.Level3>
            <LevelFooter/>
        </M1M.Container>
    );
};

export default QuestM1M;