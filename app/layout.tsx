export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {/* HEADER */}
          <header
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "1.25rem 2rem", // 🔥 increased height
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #222",
            }}
          >
            {/* Logo */}
            <a href="/start" style={{ display: "inline-flex", alignItems: "center" }}>
              <span style={{ fontStyle: "italic", fontWeight: 600 }}>
                FileYurBiz
              </span>
            </a>
            <div
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "1.3rem",
                letterSpacing: "0.5px",
              }}
            >
           
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: "2rem", fontSize: "1rem" }}>
              <a href="/start" style={{ color: "#fff", textDecoration: "none" }}>
                Start
              </a>
              <a href="/pricing" style={{ color: "#fff", textDecoration: "none" }}>
                Pricing
              </a>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Contact
              </a>
            </nav>
          </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}
