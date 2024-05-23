"use client";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <p style={{ color: "#333", background: "#FFF" }}>Text example</p>
      <div
        onClick={() => alert("clicked")}
        aria-hidden
        className="cursor-pointer"
      >
        click me
      </div>
      <div>sandesh thapoa</div>
      <button onClick={() => alert("clicked")}>button</button>
    </div>
  );
}
