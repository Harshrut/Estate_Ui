import Chat from "../../components/chat/chat.jsx";
import List from "../../components/list/list.jsx";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE0Z6Hv7BwoyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726213322661?e=2147483647&v=beta&t=uNh4h7j8wwaU0HypsnbrhUpsiXi6eWEZED9Rou7tGZk"
                alt=""
              />
            </span>
            <span>
              Username: <b>Nikhil Kumar Patra</b>
            </span>
            <span>
              E-mail: <b>nikhilpatra123@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;