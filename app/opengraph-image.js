import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Digital Drifters — Software, SEO, eCommerce & Operations Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo-mark.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0B1D3A 0%, #13305c 60%, #3a0d17 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={`data:image/png;base64,${logo}`} width={96} height={96} style={{ borderRadius: 22 }} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: 2 }}>DIGITAL DRIFTERS</div>
            <div style={{ fontSize: 20, opacity: 0.6, letterSpacing: 6 }}>EXPLORE · CONNECT · CREATE</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.05, maxWidth: 980 }}>
            Software, SEO &amp; eCommerce that grows your business
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 36, fontSize: 24 }}>
            {["Software", "SEO · AEO · GEO", "Google Business", "Amazon & eBay", "AI"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.75 }}>
          <div>digitaldrifters.co</div>
          <div style={{ color: "#ff6b5a" }}>London · UK · US · Worldwide</div>
        </div>
      </div>
    ),
    size
  );
}
