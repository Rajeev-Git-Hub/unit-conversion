import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics Test',
};

export default function TestPage() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
          Analytics Dashboard Test
        </h1>
        <p style={{ fontSize: '16px', color: '#6b7280', textAlign: 'center', marginBottom: '2rem' }}>
          This is a test page to check basic layout
        </p>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <p style={{ textAlign: 'center', color: '#9ca3af' }}>
            If you can see this text clearly, the basic layout is working.
          </p>
        </div>
      </div>
    </div>
  );
}
