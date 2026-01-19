"use client";
import Sidebar from './Sidebar';

export default function LayoutWrapper({ children }) {
  return (
    <>
      <Sidebar />
      <div className="ml-72">
        {children}
      </div>
    </>
  );
}
