import { BookOpen, Calendar, ArrowRight, Clock, User, Tag, Search, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  detailedContent: string[];
  image: string;
  author: string;
  tags: string[];
  featured: boolean;
}

export default function Articles() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedArticle(null), 300);
  };

  const categories = ['Tous', 'Grossesse', 'Santé féminine', 'Chirurgie', 'Ménopause', 'Contraception', 'Fertilité', 'Prévention'];
  const articles: Article[] = Array.isArray(t('articles.items', { returnObjects: true })) 
    ? (t('articles.items', { returnObjects: true }) as Article[])
    : [];

  const filteredArticles = selectedCategory === 'Tous'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <section id="articles" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête enrichie */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-clinic-green-100 to-clinic-pink-100 text-clinic-green-700 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4 me-2" />
            {t('articles.badge')}
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('articles.title_start')} <span className="text-clinic-green-700">{t('articles.title_highlight')}</span> {t('articles.title_end')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-clinic-green-500 to-clinic-pink-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('articles.subtitle')}
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? 'bg-clinic-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-clinic-green-50 hover:text-clinic-green-700 border border-gray-200'
                    }`}
                >
                  {t(`articles.categories.${category}`)}
                </button>
              ))}
            </div>

            {/* Barre de recherche */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute start-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('articles.search_placeholder')}
                className="w-full ps-10 pe-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-clinic-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 start-4">
                  <span className="px-3 py-1 bg-clinic-green-500 text-white text-xs font-semibold rounded-full">
                    {t(`articles.categories.${article.category}`)}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-700 line-clamp-3 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="text-xs">{article.author}</span>
                  </div>
                </div>
                <button
                  onClick={() => openArticle(article)}
                  className="inline-flex items-center gap-2 text-clinic-green-700 font-semibold hover:gap-3 transition-all"
                >
                  {t('articles.read_more')}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Article Détaillé */}
        {isModalOpen && selectedArticle && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeArticle}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                onClick={closeArticle}
                className="absolute top-6 end-6 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-3 rounded-full transition-all z-50 shadow-lg border border-white/20 group"
                aria-label="Fermer l'article"
              >
                <X className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Image complète */}
              <div className="relative bg-gray-900 flex items-center justify-center rounded-t-2xl overflow-hidden min-h-[300px]">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Titre et métadonnées */}
              <div className="p-8 pb-4 border-b border-gray-100 bg-white">
                <span className="inline-block px-4 py-2 bg-clinic-green-500 text-white text-sm font-semibold rounded-full mb-4">
                  {t(`articles.categories.${selectedArticle.category}`)}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedArticle.title}
                </h2>
                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-clinic-green-600" />
                    <span className="font-medium">{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-clinic-green-600" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-clinic-green-600" />
                    <span>{selectedArticle.readTime} {t('articles.read_time')}</span>
                  </div>
                </div>
              </div>

              {/* Contenu de l'article */}
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic border-s-4 border-clinic-green-500 ps-4 md:ps-6 py-2 bg-clinic-green-50/50">
                    {selectedArticle.excerpt}
                  </p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 text-clinic-green-500 me-3" />
                    {t('articles.key_points')}
                  </h3>

                  <div className="space-y-6">
                    {selectedArticle.detailedContent.map((point: string, idx: number) => (
                      <div key={idx} className="bg-gradient-to-r from-clinic-green-50 to-clinic-pink-50 rounded-xl p-6 border-s-4 border-clinic-green-500">
                        <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 bg-gradient-to-br from-clinic-green-500 to-clinic-pink-500 rounded-2xl p-8 text-white">
                    <h4 className="text-2xl font-bold mb-4">{t('articles.summary_title')}</h4>
                    <p className="text-lg leading-relaxed opacity-95">
                      {t('articles.summary_text')}
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag className="h-5 w-5 text-gray-400" />
                    {selectedArticle.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-clinic-green-100 hover:text-clinic-green-700 transition-all cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}