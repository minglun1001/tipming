"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [qr, setQr] = useState("");

  return (
    <main>
      <div className="profile">
        <div className="avatar">
          M
        </div>

        <h1>TipMing ❤️</h1>

        <p>
          Thanks for supporting my content ✨
        </p >

        <div className="amount">
          <button onClick={() => setAmount("RM5")}>RM5</button>
          <button onClick={() => setAmount("RM10")}>RM10</button>
          <button onClick={() => setAmount("RM20")}>RM20</button>
          <button onClick={() => setAmount("RM50")}>RM50</button>
        </div>

        {amount && (
          <p>
            You selected {amount} ❤️
          </p >
        )}

        <button
          className="donate"
          onClick={() => setQr("/tng.jpg")}
        >
          🟢 Touch 'n Go
        </button>

        <button
          className="donate"
          onClick={() => setQr("/duitnow.jpg")}
        >
          🔵 DuitNow
        </button>

        <button className="donate">
          🟡 PayPal
        </button>

        {qr && (
          <img
            src={qr}
            alt="QR Code"
            className="qr"
          />
        )}

      </div>
    </main>
  );
}
