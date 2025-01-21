import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Rou7tGZk"
            alt=""
          />
          <span>Nikhil Kumar Patra</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Rou7tGZk"
            alt=""
          />
          <span>Nikhil Kumar Patra</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Rou7tGZk"
            alt=""
          />
          <span>Nikhil Kumar Patra</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Rou7tGZk"
            alt=""
          />
          <span>Nikhil Kumar Patra</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Rou7tGZk"
            alt=""
          />
          <span>Nikhil Kumar Patra</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Nikhil Kumar Patra"
            alt=""
          />
          <span>Nikhil Kumar Patra</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Rou7tGZk"
                alt=""
              />
              Nikhil Kumar Patra
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;