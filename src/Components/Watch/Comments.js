import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import { Avatar } from "@mui/material";
import "./Comments.css";
import setContext from "../../Context/Context";
import { useContext } from "react";
import Button from "@mui/material/Button";


function Comments() {
  let commentCount = localStorage.getItem("commentCount");
  const { isVisible, setIsVisible, inputData, setInputData } =
    useContext(setContext);
  return (
    <div className="comments">
      <div className="commentCount">
        {commentCount} Comments
        <SortIcon className="sortIcon"/> <p>SORT BY</p>
      </div>
      <div className="commentSection">
        <div className="addComment">
          <Avatar />
          <form>
            <input
              type="text"
              placeholder="Add a comment"
              value={inputData}
              onClick={() => {
                setIsVisible(true);
              }}
              onChange={(event)=>{
                setInputData(event.target.value)
              }}
            />
          </form>
        </div>
        {isVisible ? (
          <div className="formButtons">
            {inputData === '' ? (
              <>
                <button className="cancelButton formButton" onClick={()=>{
                  setIsVisible(false);
                }}>CANCEL</button>
                <Button className="commentButton" style={{color: "#717171", backgroundColor: "#f0f0f0"}}>COMMENT</Button>
              </>
            ) : (
              <>
                <button className="cancelButton formButton" onClick={()=>{
                  setInputData("");
                  setIsVisible(false);
                }}>CANCEL</button>
                <Button variant="contained">COMMENT</Button>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Comments;
