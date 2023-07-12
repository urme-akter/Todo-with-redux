import "./App.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, removeUser } from "./store/slices/userSlices";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  let [text, setText] = useState("");

  let handleChange = (e) => {
    setText(e.target.value);
  };

  let handleClick = (payload) => {
    // console.log(payload);
    dispatch(addUser(payload));
  };

  let handleDelete = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      <div>
        <input onChange={handleChange} />
        <button onClick={() => handleClick(text)}>Click</button>
      </div>

      <ul>
        {data.map((user, id) => (
          <li key={id}>
            {user}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
