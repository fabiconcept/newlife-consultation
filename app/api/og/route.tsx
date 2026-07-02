import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "New Life Consulting";
  const subtitle = searchParams.get("subtitle") || "Credit Consulting for Everyday People";
  const imageParam = searchParams.get("image");

  const SITE_URL = process.env.SITE_URL || "https://www.newlifeconsulting.com";
  const hasImage = imageParam && imageParam.length > 0;
  const imageUrl = hasImage ? `${SITE_URL}${imageParam}` : null;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background: image or gradient */}
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,58,138,0.75) 50%, rgba(13,148,136,0.65) 100%)",
              }}
            />
          </>
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0d9488 100%)",
            }}
          />
        )}

        {/* Decorative circles (always shown) */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(13,148,136,0.15)",
          }}
        />

        {/* Dot grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            position: "relative",
            zIndex: 10,
            flex: 1,
          }}
        >
          {/* Logo badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(13,148,136,0.4)",
              }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "-1px",
                }}
              >
                NL
              </span>
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.5px",
              }}
            >
              NEW LIFE CONSULTING
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.05,
              marginBottom: "28px",
              maxWidth: "900px",
              textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            {title}
          </div>

          {/* Accent line */}
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #0d9488, #14b8a6)",
              borderRadius: "2px",
              marginBottom: "28px",
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.4,
              maxWidth: "700px",
              textShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              fontWeight: "500",
            }}
          >
            newlifeconsulting.com
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              fontWeight: "500",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#0d9488",
              }}
            />
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
