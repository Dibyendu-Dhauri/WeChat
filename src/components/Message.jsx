import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);

  const timeChange = (totalSeconds) => {
    var date = new Date(totalSeconds * 1000); // multiply by 1000 because Date() requires miliseconds
    var timeStr = date.toTimeString();
    const hour = timeStr[0] + timeStr[1];
    const minute = timeStr[3] + timeStr[4];
    const second = timeStr[6] + timeStr[7];
    if (hour >= 12) {
      return {
        h: hour,
        m: minute,
        s: second + "pm",
      };
    } else {
      return {
        h: hour,
        m: minute,
        s: second + "am",
      };
    }
  };

  const time = timeChange(message.date.seconds);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />

        <span>
          {time.h}:{time.m}:{time.s}
        </span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}
