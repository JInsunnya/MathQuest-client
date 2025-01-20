import styled from 'styled-components';


export const CalendarContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F2F6FC;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Header = styled.div`
  width: 393px;
  position: fixed;
  top: 0;  /* 상단 고정 */
  height: 40px;
  width: 53%;
  background-color: #376AED; 
  z-index: 1000;
  color: #333;  // 글자 색상
  padding: 20px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
    
  img {
    max-width: 150px;
    display: flex;
    justify-content: left;
    margin-top: 10px;
  }


`;

export const DateDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  max-width: 350px;
  margin-bottom: 30px;

  span {
    font-size: 1.2em;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
  }
`;

export const CalendarBox = styled.div`
  width100%;
  max-width: 380px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeekdayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f9f9f9;
  text-align: center;
  font-weight: bold;
`;

export const WeekdayCell = styled.div`
  padding: 10px;
  font-size: 0.9em;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
`;

export const DateCell = styled.div`
  position: relative; /* 자식 요소(스탬프)의 기준이 되는 컨테이너 */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;


export const DateButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: ${(props) => (props.className.includes('attended') ? '#FFEB3B' : 'transparent')};
  color: ${(props) => (props.className.includes('today') ? '#1976D2' : '#000')};
  font-weight: ${(props) => (props.className.includes('today') ? 'bold' : 'normal')};
  cursor: pointer;
`;

export const AttendanceMark = styled.img`
  position: absolute; /* DateCell 기준으로 위치 조정 */
  top: 50%; /* 상단 기준으로 50% 내려옴 */
  left: 50%; /* 왼쪽 기준으로 50% 이동 */
  transform: translate(-50%, -50%); /* 정중앙으로 보정 */
  width: 60px; /* 스탬프 크기 조정 (필요 시) */
  height: 60px; /* 스탬프 크기 조정 (필요 시) */
  pointer-events: none; /* 클릭 이벤트가 날짜에만 적용되도록 설정 */
`;
