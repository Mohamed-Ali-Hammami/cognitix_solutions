
import { useTranslation } from 'react-i18next';

export default function Technologies() {
  const { t } = useTranslation();
  
  const techStacks = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'RESTful APIs'],
    database: ['PostgreSQL', 'MongoDB', 'Redis'],
    tools: ['Git', 'Docker', 'CI/CD']
  };

  return (
    <section className="py-16 bg-gray-50" id="technologies">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{t('technologies.title')}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t('technologies.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStacks).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">{t(`technologies.${category}`)}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
