import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E6H from '../../styles/questsHard/QuestE6HStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE6H = () => {
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
        <E6H.Container>
            <E6H.Header>
                <E6H.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E6H.BackgroundImage>
                <E6H.Header2>
                    <E6H.Year>{level}</E6H.Year>
                    <E6H.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E6H.Logo>
                </E6H.Header2>
                <E6H.Level>난이도 (상_{difficulty})</E6H.Level>
            </E6H.Header>
                <E6H.Level1 onClick={() => handleQuestPage('분수의 덧셈과 뺄셈')}>
                    <E6H.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6H.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </E6H.Level1Photo>
                        <E6H.TextLevel1>LEVEL 1</E6H.TextLevel1>
                        <E6H.Level1Content>분수의 덧셈과 뺄셈</E6H.Level1Content>
                    </E6H.Level1Back>
                </E6H.Level1>
                <E6H.Level2 onClick={() => handleQuestPage('소수 계산')}>
                    <E6H.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6H.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </E6H.Level2Photo>
                        <E6H.TextLevel2>LEVEL 2</E6H.TextLevel2>
                        <E6H.Level2Content>소수 계산</E6H.Level2Content>
                    </E6H.Level2Back>
                </E6H.Level2>
                <E6H.Level3 onClick={() => handleQuestPage('규칙 찾기')}>
                    <E6H.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6H.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </E6H.Level3Photo>
                        <E6H.TextLevel3>LEVEL 3</E6H.TextLevel3>
                        <E6H.Level3Content>규칙 찾기</E6H.Level3Content>
                    </E6H.Level3Back>
                </E6H.Level3>
            <LevelFooter/>
        </E6H.Container>
    );
};

export default QuestE6H;