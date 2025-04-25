
export const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1F2937' }}>
      <div className="text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page Not Found</p>
        <p className="text-sm text-gray-300">The page you are looking for might have been removed or never existed.</p>
      </div>
    </div>
  );
};

export default Error404;
