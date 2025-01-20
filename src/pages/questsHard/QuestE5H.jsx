import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E5H from '../../styles/questsHard/QuestE5HStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE5H = () => {
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
        <E5H.Container>
            <E5H.Header>
                <E5H.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E5H.BackgroundImage>
                <E5H.Header2>
                    <E5H.Year>{level}</E5H.Year>
                    <E5H.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E5H.Logo>
                </E5H.Header2>
                <E5H.Level>난이도 (상_{difficulty})</E5H.Level>
            </E5H.Header>
                <E5H.Level1 onClick={() => handleQuestPage('분수의 덧셈과 뺄셈')}>
                    <E5H.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5H.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </E5H.Level1Photo>
                        <E5H.TextLevel1>LEVEL 1</E5H.TextLevel1>
                        <E5H.Level1Content>분수의 덧셈과 뺄셈</E5H.Level1Content>
                    </E5H.Level1Back>
                </E5H.Level1>
                <E5H.Level2 onClick={() => handleQuestPage('소수 계산')}>
                    <E5H.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5H.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </E5H.Level2Photo>
                        <E5H.TextLevel2>LEVEL 2</E5H.TextLevel2>
                        <E5H.Level2Content>소수 계산</E5H.Level2Content>
                    </E5H.Level2Back>
                </E5H.Level2>
                <E5H.Level3 onClick={() => handleQuestPage('단위 환산')}>
                    <E5H.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <E5H.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </E5H.Level3Photo>
                        <E5H.TextLevel3>LEVEL 3</E5H.TextLevel3>
                        <E5H.Level3Content>단위 환산</E5H.Level3Content>
                    </E5H.Level3Back>
                </E5H.Level3>
            <LevelFooter/>
        </E5H.Container>
    );
};

export default QuestE5H;