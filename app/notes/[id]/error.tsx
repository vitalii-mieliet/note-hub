'use client';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Could not fetch note details</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          backgroundColor: '#333',
          color: '#fff',
        }}
      >
        Try again
      </button>
    </div>
  );
}
