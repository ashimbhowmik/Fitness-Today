"use client";

import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import config from "@/config";

const API_KEY = config.next_public_api_key_gpt;

console.log(API_KEY);

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

const ChatModal = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Chat Bot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setUserInput("");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="rounded-lg shadow-lg z-[999999]">
      <button
        className="fixed left-7 bottom-4 w-16 h-16 flex justify-center items-end shadow-lg text-white px-4 py-2 rounded-full  btn btn-active btn-primary focus:outline-none"
        onClick={toggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-messenger"
          width="50"
          height="50"
          viewBox="0 2 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
          <path d="M8 13l3 -2l2 2l3 -2" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed left-[33px] bottom-[90px] w-96 h-96 flex flex-col bg-white p-4 rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-gray-800">Chat with Bot</div>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-2 overflow-y-auto">
            <MainContainer className="rounded-lg bg-gray-100 p-4">
              <ChatContainer className="p-0">
                <MessageList
                  className="p-4"
                  scrollBehavior="smooth"
                  typingIndicator={
                    isTyping ? <TypingIndicator content="typing" /> : null
                  }
                >
                  {messages.map((message, i) => (
                    <Message key={i} model={message} />
                  ))}
                </MessageList>
                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatModal;
