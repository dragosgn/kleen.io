import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Message from "./Message.js";

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [
        {
          username: "Kevin Hsu",
          content: (
            <p>
              It’s gonna get harder before it gets easier. But it will get
              better, you just gotta make it through the hard stuff first.
            </p>
          ),
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        },
        {
          username: "Alice Chen",
          content: <p>Love it! :heart:</p>,
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        },
        {
          username: "Kevin Hsu",
          content: <p>Stay strong!</p>,
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        },
        {
          username: "KevHs",
          content: (
            <p>
              Did you tried meditation, it really really helped me to get over
              crisis moments. You can even book sessions spending kleenos :)
            </p>
          ),
          img: "http://i.imgur.com/ARbQZix.jpg"
        },
        {
          username: "Kevin Hsu",
          content: <p>So</p>,
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        },
        {
          username: "Kevin Hsu",
          content: <p>Kleen.io the best app to fight addiction</p>,
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        },
        {
          username: "Kevin Hsu",
          content: (
            <p>
              I have been succesfully managing my addiction for years with the
              help of Clean.io!
            </p>
          ),
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        },
        {
          username: "Alice Chen",
          content: <p>Definitely! Sounds awesome!</p>,
          img: "http://i.imgur.com/Tj5DGiO.jpg"
        }
      ]
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.scrollToBot();
  }

  componentDidUpdate() {
    this.scrollToBot();
  }

  scrollToBot() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(
      this.refs.chats
    ).scrollHeight;
  }

  submitMessage(e) {
    e.preventDefault();

    this.setState(
      {
        chats: this.state.chats.concat([
          {
            username: "Kevin Hsu",
            content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
            img: "http://i.imgur.com/Tj5DGiO.jpg"
          }
        ])
      },
      () => {
        ReactDOM.findDOMNode(this.refs.msg).value = "";
      }
    );
  }

  render() {
    const username = "Kevin Hsu";
    const { chats } = this.state;

    return (
      <div className="chatroom">
        <ul className="chats" ref="chats">
          {chats.map(chat => (
            <Message chat={chat} user={username} />
          ))}
        </ul>
        <form className="input" onSubmit={e => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Chatroom;
