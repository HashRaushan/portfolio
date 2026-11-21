import { ImageResponse } from "next/og";

/* Required for static export on GitHub Pages. */
export const dynamic = "force-static";

export const alt =
  "Raushan Kumar Pathak — MBA Candidate in Marketing and Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f2ecdf 0%, #e9dfc5 60%, #f2ecdf 100%)",
          color: "#211b12",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "1px solid rgba(154,107,40,0.35)",
            borderRadius: 8,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 8,
            color: "#9a6b28",
            marginBottom: 28,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          Marketing × Operations × Technology
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, letterSpacing: 2, color: "#211b12" }}>
          RAUSHAN KUMAR PATHAK
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9a6b28",
            marginTop: 24,
            fontStyle: "italic",
          }}
        >
          Business Perspective. Strategic Thinking. Technological Curiosity.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 16,
            color: "#6f6350",
            marginTop: 40,
            fontFamily: "monospace",
            letterSpacing: 3,
          }}
        >
          MBA CANDIDATE — MARKETING &amp; OPERATIONS · INDIA
        </div>
      </div>
    ),
    { ...size }
  );
}
