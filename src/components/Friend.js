import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const Friend = ({info,index}) => {

  const dispatch = useDispatch()
  const deleteContact = () =>{
    dispatch({type:'DELETE_CONTACT', payload:{index}})
  }

  return (
    <div className="친구 friend">
      <img
        className="friend-img"
        src={info.profileImg}
        alt={info.name}
      />
      <div className="이름과연락처 name-number">
        <h5 className="이름">{info.name}</h5>
        <h6 className="연락처" style={{color:'gray'}}>{info.phoneNumber}</h6>
      </div>
      <Button variant="danger" onClick={deleteContact}>삭제</Button>
    </div>
  );
};
