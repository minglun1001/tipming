export default function Home() {
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
          <button>RM5</button>
          <button>RM10</button>
          <button>RM20</button>
          <button>RM50</button>
        </div>

        <button className="donate">
          🟢 Touch 'n Go
        </button>

        <button className="donate">
          🔵 DuitNow
        </button>

        <button className="donate">
          🟡 PayPal
        </button>
<img
  src="/tng.png"
  alt="Touch n Go QR"
  className="qr"
/>

<img
  src="/duitnow.png"
  alt="DuitNow QR"
  className="qr"
/>
        <div className="social">
          TikTok · Instagram · Telegram
        </div>
      </div>
    </main>
  );
}
