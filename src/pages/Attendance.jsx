import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mark from '../assets/images/Mark.png'; // Mark.png 임포트
import {
  CalendarContainer,
  Header,
  DateDisplay,
  CalendarWrapper,
  CalendarBox, 
  CalendarGrid,
  DateCell,
  DateButton,
  AttendanceMark,
  WeekdayRow,
  WeekdayCell,
} from "../styles/AttendanceStyles"; // 스타일 컴포넌트 임포트
import TextLogoBlack from '../assets/images/textlogoblack.png';
import Footer from '../shared/components/Footer';

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState([]);

  const fetchAttendanceData = (year, month) => {
    axios.get(`https://mathquestpro.shop/problem/attendance/${year}/${month}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
      .then((response) => {
        setAttendanceData(response.data.data.attendance);
      })
      .catch((error) => {
        console.error('출석 데이터를 불러오는 데 실패했습니다', error);
      });
  };

  useEffect(() => {
    fetchAttendanceData(currentDate.getFullYear(), currentDate.getMonth() + 1);
  }, [currentDate]);

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const renderCalendar = (month) => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      month,
      0
    ).getDate();
    const firstDayIndex = new Date(
      currentDate.getFullYear(),
      month - 1,
      1
    ).getDay();

    const calendarDays = [];
    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(<div key={`empty-${i}`} />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const attendance = attendanceData.find(
        (item) => new Date(item.date).getDate() === day
      );
      const isAttended = attendance ? attendance.attended : false;
      const isToday = day === new Date().getDate();

      calendarDays.push(
        <DateCell key={day}>
          <DateButton
            onClick={() => handleDateClick(day)}
            className={`${
              isAttended ? 'attended' : ''
            } ${isToday ? 'today' : ''}`}
          >
            {day}
          </DateButton>
          {isAttended && <AttendanceMark src={Mark} alt="Attendance Mark" />}
        </DateCell>
      );
    }
    return calendarDays;
  };

  const handleMonthChange = (direction) => {
    if (direction === 'prev') {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    } else if (direction === 'next') {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    }
  };

  return (
    <CalendarContainer>
      <Header><img src={TextLogoBlack} alt="TextLogoBlack"/></Header> {/* 첫 번째 헤더 */}
      <DateDisplay>
        <button onClick={() => handleMonthChange('prev')}>&lt;</button>
        <span>
          {currentDate.getFullYear()}년 {currentDate.toLocaleString("default", { month: "long" })}
        </span>
        <button onClick={() => handleMonthChange('next')}>&gt;</button>
      </DateDisplay>

      {/* 달력 감싸는 박스 추가 */}
      <CalendarBox>
        <CalendarWrapper>
          <WeekdayRow>
            <WeekdayCell>일</WeekdayCell>
            <WeekdayCell>월</WeekdayCell>
            <WeekdayCell>화</WeekdayCell>
            <WeekdayCell>수</WeekdayCell>
            <WeekdayCell>목</WeekdayCell>
            <WeekdayCell>금</WeekdayCell>
            <WeekdayCell>토</WeekdayCell>
          </WeekdayRow>
          <CalendarGrid>{renderCalendar(currentDate.getMonth() + 1)}</CalendarGrid>
        </CalendarWrapper>
      </CalendarBox>

      <Footer />
    </CalendarContainer>
  );
};

export default Attendance;
