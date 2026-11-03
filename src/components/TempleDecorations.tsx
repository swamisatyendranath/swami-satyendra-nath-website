import React, { useState } from 'react';
import { playTempleBell, playChimeHarmonic } from '../utils/templeAudio';

interface DiyaProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showOfferingInteraction?: boolean;
}

export const DiyaLamp: React.FC<DiyaProps> = ({
  className = '',
  size = 'md',
  showOfferingInteraction = false,
}) => {
  const [lit, setLit] = useState(true);
  const [blessed, setBlessed] = useState(false);

  const scale = size === 'sm' ? 0.7 : size === 'lg' ? 1.4 : 1.0;

  const handleInteract = () => {
    if (showOfferingInteraction) {
      playChimeHarmonic();
      setBlessed(true);
      setTimeout(() => setBlessed(false), 2400);
    }
  };

  return (
    <div
      onClick={handleInteract}
      className={`relative inline-flex flex-col items-center justify-center select-none ${
        showOfferingInteraction ? 'cursor-pointer group' : ''
      } ${className}`}
      style={{ transform: `scale(${scale})` }}
      title={showOfferingInteraction ? 'दीप वंदन (Click to offer respect)' : 'पवित्र दीप'}
    >
      {/* Golden Aura Glow */}
      <div
        className="absolute -top-6 w-20 h-20 rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: lit
            ? 'radial-gradient(circle, rgba(251,191,36,0.45) 0%, rgba(234,88,12,0.2) 45%, transparent 70%)'
            : 'none',
        }}
      />

      {/* Flame */}
      {lit && (
        <div className="relative -mb-1 z-10 animate-diya">
          <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Flame (Orange-Red) */}
            <path
              d="M12 0C12 7 22 15 22 24C22 29.5 17.5 34 12 34C6.5 34 2 29.5 2 24C2 15 12 7 12 0Z"
              fill="url(#outerFlame)"
            />
            {/* Mid Flame (Gold-Yellow) */}
            <path
              d="M12 6C12 11 18 18 18 25C18 28.5 15.3 32 12 32C8.7 32 6 28.5 6 25C6 18 12 11 12 6Z"
              fill="url(#midFlame)"
            />
            {/* Inner Core (White-Yellow) */}
            <path
              d="M12 14C12 17 15 21 15 26C15 28 13.6 30 12 30C10.4 30 9 28 9 26C9 21 12 17 12 14Z"
              fill="#FFFBEB"
            />
            <defs>
              <linearGradient id="outerFlame" x1="12" y1="0" x2="12" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDE047" />
                <stop offset="0.4" stopColor="#F97316" />
                <stop offset="1" stopColor="#DC2626" />
              </linearGradient>
              <linearGradient id="midFlame" x1="12" y1="6" x2="12" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FEF08A" />
                <stop offset="0.6" stopColor="#F59E0B" />
                <stop offset="1" stopColor="#EA580C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Brass Lamp Base */}
      <svg width="56" height="26" viewBox="0 0 56 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
        {/* Lamp rim and bowl */}
        <path
          d="M2 7C8 7 16 18 28 18C40 18 48 7 54 7C54 13 46 22 28 22C10 22 2 13 2 7Z"
          fill="url(#brassMetal)"
          stroke="#F59E0B"
          strokeWidth="1"
        />
        {/* Upper Rim */}
        <ellipse cx="28" cy="7" rx="26" ry="5" fill="url(#brassRim)" stroke="#EAB308" strokeWidth="0.8" />
        {/* Inner Oil Basin */}
        <ellipse cx="28" cy="7" rx="20" ry="3.2" fill="#78350F" />
        {/* Ghee Pool */}
        <ellipse cx="28" cy="7.2" rx="15" ry="2" fill="#D97706" opacity="0.8" />
        {/* Pedestal Stand */}
        <path d="M22 22H34L37 26H19L22 22Z" fill="url(#brassMetal)" stroke="#B45309" strokeWidth="0.8" />

        <defs>
          <linearGradient id="brassMetal" x1="2" y1="7" x2="54" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B45309" />
            <stop offset="0.3" stopColor="#F59E0B" />
            <stop offset="0.6" stopColor="#FEF08A" />
            <stop offset="0.85" stopColor="#D97706" />
            <stop offset="1" stopColor="#78350F" />
          </linearGradient>
          <linearGradient id="brassRim" x1="2" y1="7" x2="54" y2="7" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D97706" />
            <stop offset="0.5" stopColor="#FEF08A" />
            <stop offset="1" stopColor="#92400E" />
          </linearGradient>
        </defs>
      </svg>

      {blessed && (
        <span className="absolute -bottom-6 text-[11px] font-medium text-amber-300 tracking-wider animate-bounce whitespace-nowrap">
          ॥ शुभं करोति कल्याणम् ॥
        </span>
      )}
    </div>
  );
};

export const TempleBell: React.FC<{ size?: number; interactive?: boolean; className?: string }> = ({
  size = 56,
  interactive = true,
  className = '',
}) => {
  const [ringing, setRinging] = useState(false);

  const handleClick = () => {
    if (!interactive) return;
    playTempleBell();
    setRinging(true);
    setTimeout(() => setRinging(false), 1200);
  };

  return (
    <div
      onClick={handleClick}
      className={`inline-flex flex-col items-center select-none ${interactive ? 'cursor-pointer group' : ''} ${className}`}
      title={interactive ? 'घंटी बजाएं (Click to Ring the Temple Bell)' : 'मन्दिर घण्टा'}
    >
      <div className={`transition-transform duration-300 ${ringing ? 'animate-bell' : interactive ? 'group-hover:rotate-6' : ''}`}>
        <svg
          width={size}
          height={size * 1.5}
          viewBox="0 0 60 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Top Hanging Ring & Chain Link */}
          <ellipse cx="30" cy="8" rx="7" ry="6" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
          <line x1="30" y1="14" x2="30" y2="24" stroke="#D97706" strokeWidth="3" />
          <circle cx="30" cy="24" r="4" fill="#FEF08A" stroke="#B45309" strokeWidth="1" />

          {/* Bell Crown / Cap */}
          <path d="M22 28C22 25 38 25 38 28L42 38H18L22 28Z" fill="url(#bellBrass)" stroke="#B45309" strokeWidth="1" />

          {/* Bell Body Flaring Down */}
          <path
            d="M18 38C22 42 20 60 12 70C10 72.5 12 76 16 76H44C48 76 50 72.5 48 70C40 60 38 42 42 38H18Z"
            fill="url(#bellGold)"
            stroke="#92400E"
            strokeWidth="1.2"
          />

          {/* Ornate Engraving Rings on Bell Body */}
          <path d="M17 50C22 53 38 53 43 50" stroke="#78350F" strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M15 62C22 65 38 65 45 62" stroke="#78350F" strokeWidth="1.5" />

          {/* Bell Rim Lip */}
          <rect x="14" y="74" width="32" height="4" rx="2" fill="url(#bellLip)" stroke="#92400E" strokeWidth="0.8" />

          {/* Clapper (Tongue) hanging below */}
          <circle cx="30" cy="82" r="3.5" fill="#78350F" stroke="#F59E0B" strokeWidth="1" />
          <line x1="30" y1="76" x2="30" y2="80" stroke="#78350F" strokeWidth="2" />

          <defs>
            <linearGradient id="bellGold" x1="12" y1="38" x2="48" y2="76" gradientUnits="userSpaceOnUse">
              <stop stopColor="#92400E" />
              <stop offset="0.25" stopColor="#F59E0B" />
              <stop offset="0.5" stopColor="#FEF08A" />
              <stop offset="0.75" stopColor="#D97706" />
              <stop offset="1" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="bellBrass" x1="18" y1="25" x2="42" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B45309" />
              <stop offset="0.5" stopColor="#FDE047" />
              <stop offset="1" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="bellLip" x1="14" y1="74" x2="46" y2="78" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="0.5" stopColor="#FFFBEB" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {interactive && (
        <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-medium mt-1 group-hover:text-amber-200 transition-colors">
          नाद
        </span>
      )}
    </div>
  );
};

export const SacredLotus: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central Radiance */}
      <circle cx="50" cy="50" r="12" fill="url(#lotusCore)" />
      <circle cx="50" cy="50" r="4" fill="#FFFBEB" />

      {/* Inner Petals */}
      <g stroke="#F59E0B" strokeWidth="1" fill="url(#petalFill)" opacity="0.95">
        <path d="M50 38C44 26 56 26 50 38Z" />
        <path d="M50 62C44 74 56 74 50 62Z" />
        <path d="M38 50C26 44 26 56 38 50Z" />
        <path d="M62 50C74 44 74 56 62 50Z" />
        <path d="M42 42C32 34 40 26 42 42Z" />
        <path d="M58 42C68 34 60 26 58 42Z" />
        <path d="M42 58C32 66 40 74 42 58Z" />
        <path d="M58 58C68 66 60 74 58 58Z" />
      </g>

      {/* Outer Extended Petals */}
      <g stroke="#EAB308" strokeWidth="1.2" fill="url(#outerPetalFill)" opacity="0.85">
        <path d="M50 20C40 4 60 4 50 20Z" />
        <path d="M50 80C40 96 60 96 50 80Z" />
        <path d="M20 50C4 40 4 60 20 50Z" />
        <path d="M80 50C96 40 96 60 80 50Z" />
        <path d="M29 29C17 17 31 7 29 29Z" />
        <path d="M71 29C83 17 69 7 71 29Z" />
        <path d="M29 71C17 83 31 93 29 71Z" />
        <path d="M71 71C83 83 69 93 71 71Z" />
      </g>

      <defs>
        <radialGradient id="lotusCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) scale(12)">
          <stop stopColor="#FDE047" />
          <stop offset="0.6" stopColor="#EA580C" />
          <stop offset="1" stopColor="#991B1B" />
        </radialGradient>
        <linearGradient id="petalFill" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F43F5E" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#FB923C" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FEF08A" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="outerPetalFill" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BE123C" stopOpacity="0.3" />
          <stop offset="0.5" stopColor="#D97706" stopOpacity="0.25" />
          <stop offset="1" stopColor="#FDE047" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SriYantraEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 80, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Bhupura (Gates) */}
      <rect x="6" y="6" width="88" height="88" stroke="#D97706" strokeWidth="1.2" fill="rgba(127, 29, 29, 0.15)" />
      <rect x="10" y="10" width="80" height="80" stroke="#F59E0B" strokeWidth="0.8" fill="none" />

      {/* Gates extensions */}
      <line x1="50" y1="2" x2="50" y2="6" stroke="#F59E0B" strokeWidth="2" />
      <line x1="50" y1="94" x2="50" y2="98" stroke="#F59E0B" strokeWidth="2" />
      <line x1="2" y1="50" x2="6" y2="50" stroke="#F59E0B" strokeWidth="2" />
      <line x1="94" y1="50" x2="98" y2="50" stroke="#F59E0B" strokeWidth="2" />

      {/* Lotus Circles */}
      <circle cx="50" cy="50" r="36" stroke="#B45309" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="30" stroke="#F59E0B" strokeWidth="0.8" />

      {/* Sacred Intersecting Triangles (Sri Yantra Core) */}
      {/* Upward Primary */}
      <polygon points="50,18 20,72 80,72" stroke="#FEF08A" strokeWidth="1.2" fill="rgba(234, 88, 12, 0.1)" />
      {/* Downward Primary */}
      <polygon points="50,82 20,28 80,28" stroke="#FDE047" strokeWidth="1.2" fill="rgba(185, 28, 28, 0.1)" />

      {/* Secondary Upward & Downward */}
      <polygon points="50,24 26,66 74,66" stroke="#F59E0B" strokeWidth="0.8" fill="none" />
      <polygon points="50,76 26,34 74,34" stroke="#F59E0B" strokeWidth="0.8" fill="none" />
      <polygon points="50,30 32,60 68,60" stroke="#EAB308" strokeWidth="0.8" fill="none" />
      <polygon points="50,70 32,40 68,40" stroke="#EAB308" strokeWidth="0.8" fill="none" />

      {/* Central Bindu */}
      <circle cx="50" cy="50" r="3" fill="#FFFBEB" stroke="#DC2626" strokeWidth="1.2" />
    </svg>
  );
};

export const TempleDivider: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-3 my-8 select-none">
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-amber-600 to-amber-400" />
      <div className="flex items-center gap-2">
        <span className="text-amber-500/80 text-xs">◆</span>
        <span className="text-amber-400 text-sm">ॐ</span>
        {title && (
          <span className="text-xs uppercase tracking-widest text-amber-200/90 font-medium px-1">
            {title}
          </span>
        )}
        <span className="text-amber-400 text-sm">ॐ</span>
        <span className="text-amber-500/80 text-xs">◆</span>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-amber-600 to-amber-400" />
    </div>
  );
};
