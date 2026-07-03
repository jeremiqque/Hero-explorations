"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  STAGE_W,
  STAGE_H,
  TILES,
  PILLS,
  CONNECTORS,
  CORNERS,
  ACCENT_BAR,
} from "./hero-data";

gsap.registerPlugin(useGSAP);

/* Reusable badge (the little rounded pill with the accent bar) shared by the
   mobile flow-layout header and the desktop in-stage header. */
function Badge({
  label,
  barFirst,
}: {
  label: string;
  barFirst: boolean;
}) {
  const bar = (
    <span
      key="bar"
      className="h-[10px] w-[3px] shrink-0"
      style={{ background: ACCENT_BAR }}
    />
  );
  const text = (
    <span key="text" className="text-[12px] font-medium leading-none text-[#1A1A1A]">
      {label}
    </span>
  );
  return (
    <div className="inline-flex h-6 items-center gap-[7px] rounded-[6px] bg-white px-[7px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      {barFirst ? [bar, text] : [text, bar]}
    </div>
  );
}

export default function Hero() {
  const mainRef = useRef<HTMLDivElement>(null);
  const stageWrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      /* Scale the fixed 1280x832 decorative stage (frame, texture, icons,
         connectors, pill graphics) to fit the viewport width. Real copy
         (headline/paragraph/badges) lives outside this stage entirely now,
         in normal document flow, so it can never collide regardless of
         how small the stage scale gets. */
      const fit = () => {
        const scale = Math.min(1, window.innerWidth / STAGE_W);
        gsap.set(stageRef.current, { scale });
        gsap.set(stageWrapRef.current, { height: STAGE_H * scale });
      };
      fit();
      window.addEventListener("resize", fit);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-card", { opacity: 0, duration: 0.6 })
        .from(
          ".hero-frame-line",
          { scaleX: 0, scaleY: 0, duration: 0.7, stagger: 0.05 },
          "<"
        )
        .from(
          ".hero-badge",
          { y: 12, opacity: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .from(".hero-heading", { y: 24, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-copy", { y: 16, opacity: 0, duration: 0.7 }, "-=0.55")
        .from(
          ".hero-hub",
          { scale: 0.6, opacity: 0, duration: 0.7, ease: "back.out(1.6)" },
          "-=0.35"
        )
        .from(
          ".hero-tile",
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.55,
            ease: "back.out(1.7)",
            stagger: 0.07,
          },
          "-=0.3"
        )
        .from(
          ".hero-line",
          { opacity: 0, duration: 0.45, stagger: 0.06 },
          "-=0.5"
        )
        .from(
          ".hero-line-end",
          {
            scale: 0,
            opacity: 0,
            duration: 0.35,
            ease: "back.out(2)",
            stagger: 0.04,
            transformOrigin: "center center",
          },
          "-=0.4"
        )
        .from(
          ".hero-pill",
          {
            y: 8,
            scale: 0.8,
            opacity: 0,
            duration: 0.45,
            ease: "back.out(1.7)",
            stagger: 0.06,
          },
          "-=0.45"
        );

      /* Ambient float on the tiles */
      gsap.to(".hero-tile", {
        y: "-=5",
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.3, from: "random" },
        delay: 2,
      });

      return () => window.removeEventListener("resize", fit);
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="w-full bg-white">
      {/* ---- Real copy: normal document flow, stacks on mobile, side by
           side on desktop. Structurally cannot overlap at any width. ---- */}
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 pt-6 sm:px-8 sm:pt-8 md:flex-row md:items-start md:justify-between md:gap-8 md:px-12 md:pt-10 lg:px-[84px] lg:pt-12">
        <div className="flex flex-col items-start gap-4">
          <div className="hero-badge">
            <Badge label="Work Unified" barFirst />
          </div>
          <h1
            className="hero-heading max-w-[333px] font-heading font-medium tracking-tight text-[#676767]"
            style={{ fontSize: "clamp(26px, 6vw, 36px)", lineHeight: 1.2 }}
          >
            The Integration Layer for Modern Teams
          </h1>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="hero-badge">
            <Badge label="Connect Apps" barFirst={false} />
          </div>
          <p
            className="hero-copy max-w-[357px] text-left text-[#898989] md:text-right"
            style={{ fontSize: "clamp(13px, 3.2vw, 14px)", lineHeight: 1.6 }}
          >
            Connect apps, sync data, and automate workflows with the platform
            trusted by thousands of businesses worldwide.
          </p>
        </div>
      </div>

      {/* ---- Decorative diagram: fixed 1280x832 scene scaled to fit. ---- */}
      <div
        ref={stageWrapRef}
        className="relative mt-6 w-full overflow-hidden sm:mt-8"
      >
        <div
          ref={stageRef}
          className="absolute left-1/2 top-0 -translate-x-1/2 origin-top"
          style={{ width: STAGE_W, height: STAGE_H }}
        >
          {/* Frame border lines */}
          <div className="hero-frame-line absolute bg-[#CACACA]" style={{ left: 48, top: 0, width: 1, height: STAGE_H }} />
          <div className="hero-frame-line absolute bg-[#CACACA]" style={{ left: 1230, top: 0, width: 1, height: STAGE_H }} />
          <div className="hero-frame-line absolute bg-[#CACACA]" style={{ left: 0, top: 47, width: STAGE_W, height: 1 }} />
          <div className="hero-frame-line absolute bg-[#CACACA]" style={{ left: 0, top: 783, width: STAGE_W, height: 1 }} />

          {/* Corner markers */}
          {CORNERS.map((c, i) => (
            <div
              key={i}
              className="hero-badge absolute bg-[#D9D9D9]"
              style={{ left: c.left, top: c.top, width: 12, height: 12 }}
            />
          ))}

          {/* Textured card */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/card-texture.svg"
            alt=""
            className="hero-card absolute"
            style={{ left: 49, top: 48, width: 1183, height: 735 }}
          />

          {/* Halftone edge overlay */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/edge-overlay.svg"
            alt=""
            className="hero-card pointer-events-none absolute inset-0"
            style={{ width: STAGE_W, height: STAGE_H }}
          />

          {/* Dashed connectors */}
          <svg
            className="pointer-events-none absolute inset-0"
            width={STAGE_W}
            height={STAGE_H}
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
            fill="none"
          >
            <defs>
              {CONNECTORS.map((c) => (
                <linearGradient
                  key={c.name}
                  id={`grad-${c.name}`}
                  gradientUnits="userSpaceOnUse"
                  x1={c.gradient.x1}
                  y1={c.gradient.y1}
                  x2={c.gradient.x2}
                  y2={c.gradient.y2}
                >
                  {c.gradient.stops.map((s) => (
                    <stop key={s.offset} offset={s.offset} stopColor={s.color} />
                  ))}
                </linearGradient>
              ))}
            </defs>
            {CONNECTORS.map((c) => (
              <g key={c.name}>
                <path
                  className="hero-line"
                  d={c.d}
                  stroke={`url(#grad-${c.name})`}
                  strokeWidth={2}
                  strokeDasharray="2 2"
                />
                <circle
                  className="hero-line-end"
                  cx={c.dot.cx}
                  cy={c.dot.cy}
                  r={4}
                  fill={c.dot.fill}
                />
                <path
                  className="hero-line-end"
                  d={c.arrow.d}
                  fill={c.arrow.fill}
                  transform={
                    c.arrow.dx || c.arrow.dy
                      ? `translate(${c.arrow.dx ?? 0} ${c.arrow.dy ?? 0})`
                      : undefined
                  }
                />
              </g>
            ))}
          </svg>

          {/* App tiles */}
          {TILES.map((t) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={t.name}
              src={`/assets/tile-${t.name}.svg`}
              alt={t.name}
              className="hero-tile absolute"
              style={{ left: t.left, top: t.top, width: 82, height: 89 }}
            />
          ))}

          {/* Center hub */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hub.svg"
            alt="Integration hub"
            className="hero-hub absolute"
            style={{ left: 557, top: 367, width: 164, height: 169 }}
          />

          {/* Label pills */}
          {PILLS.map((p) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={p.name}
              src={`/assets/pill-${p.name}.svg`}
              alt={p.name}
              className="hero-pill absolute"
              style={{ left: p.left, top: p.top, height: 36 }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
