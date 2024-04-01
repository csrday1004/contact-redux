import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const AddBox = () => {

  const dispatch = useDispatch() 
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImg,setProfileImg]=useState("https://source.boringavatars.com/beam")
  const inputNameRef = useRef()
  const inputPhoneNumberRef = useRef()
  
  useEffect(()=>{

  },[])
  
  return (
    <Form
    onSubmit={(e) => {
      e.preventDefault();
      let random = Math.random()
      setProfileImg(`https://source.boringavatars.com/beam/${random}`)
      dispatch({type:"ADD_CONTACT", payload:{name,phoneNumber,profileImg}})
      inputNameRef.current.value=null
      inputPhoneNumberRef.current.value=null
    }}
    >
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        
      >
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
    </Form>
  );
};
