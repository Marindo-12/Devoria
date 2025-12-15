import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { developers } from "../../../../utils/data/developerData/developers";
import dayjs from "dayjs";
import '../../../../styles/sendRequest.css'
import { SmilePlusIcon } from "lucide-react";

type Message = {
  message?: string;
  file?: {
    name: string;
    type: string;
    url: string;
  };
  date: string;
  sender: string;
};

export function SendMessage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const online = ['Online', 'Offline'];

  const [message, setMessage] = useState("");
  const [messages1, setMessages1] = useState<Message[]>([]);
  const [selectFile, setSelectFile] = useState<any>(null);
  const vide = message.trim().length === 0 && !selectFile;

  const [showEmojis, setShowEmojis] = useState(false);

  useEffect(() => {
    const s = localStorage.getItem('messages');
    if (s) setMessages1(JSON.parse(s))
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages1));
  }, [messages1]);

  const messages: Message[] = [{
    message: "Hey! I saw your profile and I'm interested in your services.",
    date: dayjs().toISOString(),
    sender: "user"
  }, {
    message: "Hello! Thank you for reaching out. I'd be happy to discuss how I can help you.",
    date: dayjs().toISOString(),
    sender: "developer"
  }, {
    message: "Can you share some examples of similar projects you've worked on?",
    date: dayjs().toISOString(),
    sender: "user"
  }, {
    message: "Sure! Please check my portfolio section on my profile for relevant projects.",
    date: dayjs().toISOString(),
    sender: "developer"
  }];

  const developer = developers.find(dev => dev.id === id);
  const isHacker = developer?.professional.category === "hack";

  const addMessage = () => {
    if (vide) return;

    const newMsg: Message = {
      date: dayjs().toISOString(),
      sender: "user",
    };

    if (message.trim().length > 0) newMsg.message = message;
    if (selectFile) newMsg.file = selectFile;

    setMessages1((prev) => [...prev, newMsg]);
    setMessage("");
    setSelectFile(null);
  };

  const fileInput = useRef<HTMLInputElement | null>(null);

  const activerClick = () => {
    fileInput.current?.click();
  }

  const fileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setSelectFile({
        name: file.name,
        type: file.type,
        url: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !vide) {
      e.preventDefault();
      addMessage();
    }
  }

  const renderFileMessage = (file: any) => {
    const isImage = file.type.startsWith("image/");

    return (
      <div>
        {isImage ? (
          <img
            src={file.url}
            alt={file.name}
            className="rounded-lg max-w-xs mb-2"
          />
        ) : (
          <div className="flex items-center gap-3 bg-white/20 p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-file"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <p className="text-sm">{file.name}</p>
          </div>
        )}

        <a
          href={file.url}
          download={file.name}
          className="underline text-xs mt-1 block"
        >
          Download
        </a>
      </div>
    );
  };

  const emogies = ["😀", "😁", "😂", "🤣", "😎", "😍", "😊", "😉", "😢", "😭", "😡", "👍", "👎", "🙏", "🔥", "💯", "🎉", "❤️", "💔", "✨", "⚡", "😴", "🤔", "🤨", "🤯", "😱", "😇", "🤓", "😜", "😈", "👀", "😅", "😬", "🤝", "🤷", "👌", "👏"];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".emoji-picker") && !target.closest(".emoji-btn")) {
        setShowEmojis(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (developer?.professional.category === "hack") {
      document.body.style.backgroundColor = "#272827"; 
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [developer]);



  return (
    <>
      <header className={`send-header fixed flex top-0 left-0 right-0 items-center justify-between p-3 border-b z-50 ${isHacker ? 'hacker-header' : 'bg-gray-50'}`}>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}
            className="inline-flex hover:bg-gray-200 dark:hover:text-gray-600 p-3 hover:rounded-md items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border-transparent h-9 w-9">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left w-4 h-4 " data-replit-metadata="client/src/pages/ChatRoom.tsx:125:16" data-component-name="ChevronLeft"><path d="m15 18-6-6 6-6"></path></svg>
          </button>

          <div className="flex items-center gap-2">
            <img src={developer?.personal.profileImage} alt={developer?.personal.name} className="w-11 h-11 rounded-full" />
            <div>
              <p className="font-bold text-sm">{developer?.personal.name}</p>
              <p className="text-xs text-gray-500">{Math.random() > 0.5 ? online[0] : online[1]}</p>
            </div>
          </div>
        </div>
        <button className="inline-flex hover:bg-gray-200 dark:hover:text-gray-600 p-3 hover:rounded-md items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border-transparent h-9 w-9">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical w-5 h-5" data-replit-metadata="client/src/pages/ChatRoom.tsx:137:14" data-component-name="MoreVertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </button>
      </header>

      <main className="mt-20 mb-10">
        <div className="flex flex-col px-2">
          {[...messages, ...messages1].map((msg, index) => (
            <div
              key={index}
              className={`relative my-3 max-w-[80%] p-3 rounded-xl
              ${msg.sender === "user"
                  ? `${isHacker ? "bg-red-700 text-white self-end rounded-br-none" : "bg-purple-600 text-white self-end rounded-br-none"}`
                  : `${isHacker ? "bg-black text-red-500 self-start rounded-bl-none" : "bg-gray-200 text-gray-800 self-start rounded-bl-none"}`
                }
            `}
            >
              {msg.message && <p>{msg.message}</p>}

              {msg.file && renderFileMessage(msg.file)}

              <p className="text-xs opacity-70 mt-2 text-right">
                {dayjs(msg.date).format("HH:mm")}
              </p>
            </div>
          ))}
        </div>

      </main>


      <footer className={`fixed bottom-0 left-0 right-0 flex border-t gap-4 p-4 ${isHacker ? 'hacker-footer' : 'bg-gray-50'}`}>
        {selectFile && (
          <div className="bg-gray-200 p-2 rounded max-w-xs">
            <p className="text-sm font-semibold">{selectFile.name}</p>
          </div>
        )}
        <button
          className={`flex ${isHacker ? "text-white" : ""} hover:rounded-md items-center justify-center rounded-md h-10 w-10 disabled:opacity-50 disabled:pointer-events-none`}
          onClick={activerClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-paperclip w-5 h-5" data-replit-metadata="client/src/pages/ChatRoom.tsx:196:16" data-component-name="Paperclip"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
        </button>

        <button
          className={`inline-flex ${isHacker ? "text-white" : ""} emoji-btn hover:rounded-md items-center justify-center rounded-md h-10 w-10 disabled:opacity-50 disabled:pointer-events-none`}
          onClick={() => setShowEmojis((prev) => !prev)}
        >
          <SmilePlusIcon className="h-5 w-5" />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`flex h-10 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1
          ${isHacker ? 'bg-black text-red-500 border-red-700 focus:ring-red-500' : 'bg-white text-gray-600 focus:border-purple-600 focus:ring-purple-600'}
        `}
          placeholder="Type a message..."
        />

        <button
          className={`inline-flex items-center justify-center rounded-md h-10 w-10
          ${isHacker ? 'bg-red-700 hover:bg-red-800 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}
          `}
          type="submit"
          disabled={vide}
          onClick={addMessage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send w-10 h-5" data-replit-metadata="client/src/pages/ChatRoom.tsx:224:16" data-component-name="Send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
        </button>

        <input ref={fileInput} type="file" onChange={fileChange} className="hidden" />

        {showEmojis && (
          <div className="emoji-picker absolute bottom-20 left-4 bg-white shadow-lg border rounded-xl p-3 grid grid-cols-8 gap-2 text-xl z-50 max-h-60 overflow-y-scroll">

            {emogies.map((e) => (
              <button
                key={e}
                onClick={() => {
                  setMessage((prev) => prev + e);
                  setShowEmojis(false);
                }}
                className="hover:bg-gray-100 rounded p-1"
              >
                {e}
              </button>
            ))}

          </div>
        )}

      </footer>
    </>
  );
}