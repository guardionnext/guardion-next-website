import { ImageResponse } from "next/og";

// Site-wide Open Graph / social share image (1200x630).
// A root-level opengraph-image applies to every route that doesn't override it,
// and Twitter falls back to og:image, so this covers og:image + twitter:image.
export const alt = "Guardion — Specialist Protection & Investigations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#C4262E";
const BG = "#0E1013";
const FG = "#F5F4F2";
const MUTE = "#9BA1A9";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: BG,
          backgroundImage: `linear-gradient(160deg, ${BG} 0%, #16191E 100%)`,
          color: FG,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 18, height: 18, backgroundColor: ACCENT }} />
          <div
            style={{
              marginLeft: 20,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: MUTE,
            }}
          >
            Protection &amp; Intelligence
          </div>
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 150,
              fontWeight: 600,
              letterSpacing: 10,
              lineHeight: 1,
              color: FG,
            }}
          >
            GUARDION
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 40,
              color: MUTE,
              maxWidth: 900,
            }}
          >
            Specialist Protection &amp; Investigations
          </div>
        </div>

        {/* Footer rule */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 4,
              backgroundColor: ACCENT,
            }}
          />
          <div
            style={{
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 24,
              letterSpacing: 2,
              color: MUTE,
            }}
          >
            guardion.com.au · Licensed in Australia · Coordinated worldwide
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
