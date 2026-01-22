"use client";
import Sidebar from './Sidebar';

export default function LayoutWrapper({ children }) {
  return (
    <>
      <Sidebar />
      <div className="ml-0 md:ml-[230px]">
        {children}
      </div>
    </>
  );
}
