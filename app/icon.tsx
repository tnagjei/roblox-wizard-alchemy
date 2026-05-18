import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 32% 24%, #f7f1ff 0%, #d8ff6f 18%, #6fffd2 38%, #7b43ff 68%, #160f2f 100%)',
          borderRadius: '112px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 390,
            height: 390,
            border: '10px solid rgba(255,255,255,0.42)',
            borderRadius: 999,
            transform: 'rotate(-22deg)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 270,
            height: 270,
            border: '8px solid rgba(216,255,111,0.44)',
            borderRadius: 999,
            transform: 'rotate(28deg)'
          }}
        />
        <div
          style={{
            display: 'flex',
            color: '#120820',
            fontSize: 178,
            fontWeight: 1000,
            letterSpacing: '-0.12em',
            paddingRight: 18,
            textShadow: '0 8px 18px rgba(255,255,255,0.32)'
          }}
        >
          WA
        </div>
      </div>
    ),
    { ...size }
  );
}
