import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Friend } from "./Friend";

const ListBox = () => {
  const friends = useSelector((state) => state.friends);
  const [filteredList, setFilteredList] = useState(friends);

  const [search, setSearch] = useState("");

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
      <Row>
        <Col>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="연락처 검색"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary">검색</Button>
        </Col>
      </Row>

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
