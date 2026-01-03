import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [userName, setUserName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    let buttonName = "Edit";

    function isClicked() {
        setIsEditing((editing) => !editing);
        
        if(isEditing) {
          onChangeName(symbol, userName);
        }
    }

    function handleChange(event) {
      setUserName(event.target.value);

    }

    let playerName = <span className="player-name">{userName}</span>    

    if(isEditing) {
      playerName = (<input type="text" required value={userName} onChange={handleChange}/>);
    }

    return <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={isClicked}>{isEditing ? "Save" : "Edit"}</button>
        </li>
} 
