let initialState = {
  friends: [
    {name:'조승래',phoneNumber:'01012341234',profileImg:'https://source.boringavatars.com/beam/1'},
    {name:'코딩안알려주는형',phoneNumber:'01056785678',profileImg:'https://source.boringavatars.com/beam/2'},
    {name:'코딩AI',phoneNumber:'01091019101',profileImg:'https://source.boringavatars.com/beam/4'},
  ],
};

function reducer(state = initialState, action) {
  console.log("액션", action);
  const{type,payload} = action
  console.log(state.friends)
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        friends: [
          ...state.friends,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            profileImg:payload.profileImg
          },
        ],
      };

      case "DELETE_CONTACT":
        let copy = [...state.friends]
        copy.splice(payload.index,1)
        return{
          ...state,friends:copy
        }

    default:
      return { ...state };
      
  }
  

}

export default reducer;
