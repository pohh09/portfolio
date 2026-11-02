"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroDeskScene() {
  const sceneRef = useRef<SVGSVGElement>(null);

  // Subtle cursor parallax on the whole scene
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouch || !sceneRef.current) return;

    const svg = sceneRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mx = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const my = (e.clientY / innerHeight - 0.5) * 2;
      // subtle shift on parallax layers
      const l1 = svg.querySelector<SVGGElement>("#parallax-bg");
      const l2 = svg.querySelector<SVGGElement>("#parallax-mid");
      const l3 = svg.querySelector<SVGGElement>("#parallax-fg");
      if (l1) l1.style.transform = `translate(${mx * 4}px, ${my * 3}px)`;
      if (l2) l2.style.transform = `translate(${mx * 8}px, ${my * 6}px)`;
      if (l3) l3.style.transform = `translate(${mx * 12}px, ${my * 9}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center select-none"
      initial={{ opacity: 0, x: 30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    >
      <svg
        ref={sceneRef}
        viewBox="0 0 520 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[520px] max-h-[480px] drop-shadow-sm"
        aria-label="Illustrated developer workspace"
      >
        <defs>
          {/* Soft pink background oval */}
          <radialGradient id="bgOval" cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor="#FFD6E5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFEBF3" stopOpacity="0.3" />
          </radialGradient>
          {/* Desk gradient */}
          <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#B8935A" />
          </linearGradient>
          {/* Laptop screen gradient */}
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E1E2E" />
            <stop offset="100%" stopColor="#252535" />
          </linearGradient>
          {/* Cork board gradient */}
          <linearGradient id="corkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4A054" />
            <stop offset="100%" stopColor="#BF8C3A" />
          </linearGradient>
          {/* Plant pot gradient */}
          <linearGradient id="potGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F9F0F0" />
          </linearGradient>
          {/* Mug gradient */}
          <linearGradient id="mugGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A2A3A" />
            <stop offset="100%" stopColor="#1A1A2A" />
          </linearGradient>
          {/* Girl skin */}
          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDDCB5" />
            <stop offset="100%" stopColor="#F5C890" />
          </linearGradient>
          {/* Sweater gradient */}
          <linearGradient id="sweaterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4A0B8" />
            <stop offset="100%" stopColor="#E8809A" />
          </linearGradient>
          {/* Lamp gradient */}
          <linearGradient id="lampGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3A3A4A" />
            <stop offset="100%" stopColor="#2A2A3A" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="lampGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0.8 0 0 0  0.8 0.6 0 0 0  0 0 0 0 0  0 0 0 0.4 0" />
          </filter>
          <filter id="softShadow" x="-5%" y="-5%" width="110%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#E94F83" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* ══ BG LAYER ══ */}
        <g id="parallax-bg" style={{ transition: "transform 0.3s ease-out" }}>
          {/* Large soft pink oval backdrop */}
          <ellipse cx="275" cy="245" rx="210" ry="195" fill="url(#bgOval)" />

          {/* Cork board on wall */}
          <rect x="300" y="42" width="185" height="148" rx="8" fill="url(#corkGrad)" />
          <rect x="305" y="47" width="175" height="138" rx="6" fill="#D9A855" fillOpacity="0.4" />
          {/* Cork board texture dots */}
          {[
            [315, 57], [340, 70], [360, 55], [385, 65], [410, 52], [435, 68], [455, 58], [470, 72],
            [318, 90], [345, 100], [370, 88], [400, 95], [430, 85], [460, 98], [475, 86],
            [312, 120], [338, 135], [365, 118], [395, 130], [425, 122], [452, 135], [473, 125],
            [320, 160], [350, 172], [378, 158], [405, 168], [435, 155], [462, 170],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.5" fill="#B8893A" fillOpacity="0.3" />
          ))}

          {/* Sticky note: Dream Plan Do Repeat */}
          <rect x="342" y="55" width="88" height="80" rx="5" fill="#FFFDE0" filter="url(#softShadow)" />
          <rect x="342" y="55" width="88" height="6" rx="3" fill="#FAD074" />
          <text x="386" y="80" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="9" fontWeight="700" fill="#542B43">Dream</text>
          <text x="386" y="94" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="9" fontWeight="700" fill="#542B43">Plan</text>
          <text x="386" y="108" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="9" fontWeight="700" fill="#542B43">Do</text>
          <text x="386" y="122" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="9" fontWeight="700" fill="#E94F83">Repeat ♥</text>

          {/* Sticky note: heart */}
          <rect x="437" y="62" width="50" height="48" rx="5" fill="#FFD6E5" />
          <rect x="437" y="62" width="50" height="5" rx="3" fill="#E94F83" />
          <text x="462" y="92" textAnchor="middle" fontSize="20" fill="#E94F83">♥</text>

          {/* Sticky note: crown */}
          <rect x="437" y="118" width="50" height="48" rx="5" fill="#E8F5FF" />
          <rect x="437" y="118" width="50" height="5" rx="3" fill="#8DB8E8" />
          <text x="462" y="148" textAnchor="middle" fontSize="18" fill="#5A96C8">♛</text>

          {/* Cork board pin */}
          <circle cx="386" cy="56" r="4" fill="#E94F83" />
          <circle cx="386" cy="56" r="2" fill="#FF85A6" />
          <circle cx="462" cy="63" r="3.5" fill="#FAD074" />
          <circle cx="462" cy="119" r="3.5" fill="#82D9A7" />

          {/* Hanging pothos plant — top right */}
          {/* Pot */}
          <ellipse cx="478" cy="48" rx="22" ry="10" fill="#E85D8B" fillOpacity="0.8" />
          <rect x="458" y="44" width="40" height="18" rx="4" fill="#D4507A" />
          {/* Hanging vines */}
          <path d="M468 52 C465 70, 460 80, 455 95 C450 108, 455 120, 448 130" stroke="#5A9E6E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M478 52 C476 68, 475 82, 472 100 C469 115, 465 125, 460 138" stroke="#5A9E6E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M488 52 C490 72, 492 88, 495 105 C498 118, 495 130, 490 142" stroke="#5A9E6E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Leaves */}
          {[
            [452, 100, -15], [442, 125, -25], [468, 106, 10], [456, 130, 5],
            [488, 108, 20], [498, 128, 30], [462, 140, -10],
          ].map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx="10" ry="7" fill="#6BBD80" fillOpacity="0.85"
              transform={`rotate(${r}, ${x}, ${y})`} />
          ))}
        </g>

        {/* ══ MID LAYER ══ */}
        <g id="parallax-mid" style={{ transition: "transform 0.3s ease-out" }}>
          {/* === DESK SURFACE === */}
          <rect x="48" y="338" width="424" height="26" rx="6" fill="url(#deskGrad)" />
          <rect x="48" y="338" width="424" height="5" rx="3" fill="#E0B87A" fillOpacity="0.6" />
          {/* Desk legs */}
          <rect x="70" y="362" width="14" height="50" rx="4" fill="#B8935A" />
          <rect x="436" y="362" width="14" height="50" rx="4" fill="#B8935A" />

          {/* === BOOK STACK (left of laptop) === */}
          {/* Book 3 bottom — HTML & CSS */}
          <rect x="88" y="300" width="72" height="12" rx="3" fill="#82D9A7" />
          <rect x="88" y="295" width="72" height="10" rx="3" fill="#5ABD88" />
          <text x="124" y="304" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="6" fontWeight="700" fill="white">HTML &amp; CSS</text>
          {/* Book 2 — JavaScript */}
          <rect x="91" y="273" width="68" height="26" rx="3" fill="#FAD074" />
          <text x="125" y="290" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="6.5" fontWeight="700" fill="#7A5A0A">JavaScript</text>
          {/* Book 1 — React Basics */}
          <rect x="93" y="248" width="64" height="28" rx="3" fill="#A8D8F0" />
          <text x="125" y="264" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="6.5" fontWeight="700" fill="#1A5F8A">React</text>
          <text x="125" y="273" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="6.5" fontWeight="700" fill="#1A5F8A">Basics</text>

          {/* === LAPTOP === */}
          {/* Laptop base */}
          <rect x="168" y="305" width="190" height="10" rx="5" fill="#6A6A7A" />
          <rect x="160" y="310" width="208" height="8" rx="4" fill="#808090" />
          {/* Laptop body */}
          <rect x="172" y="198" width="182" height="112" rx="8" fill="#3A3A4A" />
          <rect x="176" y="202" width="174" height="104" rx="6" fill="url(#screenGrad)" />
          {/* Screen content — code lines */}
          <rect x="180" y="206" width="166" height="8" rx="3" fill="#E94F83" fillOpacity="0.15" />
          <text x="186" y="213" fontFamily="JetBrains Mono, monospace" fontSize="5" fill="#E94F83">// 🌸 Hello World</text>
          {[
            { y: 222, color: "#B9A1E8", text: "const name = 'Pooja Daki';" },
            { y: 231, color: "#82D9A7", text: "const role = 'Full Stack Dev';" },
            { y: 240, color: "#FAD074", text: "function buildDreams() {" },
            { y: 249, color: "#8DDDE5", text: "  return passion + code;" },
            { y: 258, color: "#FAD074", text: "}" },
            { y: 267, color: "#F29AB2", text: "// ✨ making things beautiful" },
            { y: 276, color: "#82D9A7", text: "buildDreams();" },
          ].map((line) => (
            <text key={line.y} x="186" y={line.y} fontFamily="JetBrains Mono, monospace" fontSize="5" fill={line.color}>{line.text}</text>
          ))}
          {/* Blinking cursor */}
          <rect x="186" y="283" width="4" height="7" rx="1" fill="#E94F83" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite" />
          </rect>
          {/* Laptop heart sticker */}
          <text x="348" y="260" fontSize="14" fill="#E94F83" opacity="0.8">♥</text>

          {/* Keep Growing sticky note on laptop */}
          <rect x="238" y="240" width="50" height="52" rx="5" fill="#FAD074" />
          <rect x="238" y="240" width="50" height="6" rx="3" fill="#E8B800" />
          <text x="263" y="263" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="7.5" fontWeight="700" fill="#6A4400">Keep</text>
          <text x="263" y="274" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="7.5" fontWeight="700" fill="#6A4400">Growing</text>
          <text x="263" y="284" textAnchor="middle" fontSize="10" fill="#4A8A5A">🌱</text>

          {/* === KAWAII PLANT (on books) === */}
          {/* Pot */}
          <ellipse cx="128" cy="256" rx="22" ry="8" fill="#FCE8E8" />
          <path d="M108 256 L112 242 Q128 236 144 242 L148 256 Z" fill="white" stroke="#F0C0C8" strokeWidth="1" />
          <text x="128" y="252" textAnchor="middle" fontSize="9" fill="#E94F83">♥</text>
          {/* Succulent leaves */}
          <ellipse cx="128" cy="228" rx="10" ry="14" fill="#82D9A7" />
          <ellipse cx="112" cy="235" rx="9" ry="12" fill="#6BBD80" transform="rotate(-20, 112, 235)" />
          <ellipse cx="144" cy="235" rx="9" ry="12" fill="#6BBD80" transform="rotate(20, 144, 235)" />
          <ellipse cx="120" cy="225" rx="7" ry="10" fill="#9ADBA5" transform="rotate(-10, 120, 225)" />
          <ellipse cx="136" cy="225" rx="7" ry="10" fill="#9ADBA5" transform="rotate(10, 136, 225)" />
          {/* Kawaii face */}
          <circle cx="126" cy="230" r="1.5" fill="#3A8A5A" />
          <circle cx="131" cy="230" r="1.5" fill="#3A8A5A" />
          <path d="M125 233 Q128.5 235 132 233" stroke="#3A8A5A" strokeWidth="1.2" fill="none" strokeLinecap="round" />

          {/* === MUG === */}
          <rect x="372" y="285" width="45" height="55" rx="8" fill="url(#mugGrad)" />
          <ellipse cx="394.5" cy="285" rx="22.5" ry="6" fill="#3A3A4A" />
          <ellipse cx="394.5" cy="340" rx="22.5" ry="5" fill="#1A1A2A" />
          {/* Mug handle */}
          <path d="M417 298 C430 298, 435 310, 435 320 C435 330, 430 338, 417 338" stroke="#2A2A3A" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M417 298 C430 298, 435 310, 435 320 C435 330, 430 338, 417 338" stroke="#3A3A4A" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Mug text */}
          <text x="394" y="311" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="7" fontWeight="700" fill="#FAD074">Code</text>
          <text x="394" y="320" textAnchor="middle" fontSize="8" fill="#E94F83">♥</text>
          <text x="394" y="330" textAnchor="middle" fontFamily="Kalam, cursive" fontSize="7" fontWeight="700" fill="#FAD074">Coffee</text>
          {/* Steam wisps */}
          <path d="M383 282 C382 275, 386 268, 384 260" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M383 282 C382 275, 386 268, 384 260;M383 282 C385 274, 382 266, 385 258;M383 282 C382 275, 386 268, 384 260" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M394 280 C393 272, 397 264, 395 255" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M394 280 C393 272, 397 264, 395 255;M394 280 C396 271, 392 263, 396 253;M394 280 C393 272, 397 264, 395 255" dur="2.4s" repeatCount="indefinite" />
          </path>
          <path d="M406 282 C405 274, 409 266, 407 257" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5">
            <animate attributeName="d" values="M406 282 C405 274, 409 266, 407 257;M406 282 C408 273, 404 265, 408 255;M406 282 C405 274, 409 266, 407 257" dur="1.8s" repeatCount="indefinite" />
          </path>

          {/* === PEN/PENCIL HOLDER === */}
          <rect x="442" y="296" width="36" height="45" rx="10" fill="#F4A0B8" />
          <ellipse cx="460" cy="296" rx="18" ry="7" fill="#F9C8D8" />
          <ellipse cx="460" cy="341" rx="18" ry="6" fill="#E08098" />
          {/* Pens */}
          <rect x="451" y="258" width="5" height="42" rx="2.5" fill="#FAD074" />
          <polygon points="451,258 456,258 453.5,248" fill="#E8B800" />
          <rect x="460" y="255" width="5" height="45" rx="2.5" fill="#82D9A7" />
          <polygon points="460,255 465,255 462.5,244" fill="#5ABD88" />
          <rect x="468" y="260" width="5" height="40" rx="2.5" fill="#B9A1E8" />
          <polygon points="468,260 473,260 470.5,250" fill="#9A80D8" />
          <rect x="455" y="262" width="4" height="38" rx="2" fill="#E94F83" />
          <polygon points="455,262 459,262 457,252" fill="#C83060" />

          {/* === DESK LAMP === */}
          {/* Lamp base */}
          <ellipse cx="460" cy="340" rx="20" ry="6" fill="#3A3A4A" />
          <rect x="455" y="315" width="10" height="28" rx="5" fill="url(#lampGrad)" />
          {/* Lamp arm */}
          <path d="M460 315 C460 290, 450 270, 440 252" stroke="#2A2A3A" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M460 315 C460 290, 450 270, 440 252" stroke="#3A3A4A" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Lamp head */}
          <ellipse cx="440" cy="244" rx="26" ry="12" fill="#2A2A3A" transform="rotate(-30, 440, 244)" />
          <ellipse cx="434" cy="250" rx="18" ry="8" fill="#1A1A2A" transform="rotate(-30, 434, 250)" />
          {/* Warm lamp glow */}
          <ellipse cx="430" cy="268" rx="35" ry="22" fill="#FAD074" fillOpacity="0.12" />
          <ellipse cx="428" cy="278" rx="28" ry="16" fill="#FAD074" fillOpacity="0.08" />

          {/* Lamp joint screw */}
          <circle cx="460" cy="315" r="6" fill="#505060" />
          <circle cx="460" cy="315" r="3" fill="#3A3A4A" />
        </g>

        {/* ══ FG LAYER — THE GIRL ══ */}
        <g id="parallax-fg" style={{ transition: "transform 0.3s ease-out" }}>
          {/* === ANIME GIRL ILLUSTRATION === */}

          {/* Body / Sweater */}
          {/* Torso */}
          <path d="M195 290 C185 270, 182 255, 185 240 C188 225, 200 218, 215 215 C225 213, 240 215, 248 218 C262 222, 272 230, 275 248 C278 262, 276 278, 272 295 Z"
            fill="url(#sweaterGrad)" />
          {/* Sweater texture ribbing */}
          {[240, 250, 260, 270, 280].map((x, i) => (
            <line key={i} x1={x} y1="225" x2={x - 10} y2="290" stroke="#E0809A" strokeWidth="0.8" strokeOpacity="0.4" />
          ))}

          {/* Left arm resting on desk */}
          <path d="M185 255 C175 265, 165 280, 158 305 C154 316, 152 325, 155 335 L200 335 C198 320, 196 306, 195 290 Z"
            fill="url(#sweaterGrad)" />
          {/* Left hand/fist on desk */}
          <ellipse cx="162" cy="335" rx="22" ry="14" fill="url(#skinGrad)" />
          {/* Fingers suggestion */}
          {[150, 158, 166, 174].map((x, i) => (
            <ellipse key={i} cx={x} cy={330} rx="6" ry="8" fill="#FDDCB5" />
          ))}
          {/* Knuckles line */}
          <path d="M150 328 Q162 325 175 328" stroke="#F0C098" strokeWidth="1" fill="none" strokeLinecap="round" />

          {/* Right arm — slightly back */}
          <path d="M272 255 C282 268, 286 285, 284 305 L284 335 L248 335 C250 318, 254 302, 258 290 Z"
            fill="#E8809A" />

          {/* Neck */}
          <rect x="220" y="198" width="28" height="22" rx="8" fill="url(#skinGrad)" />

          {/* Head base */}
          <ellipse cx="234" cy="185" rx="42" ry="46" fill="url(#skinGrad)" />
          {/* Face structure */}
          <ellipse cx="234" cy="190" rx="38" ry="42" fill="#FDDCB5" />

          {/* Cheek blush */}
          <ellipse cx="210" cy="195" rx="12" ry="7" fill="#F4A0B8" fillOpacity="0.45" />
          <ellipse cx="258" cy="195" rx="12" ry="7" fill="#F4A0B8" fillOpacity="0.45" />

          {/* Eyes — large anime style */}
          {/* Left eye */}
          <ellipse cx="218" cy="182" rx="12" ry="13" fill="#2A1A2A" />
          <ellipse cx="218" cy="184" rx="9" ry="10" fill="#4A2E5A" />
          <ellipse cx="218" cy="184" rx="7" ry="8" fill="#3A2050" />
          {/* Left eye shine */}
          <ellipse cx="222" cy="179" rx="3.5" ry="3.5" fill="white" />
          <circle cx="215" cy="186" r="1.5" fill="white" fillOpacity="0.6" />
          {/* Left eye lashes */}
          <path d="M207 176 C210 171, 216 170, 220 173" stroke="#1A0A1A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M221 173 C224 170, 229 172, 230 175" stroke="#1A0A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Right eye */}
          <ellipse cx="250" cy="182" rx="12" ry="13" fill="#2A1A2A" />
          <ellipse cx="250" cy="184" rx="9" ry="10" fill="#4A2E5A" />
          <ellipse cx="250" cy="184" rx="7" ry="8" fill="#3A2050" />
          {/* Right eye shine */}
          <ellipse cx="254" cy="179" rx="3.5" ry="3.5" fill="white" />
          <circle cx="247" cy="186" r="1.5" fill="white" fillOpacity="0.6" />
          {/* Right eye lashes */}
          <path d="M239 176 C242 171, 248 170, 252 173" stroke="#1A0A1A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M253 173 C256 170, 261 172, 262 175" stroke="#1A0A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Eyebrows */}
          <path d="M207 168 C211 164, 219 163, 226 166" stroke="#3A1A2A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M240 166 C245 163, 252 163, 258 167" stroke="#3A1A2A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Nose — small cute */}
          <path d="M231 198 C233 200, 237 200, 238 198" stroke="#E8A878" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Mouth — cute smile */}
          <path d="M222 208 C228 215, 240 215, 246 208" stroke="#C07878" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Lip subtle */}
          <path d="M224 208 C229 212, 239 212, 244 208" fill="#E8A0A0" fillOpacity="0.3" />

          {/* Hair — dark bun style with long flowing hair */}
          {/* Back hair bulk */}
          <ellipse cx="234" cy="155" rx="48" ry="50" fill="#2A1A1A" />
          {/* Long flowing side hair */}
          <path d="M188 160 C175 180, 170 220, 172 270 C173 290, 176 310, 182 330" fill="#2A1A1A" />
          <path d="M280 160 C293 178, 298 215, 296 260 C294 285, 290 308, 284 330" fill="#2A1A1A" />
          {/* Hair face framing */}
          <path d="M194 155 C190 170, 188 185, 190 195 C192 205, 198 210, 205 210" fill="#2A1A1A" />
          <path d="M274 155 C278 170, 280 185, 278 196 C276 206, 270 211, 263 212" fill="#2A1A1A" />
          {/* Hair top bun */}
          <ellipse cx="234" cy="130" rx="28" ry="22" fill="#2A1A1A" />
          {/* Bun detail strand */}
          <path d="M215 122 C220 115, 230 113, 240 118 C250 123, 255 132, 252 140" stroke="#3A2A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M218 142 C222 148, 234 150, 246 145" stroke="#3A2A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Hair clip / pin */}
          <ellipse cx="248" cy="120" rx="7" ry="4" fill="#E94F83" transform="rotate(-20, 248, 120)" />
          <ellipse cx="248" cy="120" rx="4" ry="2" fill="#FF85A6" transform="rotate(-20, 248, 120)" />
          {/* Hair shine */}
          <path d="M210 140 C215 132, 228 128, 238 132" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0.25" />

          {/* Ears */}
          <ellipse cx="192" cy="185" rx="8" ry="10" fill="#FDDCB5" />
          <ellipse cx="276" cy="185" rx="8" ry="10" fill="#FDDCB5" />
          <ellipse cx="192" cy="185" rx="5" ry="7" fill="#F4B090" fillOpacity="0.5" />
          <ellipse cx="276" cy="185" rx="5" ry="7" fill="#F4B090" fillOpacity="0.5" />

          {/* Chin resting on fist — chin */}
          <path d="M215 218 C220 228, 234 232, 248 228 C252 226, 255 222, 255 218" fill="#FDDCB5" />

          {/* Sweater collar / neckline */}
          <path d="M210 218 C215 225, 234 228, 254 224 C258 222, 262 218, 265 215" fill="#E8809A" />
          <path d="M212 220 C218 227, 234 230, 252 226" fill="#F4A0B8" />
        </g>

        {/* ══ FLOATING SPARKLES ══ */}
        <g className="pointer-events-none">
          {/* Star sparkle top left */}
          <g transform="translate(62, 108)">
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#FAD074" opacity="0.8">
              <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite" />
            </path>
          </g>
          {/* Small star */}
          <g transform="translate(490, 190)">
            <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#B9A1E8" opacity="0.7">
              <animateTransform attributeName="transform" type="rotate" values="0;-360" dur="6s" repeatCount="indefinite" />
            </path>
          </g>
          {/* Heart sparkle */}
          <text x="78" y="175" fontSize="14" fill="#E94F83" opacity="0.6">
            <animate attributeName="y" values="175;169;175" dur="3s" repeatCount="indefinite" />
            ♡
          </text>
          {/* Star */}
          <text x="490" y="240" fontSize="12" fill="#FAD074" opacity="0.7">
            <animate attributeName="y" values="240;234;240" dur="4s" repeatCount="indefinite" />
            ★
          </text>
          {/* Sparkle dot cluster */}
          <circle cx="75" cy="280" r="3" fill="#82D9A7" opacity="0.6">
            <animate attributeName="r" values="3;4.5;3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="82" cy="272" r="2" fill="#E94F83" opacity="0.5">
            <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="68" cy="268" r="2.5" fill="#FAD074" opacity="0.55">
            <animate attributeName="r" values="2.5;3.5;2.5" dur="3s" repeatCount="indefinite" />
          </circle>
          {/* Doodle stars bottom */}
          <text x="510" y="355" fontSize="18" fill="#FAD074" opacity="0.5">✦</text>
          <text x="52" y="390" fontSize="14" fill="#B9A1E8" opacity="0.4">✦</text>
        </g>
      </svg>
    </motion.div>
  );
}
