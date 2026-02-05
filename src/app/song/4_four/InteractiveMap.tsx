"use client";

import { useState } from "react";
import { REGIONS } from "./mapData";

export default function InteractiveMap() {
  const [modal, setModal] = useState<{
    show: boolean;
    name: string;
    info: string;
    id: string;
  }>({
    show: false,
    name: "",
    info: "",
    id: "",
  });

  return (
    <div className="relative w-full overflow-hidden">
      {/* 지도 영역 */}
      <div
        className="map-container"
        style={{ marginTop: "-150px", marginBottom: "-100px" }}
      >
        <svg
          viewBox="400 -400 2200 3500"
          className="w-full h-auto block"
          style={{
            backgroundImage: "url('/song/assets/background-map1.jpg')",
            backgroundSize: "cover",
          }}
        >
          {REGIONS.map((region) => (
            <g
              key={region.id}
              className="region-group cursor-pointer group"
              onClick={() =>
                setModal({
                  show: true,
                  name: region.name,
                  info: region.info,
                  id: region.id,
                })
              }
            >
              <path
                className="region fill-gray-500 hover:fill-[#e61e2b] transition-colors duration-300"
                d={region.path}
              />
              <path
                className="region_text fill-white pointer-events-none"
                d={region.textPath}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* 모달 (Tailwind) */}
      {modal.show && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2 bg-black/70 animate-[fadeIn_0.3s_ease]">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[500px] animate-[scaleUp_0.3s_ease]">
            <div className="bg-gradient-to-br from-[#e61e2b] to-[#c41a26] text-white py-2 px-5 flex justify-between items-center text-xl font-bold">
              <span>{modal.name}</span>
              <button
                onClick={() => setModal({ ...modal, show: false })}
                className="text-4xl leading-none hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="py-6 px-0 overflow-y-auto max-h-[60vh]">
              <img
                src={`/song/assets/${modal.id}.jpg`}
                alt={modal.name}
                className="w-full h-auto rounded-lg mb-6 shadow-md"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <ul className="space-y-1 mr-3">
                {modal.info.split("\n").map((line, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-base leading-relaxed text-[#333] -ml-4"
                  >
                    <i className="fas fa-check-circle text-[#e61e2b] mt-1.5 mr-2 flex-shrink-0"></i>
                    <span>{line.replace("■", "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
