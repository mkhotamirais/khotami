import { useReducer, useState } from "react";

export default function UseReducer() {
  return (
    <div>
      UseReducer
      <UseReducer1 />
      <UseReducer2 />
    </div>
  );
}

function reducer(state, action) {
  if (action.type === "inc") {
    return { count: state.count + 1 };
  }
  throw Error("unknown action " + action.type);
}
function UseReducer1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleCount = () => dispatch({ type: "inc" });
  return (
    <div className="border flex items-center gap-2 rounded p-2 max-w-min">
      <div className="min-w-max">count: {state.count}</div>
      <button onClick={handleCount} className="leading-none border rounded p-1">
        +
      </button>
    </div>
  );
}

function reducerUseReducer2(state, action) {
  switch (action.type) {
    case "set_name": {
      return { ...state, name: action.newName };
    }
    case "inc_age": {
      return { ...state, age: state.age + 1 };
    }
    case "dec_age": {
      return { ...state, age: state.age - 1 };
    }
    case "set_gender": {
      return { ...state, gender: action.newGender };
    }
  }
  throw Error("Unknown action: " + action.type);
}
const initialState = { name: "john", age: 20, gender: "male" };
function UseReducer2() {
  const [state, dispatch] = useReducer(reducerUseReducer2, initialState);
  const [newName, setNewName] = useState("");
  const setName = () => {
    dispatch({ type: "set_name", newName });
    setNewName("");
  };
  const incAge = () => {
    dispatch({ type: "inc_age" });
  };
  const decAge = () => {
    dispatch({ type: "dec_age" });
  };
  const setGender = () => {
    let newGender;
    if (state.gender === "male") newGender = "female";
    else if (state.gender === "female") newGender = "male";
    dispatch({ type: "set_gender", newGender });
  };

  return (
    <div>
      <div>Name: {state.name}</div>
      <div>Age: {state.age}</div>
      <div>Gender: {state.gender}</div>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="newName" className="border" />
      <button onClick={setName} className="border rounded text-sm">
        Change Name
      </button>
      <div className="my-2 flex gap-2">
        <button onClick={incAge} className="border rounded p-1 leading-none">
          inc age
        </button>
        <button onClick={decAge} className="border rounded p-1 leading-none">
          dec age
        </button>
        <button onClick={setGender} className="border rounded p-1 leading-none">
          Switch Gender
        </button>
      </div>
    </div>
  );
}
