// app/login/layout.jsx
console.log("Đang dùng layout login");
export default function LoginLayout({ children }) {
  return (
    
      <div className="bg-muted min-h-screen flex items-center justify-center">
        {children}
      </div>
    
  );
}
