import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState<string>(""); //string Type으로 추론됨

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <form onSubmit={onClickButton}>
      <input type="text" value={text} onChange={onChangeInput} />
      <button type="submit">추가</button>
    </form>
  );
}
