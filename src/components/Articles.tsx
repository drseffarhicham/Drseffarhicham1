import { BookOpen, Calendar, ArrowRight, Clock, User, Tag, Search, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

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

  const articles = [
    {
      title: "L'Hystéroscopie : Une exploration précise de la cavité utérine",
      category: "Chirurgie",
      date: "19 Février 2026",
      readTime: "3 min",
      excerpt: "Découvrez comment l'hystéroscopie permet de diagnostiquer et traiter les pathologies utérines comme les polypes ou fibromes avec une précision maximale et peu de suites opératoires.",
      detailedContent: [
        "Diagnostic précis des anomalies intra-utérines (polypes, fibromes, cloisons) pour traiter les saignements anormaux ou l'infertilité. L'examen permet une vision directe et nette de toute la cavité utérine.",
        "Traitement chirurgical mini-invasif permettant le retrait de lésions sans aucune incision cutanée. L'instrument passe par les voies naturelles, évitant ainsi les cicatrices visibles.",
        "Hystéroscopie ambulatoire : la majorité des interventions se déroulent sur une demi-journée, permettant un retour à domicile rapide. Le confort de la patiente est privilégié avec des techniques modernes d'anesthésie.",
        "Récupération post-opératoire extrêmement rapide, avec une reprise des activités habituelles dès le lendemain. Les douleurs sont généralement minimes et bien contrôlées par des antalgiques simples.",
        "Suivi personnalisé : chaque intervention fait l'objet d'un compte rendu détaillé et d'une analyse histopathologique systématique des prélèvements si nécessaire pour une sécurité médicale totale."
      ],
      image: "https://images.pexels.com/photos/3844586/pexels-photo-3844586.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["hystéroscopie", "chirurgie", "utérus", "fibromes", "polypes"],
      featured: true
    },
    {
      title: "Chirurgie du sein : Entre prévention et traitement des pathologies mammaires",
      category: "Chirurgie",
      date: "18 Février 2026",
      readTime: "4 min",
      excerpt: "La prise en charge chirurgicale des pathologies du sein a beaucoup évolué. Découvrez l'importance du diagnostic précis et les avancées dans la chirurgie mammaire conservatrice.",
      detailedContent: [
        "Prise en charge des pathologies bénignes telles que les adénofibromes, les kystes complexes ou les lésions atypiques. L'objectif est de traiter la lésion tout en préservant au maximum l'architecture naturelle du sein.",
        "Chirurgie de diagnostic et de traitement du cancer du sein : biopsies chirurgicales et exérèses ciblées. La chirurgie reste un pilier central dans le parcours de soin oncologique moderne.",
        "Techniques de chirurgie conservatrice (oncoplastie) visant à retirer la tumeur tout en garantissant un résultat esthétique optimal. Le respect de l'image corporelle est une priorité absolue dans notre approche thérapeutique.",
        "Prélèvement et analyse du ganglion sentinelle pour limiter les séquelles fonctionnelles au niveau du bras. Cette technique précise évite souvent le curage axillaire complet et ses complications potentielles.",
        "Accompagnement multidisciplinaire et suivi post-opératoire rigoureux pour une guérison sereine. La collaboration avec les radiologues, oncologues et kinésithérapeutes assure une prise en charge globale de la patiente."
      ],
      image: "chirregie.png",
      author: "Dr Seffar Hicham",
      tags: ["chirurgie mammaire", "sein", "prévention", "cancer", "esthétique"],
      featured: false
    },
    {
      title: "La Laparoscopie : La chirurgie gynécologique moderne et mini-invasive",
      category: "Chirurgie",
      date: "17 Février 2026",
      readTime: "3 min",
      excerpt: "Moins de cicatrices, moins de douleur et une récupération plus rapide. La cœlioscopie (laparoscopie) révolutionne le traitement des kystes ovariens et de l'endométriose.",
      detailedContent: [
        "Technique par vidéo-chirurgie permettant d'explorer et d'opérer l'abdomen via de très petites incisions (5 à 10 mm). La caméra offre une vision agrandie et précise des organes pelviens.",
        "Traitement de première intention pour les kystes ovariens, les grossesses extra-utérines et certaines formes d'infertilité. La précision du geste chirurgical permet de préserver la fertilité future.",
        "Référence pour le traitement chirurgical de l'endométriose : retrait précis des lésions tout en respectant les tissus sains environnants. La laparoscopie améliore significativement la qualité de vie des patientes.",
        "Avantages majeurs : diminution drastique des douleurs post-opératoires et risque d'infection réduit. Le préjudice esthétique est quasi nul grâce à la petite taille des cicatrices.",
        "Retour rapide à la vie sociale et professionnelle : la durée d'hospitalisation est raccourcie et la convalescence est beaucoup plus simple qu'en chirurgie classique 'ouverte'."
      ],
      image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["laparoscopie", "cœlioscopie", "chirurgie mini-invasive", "kystes", "endométriose"],
      featured: true
    },
    {
      title: "L'importance du suivi prénatal : Guide complet pour une grossesse sereine",
      category: "Grossesse",
      date: "15 Mars 2025",
      readTime: "3 min",
      // views: 1247,
      // likes: 89,
      // comments: 23,
      excerpt: "Le suivi prénatal régulier est essentiel pour assurer la santé de la mère et du bébé. Découvrez pourquoi chaque consultation compte et comment optimiser votre suivi médical.",
      detailedContent: [
        "7 consultations prénatales indispensables pour surveiller le développement fœtal et prévenir les complications. Ces consultations permettent de détecter précocement toute anomalie et d'assurer un suivi personnalisé adapté à chaque grossesse.",
        "Échographies de dépistage aux 1er, 2ème et 3ème trimestres pour détecter anomalies morphologiques ou retard de croissance. L'échographie du premier trimestre permet de dater précisément la grossesse et de dépister la trisomie 21.",
        "Surveillance systématique de la tension artérielle et de la prise de poids pour prévenir la prééclampsie. Une hypertension artérielle gravidique peut avoir des conséquences graves et nécessite une prise en charge immédiate.",
        "Dépistage du diabète gestationnel entre 24 et 28 semaines via test de tolérance au glucose. Ce dépistage est crucial car le diabète gestationnel augmente les risques de complications pour la mère et l'enfant.",
        "Préparation à l'allaitement et conseils nutritionnels basés sur les besoins énergétiques et micronutritionnels. Une alimentation équilibrée riche en fer, calcium, acide folique et oméga-3 est essentielle pour le développement optimal du fœtus."
      ],
      image: "IMG7.jpeg",

      author: "Dr Seffar Hicham",
      tags: ["suivi grossesse", "consultation", "santé bébé", "préparation accouchement"],
      featured: true
    },
    {
      title: "Comprendre le cycle menstruel : Signaux et symptômes à reconnaître",
      category: "Santé féminine",
      date: "10 Mars 2025",
      readTime: "2 min",
      // views: 892,
      // likes: 67,
      // comments: 15,
      excerpt: "Un guide complet pour mieux comprendre votre cycle menstruel et identifier les signes qui nécessitent une consultation médicale. Apprenez à écouter votre corps.",
      detailedContent: [
        "Phase folliculaire (jours 1-14) : développement des follicules et production d'œstrogènes, préparation à l'ovulation. Durant cette phase, l'hormone FSH stimule la croissance de plusieurs follicules ovariens dont un deviendra dominant.",
        "Phase ovulatoire : libération de l'ovocyte, période de fertilité maximale. Le pic de LH déclenche l'ovulation environ 24-36 heures plus tard. La glaire cervicale devient plus fluide pour faciliter le passage des spermatozoïdes.",
        "Phase lutéale : sécrétion de progestérone par le corps jaune, préparation de l'endomètre à la nidation. Cette phase dure environ 14 jours et se termine par les règles si aucune fécondation n'a eu lieu.",
        "Signes d'alerte : cycles irréguliers, douleurs intenses pouvant signaler des troubles hormonaux comme le syndrome des ovaires polykystiques (SOPK) ou l'endométriose. Des saignements entre les règles peuvent indiquer un déséquilibre hormonal.",
        "Quand consulter : aménorrhée de plus de 3 mois, saignements anormaux abondants ou prolongés, suspicion de désordre endocrinien. Une dysménorrhée sévère nécessite une investigation pour écarter l'endométriose."
      ],
      image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["cycle menstruel", "symptômes", "santé femme", "prévention"],
      featured: false
    },
    {
      title: "La ménopause: guide pratique pour une transition harmonieuse",
      category: "Ménopause",
      date: "5 Mars 2025",
      readTime: "2 min",
      // views: 1563,
      // likes: 124,
      // comments: 42,
      excerpt: "Conseils et informations pour mieux vivre la ménopause et gérer ses symptômes au quotidien avec l'aide de votre gynécologue. Solutions naturelles et traitements.",
      detailedContent: [
        "Bouffées de chaleur et sueurs nocturnes : conséquence de la baisse des œstrogènes sur le centre thermique hypothalamique. Ces symptômes touchent 75% des femmes ménopausées et peuvent durer plusieurs années. Des techniques de relaxation et une activité physique régulière peuvent aider.",
        "Traitement hormonal substitutif (THS) : équilibre hormonal pour réduire symptômes et protéger l'os, à évaluer selon antécédents cardiovasculaires. Le THS doit être initié dans les 10 ans suivant la ménopause pour un bénéfice maximal et comporte des contre-indications absolues.",
        "Prévention de l'ostéoporose : apport suffisant en calcium (1200mg/jour) et vitamine D (800 UI/jour) pour maintien de la densité osseuse. Une ostéodensitométrie est recommandée à partir de 65 ans ou plus tôt en cas de facteurs de risque.",
        "Exercices physiques adaptés : musculation et exercices de port de charge pour prévenir la perte osseuse. La marche rapide, le jogging léger et la danse sont excellents. L'activité physique régulière réduit aussi le risque cardiovasculaire.",
        "Suivi gynécologique annuel indispensable : dépistage des pathologies hormonales et oncologiques. Le cancer de l'endomètre et de l'ovaire sont plus fréquents après la ménopause. Un frottis cervical reste nécessaire jusqu'à 65 ans."
      ],
      image: "https://images.pexels.com/photos/5473180/pexels-photo-5473180.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["ménopause", "traitement hormonal", "bien-être", "symptômes"],
      featured: true
    },
    {
      title: "Contraception: faire le bon choix selon votre profil et besoins",
      category: "Contraception",
      date: "1 Mars 2025",
      readTime: "3 min",
      // views: 2108,
      // likes: 156,
      // comments: 38,
      excerpt: "Pilule, DIU, implant... Découvrez les différentes méthodes contraceptives et trouvez celle qui vous convient le mieux selon votre mode de vie et votre santé.",
      detailedContent: [
        "Contraception orale : œstroprogestative et progestative, ajustée selon antécédents thromboemboliques. La pilule combinée est contre-indiquée en cas de migraine avec aura, tabagisme après 35 ans, ou antécédent de thrombose veineuse. L'efficacité dépend de l'observance quotidienne.",
        "DIU au cuivre : action mécanique sur la nidation et toxicité du cuivre sur les spermatozoïdes, efficace jusqu'à 10 ans. Sans hormones, il convient aux femmes ne souhaitant pas de contraception hormonale. Peut augmenter légèrement le flux menstruel.",
        "DIU hormonal : libération continue de lévonorgestrel, durée 3 à 5 ans, diminution significative du flux menstruel voire aménorrhée. Particulièrement indiqué en cas de ménorragies ou d'endométriose. Taux de satisfaction très élevé.",
        "Implant contraceptif : libération continue de progestatif sous-cutané, discret et efficace 3 ans. Insertion rapide sous anesthésie locale au niveau du bras. Peut entraîner des saignements irréguliers les premiers mois nécessitant parfois un traitement complémentaire.",
        "Consultation annuelle pour contrôle et ajustement selon tolérance et effets secondaires. L'examen clinique, la mesure de la tension artérielle et le frottis cervical font partie du suivi. Possibilité de changer de méthode à tout moment selon l'évolution de vos besoins."
      ],
      image: "https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["contraception", "pilule", "DIU", "méthodes"],
      featured: false
    },
    {
      title: "Préparation à l'accouchement : Techniques et exercices essentiels",
      category: "Grossesse",
      date: "25 Février 2025",
      readTime: "3 min",
      // views: 1789,
      // likes: 134,
      // comments: 29,
      excerpt: "Comment bien se préparer physiquement et mentalement à l'accouchement. Nos conseils pour vivre ce moment sereinement avec des techniques éprouvées.",
      detailedContent: [
        "Séances de préparation à la naissance dès le 6ème mois : exercices respiratoires et postures pour faciliter le travail. Ces séances en groupe ou individuelles permettent d'apprendre les techniques de respiration, de relaxation et les positions favorisant la descente du bébé.",
        "Exercices de respiration et relaxation profonde pour réduire stress et douleur. La respiration abdominale profonde augmente l'oxygénation et diminue la perception de la douleur. La sophrologie et l'hypnose peuvent être des compléments efficaces.",
        "Péridurale : technique d'anesthésie loco-régionale par injection dans l'espace péridural, délai d'administration selon dilatation cervicale généralement à partir de 3-4 cm. Permet de rester consciente tout en supprimant la douleur des contractions.",
        "Reconnaître le début du travail : contractions régulières toutes les 5 minutes pendant 2 heures, rupture de membranes avec perte de liquide amniotique clair. Parfois précédé de la perte du bouchon muqueux quelques jours avant.",
        "Valise de maternité : checklist incluant vêtements confortables pour la mère, body et pyjamas pour le nouveau-né, produits d'hygiène, documents médicaux (carte de groupe sanguin, dossier médical), et accessoires pour l'allaitement si désiré."
      ],
      image: "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["accouchement", "préparation", "exercices", "respiration"],
      featured: false
    },
    {
      title: "Fertilité: conseils et prévention pour optimiser vos chances",
      category: "Fertilité",
      date: "20 Février 2025",
      readTime: "3 min",
      // views: 2341,
      // likes: 198,
      // comments: 51,
      excerpt: "Les facteurs qui influencent la fertilité et les bonnes pratiques pour optimiser vos chances de conception. Du diagnostic aux solutions naturelles.",
      detailedContent: [
        "Bilan de fertilité après 12 mois sans grossesse (6 mois après 35 ans) pour identifier causes féminines et masculines. Le bilan comprend un spermogramme pour l'homme, des dosages hormonaux et une échographie pelvienne pour la femme.",
        "Analyses hormonales (FSH, LH, AMH, œstradiol, progestérone) et échographie pelvienne pour évaluer la réserve ovarienne et détecter d'éventuels kystes ou fibromes. L'hormone anti-müllérienne (AMH) est un excellent marqueur de la réserve ovarienne.",
        "Suivi de l'ovulation par courbe de température basale, tests hormonaux urinaires d'ovulation, ou monitoring échographique. La période fertile s'étend de 5 jours avant l'ovulation jusqu'à 24 heures après.",
        "Facteurs favorisant : alimentation équilibrée riche en antioxydants, acide folique et zinc, maintien d'un IMC entre 19 et 25, activité physique modérée régulière. Un poids insuffisant ou excessif peut perturber l'ovulation.",
        "Éviter tabac (diminue la réserve ovarienne et qualité ovocytaire), alcool (toxique pour les gamètes), et stress excessif (perturbe l'axe hypothalamo-hypophysaire). Limiter la caféine à 2 tasses par jour. Certains perturbateurs endocriniens peuvent aussi affecter la fertilité."
      ],
      image: "https://images.pexels.com/photos/7155974/pexels-photo-7155974.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["fertilité", "conception", "bilan", "traitements"],
      featured: true
    },
    {
      title: "Dépistage du cancer du sein : Tout ce qu'il faut savoir",
      category: "Prévention",
      date: "15 Février 2025",
      readTime: "2 min",
      // views: 1678,
      // likes: 112,
      // comments: 18,
      excerpt: "L'importance du dépistage précoce du cancer du sein. Méthodes, fréquence et signes d'alerte à ne pas négliger pour votre santé.",
      detailedContent: [
        "Auto-palpation mensuelle après les règles pour détecter nodules, masses ou anomalies de la texture mammaire. Debout devant un miroir, inspectez vos seins en levant les bras, puis palpez en mouvements circulaires allongée.",
        "Examen clinique annuel par un gynécologue ou médecin pour détection précoce de toute anomalie. L'examen comprend l'inspection visuelle et la palpation des seins et des aires ganglionnaires axillaires.",
        "Mammographie de dépistage tous les 2 ans entre 50 et 74 ans selon recommandations de santé publique. Cet examen radiologique permet de détecter des lésions infracliniques non palpables. Peut être débuté plus tôt en cas de facteurs de risque.",
        "Échographie mammaire complémentaire si densité mammaire élevée chez les femmes jeunes ou anomalies détectées à la mammographie. L'IRM mammaire peut être proposée en cas de très haut risque génétique.",
        "Facteurs de risque : antécédents familiaux au premier degré, âge (risque augmente après 50 ans), mutations génétiques BRCA1/BRCA2, première grossesse tardive, absence d'allaitement, traitement hormonal prolongé. Un conseil génétique est proposé si antécédents familiaux multiples."
      ],
      image: "depistage.png",
      author: "Dr Seffar Hicham",
      tags: ["dépistage", "cancer sein", "mammographie", "prévention"],
      featured: false
    },
    {
      title: "Endométriose : Diagnostic et prise en charge moderne",
      category: "Santé féminine",
      date: "10 Février 2025",
      readTime: "3 min",
      // views: 2890,
      // likes: 245,
      // comments: 67,
      excerpt: "Comprendre l'endométriose, ses symptômes et les nouvelles approches de traitement pour améliorer la qualité de vie des patientes.",
      detailedContent: [
        "Symptômes caractéristiques : dysménorrhée sévère (règles très douloureuses), douleurs pelviennes chroniques hors période menstruelle, dyspareunie profonde (douleurs lors des rapports), troubles digestifs cycliques, infertilité possible chez 30-40% des patientes.",
        "Diagnostic : échographie endovaginale réalisée par un expert en endométriose et IRM pelvienne pour visualiser et localiser précisément les lésions d'endométriose (ovaires, ligaments utérosacrés, cloison rectovaginale). Le délai diagnostique est malheureusement encore long (7 ans en moyenne).",
        "Traitements médicaux de première ligne : anti-inflammatoires non stéroïdiens pour la douleur, contraception hormonale continue (pilule œstroprogestative en continu, DIU au lévonorgestrel), progestatifs, agonistes ou antagonistes de la GnRH induisant une ménopause artificielle temporaire.",
        "Traitement chirurgical par cœlioscopie si lésions étendues, endométriomes ovariens volumineux, ou symptômes sévères résistants au traitement médical. L'exérèse complète des lésions améliore significativement la fertilité et la qualité de vie.",
        "Prise en charge pluridisciplinaire recommandée : gynécologue spécialisé, algologue pour la gestion de la douleur chronique, nutritionniste (alimentation anti-inflammatoire), kinésithérapeute spécialisé en pelvi-périnéologie, psychologue pour le soutien émotionnel. L'endométriose impacte significativement la qualité de vie."
      ],
      image: "https://images.pexels.com/photos/5721881/pexels-photo-5721881.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["endométriose", "diagnostic", "traitement", "douleur"],
      featured: true
    },
    {
      title: "Alimentation et santé gynécologique : Les aliments essentiels",
      category: "Santé féminine",
      date: "5 Février 2025",
      readTime: "3 min",
      // views: 1432,
      // likes: 98,
      // comments: 22,
      excerpt: "Découvrez comment votre alimentation influence votre santé gynécologique et quels aliments privilégier pour un équilibre hormonal optimal.",
      detailedContent: [
        "Oméga-3 (poissons gras comme saumon, sardines, maquereau, noix, graines de lin) : puissantes propriétés anti-inflammatoires, réduction des douleurs menstruelles, soutien de la santé ovarienne et amélioration de la qualité ovocytaire. Consommation recommandée : 2-3 portions de poisson gras par semaine.",
        "Calcium (produits laitiers, sardines avec arêtes, amandes, choux) et vitamine D (exposition solaire, poissons gras, œufs) : essentiels pour le maintien de la densité osseuse, prévention de l'ostéoporose post-ménopausique. Apports recommandés : 1000-1200mg calcium/jour et 800-1000 UI vitamine D/jour.",
        "Antioxydants (fruits rouges, agrumes, légumes colorés, thé vert) : protection cellulaire contre le stress oxydatif, régulation hormonale, amélioration de la fertilité. Les vitamines C et E protègent les ovocytes. Une alimentation riche en antioxydants diminue aussi le risque de certains cancers gynécologiques.",
        "Fibres alimentaires (légumes verts, légumineuses, céréales complètes) : favorisent l'élimination des œstrogènes en excès via les selles, soutiennent le métabolisme des hormones sexuelles, stabilisent la glycémie. Objectif : 25-30g de fibres par jour.",
        "Hydratation adéquate : indispensable pour toutes les fonctions métaboliques et hormonales optimales, élimination des toxines, maintien de la lubrification vaginale. Boire 1,5 à 2 litres d'eau par jour. Limiter alcool et caféine qui peuvent perturber l'équilibre hormonal."
      ],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Dr Seffar Hicham",
      tags: ["alimentation", "hormones", "nutrition", "bien-être"],
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === 'Tous'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-gray-50 to-clinic-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête enrichie */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-clinic-green-100 to-clinic-pink-100 text-clinic-green-700 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            Blog Santé & Conseils
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            Votre <span className="text-clinic-green-700">Ressource</span> Santé
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-clinic-green-500 to-clinic-pink-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Informations médicales vérifiées, conseils pratiques et actualités santé pour vous accompagner
            à chaque étape de votre vie de femme. Des articles rédigés par le Dr Seffar Hicham.
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
                  {category}
                </button>
              ))}
            </div>

            {/* Barre de recherche */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-clinic-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Articles en vedette */}
        {selectedCategory === 'Tous' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-3 h-3 bg-clinic-green-500 rounded-full mr-3"></span>
              Articles en Vedette
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-clinic-green-500 text-white text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} de lecture
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      {/* <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {article.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {article.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {article.comments}
                        </div>
                      </div> */}
                    </div>
                    <p className="text-gray-700 line-clamp-3 mb-4">{article.excerpt}</p>
                    <button
                      onClick={() => openArticle(article)}
                      className="inline-flex items-center gap-2 text-clinic-green-700 font-semibold hover:gap-3 transition-all"
                    >
                      Lire la suite
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-clinic-green-500 text-white text-xs font-semibold rounded-full">
                    {article.category}
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
                  Lire la suite
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
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer - Déplacé pour être plus accessible */}
              <button
                onClick={closeArticle}
                className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all z-50 shadow-lg border border-white/20 group"
                aria-label="Fermer l'article"
              >
                <X className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Header avec image */}
              <div className="relative h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Titre et métadonnées sur l'image */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-2 bg-clinic-green-500 text-white text-sm font-semibold rounded-full mb-4">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{selectedArticle.readTime} de lecture</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu de l'article */}
              <div className="p-8 md:p-12">


                {/* Introduction */}
                <div className="mb-10">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic border-l-4 border-clinic-green-500 pl-4 md:pl-6 py-2 bg-clinic-green-50/50">
                    {selectedArticle.excerpt}
                  </p>
                </div>

                {/* Contenu détaillé */}
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 text-clinic-green-500 mr-3" />
                    Points Clés de l'Article
                  </h3>

                  <div className="space-y-6">
                    {selectedArticle.detailedContent.map((point: string, idx: number) => (
                      <div key={idx} className="bg-gradient-to-r from-clinic-green-50 to-clinic-pink-50 rounded-xl p-6 border-l-4 border-clinic-green-500">
                        <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Section conclusion */}
                  <div className="mt-10 bg-gradient-to-br from-clinic-green-500 to-clinic-pink-500 rounded-2xl p-8 text-white">
                    <h4 className="text-2xl font-bold mb-4">💡 En Résumé</h4>
                    <p className="text-lg leading-relaxed opacity-95">
                      Ce guide vous apporte des informations médicales fiables et des conseils pratiques pour prendre soin de votre santé.
                      Pour toute question spécifique ou préoccupation concernant votre situation personnelle, n'hésitez pas à consulter
                      le Dr Seffar Hicham pour un accompagnement personnalisé.
                    </p>
                  </div>
                </div>

                {/* Tags */}
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

                {/* CTA */}

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}