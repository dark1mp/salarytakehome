"use client";
import Sidebar from './Sidebar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

export default function LayoutWrapper({ children, breadcrumbs }) {
  return (
    <>
      <Sidebar />
      <div className="ml-0 md:ml-[230px]">
        <div className="2xl:max-w-[1100px] px-4">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
