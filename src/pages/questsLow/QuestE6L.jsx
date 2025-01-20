import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E6L from '../../styles/questsLow/QuestE6LStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE6L = () => {
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
        <E6L.Container>
            <E6L.Header>
                <E6L.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E6L.BackgroundImage>
                <E6L.Header2>
                    <E6L.Year>{level}</E6L.Year>
                    <E6L.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E6L.Logo>
                </E6L.Header2>
                <E6L.Level>난이도 (하_{difficulty})</E6L.Level>
            </E6L.Header>
                <E6L.Level1 onClick={() => handleQuestPage('분수의 덧셈과 뺄셈')}>
                    <E6L.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6L.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </E6L.Level1Photo>
                        <E6L.TextLevel1>LEVEL 1</E6L.TextLevel1>
                        <E6L.Level1Content>분수의 덧셈과 뺄셈</E6L.Level1Content>
                    </E6L.Level1Back>
                </E6L.Level1>
                <E6L.Level2 onClick={() => handleQuestPage('소수 계산')}>
                    <E6L.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6L.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </E6L.Level2Photo>
                        <E6L.TextLevel2>LEVEL 2</E6L.TextLevel2>
                        <E6L.Level2Content>소수 계산</E6L.Level2Content>
                    </E6L.Level2Back>
                </E6L.Level2>
                <E6L.Level3 onClick={() => handleQuestPage('규칙 찾기')}>
                    <E6L.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6L.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </E6L.Level3Photo>
                        <E6L.TextLevel3>LEVEL 3</E6L.TextLevel3>
                        <E6L.Level3Content>규칙 찾기</E6L.Level3Content>
                    </E6L.Level3Back>
                </E6L.Level3>
            <LevelFooter/>
        </E6L.Container>
    );
};

export default QuestE6L;