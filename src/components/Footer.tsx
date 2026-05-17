import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Atta.
        </div>
        <div className="flex gap-8 text-sm text-muted">
          <a href="mailto:[EMAIL_ADDRESS]" className="hover:text-white transition-colors">Email</a>
          <a href="https://github.com/atta-161" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/atta161/" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
