import { useState } from "preact/hooks";

export default function SpaceEmoji({emojis}) {
  const getRandomEmoji = () => emojis[(Math.floor(Math.random() * emojis.length))];
  const [emoji, setEmoji] = useState(getRandomEmoji());

  return <button class="kanit-regular text-balance" title="Click Me!" style={{fontSize: "1rem", background: "transparent", border: "none", cursor: "pointer", color: "whitesmoke", marginBottom: 0}} onClick={() => setEmoji(getRandomEmoji())}>{emoji}</button>;
}
