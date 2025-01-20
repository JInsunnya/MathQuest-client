import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import * as P from '../../styles/auth/ProfileStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import Footer from '../../shared/components/Footer';
import Process from '../../assets/images/process.png';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        school: '',
        grade: '',
        birthdate: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const parsedUserInfo = JSON.parse(userInfo);
            setProfileData({
                name: parsedUserInfo.name || '',
                username: parsedUserInfo.username || '',
                school: parsedUserInfo.school || '',
                grade: parsedUserInfo.grade || '',
                birthdate: parsedUserInfo.birthdate || '',
            });
        }
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            alert('로그인이 필요합니다.');
            return;
        }

        try {
            const response = await axios.put(
                'https://mathquestpro.shop/user/update/',
                {
                    username: profileData.username,
                    name: profileData.name,
                    school: profileData.school,
                    grade: profileData.grade,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                localStorage.setItem('userInfo', JSON.stringify(profileData));
                alert('프로필 수정이 완료되었습니다.');
            } else {
                alert('프로필 수정에 실패했습니다.');
            }
        } catch (error) {
            console.error('Error updating profile:', error.response || error);
            alert('프로필 수정 중 오류가 발생했습니다.');
        }
    };

    const handleResetProgress = () => {
        navigate('/signout');
    };

    return (
    <P.Container>
        <P.Header>
            <P.HeaderTitle>프로필 수정</P.HeaderTitle>
            <P.HeaderButton onClick={handleSave}>완료</P.HeaderButton>
        </P.Header>
        <P.Logo>
            <img id="CharacterLogo" src={CharacterLogo}/>
        </P.Logo>
        <P.Content>
            <P.Name>
                <P.NameTitle>이름</P.NameTitle>
                <P.NameContent>
                    <input
                        name="name"
                        type="text"
                        value={profileData.name}
                        onChange={handleChange}
                    />
                </P.NameContent>
            </P.Name>
            <P.Email>
                <P.EmailTitle>아이디</P.EmailTitle>
                <P.EmailContent>
                    <input
                        name="username"
                        type="text"
                        value={profileData.username}
                        onChange={handleChange}
                    />
                </P.EmailContent>
            </P.Email>
            <P.School>
                <P.SchoolTitle>학교</P.SchoolTitle>
                <P.SchoolContent>
                    <input
                        name="school"
                        type="text"
                        value={profileData.school}
                        onChange={handleChange}
                    />
                </P.SchoolContent>
            </P.School>
            <P.Year>
                <P.YearTitle>학년</P.YearTitle>
                <P.YearContent process={Process}>
                    <select
                        name="grade"
                        value={profileData.grade}
                        onChange={handleChange}
                    >
                        <option value="">학년을 선택하세요</option>
                        <option value="1학년">1학년</option>
                        <option value="2학년">2학년</option>
                        <option value="3학년">3학년</option>
                        <option value="4학년">4학년</option>
                        <option value="5학년">5학년</option>
                        <option value="6학년">6학년</option>
                    </select>
                </P.YearContent>
            </P.Year>
            <P.Password>
                <P.PasswordTitle>생일</P.PasswordTitle>
                <P.PasswordContent>
                    <input
                        name="birthdate"
                        type="text"
                        value={profileData.birthdate}
                        onChange={handleChange}
                    />
                </P.PasswordContent>
            </P.Password>
        </P.Content>
        <P.ResetButton onClick={handleResetProgress}>학습 진도 초기화</P.ResetButton>
        <Footer/>
    </P.Container>
    );
};
export default Profile;
