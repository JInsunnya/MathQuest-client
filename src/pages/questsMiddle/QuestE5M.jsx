import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E5M from '../../styles/questsMiddle/QuestE5MStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE5M = () => {
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
        <E5M.Container>
            <E5M.Header>
                <E5M.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E5M.BackgroundImage>
                <E5M.Header2>
                    <E5M.Year>{level}</E5M.Year>
                    <E5M.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E5M.Logo>
                </E5M.Header2>
                <E5M.Level>난이도 (중_{difficulty})</E5M.Level>
            </E5M.Header>
                <E5M.Level1 onClick={() => handleQuestPage('분수의 덧셈과 뺄셈')}>
                    <E5M.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5M.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </E5M.Level1Photo>
                        <E5M.TextLevel1>LEVEL 1</E5M.TextLevel1>
                        <E5M.Level1Content>분수의 덧셈과 뺄셈</E5M.Level1Content>
                    </E5M.Level1Back>
                </E5M.Level1>
                <E5M.Level2 onClick={() => handleQuestPage('소수 계산')}>
                    <E5M.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5M.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </E5M.Level2Photo>
                        <E5M.TextLevel2>LEVEL 2</E5M.TextLevel2>
                        <E5M.Level2Content>소수 계산</E5M.Level2Content>
                    </E5M.Level2Back>
                </E5M.Level2>
                <E5M.Level3 onClick={() => handleQuestPage('단위 환산')}>
                    <E5M.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5M.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </E5M.Level3Photo>
                        <E5M.TextLevel3>LEVEL 3</E5M.TextLevel3>
                        <E5M.Level3Content>단위 환산</E5M.Level3Content>
                    </E5M.Level3Back>
                </E5M.Level3>
            <LevelFooter/>
        </E5M.Container>
    );
};

export default QuestE5M;