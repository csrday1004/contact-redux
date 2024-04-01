import React, { useEffect, useRef, useState } from "react";
import { Button, CloseButton, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Friend } from "./Friend";

const ListBox = () => {
  const friends = useSelector((state) => state.friends);
  const [filteredList, setFilteredList] = useState(friends);

  const [search, setSearch] = useState("");

  const searchRef = useRef()

  useEffect(() => {
    if (search) {
      const filtered = friends.filter(
        (friend) =>
          friend.name.toLowerCase().includes(search.toLowerCase()) ||
          friend.phoneNumber.includes(search)
      );
      setFilteredList(filtered);
    } else {
      setFilteredList(friends);
    }
  }, [friends, search]);

  return (
    <>
    
          <div className="mb-3 search-bar" controlId="formBasicEmail">
            <Form.Control
              ref={searchRef}
              type="text"
              placeholder="연락처 검색"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <CloseButton className="clearSearchBtn" onClick={()=>{
              searchRef.current.value=null
              setSearch(null)
            }}/>
          </div>
  
      <div className="연락처갯수 count">
        친구 {filteredList.length}/{friends.length}
      </div>
      <div className="연락처들 contacts">
        {filteredList.map((e, i) => {
          return <Friend info={e} index={i} key={i} />;
        })}
      </div>
    </>
  );
};

export default ListBox;
