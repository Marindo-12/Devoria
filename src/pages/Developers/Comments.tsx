// CommentsPage.jsx
import { useState, useEffect } from "react";
import { database } from "../../../firebase";
import { ref, push, onValue } from "firebase/database";

interface Comment {
  name: string;
  text: string;
  time: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Load comments in real-time
  useEffect(() => {
    const commentsRef = ref(database, "comments");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setComments(Object.values(data));
      else setComments([]);
    });
  }, []);

  const addComment = () => {
    if (!name || !text) return;
    const commentsRef = ref(database, "comments");
    push(commentsRef, { name, text, time: new Date().toLocaleString() });
    setName("");
    setText("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial" }}>
      <h1>Comments Section</h1>
      <div style={{ marginBottom: 10 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={{ width: "30%", marginRight: 10, padding: 5 }}
        />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment"
          style={{ width: "60%", marginRight: 10, padding: 5 }}
        />
        <button onClick={addComment} style={{ padding: "5px 10px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {comments.map((c, i) => (
          <li
            key={i}
            style={{
              borderBottom: "1px solid #ddd",
              marginBottom: 10,
              paddingBottom: 5,
            }}
          >
            <strong>{c.name}</strong> <em>({c.time})</em>: {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
