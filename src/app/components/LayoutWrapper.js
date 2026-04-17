"use client";
import Sidebar from './Sidebar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import AdUnit from './AdUnit';

export default function LayoutWrapper({ children, breadcrumbs, narrow = false, fullWidth = false }) {
  return (
    <>
      <Sidebar />
      <div className="ml-0 md:ml-[230px] relative">
        {narrow && (
          <div className="hidden xl:block absolute right-8 top-8 w-[160px]">
            <div className="sticky top-8">
              <AdUnit slot="3284080016" hideOnMobile />
            </div>
          </div>
        )}
        <div className={`${fullWidth ? '' : narrow ? 'xl:pr-[192px] 2xl:pr-0 2xl:max-w-[900px] 2xl:mx-auto' : '2xl:max-w-[1100px] 2xl:mx-auto'} px-4`}>
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
