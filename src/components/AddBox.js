import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { randomUsername } from "korean-random-username";

export const AddBox = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImg, setProfileImg] = useState(
    "https://source.boringavatars.com/beam"
  );
  const inputNameRef = useRef();
  const inputPhoneNumberRef = useRef();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (!name) {
      setName(randomUsername());
    }
    if (!phoneNumber) {
      setPhoneNumber("010" + Math.floor(10000000 + Math.random() * 90000000));
    }
  }, [toggle]);

  const addFriend = (e) => {
    e.preventDefault();
    let random = Math.random();
    setProfileImg(`https://source.boringavatars.com/beam/${random}`);
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber, profileImg },
    });
    inputNameRef.current.value = null;
    inputPhoneNumberRef.current.value = null;
    setName("");
    setPhoneNumber("");
    setToggle(!toggle);
  };

  return (
    <Form onSubmit={(e)=>{addFriend(e)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          ref={inputNameRef}
          placeholder="이름을 입력하세요"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>연락처</Form.Label>
        <Form.Control
          ref={inputPhoneNumberRef}
          type="number"
          placeholder="전화번호를 입력하세요"
          step="1"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        연락처 추가
      </Button>
      <span style={{fontSize:'12px', paddingLeft:'5px'}}> *입력 없이 누르면 랜덤 친구 생성</span>
    </Form>
  );
};
