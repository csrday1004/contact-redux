import "./App.css";
import { AddBox } from "./components/AddBox";
import ListBox from "./components/ListBox";

// 1. 왼쪽에는 연락처 등록폼, 오른쪽에는 검색창, 연락처 리스트가 있다
// 2. 유저 이름과 전화번호 추가 가능
// 3. 리스트에 아이템이 몇갠지 보여줌
// 4. 유저 이름으로 검색 가능

function App() {
  return (
    <div className="App">
      <h1 className="타이틀 title">Phone Book</h1>
      <div className="등록/리스트 container">
        <div className="등록박스 add-box">
          <AddBox />
        </div>
        <div className="리스트박스 list-box">
          <ListBox />
        </div>
      </div>
    </div>
  );
}

export default App;
