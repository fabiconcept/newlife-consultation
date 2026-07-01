import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "New Life Consulting";
  const subtitle = searchParams.get("subtitle") || "Credit Consulting for Everyday People";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              color: "white",
            }}
          >
            NL
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            newlifeconsulting.com
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            (917) 808-9765
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
