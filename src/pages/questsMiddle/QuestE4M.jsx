import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E4M from '../../styles/questsMiddle/QuestE4MStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import Level4 from '../../assets/images/level4.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE4M = () => {
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
        <E4M.Container>
            <E4M.Header>
                <E4M.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E4M.BackgroundImage>
                <E4M.Header2>
                    <E4M.Year>{level}</E4M.Year>
                    <E4M.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E4M.Logo>
                </E4M.Header2>
                <E4M.Level>난이도 (중_{difficulty})</E4M.Level>
            </E4M.Header>
            <E4M.Level1 onClick={() => handleQuestPage('세자릿수 덧셈')}>
                <E4M.Level1Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4M.Level1Photo>
                        <img id="Level1" src={Level1}/>
                    </E4M.Level1Photo>
                    <E4M.TextLevel1>LEVEL 1</E4M.TextLevel1>
                    <E4M.Level1Content>세자릿수 덧셈</E4M.Level1Content>
                </E4M.Level1Back>
            </E4M.Level1>
            <E4M.Level2 onClick={() => handleQuestPage('곱셈과 나눗셈')}>
                <E4M.Level2Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4M.Level2Photo>
                        <img id="Level2" src={Level2}/>
                    </E4M.Level2Photo>
                    <E4M.TextLevel2>LEVEL 2</E4M.TextLevel2>
                    <E4M.Level2Content>곱셈과 나눗셈</E4M.Level2Content>
                </E4M.Level2Back>
            </E4M.Level2>
            <E4M.Level3 onClick={() => handleQuestPage('소수와 분수')}>
                <E4M.Level3Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4M.Level3Photo>
                        <img id="Level3" src={Level3}/>
                    </E4M.Level3Photo>
                    <E4M.TextLevel3>LEVEL 3</E4M.TextLevel3>
                    <E4M.Level3Content>소수와 분수</E4M.Level3Content>
                </E4M.Level3Back>
            </E4M.Level3>
            <E4M.Level4 onClick={() => handleQuestPage('시간 계산')}>
                <E4M.Level4Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4M.Level4Photo>
                        <img id="Level4" src={Level4}/>
                    </E4M.Level4Photo>
                    <E4M.TextLevel4>LEVEL 4</E4M.TextLevel4>
                    <E4M.Level4Content>시간 계산</E4M.Level4Content>
                </E4M.Level4Back>
            </E4M.Level4>
            <LevelFooter/>
        </E4M.Container>
    );
};

export default QuestE4M;