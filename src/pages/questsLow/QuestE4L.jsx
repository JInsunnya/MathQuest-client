import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as E4L from '../../styles/questsLow/QuestE4LStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import Level4 from '../../assets/images/level4.png';
import LevelFooter from '../../shared/components/LevelFooter';

const QuestE4L = () => {
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
        <E4L.Container>
            <E4L.Header>
                <E4L.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E4L.BackgroundImage>
                <E4L.Header2>
                    <E4L.Year>{level}</E4L.Year>
                    <E4L.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E4L.Logo>
                </E4L.Header2>
                <E4L.Level>난이도 (하_{difficulty})</E4L.Level>
            </E4L.Header>
            <E4L.Level1 onClick={() => handleQuestPage('세자릿수 덧셈')}>
                <E4L.Level1Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4L.Level1Photo>
                        <img id="Level1" src={Level1}/>
                    </E4L.Level1Photo>
                    <E4L.TextLevel1>LEVEL 1</E4L.TextLevel1>
                    <E4L.Level1Content>세자릿수 덧셈</E4L.Level1Content>
                </E4L.Level1Back>
            </E4L.Level1>
            <E4L.Level2 onClick={() => handleQuestPage('곱셈과 나눗셈')}>
                <E4L.Level2Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4L.Level2Photo>
                        <img id="Level2" src={Level2}/>
                    </E4L.Level2Photo>
                    <E4L.TextLevel2>LEVEL 2</E4L.TextLevel2>
                    <E4L.Level2Content>곱셈과 나눗셈</E4L.Level2Content>
                </E4L.Level2Back>
            </E4L.Level2>
            <E4L.Level3 onClick={() => handleQuestPage('소수와 분수')}>
                <E4L.Level3Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4L.Level3Photo>
                        <img id="Level3" src={Level3}/>
                    </E4L.Level3Photo>
                    <E4L.TextLevel3>LEVEL 3</E4L.TextLevel3>
                    <E4L.Level3Content>소수와 분수</E4L.Level3Content>
                </E4L.Level3Back>
            </E4L.Level3>
            <E4L.Level4 onClick={() => handleQuestPage('시간 계산')}>
                <E4L.Level4Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4L.Level4Photo>
                        <img id="Level4" src={Level4}/>
                    </E4L.Level4Photo>
                    <E4L.TextLevel4>LEVEL 4</E4L.TextLevel4>
                    <E4L.Level4Content>시간 계산</E4L.Level4Content>
                </E4L.Level4Back>
            </E4L.Level4>
            <LevelFooter/>
        </E4L.Container>
    );
};

export default QuestE4L;