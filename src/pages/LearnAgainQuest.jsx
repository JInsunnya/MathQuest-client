import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as LQP from '../styles/LearnAgainQuestStyles';
import QuestPageHeader from '../shared/components/QuestPageHeader';
import rectangleQuest from '../assets/images/rectangleQuest.png';
import circlestarblue from '../assets/images/circlestarblue.png';
import check from '../assets/images/check.png';
import circlestarred from '../assets/images/circlestarred.png';

const LearnAgainQuest = () => {
    const location = useLocation();
    const { question } = location.state || {};
    const [selectedOption, setSelectedOption] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({ message: '', solution: '' });
    const [showSolution, setShowSolution] = useState(false);
    const navigate = useNavigate();

    const fetchWrongQuestions = () => {
        const token = localStorage.getItem('authToken');
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
                    console.log('Updated wrong questions fetched.');
                }
            })
            .catch((error) => {
                console.error('Error fetching wrong questions:', error.response || error);
            });
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleAnswerSubmit = () => {
        if (!question || selectedOption === null) {
            alert('옵션을 선택하세요.');
            return;
        }

        const isCorrect = selectedOption === Number(question.answer);
        setPopupContent({
            message: isCorrect ? '정답입니다.' : '오답입니다.',
            solution: question.solution || '해설 정보가 없습니다.',
            isCorrect,
        });
        setShowPopup(true);

        if (isCorrect) {
            const token = localStorage.getItem('authToken');
            if (token) {
                axios
                    .post(
                        'https://mathquestpro.shop/problem/userproblem/',
                        {
                            problem_id: question.id,
                            status: 'RIGHT',
                        },
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    )
                    .then(() => {
                        console.log('Correct answer submitted successfully.');
                        fetchWrongQuestions(); 
                    })
                    .catch((error) => {
                        console.error('Error submitting answer:', error.response || error);
                    });
            }
        }
    };

    const handleGoBack = () => {
        navigate('/learnAgain');
    };

    const handleShowSolution = () => {
        setShowSolution(true);
    };

    const handleCloseSolution = () => {
        setShowSolution(false);
    };


    return (
        <LQP.Container>
            <LQP.Content>
                <QuestPageHeader/>
                <LQP.Quest>
                    <LQP.QuestBack>
                        <img id="rectangleQuest" src={rectangleQuest} alt="Background"/>
                        <LQP.QuestText>{question ? question.question : '문제를 불러오는 중...'}</LQP.QuestText>
                    </LQP.QuestBack>
                </LQP.Quest>
                <LQP.Options>
                    {question &&
                        [question.choice1, question.choice2, question.choice3, question.choice4].map((option, index) => (
                            <LQP.Option
                                key={index}
                                onClick={() => handleOptionClick(index + 1)}
                                isSelected={selectedOption === index + 1}
                            >
                                {option}
                            </LQP.Option>
                        ))}
                </LQP.Options>
                <LQP.AnswerButton onClick={handleAnswerSubmit}>정답 제출하기</LQP.AnswerButton>
                {showPopup && (
                    <LQP.Popup>
                        <LQP.PopupContent>
                            <LQP.PopupImageWrapper>
                                <img src={popupContent.isCorrect ? circlestarblue : circlestarred} alt="Star Background" />
                                <img src={check} alt="Check Icon" />
                            </LQP.PopupImageWrapper>
                            <h2>{popupContent.message}</h2>
                            <button onClick={handleShowSolution}>해설보기</button>
                            <button onClick={handleGoBack}>오답노트로 돌아가기</button>
                        </LQP.PopupContent>
                    </LQP.Popup>
                )}
                {showSolution && (
                    <LQP.SolutionPopup>
                        <LQP.SolutionContent>
                            <h2>해설</h2>
                            <p>{popupContent.solution}</p>
                            <button onClick={handleCloseSolution}>확인</button>
                        </LQP.SolutionContent>
                    </LQP.SolutionPopup>
                )}
            </LQP.Content>
        </LQP.Container>
    );
};

export default LearnAgainQuest;
