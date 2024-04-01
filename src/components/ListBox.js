import React, { useEffect, useRef, useState } from "react";
import { CloseButton, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Friend } from "./Friend";

const ListBox = () => {
  const friends = useSelector((state) => state.friends);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const [filteredCount, setFilteredCount] = useState(0);

  useEffect(() => {
    const renderedElements = document.querySelectorAll('.연락처들.contacts > *');
    setFilteredCount(renderedElements.length);
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
        <CloseButton
          className="clearSearchBtn"
          onClick={() => {
            searchRef.current.value = null;
            setSearch("");
          }}
        />
      </div>

      <div className="연락처갯수 count">친구 {filteredCount}/{friends.length}</div>
      <div className="연락처들 contacts">
        {friends.map((e, i) => {
          return e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.phoneNumber.includes(search) ? (
            <Friend info={e} index={i} key={i} />
          ) : null;
        })}
      </div>
    </>
  );
};

export default ListBox;
