"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroDeskSceneProps {
  isLampOn: boolean;
  onToggleLamp: () => void;
}

export default function HeroDeskScene({ isLampOn, onToggleLamp }: HeroDeskSceneProps) {
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);
  const [isPlantHovered, setIsPlantHovered] = useState(false);
  const [activeCodeLine, setActiveCodeLine] = useState(0);

  return (
    <div className="relative w-full max-w-[620px] aspect-[620/460] select-none flex items-center justify-center">

      {/* Ambient background pink glow */}
      <div className="pointer-events-none absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#FFE0EA]/85 via-[#FFF0F5]/70 to-[#FFE4EE]/35 blur-3xl opacity-90 -z-10" />

      {/* Interactive Lamp Toggle Button in top right */}
      <button
        type="button"
        onClick={onToggleLamp}
        className="absolute top-2 right-4 z-30 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 hover:bg-white text-[11px] font-kalam font-bold text-[#473444] border border-[#F4DEE4] shadow-xs hover:scale-105 transition-all cursor-pointer backdrop-blur-md"
        style={{ fontFamily: "var(--font-kalam), 'Kalam', cursive, sans-serif" }}
        title="Click to turn desk lamp on/off"
      >
        <span
          className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
            isLampOn ? "bg-[#F59E0B] shadow-[0_0_10px_#F59E0B]" : "bg-neutral-300"
          }`}
        />
        <span>Lamp: {isLampOn ? "On" : "Off"}</span>
      </button>

      {/* SVG Canvas Scene */}
      <svg
        viewBox="0 0 620 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[0_18px_38px_rgba(232,93,139,0.14)]"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="pinkBackdrop" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD8E4" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#FFEAF0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFF5F2" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="deskWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E2AA78" />
            <stop offset="100%" stopColor="#C98F5E" />
          </linearGradient>

          <linearGradient id="deskBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B3784A" />
            <stop offset="100%" stopColor="#9C6237" />
          </linearGradient>

          <linearGradient id="sweaterPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8DA8" />
            <stop offset="100%" stopColor="#F47492" />
          </linearGradient>

          <linearGradient id="hairDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A2E28" />
            <stop offset="50%" stopColor="#38211C" />
            <stop offset="100%" stopColor="#2D1915" />
          </linearGradient>

          <linearGradient id="lampCone" x1="0%" y1="0%" x2="10%%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#FDE047" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#9C6237" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* 1. BACKGROUND WALL ART & NOTICE BOARD */}
        <g id="background-elements">
          {/* Soft blush wall aura */}
          <circle cx="360" cy="210" r="190" fill="url(#pinkBackdrop)" />

          {/* Hanging Pothos Vine from Top Right */}
          <path
            d="M570 -10 C560 30 540 60 550 100 C555 125 540 145 545 160"
            stroke="#4A7C59"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Leaves along the vine */}
          {[
            { cx: 562, cy: 25, r: 9, rot: 15 },
            { cx: 546, cy: 50, r: 11, rot: -25 },
            { cx: 554, cy: 80, r: 12, rot: 30 },
            { cx: 538, cy: 110, r: 13, rot: -20 },
            { cx: 552, cy: 135, r: 11, rot: 35 },
            { cx: 542, cy: 160, r: 9, rot: -10 },
          ].map((leaf, i) => (
            <ellipse
              key={i}
              cx={leaf.cx}
              cy={leaf.cy}
              rx={leaf.r}
              ry={leaf.r * 1.5}
              fill="#5B8E6A"
              stroke="#3D684A"
              strokeWidth="1.2"
              transform={`rotate(${leaf.rot} ${leaf.cx} ${leaf.cy})`}
            />
          ))}

          {/* Cork Bulletin Notice Board */}
          <g id="corkboard" transform="translate(450, 60)">
            {/* Cork Surface */}
            <rect
              x="0"
              y="0"
              width="155"
              height="165"
              rx="12"
              fill="#EAD2B2"
              stroke="#D4BA94"
              strokeWidth="4"
            />
            {/* Cork Texture Dots */}
            <circle cx="20" cy="30" r="1.5" fill="#D4BA94" />
            <circle cx="85" cy="40" r="1.5" fill="#D4BA94" />
            <circle cx="130" cy="70" r="1.5" fill="#D4BA94" />
            <circle cx="45" cy="110" r="1.5" fill="#D4BA94" />
            <circle cx="110" cy="140" r="1.5" fill="#D4BA94" />

            {/* Note 1: Yellow "Dream Plan Do Repeat ♥" */}
            <g transform="translate(14, 18) rotate(-3)">
              <rect
                x="0"
                y="0"
                width="68"
                height="88"
                rx="4"
                fill="#FEF08A"
                stroke="#FACC15"
                strokeWidth="1"
                filter="url(#softShadow)"
              />
              {/* Pushpin */}
              <circle cx="34" cy="7" r="3.5" fill="#EF4444" />
              <circle cx="33" cy="6" r="1" fill="#FFFFFF" />
              {/* Handwritten text */}
              <text
                x="34"
                y="27"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="bold"
                fill="#422006"
                fontFamily="var(--font-kalam), cursive"
              >
                Dream
              </text>
              <text
                x="34"
                y="41"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="bold"
                fill="#422006"
                fontFamily="var(--font-kalam), cursive"
              >
                Plan
              </text>
              <text
                x="34"
                y="55"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="bold"
                fill="#422006"
                fontFamily="var(--font-kalam), cursive"
              >
                Do
              </text>
              <text
                x="34"
                y="69"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="bold"
                fill="#E11D48"
                fontFamily="var(--font-kalam), cursive"
              >
                Repeat ♥
              </text>
            </g>

            {/* Note 2: Blue Square with White Heart */}
            <g transform="translate(92, 22) rotate(4)">
              <rect
                x="0"
                y="0"
                width="46"
                height="46"
                rx="4"
                fill="#BFDBFE"
                stroke="#93C5FD"
                strokeWidth="1"
                filter="url(#softShadow)"
              />
              <circle cx="23" cy="6" r="3" fill="#EAB308" />
              {/* White Heart Doodle */}
              <path
                d="M23 30 C15 22 13 14 20 13 C23 13 23 17 23 17 C23 17 23 13 26 13 C33 14 31 22 23 30 Z"
                fill="#FFFFFF"
                opacity="0.9"
              />
            </g>

            {/* Note 3: Pink Square with Gold Crown Doodle */}
            <g transform="translate(94, 80) rotate(-2)">
              <rect
                x="0"
                y="0"
                width="46"
                height="46"
                rx="4"
                fill="#FBCFE8"
                stroke="#F472B6"
                strokeWidth="1"
                filter="url(#softShadow)"
              />
              <circle cx="23" cy="6" r="3" fill="#3B82F6" />
              {/* White Crown Doodle */}
              <path
                d="M13 32 L15 20 L20 25 L23 17 L26 25 L31 20 L33 32 Z"
                fill="#FFFFFF"
                opacity="0.9"
              />
            </g>
          </g>
        </g>

        {/* 2. THE WOODEN DESK SURFACE */}
        <g id="desk-surface">
          {/* Main top tabletop */}
          <polygon
            points="140,345 610,345 590,405 160,405"
            fill="url(#deskWood)"
            stroke="#D0925B"
            strokeWidth="2.5"
          />
          {/* Front edge bevel */}
          <polygon
            points="160,405 590,405 585,420 165,420"
            fill="url(#deskBevel)"
          />
          {/* Subtle woodgrain accent lines */}
          <path d="M220 365 Q350 362 520 367" stroke="#CAA077" strokeWidth="1.5" opacity="0.6" />
          <path d="M190 385 Q380 382 560 386" stroke="#CAA077" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* 3. THE DEVELOPER CHARACTER */}
        <g id="girl-character">
          {/* Cascading Back Hair Layer */}
          <path
            d="M310 170 C290 220 295 280 315 320 C325 315 335 285 330 250 Z"
            fill="url(#hairDark)"
          />
          <path
            d="M430 170 C460 215 470 280 445 325 C435 315 425 280 425 240 Z"
            fill="url(#hairDark)"
          />

          {/* Cozy Pink Knit Sweater Body */}
          <g id="sweater">
            {/* Torso & Shoulders */}
            <path
              d="M320 270 C330 240 370 235 410 240 C435 245 450 275 460 345 L320 345 Z"
              fill="url(#sweaterPink)"
              stroke="#E06282"
              strokeWidth="2"
            />
            {/* Ribbed Collar */}
            <path
              d="M360 236 C375 246 395 246 410 238 C405 248 365 248 360 236 Z"
              fill="#E06282"
            />
            {/* Tiny White Heart Badge on Left Chest */}
            <path
              d="M405 272 C401 268 397 272 400 276 L405 281 L410 276 C413 272 409 268 405 272 Z"
              fill="#FFFFFF"
              opacity="0.95"
            />

            {/* Arm Resting on Desk */}
            <path
              d="M320 280 C310 300 315 340 365 345 C385 345 375 320 360 305 Z"
              fill="url(#sweaterPink)"
              stroke="#E06282"
              strokeWidth="2"
            />
          </g>

          {/* Neck */}
          <rect x="375" y="215" width="22" height="26" rx="10" fill="#FFE0D3" />

          {/* Face & Head */}
          <g id="head">
            {/* Head / Jaw */}
            <path
              d="M352 145 C345 185 360 225 385 228 C410 225 428 185 424 145 C420 115 355 115 352 145 Z"
              fill="#FFEAE0"
            />

            {/* Rosy Blushing Cheeks */}
            <ellipse cx="363" cy="188" rx="8" ry="4.5" fill="#FFB8C8" opacity="0.75" />
            <ellipse cx="410" cy="188" rx="8" ry="4.5" fill="#FFB8C8" opacity="0.75" />

            {/* Cute Anime Eyes */}
            <g id="eyes">
              {/* Left Eye */}
              <ellipse cx="368" cy="174" rx="6.5" ry="8" fill="#3D231E" />
              <ellipse cx="368" cy="172" rx="4.5" ry="6" fill="#1C100E" />
              {/* Eye Catchlights */}
              <circle cx="366" cy="170" r="2.2" fill="#FFFFFF" />
              <circle cx="370" cy="176" r="1.2" fill="#FFFFFF" />
              {/* Eyelash Curve */}
              <path d="M360 167 C366 163 374 164 376 168" stroke="#2D1915" strokeWidth="2" strokeLinecap="round" />
              {/* Soft Eyebrow */}
              <path d="M361 157 C366 154 372 155 375 158" stroke="#4A2E28" strokeWidth="1.8" strokeLinecap="round" />

              {/* Right Eye */}
              <ellipse cx="405" cy="174" rx="6.5" ry="8" fill="#3D231E" />
              <ellipse cx="405" cy="172" rx="4.5" ry="6" fill="#1C100E" />
              {/* Eye Catchlights */}
              <circle cx="403" cy="170" r="2.2" fill="#FFFFFF" />
              <circle cx="407" cy="176" r="1.2" fill="#FFFFFF" />
              {/* Eyelash Curve */}
              <path d="M397 168 C399 164 407 163 413 167" stroke="#2D1915" strokeWidth="2" strokeLinecap="round" />
              {/* Soft Eyebrow */}
              <path d="M398 158 C401 155 407 154 412 157" stroke="#4A2E28" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            {/* Sweet Warm Smile */}
            <path
              d="M381 198 Q386 204 392 198"
              stroke="#D65D7A"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Tiny Nose */}
            <circle cx="386" cy="186" r="1" fill="#E89AA8" />

            {/* Hand Resting on Cheek / Chin */}
            <g id="hand-on-chin">
              <path
                d="M344 200 C340 185 348 185 352 195 C354 185 360 185 362 195 C363 205 355 220 348 225 Z"
                fill="#FFEAE0"
                stroke="#F2C4B3"
                strokeWidth="1.2"
              />
            </g>
          </g>

          {/* Front Hair & Cute Messy Bun */}
          <g id="hair-front">
            {/* Top Messy High Bun */}
            <circle cx="386" cy="72" r="34" fill="url(#hairDark)" />
            {/* Bun Hair Tie / Scrunchie */}
            <ellipse cx="386" cy="98" rx="22" ry="7" fill="#FF8DA8" stroke="#E06282" strokeWidth="1.5" />

            {/* Loose Curly Bun Strands */}
            <path d="M365 55 Q350 70 360 85" stroke="#38211C" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M405 52 Q420 68 410 82" stroke="#38211C" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Front Wavy Bangs framing forehead */}
            <path
              d="M340 135 C350 115 375 110 385 130 C395 110 420 115 432 138 C425 155 415 160 410 148 C400 135 388 135 380 146 C368 160 350 155 340 135 Z"
              fill="url(#hairDark)"
            />

            {/* Tendril Strands draping on sides */}
            <path
              d="M340 145 C335 175 330 205 342 225"
              stroke="#38211C"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M430 145 C438 175 440 205 430 225"
              stroke="#38211C"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </g>

        {/* 4. THE LAPTOP WORKSPACE */}
        <g id="laptop" transform="translate(235, 245)">
          {/* Laptop Display (Open Screen) */}
          <polygon
            points="25,2 145,2 165,85 5,85"
            fill="url(#laptopScreen)"
            stroke="#94A3B8"
            strokeWidth="3.5"
            filter="url(#softShadow)"
          />

          {/* Screen Content */}
          <rect x="18" y="10" width="134" height="66" rx="2" fill="#0F172A" />

          {/* Window dots */}
          <circle cx="26" cy="16" r="2" fill="#EF4444" />
          <circle cx="32" cy="16" r="2" fill="#F59E0B" />
          <circle cx="38" cy="16" r="2" fill="#10B981" />

          {/* Mock Code Lines */}
          <rect x="25" y="25" width="45" height="3" rx="1.5" fill="#60A5FA" />
          <rect x="74" y="25" width="30" height="3" rx="1.5" fill="#F472B6" />
          <rect x="35" y="33" width="60" height="3" rx="1.5" fill="#34D399" />
          <rect x="35" y="41" width="40" height="3" rx="1.5" fill="#FBBF24" />
          <rect x="45" y="49" width="55" height="3" rx="1.5" fill="#A78BFA" />
          <rect x="25" y="58" width="30" height="3" rx="1.5" fill="#60A5FA" />

          {/* Laptop Base (Keyboard & Palm Rest) */}
          <polygon
            points="0,85 170,85 190,105 -20,105"
            fill="#CBD5E1"
            stroke="#94A3B8"
            strokeWidth="2"
          />
          {/* Trackpad */}
          <rect x="62" y="90" width="46" height="12" rx="2" fill="#94A3B8" opacity="0.6" />

          {/* Yellow Sticky Note on Laptop: "Keep Growing 🌱" */}
          <g transform="translate(110, 38) rotate(6)">
            <rect
              x="0"
              y="0"
              width="44"
              height="34"
              rx="2"
              fill="#FEF08A"
              stroke="#FACC15"
              strokeWidth="0.8"
              filter="url(#softShadow)"
            />
            <text
              x="22"
              y="14"
              textAnchor="middle"
              fontSize="6"
              fontWeight="bold"
              fill="#713F12"
              fontFamily="var(--font-kalam), cursive"
            >
              Keep
            </text>
            <text
              x="22"
              y="24"
              textAnchor="middle"
              fontSize="6"
              fontWeight="bold"
              fill="#713F12"
              fontFamily="var(--font-kalam), cursive"
            >
              Growing 🌱
            </text>
          </g>

          {/* Heart Sticker on Laptop Lid */}
          <path
            d="M25 70 C22 66 18 69 20 73 L25 78 L30 73 C32 69 28 66 25 70 Z"
            fill="#FF8DA8"
          />
        </g>

        {/* 5. KAWAII POTTED SUCCULENT ON 3 BOOKS (LEFT) */}
        <g
          id="books-and-plant"
          transform="translate(175, 230)"
          onMouseEnter={() => setIsPlantHovered(true)}
          onMouseLeave={() => setIsPlantHovered(false)}
          className="cursor-pointer"
        >
          {/* Stack of 3 Books */}
          {/* Book 1 (Bottom): Blue React Book */}
          <g transform="translate(0, 110)">
            <rect x="0" y="0" width="95" height="15" rx="3" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
            {/* Pages edge */}
            <rect x="90" y="2" width="4" height="11" fill="#FFFFFF" />
            <text x="8" y="11" fontSize="7.5" fontWeight="bold" fill="#0C4A6E" fontFamily="var(--font-kalam), cursive">
              React Basics
            </text>
          </g>

          {/* Book 2 (Middle): Gold JavaScript Book */}
          <g transform="translate(4, 93)">
            <rect x="0" y="0" width="88" height="15" rx="3" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <rect x="83" y="2" width="4" height="11" fill="#FFFFFF" />
            <text x="8" y="11" fontSize="7.5" fontWeight="bold" fill="#713F12" fontFamily="var(--font-kalam), cursive">
              JavaScript
            </text>
          </g>

          {/* Book 3 (Top): Pink HTML & CSS Book */}
          <g transform="translate(6, 76)">
            <rect x="0" y="0" width="84" height="15" rx="3" fill="#FB7185" stroke="#E11D48" strokeWidth="1.5" />
            <rect x="79" y="2" width="4" height="11" fill="#FFFFFF" />
            <text x="8" y="11" fontSize="7.5" fontWeight="bold" fill="#881337" fontFamily="var(--font-kalam), cursive">
              HTML &amp; CSS
            </text>
          </g>

          {/* Kawaii Smiling Plant Pot */}
          <g transform={`translate(22, 28) ${isPlantHovered ? "rotate-3" : ""}`} style={{ transition: "transform 0.3s ease" }}>
            {/* Ceramic Pot */}
            <polygon
              points="10,24 42,24 38,48 14,48"
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            {/* Pot rim */}
            <rect x="8" y="20" width="36" height="5" rx="2" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Kawaii Smiley Face on Pot */}
            <circle cx="21" cy="35" r="1.5" fill="#1E293B" />
            <circle cx="31" cy="35" r="1.5" fill="#1E293B" />
            {/* Blushing pink cheeks */}
            <circle cx="17" cy="38" r="2" fill="#FDA4AF" />
            <circle cx="35" cy="38" r="2" fill="#FDA4AF" />
            {/* 'w' smile */}
            <path d="M24 37 Q26 40 28 37" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Green Succulent Leaves */}
            <g id="succulent-leaves" transform="translate(26, 18)">
              {/* Central leaves */}
              <ellipse cx="0" cy="-6" rx="6" ry="12" fill="#4ADE80" stroke="#16A34A" strokeWidth="1.2" />
              <ellipse cx="-8" cy="-2" rx="6" ry="11" fill="#22C55E" stroke="#16A34A" strokeWidth="1.2" transform="rotate(-30)" />
              <ellipse cx="8" cy="-2" rx="6" ry="11" fill="#22C55E" stroke="#16A34A" strokeWidth="1.2" transform="rotate(30)" />
              <ellipse cx="-13" cy="5" rx="5" ry="9" fill="#16A34A" stroke="#15803D" strokeWidth="1.2" transform="rotate(-55)" />
              <ellipse cx="13" cy="5" rx="5" ry="9" fill="#16A34A" stroke="#15803D" strokeWidth="1.2" transform="rotate(55)" />
            </g>
          </g>
        </g>

        {/* 6. "CODE & COFFEE" MUG WITH STEAM (RIGHT) */}
        <g
          id="coffee-mug"
          transform="translate(400, 290)"
          onMouseEnter={() => setIsCoffeeHovered(true)}
          onMouseLeave={() => setIsCoffeeHovered(false)}
          className="cursor-pointer"
        >
          {/* Animated Steam Wafting */}
          <g opacity={isCoffeeHovered ? 1 : 0.75}>
            <path
              d="M14 0 C11 -10 18 -18 14 -28"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="4 3"
            />
            <path
              d="M22 -4 C20 -14 27 -22 23 -32"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="4 3"
            />
          </g>

          {/* Mug Body */}
          <rect x="0" y="8" width="34" height="42" rx="5" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          {/* Handle */}
          <path
            d="M34 16 C44 16 44 38 34 38"
            stroke="#1E293B"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Mug Text: "Code & Coffee" */}
          <text
            x="17"
            y="26"
            textAnchor="middle"
            fontSize="6"
            fontWeight="bold"
            fill="#FFFFFF"
            fontFamily="var(--font-kalam), cursive"
          >
            Code &amp;
          </text>
          <text
            x="17"
            y="36"
            textAnchor="middle"
            fontSize="6"
            fontWeight="bold"
            fill="#F472B6"
            fontFamily="var(--font-kalam), cursive"
          >
            Coffee ☕
          </text>
        </g>

        {/* 7. PINK PEN HOLDER WITH PENCILS */}
        <g id="pen-holder" transform="translate(480, 295)">
          {/* Cup */}
          <rect x="0" y="16" width="28" height="36" rx="4" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
          {/* White Heart on Cup */}
          <path
            d="M14 30 C12 27 9 29 11 33 L14 36 L17 33 C19 29 16 27 14 30 Z"
            fill="#FFFFFF"
          />
          {/* Pencils poking out */}
          <rect x="4" y="-4" width="4" height="22" rx="1" fill="#FACC15" transform="rotate(-12 6 10)" />
          <rect x="12" y="-8" width="4.5" height="26" rx="1" fill="#38BDF8" transform="rotate(2 14 10)" />
          <rect x="20" y="-5" width="4" height="23" rx="1" fill="#A78BFA" transform="rotate(15 22 10)" />
        </g>

        {/* 8. ILLUMINATED DESK LAMP WITH TOGGLEABLE LIGHT CONE */}
        <g id="desk-lamp" transform="translate(470, 160)">
          {/* Warm Golden Light Cone (Rendered when isLampOn is true) */}
          <AnimatePresence>
            {isLampOn && (
              <motion.polygon
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                points="28,45 -140,240 100,240 38,45"
                fill="url(#lampCone)"
                className="pointer-events-none mix-blend-screen"
              />
            )}
          </AnimatePresence>

          {/* Lamp Base on Desk */}
          <ellipse cx="80" cy="180" rx="20" ry="6" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />

          {/* Articulated Lamp Arm */}
          <path
            d="M80 180 Q85 100 50 65 Q35 45 30 42"
            stroke="#1E293B"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Pivot Joints */}
          <circle cx="80" cy="180" r="4.5" fill="#94A3B8" />
          <circle cx="50" cy="65" r="4" fill="#94A3B8" />

          {/* Dome Shade */}
          <g
            transform="translate(18, 26) rotate(-35)"
            onClick={onToggleLamp}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            <path
              d="M0 18 C0 0 34 0 34 18 Z"
              fill="#1E293B"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            {/* Glowing Lamp Bulb Rim */}
            <ellipse
              cx="17"
              cy="18"
              rx="17"
              ry="5"
              fill={isLampOn ? "#FEF08A" : "#64748B"}
              stroke="#1E293B"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
