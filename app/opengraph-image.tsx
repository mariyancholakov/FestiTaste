import { ImageResponse } from "next/og";

export const alt = "FestiTaste Events";
export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          padding: "56px",
          background: "#FFFDF9",
          color: "#1A0F00",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "28px",
              background: "#D4640A",
              color: "#FFFDF9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              fontWeight: 800,
            }}
          >
            FT
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "54px", fontWeight: 800 }}>FestiTaste Events</div>
            <div style={{ fontSize: "24px", color: "#7A5C3A" }}>
              Кулинарни фестивали и гурме събития в България
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "74px",
              lineHeight: 1.08,
              fontWeight: 800,
              color: "#2D1B00",
            }}
          >
            Подбрани фестивали, оферти и вкусни уикенди
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.4,
              color: "#7A5C3A",
            }}
          >
            Открий най-интересните гурме събития в София, Пловдив, Варна и още
            дестинации из България.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #F0D4A8",
            paddingTop: "24px",
            fontSize: "24px",
            color: "#8B3A00",
          }}
        >
          <div>FestiTaste Events</div>
          <div>Събития • Оферти • Контакти</div>
        </div>
      </div>
    ),
    size
  );
}
