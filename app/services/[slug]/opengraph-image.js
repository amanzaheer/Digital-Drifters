import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SERVICES, getService } from "@/lib/services";

export const alt = "Digital Drifters service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const service = getService(slug);
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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={`data:image/png;base64,${logo}`} width={72} height={72} style={{ borderRadius: 16 }} alt="" />
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 2 }}>DIGITAL DRIFTERS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: "#ff8a7a", fontWeight: 700, letterSpacing: 3 }}>SERVICES</div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, marginTop: 12, maxWidth: 1050 }}>
            {service?.title ?? "Digital Drifters"}
          </div>
          <div style={{ fontSize: 30, opacity: 0.75, marginTop: 20, maxWidth: 1000 }}>{service?.tagline ?? ""}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.75 }}>
          <div>digitaldrifters.co</div>
          <div>London · UK · US</div>
        </div>
      </div>
    ),
    size
  );
}
