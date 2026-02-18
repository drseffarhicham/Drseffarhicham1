# 🏥 Présentation du Projet : Site Web Dr Seffar Hicham

## 📋 Vue d'ensemble
Ce projet est le site web officiel du **Dr Seffar Hicham**, spécialiste en Gynécologie-Obstétrique à Inezgane. C'est une application web moderne (Single Page Application) conçue pour présenter l'expertise du docteur, rassurer les patientes, et faciliter la prise de contact.

**Technologies utilisées :** React, TypeScript, Tailwind CSS, Lucide React.

---

## 🧩 Structure et Détail des Pages

L'application est structurée en une page unique avec navigation fluide entre les différentes sections.

### 1. 🧭 Navigation (`Navigation.tsx`)
- **Barre de navigation fixe** avec effet "glassmorphism" (flou d'arrière-plan).
- **Liens :** Accueil, À propos, Services, Témoignages, Articles, Contact.
- **Menu mobile** réactif pour une expérience optimale sur smartphone.
- **Sélecteur de langue** intégré.

### 2. 👋 Accueil / Hero Section (`Hero.tsx`)
- **Design Impactant :** Utilise un style "Bento Grid" (grille modulaire) pour présenter visuellement le docteur et les chiffres clés.
- **Informations Clés :**
  - Titre accrocheur : "Votre Santé Féminine entre de Bonnes Mains".
  - Badges de confiance : "Gynécologue Obstétricien", "Spécialiste Femme", Note "4.9/5".
  - Statistiques : 15+ ans d'expérience, Expert Certifié.
- **Appel à l'action (CTA) :** Boutons pour "Prendre rendez-vous" et "Découvrir nos services".

### 3. 👨‍⚕️ À Propos (`About.tsx`)
Cette section détaille le parcours d'excellence du docteur.
- **Parcours Professionnel :** Mise en avant de l'expérience hospitalo-universitaire au Maroc et en Belgique.
- **Expérience Internationale :** Focus sur son passage à l'Hôpital Universitaire ERASME (Bruxelles) : gardes, césariennes, grossesses à risque, etc.
- **Formation & Diplômes :** Liste exhaustive des certifications (Rabat, Casablanca, Andorre, Bruxelles, Liège).
- **Galerie Interactive ("Visite Guidée") :** Un accordéon d'images interactif permettant aux patientes de découvrir le cabinet (Salle d'attente, Salle de soin, Équipements) au survol ou au clic.

### 4. S Services (`Services.tsx`)
Présentation détaillée de l'offre de soins.
- **Catalogue des soins :**
  - Consultations gynécologiques (dépistage, prévention).
  - Suivi de grossesse (suivi mensuel, échos).
  - Échographies (2D/3D, morphologique).
  - Bilan de fertilité.
  - Sénologie (maladies du sein).
  - Contraception et Ménopause.
- **Équipements :** Mise en avant de l'échographe haute résolution et du confort des salles d'examen.
- **Prise de RV :** Encadré incitant à la prise de rendez-vous téléphonique rapide.

### 5. ⭐ Témoignages (`Testimonials.tsx`)
Section de preuve sociale pour bâtir la confiance.
- **Avis Vérifiés :** Affichage d'avis réels tirés de Google Maps.
- **Animation de Synchronisation :** Simule une mise à jour en temps réel des avis pour renforcer la crédibilité.
- **Lien Externe :** Bouton pour consulter tous les avis directement sur Google.

### 6. 📚 Blog Santé (`Articles.tsx`)
Un espace éducatif riche en contenu médical.
- **Système de Blog complet :**
  - Catégories : Grossesse, Santé féminine, Ménopause, Contraception, etc.
  - Recherche et Filtres par catégorie.
- **Contenu :** Articles détaillés (ex: "Suivi prénatal", "Endométriose", "Dépistage cancer du sein") rédigés par le docteur.
- **Lecture Modale :** Les articles s'ouvrent dans une fenêtre modale immersive sans quitter la page.

### 7. 📞 Contact (`Contact.tsx`)
La section finale pour convertir la visite en rendez-vous.
- **Coordonnées Multiples :**
  - Téléphone fixe (Secrétariat).
  - Mobile & WhatsApp (Urgences/Messages).
- **Réseaux Sociaux :** Liens vers Facebook et Instagram.
- **Horaires :** Affichage clair des heures d'ouverture (Lun-Sam).
- **Localisation :** Carte Google Maps interactive situant le cabinet à Inezgane.

---

## 🎨 Design System
- **Couleurs :**
  - 🟢 **Vert Clinique (Clinic Green) :** Évoque la santé, la nature et la sérénité.
  - 🌸 **Rose (Clinic Pink) :** Touche de féminité et de douceur adaptée à la gynécologie.
- **Typographie :** Moderne, lisible et professionnelle.
- **Composants UI :**
  - Cartes avec ombres douces et effets de survol (hover).
  - Dégradés subtils pour le fond.
  - Icônes (Lucide React) pour une identification visuelle rapide.
