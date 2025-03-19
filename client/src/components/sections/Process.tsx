
import { useTranslation } from "react-i18next";

export default function Process() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{t('process.title')}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t('process.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">{t('process.discovery.title')}</h3>
            <p className="text-gray-600">{t('process.discovery.description')}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">{t('process.planning.title')}</h3>
            <p className="text-gray-600">{t('process.planning.description')}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">{t('process.development.title')}</h3>
            <p className="text-gray-600">{t('process.development.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
