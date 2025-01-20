import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E5L from '../../styles/questsLow/QuestE5LStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE5L = () => {
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
        <E5L.Container>
            <E5L.Header>
                <E5L.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E5L.BackgroundImage>
                <E5L.Header2>
                    <E5L.Year>{level}</E5L.Year>
                    <E5L.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E5L.Logo>
                </E5L.Header2>
                <E5L.Level>난이도 (하_{difficulty})</E5L.Level>
            </E5L.Header>
                <E5L.Level1 onClick={() => handleQuestPage('분수의 덧셈과 뺄셈')}>
                    <E5L.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5L.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </E5L.Level1Photo>
                        <E5L.TextLevel1>LEVEL 1</E5L.TextLevel1>
                        <E5L.Level1Content>분수의 덧셈과 뺄셈</E5L.Level1Content>
                    </E5L.Level1Back>
                </E5L.Level1>
                <E5L.Level2 onClick={() => handleQuestPage('소수 계산')}>
                    <E5L.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5L.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </E5L.Level2Photo>
                        <E5L.TextLevel2>LEVEL 2</E5L.TextLevel2>
                        <E5L.Level2Content>소수 계산</E5L.Level2Content>
                    </E5L.Level2Back>
                </E5L.Level2>
                <E5L.Level3 onClick={() => handleQuestPage('단위 환산')}>
                    <E5L.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5L.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </E5L.Level3Photo>
                        <E5L.TextLevel3>LEVEL 3</E5L.TextLevel3>
                        <E5L.Level3Content>단위 환산</E5L.Level3Content>
                    </E5L.Level3Back>
                </E5L.Level3>
            <LevelFooter/>
        </E5L.Container>
    );
};

export default QuestE5L;