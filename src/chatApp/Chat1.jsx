import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import '../App.css'

export default function Chat1() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [clearMessagesLoading, setClearMessagesLoading] = useState(false);
  const [filterMessagesLoading, setFilterMessagesLoading] = useState(false);
  const [clearFilterLoading, setClearFilterLoading] = useState(false);

  const addMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageObj = {
        id: uuidv4(),
        title: newMessage
      };

      setSendMessageLoading(true);

      axios
        .post("https://jsonplaceholder.typicode.com/posts", newMessageObj)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setMessages([...messages, response.data]);
            setError("");
          } else {
            setError("Error occurred while posting the message.");
          }
          console.log("Status Code:", response.status);
        })
        .catch((error) => {
          setError("Error occurred while posting the message.");
          console.log(error);
        })
        .finally(() => {
          setSendMessageLoading(false);
        });

      setNewMessage("");
    }
  };

  const clearMessages = () => {
    setClearMessagesLoading(true);

    setMessages([]);
    setError("");
    setFilter("");
    setFilteredMessages([]);

    setTimeout(() => {
      setClearMessagesLoading(false);
    }, 500);
  };

  const filterMessages = () => {
    setFilterMessagesLoading(true);

    const filtered = messages.filter((message) =>
      message.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredMessages(filtered);

    setTimeout(() => {
      setFilterMessagesLoading(false);
    }, 500);
  };

  const clearFilter = () => {
    setClearFilterLoading(true);

    setFilter("");
    setFilteredMessages([]);

    setTimeout(() => {
      setClearFilterLoading(false);
    }, 500);
  };

  return (
    <div className="my-4  mx-10">
      <div className="h-56 overflow-y-auto pt-7 text-white chat-bg border border-gray-400 rounded-md">
      <div  className="">
      {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          filteredMessages.length > 0 ? (
            <div className="px-4 py-2">
              {filteredMessages.map((message) => (
                <p key={message.id}>{message.title}</p>
              ))}
            </div>
          ) : (
            messages.length > 0 ? (
              <div className=" px-4 py-2">
                {messages.map((message) => (
                  <p key={message.id}>{message.title}</p>
                ))}
              </div>
            ) : (
              <p>No messages to display.</p>
            )
          )
        )}
      </div>
        
      </div>
      <div className="my-4 ">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter a message"
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
        <button
          onClick={addMessage}
          className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded-md ${
            sendMessageLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={sendMessageLoading}
        >
          {sendMessageLoading ? "Sending..." : "Send"}
        </button>
        <button
          onClick={clearMessages}
          className={`ml-2 px-4 py-2 bg-red-500 text-white rounded-md ${
            clearMessagesLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={clearMessagesLoading}
        >
          {clearMessagesLoading ? "Clearing..." : "Clear Messages"}
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter messages"
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
        <button
          onClick={filterMessages}
          className={`ml-2 px-4 py-2 bg-green-500 text-white rounded-md ${
            filterMessagesLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={filterMessagesLoading}
        >
          {filterMessagesLoading ? "Searching..." : "Search"}
        </button>
        <button
          onClick={clearFilter}
          className={`ml-2 px-4 py-2 bg-red-500 text-white rounded-md ${
            clearFilterLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={clearFilterLoading}
        >
          {clearFilterLoading ? "Clearing..." : "Clear Search"}
        </button>
      </div>
    </div>
  );
}