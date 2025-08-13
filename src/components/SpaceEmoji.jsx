import { useState } from "preact/hooks";

export default function SpaceEmoji({ emojis }) {
  const getRandomEmoji = () =>
    emojis[Math.floor(Math.random() * emojis.length)];
  const [emoji, setEmoji] = useState(getRandomEmoji());

  return (
    <button
      id="space-pop-culture"
      class="kanit-regular text-balance"
      title="Click Me!"
      style={{
        fontSize: "1rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "inherit",
        marginBottom: 0,
        textOverflow: "wrap",
      }}
      onClick={() => setEmoji(getRandomEmoji())}
    >
      {emoji}
    </button>
  );
}
