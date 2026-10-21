import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { person, stats } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${person.name} — ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public", person.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c0e10",
          color: "#ecebe6",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 48 }}>
          <div style={{ display: "flex", fontSize: 26, color: "#3fd1a5", letterSpacing: 2 }}>BDDEVFARID.COM</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>{person.name}</div>
            <div style={{ fontSize: 34, color: "#9aa0a6", marginTop: 16, lineHeight: 1.3 }}>{person.role}</div>
          </div>
          <div style={{ display: "flex", gap: 40 }}>
            {[
              { value: stats[0].value, label: "Active installs" },
              { value: stats[1].value, label: "Years in WordPress" },
              { value: stats[2].value, label: "Plugins led" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: "#3fd1a5" }}>{s.value}</div>
                <div style={{ fontSize: 20, color: "#9aa0a6" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={photoSrc} width={400} height={502} alt="" style={{ borderRadius: 32, objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
