import React, { useState, useEffect } from "react";
import "./MessageApp.css";

const MessageApp = () => {
  const [textValue, setTextValue] = useState("");
  const [textMessages, setTextMessages] = useState([]);
  const [newTextValue, setNewTextValue] = useState("");
  const [showSenderMessage, setShowSenderMessage] = useState(false);
  const [showRecieverMessage, setShowRecieverMessage] = useState(false);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messages'))
    if (savedMessages !== null) {
        setTextMessages(savedMessages)
    }
}, []);

  const sendMessage = (e) => {
    e.preventDefault();

    setShowSenderMessage(true);

    if (textValue != "") {
      // const newTextValueHere = textValue;
      // setNewTextValue(newTextValueHere);
      // setTextValue("");
      setTextMessages([...textMessages, textValue]);

      localStorage.setItem("messages", textMessages);
      setTextValue("");
    } else {
      return;
    }
  };

  return (
    <>
      {showSenderMessage &&
        textMessages.map((text) => (
          <div
            className="bubble-sender"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              width: "80%"
            }}
          >
            <span style={{ width: "20%" }}>
              <img
                alt="blank profile"
                src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                style={{
                  height: "50px",
                  width: "50px",
                  border: "2px solid black",
                  borderRadius: "50%"
                }}
              />
            </span>

            <span style={{ width: "80%" }}>
              {text}
              <br />
              <span
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end"
                }}
              >
                <small style={{ color: "grey", float: "right" }}>
                  11:23 AM
                </small>
              </span>
            </span>
          </div>
        ))}

      <span>
        <form
          style={{
            position: "fixed",
            bottom: "0",
            marginBottom: "80px",
            width: "100%"
          }}
        >
          <div className="col-lg-10 mb-3">
            <div className="input-group mycustom">
              <input
                value={textValue}
                type="text"
                required
                placeholder="Send Message"
                maxLength="30"
                onChange={(e) => setTextValue(e.target.value)}
              />
              <div className="input-group-prepend">
                <button
                  type="submit"
                  style={{
                    color: "white",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly"
                  }}
                  onClick={sendMessage}
                >
                  Send 
                </button>
              </div>
            </div>
          </div>
        </form>
      </span>

    </>
  );
};

export default MessageApp;
