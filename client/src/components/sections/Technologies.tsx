
import { useTranslation } from "react-i18next";

export default function Technologies() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{t('technologies.title')}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t('technologies.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{t('technologies.frontend')}</h3>
            {/* Add your frontend tech stack here */}
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{t('technologies.backend')}</h3>
            {/* Add your backend tech stack here */}
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{t('technologies.database')}</h3>
            {/* Add your database tech stack here */}
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{t('technologies.tools')}</h3>
            {/* Add your tools tech stack here */}
          </div>
        </div>
      </div>
    </section>
  );
}
