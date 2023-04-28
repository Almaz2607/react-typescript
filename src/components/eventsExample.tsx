import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //  console.log(value);
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("drop");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="Управляемый инпут"
      />
      <input type="text" ref={inputRef} placeholder="Неуправляемый инпут" />
      <button onClick={clickHandler}>EventsExample</button>
      <div
        draggable
        style={{ width: 100, height: 100, background: "lightblue" }}
        onDrag={dragHandler}
      />
      <div
        style={{
          width: 100,
          height: 100,
          background: isDrag ? "orange" : "lightblue",
          marginTop: 15,
        }}
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
      />
    </div>
  );
};

export default EventsExample;
