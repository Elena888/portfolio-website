import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2030 Elena. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        REact and Next.js (App Router & Server Actions), TypeScript, Tailwind
        CSS, React Email & Resend, Versel Hosting
      </p>
    </footer>
  );
}