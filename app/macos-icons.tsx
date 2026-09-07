/** Detailed macOS-style app icons for the Dock (visual homage, not official assets). */

import { useEffect, useId, useState, type ReactNode } from 'react';

type IconProps = { size?: number; className?: string };

function useSvgId() {
  return useId().replace(/:/g, '');
}

function MacIcon({ children }: { children: (id: string) => ReactNode }) {
  const id = useSvgId();
  return (
    <svg className="mac-app-icon" width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <clipPath id={`${id}-clip`}>
          <rect x="0" y="0" width="100" height="100" rx="22.5" ry="22.5" />
        </clipPath>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity=".32" />
          <stop offset="42%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        {children(id)}
        <rect width="100" height="100" fill={`url(#${id}-shine)`} pointerEvents="none" />
      </g>
    </svg>
  );
}

export function AppleLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function FinderIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6ec8ff" />
              <stop offset="55%" stopColor="#1a8cff" />
              <stop offset="100%" stopColor="#0a5fd4" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <ellipse cx="50" cy="54" rx="30" ry="32" fill="#f7fbff" />
          <ellipse cx="39" cy="48" rx="5.2" ry="6.2" fill="#1c1c1e" />
          <ellipse cx="61" cy="48" rx="5.2" ry="6.2" fill="#1c1c1e" />
          <path d="M36 66c4.5 7 23.5 7 28 0" fill="none" stroke="#1c1c1e" strokeWidth="4.5" strokeLinecap="round" />
        </>
      )}
    </MacIcon>
  );
}

export function LaunchpadIcon() {
  const colors = ['#ff5b5b', '#ff9f0a', '#ffd60a', '#30d158', '#64d2ff', '#5e5ce6', '#bf5af2', '#ff375f'];
  return (
    <MacIcon>
      {() => (
        <>
          <rect width="100" height="100" fill="#1c1c1e" />
          {colors.map((c, i) => {
            const x = 22 + (i % 4) * 18.5;
            const y = 28 + Math.floor(i / 4) * 28;
            return <circle key={c} cx={x} cy={y} r="7.2" fill={c} />;
          })}
          <circle cx="78" cy="56" r="7.2" fill="#ac8e68" />
        </>
      )}
    </MacIcon>
  );
}

export function SafariIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5ac8ff" />
              <stop offset="100%" stopColor="#007aff" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <circle cx="50" cy="50" r="34" fill="#f5f5f7" />
          <circle cx="50" cy="50" r="30" fill="#fff" />
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <line key={deg} x1="50" y1="24" x2="50" y2="28" stroke="#8e8e93" strokeWidth="1.6" strokeLinecap="round" transform={`rotate(${deg} 50 50)`} />
          ))}
          <polygon points="50,22 58,58 50,52 42,58" fill="#ff3b30" />
          <polygon points="50,78 42,42 50,48 58,42" fill="#d1d1d6" />
          <circle cx="50" cy="50" r="4" fill="#1c1c1e" />
        </>
      )}
    </MacIcon>
  );
}

export function MessagesIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64e285" />
              <stop offset="100%" stopColor="#24c759" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <path
            d="M50 24c-14.4 0-26 9.2-26 20.5 0 6.6 3.7 12.5 9.6 16.4-.3 3.2-1.8 7.4-5.6 10.2 5.4-.4 9.8-2.5 12.6-4.7 3 .8 6.2 1.2 9.4 1.2 14.4 0 26-9.2 26-20.5S64.4 24 50 24z"
            fill="#fff"
          />
        </>
      )}
    </MacIcon>
  );
}

export function MailIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5ac8fa" />
              <stop offset="100%" stopColor="#007aff" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <rect x="16" y="28" width="68" height="46" rx="6" fill="#fff" />
          <path d="M18 32l32 24 32-24" fill="none" stroke="#007aff" strokeWidth="4" strokeLinejoin="round" />
        </>
      )}
    </MacIcon>
  );
}

export function MapsIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#64d2ff" />
              <stop offset="100%" stopColor="#0a84ff" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <path d="M18 72L38 22l24 12 20-8v52L58 70 38 82z" fill="#fff" opacity=".95" />
          <path d="M38 22v60M62 34v48" fill="none" stroke="#ff3b30" strokeWidth="3" />
          <circle cx="50" cy="48" r="8" fill="#ff3b30" />
          <circle cx="50" cy="48" r="3.2" fill="#fff" />
        </>
      )}
    </MacIcon>
  );
}

export function PhotosIcon() {
  const petals = ['#ff453a', '#ff9f0a', '#ffd60a', '#30d158', '#64d2ff', '#5e5ce6', '#bf5af2', '#ff375f'];
  return (
    <MacIcon>
      {() => (
        <>
          <rect width="100" height="100" fill="#f2f2f7" />
          {petals.map((c, i) => (
            <ellipse key={c} cx="50" cy="32" rx="11" ry="20" fill={c} transform={`rotate(${i * 45} 50 50)`} opacity=".92" />
          ))}
          <circle cx="50" cy="50" r="8" fill="#fff" />
        </>
      )}
    </MacIcon>
  );
}

export function FaceTimeIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64e285" />
              <stop offset="100%" stopColor="#30d158" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <rect x="18" y="32" width="44" height="36" rx="8" fill="#fff" />
          <path d="M68 40l16-8v36l-16-8V40z" fill="#fff" />
        </>
      )}
    </MacIcon>
  );
}

export function CalendarIcon({ day }: { day: number }) {
  const [weekday, setWeekday] = useState('SUN');
  useEffect(() => {
    setWeekday(new Date().toLocaleString('en-US', { weekday: 'short' }).toUpperCase());
  }, []);
  return (
    <MacIcon>
      {() => (
        <>
          <rect width="100" height="100" fill="#fff" />
          <rect width="100" height="28" fill="#ff3b30" />
          <text x="50" y="20" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif">
            {weekday}
          </text>
          <text x="50" y="72" textAnchor="middle" fill="#1c1c1e" fontSize="42" fontWeight="600" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif">
            {day}
          </text>
        </>
      )}
    </MacIcon>
  );
}

export function ContactsIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff9f0a" />
              <stop offset="100%" stopColor="#ff6b00" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <rect x="22" y="18" width="56" height="68" rx="6" fill="#fff" />
          <circle cx="50" cy="42" r="12" fill="#c7c7cc" />
          <path d="M30 74c2-12 10-18 20-18s18 6 20 18" fill="#c7c7cc" />
        </>
      )}
    </MacIcon>
  );
}

export function NotesIcon() {
  return (
    <MacIcon>
      {() => (
        <>
          <rect width="100" height="100" fill="#fff" />
          <rect width="100" height="22" fill="#ffd60a" />
          <rect x="0" y="22" width="100" height="4" fill="#ffe566" />
          <line x1="22" y1="40" x2="78" y2="40" stroke="#d1d1d6" strokeWidth="3" />
          <line x1="22" y1="54" x2="78" y2="54" stroke="#d1d1d6" strokeWidth="3" />
          <line x1="22" y1="68" x2="62" y2="68" stroke="#d1d1d6" strokeWidth="3" />
        </>
      )}
    </MacIcon>
  );
}

export function MusicIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff6b8a" />
              <stop offset="100%" stopColor="#fc3c44" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <circle cx="38" cy="68" r="12" fill="#fff" />
          <circle cx="66" cy="60" r="10" fill="#fff" />
          <path d="M48 68V30l28-6v38" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </MacIcon>
  );
}

export function SettingsIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d1d1d6" />
              <stop offset="100%" stopColor="#8e8e93" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <circle cx="50" cy="50" r="16" fill="none" stroke="#f2f2f7" strokeWidth="8" />
          <circle cx="50" cy="50" r="8" fill="#f2f2f7" />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x="46" y="14" width="8" height="16" rx="2" fill="#f2f2f7" transform={`rotate(${i * 45} 50 50)`} />
          ))}
        </>
      )}
    </MacIcon>
  );
}

export function DownloadsIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5ac8fa" />
              <stop offset="100%" stopColor="#0a84ff" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <path d="M22 38h20l6-8h24l6 8h20v36a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6V38z" fill="#ffe08a" />
          <path d="M22 38h56v8H22z" fill="#ffd45a" />
          <path d="M50 48v22M42 62l8 8 8-8" fill="none" stroke="#0a84ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </MacIcon>
  );
}

export function TrashIcon() {
  return (
    <MacIcon>
      {() => (
        <>
          <rect width="100" height="100" fill="#e5e5ea" />
          <rect x="30" y="34" width="40" height="42" rx="4" fill="none" stroke="#636366" strokeWidth="4" />
          <line x1="38" y1="44" x2="38" y2="66" stroke="#636366" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="50" y1="44" x2="50" y2="66" stroke="#636366" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="62" y1="44" x2="62" y2="66" stroke="#636366" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M26 34h48M40 28h20" fill="none" stroke="#636366" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
    </MacIcon>
  );
}

export function LinkedInAppIcon() {
  return (
    <MacIcon>
      {(id) => (
        <>
          <defs>
            <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ea4e0" />
              <stop offset="100%" stopColor="#0a66c2" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#${id}-bg)`} />
          <text
            x="50"
            y="68"
            textAnchor="middle"
            fill="#fff"
            fontSize="52"
            fontWeight="700"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          >
            in
          </text>
        </>
      )}
    </MacIcon>
  );
}

export function WifiIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 18.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM12 13a6.5 6.5 0 0 1 4.6 1.9l-1.45 1.45A4.5 4.5 0 0 0 12 15a4.5 4.5 0 0 0-3.15 1.3L7.4 14.9A6.5 6.5 0 0 1 12 13zm0-5a11 11 0 0 1 7.8 3.2l-1.45 1.45A9 9 0 0 0 12 10a9 9 0 0 0-6.35 2.65L4.2 11.2A11 11 0 0 1 12 8z" />
    </svg>
  );
}

export function BatteryIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 14" fill="currentColor" aria-hidden="true">
      <rect x="1" y="2" width="22" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="4" width="16" height="6" rx="1" fill="currentColor" />
      <rect x="24" y="5" width="2.5" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

export function ControlCenterIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

export function SearchIcon({ size = 13 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}
