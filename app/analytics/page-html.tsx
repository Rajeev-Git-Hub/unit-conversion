export default function SimplePage() {
  return (
    <div style={{ margin: 0, padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '16px', textAlign: 'center' }}>Analytics Dashboard</h1>
        <p style={{ fontSize: '16px', color: '#666', textAlign: 'center', marginBottom: '32px' }}>
          This is a simple test page with no external CSS dependencies.
        </p>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '4px', textAlign: 'center' }}>
          <p style={{ color: '#333' }}>If you can read this clearly, the basic HTML structure is working.</p>
        </div>
      </div>
    </div>
  );
}
