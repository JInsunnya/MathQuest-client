import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E6M from '../../styles/questsMiddle/QuestE6MStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE6M = () => {
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
        <E6M.Container>
            <E6M.Header>
                <E6M.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E6M.BackgroundImage>
                <E6M.Header2>
                    <E6M.Year>{level}</E6M.Year>
                    <E6M.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E6M.Logo>
                </E6M.Header2>
                <E6M.Level>난이도 (중_{difficulty})</E6M.Level>
            </E6M.Header>
                <E6M.Level1 onClick={() => handleQuestPage('분수의 덧셈과 뺄셈')}>
                    <E6M.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6M.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </E6M.Level1Photo>
                        <E6M.TextLevel1>LEVEL 1</E6M.TextLevel1>
                        <E6M.Level1Content>분수의 덧셈과 뺄셈</E6M.Level1Content>
                    </E6M.Level1Back>
                </E6M.Level1>
                <E6M.Level2 onClick={() => handleQuestPage('소수 계산')}>
                    <E6M.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6M.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </E6M.Level2Photo>
                        <E6M.TextLevel2>LEVEL 2</E6M.TextLevel2>
                        <E6M.Level2Content>소수 계산</E6M.Level2Content>
                    </E6M.Level2Back>
                </E6M.Level2>
                <E6M.Level3 onClick={() => handleQuestPage('규칙 찾기')}>
                    <E6M.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E6M.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </E6M.Level3Photo>
                        <E6M.TextLevel3>LEVEL 3</E6M.TextLevel3>
                        <E6M.Level3Content>규칙 찾기</E6M.Level3Content>
                    </E6M.Level3Back>
                </E6M.Level3>
            <LevelFooter/>
        </E6M.Container>
    );
};

export default QuestE6M;