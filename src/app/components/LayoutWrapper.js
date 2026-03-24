"use client";
import Sidebar from './Sidebar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

export default function LayoutWrapper({ children, breadcrumbs, narrow = false }) {
  return (
    <>
      <Sidebar />
      <div className="ml-0 md:ml-[230px]">
        <div className={`${narrow ? '2xl:max-w-[900px]' : '2xl:max-w-[1100px]'} px-4`}>
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
