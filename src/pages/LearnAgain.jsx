import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as LA from '../styles/LearnAgainStyles';
import CharacterLogo from '../assets/images/characterLogo.png';
import RectangleTop from '../assets/images/rectangleTop.png';
import LevelFooter from '../shared/components/LevelFooter';


const LearnAgain = () => {
    const [wrongQuestions, setWrongQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchWrongQuestions();
    }, []);

    const fetchWrongQuestions = () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            console.error('No authentication token found');
            return;
        }

        axios
            .get('https://mathquestpro.shop/problem/wrongproblems/', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                if (response.data.code === 200) {
                    setWrongQuestions(response.data.data);
                } else {
                    console.warn('No wrong questions available:', response.data.msg);
                }
            })
            .catch((error) => {
                console.error('Error fetching wrong questions:', error.response || error);
            });
    };

    const handleQuestionClick = (question) => {
        navigate('/learnAgainQuest', { state: { question } }); 
    };


    return(
        <LA.Container>
            <LA.Header>
                <LA.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop}/>
                </LA.BackgroundImage>
                <LA.Header2>
                    <LA.Title>오답노트</LA.Title>
                    <LA.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </LA.Logo>
                </LA.Header2>
            </LA.Header>
            <LA.Content>
                {wrongQuestions.length > 0 ? (
                        wrongQuestions.map((question) => (
                            <LA.Question key={question.id} onClick={() => handleQuestionClick(question)}>
                                <p>
                                    <strong>학년:</strong> {question.level} <br />
                                    <strong>단원:</strong> {question.chapter}
                                </p>
                                <h3>{question.question}</h3>
                            </LA.Question>
                        ))
                    ) : (
                        <p>오답 문제가 없습니다.</p>
                    )}
            </LA.Content>
            <LevelFooter/>
        </LA.Container>
    );
};

export default LearnAgain;