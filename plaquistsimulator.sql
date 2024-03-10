-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : dim. 10 mars 2024 à 16:30
-- Version du serveur : 5.7.33
-- Version de PHP : 8.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `plaquistsimulator`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

CREATE TABLE `actualite` (
  `actu_id` int(11) NOT NULL,
  `actu_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `actu_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `actu_tiktok_link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `actu_datePublication` datetime NOT NULL,
  `actu_author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`actu_id`, `actu_title`, `actu_content`, `actu_tiktok_link`, `actu_datePublication`, `actu_author`) VALUES
(11, 'Bien le bonjour à tous !', 'Bien le bonjour à tous !\n\nEn cette nouvelle année, je tiens à vous exprimer mes vœux les plus chaleureux. Que 2024 soit synonyme de réussite, de joie et de belles réalisations pour chacun d\'entre vous !\n\nJe profite de cette occasion pour vous annoncer que je compte être beaucoup plus actif sur TikTok et sur notre serveur Discord tout au long de cette année. Je souhaite partager davantage sur le développement de Plaquist Simulator, échanger avec vous et recueillir vos précieux retours.\n\nC\'est avec une grande excitation que je vous annonce que 2024 sera l\'année où Plaquist Simulator verra officiellement le jour ! Ce projet qui me tient tant à cœur prend forme, et je suis impatient de partager cette aventure avec vous.\n\nD\'ailleurs il se peut qu\'une bêta soit déjà plus ou moins prête, et j\'ai vraiment hâte de pouvoir vous la faire gagner, lire vos retour et voir le salon bugs exploser suite à vos découvertes !\n\nMerci à tous pour votre soutien continu. Ensemble, faisons de 2024 une année exceptionnelle !\n\nTrès bonne année à vous, \n\nStoappy ❤️', NULL, '2024-01-01 18:42:00', 'Stoappy'),
(12, '🎉**Salut tout le monde !** 🎉', '🎉** Salut tout le monde !** 🎉\n\n🚀 Certains d\'entre vous l\'ont sûrement déjà remarqué, mais j\'ai récemment publié 2 vidéos sur TikTok où je partage comment j\'ai implémenté plus de 450 sons sur le jeu en seulement 2 semaines.\n\n🎵 Sachez que la 3ème et dernière vidéo de cette petite série est désormais disponible !\n\n💻 Découvrez les galères, les défis et les raisons d\'une telle précipitation juste ici 👇\n                         :Tiktok: • https://www.tiktok.com/@stoappy?lang=fr 🤯\n\n👀 **Et devinez quoi ?** 👀\n\n🔥 **La prochaine vidéo est encore plus excitante ! 🎬 **\n\nJe vous prépare quelque chose de spécial avec l\'annonce d\'un **concours** à ne surtout pas manquer.\n\n🏆 Alors restez à l\'affût pour plus de détails ! 👀\n\nLes plus observateurs d\'entre vous l\'ont peut-être déjà remarqué 🧐\n\nMerci à tous pour votre soutien continu. L\'aventure Plaquist Simulator prend une nouvelle dimension, et c\'est grâce à vous ! 🙏', NULL, '2024-01-10 14:04:00', 'Stoappy'),
(13, '📢 Pour ce qui n\'ont pas suivi, dans la dernière vidéo j\'annonce le premier **concours** de ce Discord ! 🏆', '📢 Pour ce qui n\'ont pas suivi, dans la dernière vidéo j\'annonce le premier **concours** de ce Discord ! 🏆\n\n🗓️ **Lundi 15 Janvier**, participez au concours pour tenter de remporter votre accès à la bêta fermé de **Plaquist Simulator. **:Screws: \n\n 🔑 10 clés à gagné, le tirage au sort aura lieu une semaine plus tard, soit le lundi 22 janvier !\n\n📮 Les gagnants seront contacté en MP !\n\n🙏 ***Bonne chance à tous !*** 🤞', NULL, '2024-01-12 19:52:00', 'Stoappy'),
(14, '🏆 Le **concours** est lancé @everyone ! 🏆 ', '🏆 Le **concours** est lancé @everyone ! 🏆 \n\n🚀 Rendez vous dans le **salon **⁠『🔐』𝗕ê𝘁𝗮-𝗳𝗲𝗿𝗺é𝗲 \n\n📝 Pour participez vous n\'avez qu\'à **cliquer** sur cette icône : 🎉 \n\n***Bonne chance ! 🤞***', NULL, '2024-01-15 09:07:00', 'Stoappy'),
(15, '⚠️ **Dernier jour pour participer au concours @everyone** ⚠️', '⚠️ **Dernier jour pour participer au concours @everyone** ⚠️\n\n💯 Si on dépasse les **100 participants **avant le tirage au sort, je fait gagner **5 Clés **supplémentaire sur **Tiktok** ! 🎁\n\n⏳Vous en dites quoi ? 👀', NULL, '2024-01-20 23:12:00', 'Stoappy'),
(16, '🙏 **Merci à tous les participants !** 🌟', '🙏 **Merci à tous les participants ! **🌟\n\n👏 Un grand merci à chacun d\'entre vous pour avoir participé au concours. 🎉 \n\n🔑 Le palier des **100 participants **ayant était dépassé, rester à l\'affut sur **Tiktok** pour tenter de remporter d\'autre clés ! 🎁 \n\n🚧 J\'encourage fortement les @🔧 Bêta Testeur 0.1 à jouer le jeu en répondant au **formulaire** ou en partageant leurs expériences sur le** Discord **📝 \n\n🔥 **Bonne journée a tous** 👋', NULL, '2024-01-22 09:26:00', 'Stoappy'),
(17, '__**Bonsoir tout le monde**__ 👋', '__**Bonsoir tout le monde**__ 👋\n\n🚧 J\'ai effectué quelques **modifications** sur le serveur, donc voici une sorte de **Patch Note Discord :**\n\n__❌ • Les salons **Bêta-Bug** et Forum Bugs ne sont plus disponibles car trop **désordonnés**.__\nIls ont été remplacés par un nouveau **Forum Bugs** qui, cette fois-ci, contient des **Tags** pour faciliter l\'organisation.\n➡️ Veuillez éviter les doublons et soigner vos futurs posts. 🙏\n➡️ Les bugs et améliorations qui y étaient inscrits ont été conservés et seront corrigés prochainement. ⏳\n\n📜 • __Ajout d\'un salon dédié aux ⁠『🗞』𝗣𝗮𝘁𝗰𝗵-𝗡𝗼𝘁𝗲 .__\nCe salon vous informera de toutes les **Modifications / Améliorations / Corrections / Équilibrages...** de chaque mise à jour.\n\n🛠️ • __Des **Rôles Métiers** sont désormais disponibles depuis la section ⁠Salons et rôles .__\nLeur seule utilité pour l\'instant est de pouvoir poser des questions à des membres ayant des connaissances particulières. 💬\n \n__🗂️ • Ah et aussi j\'ai trouvé ça qui trainer dans le **Serveur **🤷‍♀️ :__\n\n👉  *2EJ64-77GVL-DWB6K  *👈 \n\n⭐ **Passez une bonne soirée ! **⭐', NULL, '2024-01-23 17:38:19', 'Stoappy'),
(18, '🎬  __**Nouvelle vidéo disponible !**__ 🛠️', '🎬  __**Nouvelle vidéo disponible ! __**🛠️\n\n🔎  Si vous souhaitez en savoir un peu plus sur la suite de **Plaquist Simulator**, c\'est juste ici :\n\n:Tiktok:  👉   https://www.tiktok.com/@stoappy?lang=fr   👈 :Tiktok: \n\n⬇️ Et pout en apprendre __**ENCORE PLUS**__, le dernier **Patch Note** n\'attend plus que vous ! ⬇️\n\n📝 ⁠『🗞』𝗣𝗮𝘁𝗰𝗵-𝗡𝗼𝘁𝗲 \n\n⚠️ A noter que la bêta est toujours ouverte pour ceux qui la détienne, mais qu\'aucune mise à jour n\'est prévu pour le moment. ⚠️', NULL, '2024-02-07 16:12:07', 'Stoappy'),
(19, '⚠️ **Fermeture de la BÊTA 0.1**⚠️ ', '⚠️ **Fermeture de la BÊTA 0.1**⚠️ \n\n:Screws: Bonsoir à tous, je viens de mettre fin à la  première BÊTA de **Plaquist Simulator**.\n\n📝 Une **BÊTA 0.2** devrais avoir lieux d\'ici quelques jours, cette fois ci seulement 5 participants que je choisirais moi même.\n\n🚧 **Je prévois une sortie officielle très prochainement** (rien n\'est encore fixé donc je ne donne pas de dates ^^) 📆 \n\n👷‍♂️ Restez branché la suite arrive très vite ! 🤞', NULL, '2024-03-01 19:00:00', 'Stoappy'),
(20, '🎬 **Nouvelle vidéo !** 🍿', '🎬 **Nouvelle vidéo !** 🍿\n\n🚧 Je vien de réaliser l\'un des ajouts dont je suis le plus fière ! 🖌️ \n\n🏗️ Après est-ce que ça méritais d\'y passer autant de temps ? 👀\n\n👇 Si vous voulez savoir de quoi je parle, c\'est juste **ici** :\n\nhttps://vm.tiktok.com/ZGeUAFToo/', 'https://vm.tiktok.com/ZGeUAFToo', '2024-03-02 22:26:17', 'Stoappy');

-- --------------------------------------------------------

--
-- Structure de la table `patch_note`
--

CREATE TABLE `patch_note` (
  `patchNote_id` int(11) NOT NULL,
  `patchNote_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `patchNote_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `patchNote_author` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `patchNote_datePublication` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `patch_note`
--

INSERT INTO `patch_note` (`patchNote_id`, `patchNote_title`, `patchNote_content`, `patchNote_author`, `patchNote_datePublication`) VALUES
(2, ':Screws:  **Salut à tous !** :Screws: ', ':Screws:  **Salut à tous !** :Screws: \r\n\r\n:pencil: Je vous propose aujourd\'hui de découvrir le premier **Patch Note** de __**Plaquist Simulator**__ !\r\nL\'ensemble de ces bugs ont étaient découvert grâce aux @:wrench: Bêta Testeur 0.1\r\n\r\n:anger: __**Bugs Majeurs :**__\r\n\r\n• Le bug incapacitant le joueur à se déplacer après avoir découpé un panneau de laine a été corrigé. :man_walking: \r\n• Le bug faisant disparaître les matériaux lorsque le joueur appuie sur sa touche \"Main\" a été corrigé. :wastebasket: \r\n• Le bug permettant de faire pivoter les matériaux tenus en main tout en étant dans le menu pause a été corrigé. :recycle: \r\n• Le bug faisant disparaître les montants/fourrures lors de leur découpe a été corrigé. :eyes: \r\n• Le bug permettant d\'ouvrir le catalogue et le menu pause simultanément a été corrigé. :closed_book: \r\n\r\n:jigsaw: __**Collisions et physiques :**__\r\n\r\n• Les petits morceaux de montants/fourrures n\'ont désormais plus de collision avec le joueur. :no_entry_sign: \r\n• __***Les paramètres physique des objets suivants ont été modifiés :***__\r\n-> Plaques : - Poids augmenté afin d\'améliorer leur comportement - Certain paramètres  physique modifiés - Collision légèrement augmentée - :bricks: \r\n-> Palettes : - Certain paramètres  physique modifiés - :wood: \r\n-> Stocks de laine : - Poids augmenté afin d\'améliorer leur comportement - Certain paramètres  physique modifiés - :gloves: \r\n-> Panneaux de laine : - Poids diminué pour améliorer leur comportement - Certain paramètres  physique modifiés- :sponge: \r\n-> Fourrures et Montants : - Certain paramètres  physique modifiés - :chains: \r\n\r\n:warning:  ***À noter qu\'aucun problème de collision/physique n\'a lieu de mon côté, donc seuls vos retours permettront d\'identifier si ces changements ont eu un impact positif.*** :warning:\r\n:joystick: __**Gameplay :**__\r\n\r\n• Le volume de la radio est désormais réglable depuis cette dernière. :loud_sound: \r\n• Simplification du système de découpe des fourrures et montants. :white_check_mark:\r\n• Suppression du lève-plaque et de la glacière de l\'inventaire tant que le joueur ne les a pas débloqués. :unlock: \r\n• __***Ajout d\'indications pour les éléments suivants :***__\r\n-> Ajout d\'un message d\'information si le joueur tente de placer une suspente en plastique n\'ayant aucun support. :x: \r\n-> Ajout d\'un message d\'information si le joueur tente de prendre un objet vissé. :screwdriver: \r\n-> Ajout d\'un message d\'information pour indiquer que l\'inventaire n\'est pas encore débloqué. :lock: \r\n-> Modification de l\'ATH de découpe des montants/fourrures. :scissors: \r\n-> Modification de l\'ATH de l\'escabeau. :ladder: \r\n-> Modification de l\'ATH de l\'équerre. :triangular_ruler: \r\n\r\n\r\n:dividers: __**Autres correctifs :__**\r\n\r\n• Correction orthographique de certains dialogues du tutoriel. :abc: \r\n• Correction de certaines traductions. :pen_ballpoint: \r\n• Repositionnement du laser (Tuto_1) permettant de rester bloqué. :no_entry:', 'Stoappy', '2024-01-24 16:05:40'),
(3, '📝  __**Le second Patch Note est là !**__ :Screws: ', '📝  __**Le second Patch Note est là !**__ :Screws: \n\n🤏 Certes moins garnis que le précédent, mais avec des correctifs tout aussi **important** ! 💪\n\n💢 __***Bugs Majeurs :***__\n\n• Le bug permettant de visser/dévisser avec n\'importe quel outil à était corrigé. 🪛 \n• Le bug de volume de la radio à était corrigé. 📻 \n• Le bug faisant apparaitre la commande avant sa livraison est corrigé. 🚚 \n• Le bug laissant la prévisualisation des objet avec le crayon est corrigé. ✏️ \n• Concernant le bug de mise à jours des objectifs : 🏆 \n*(Ces dernier devraient **normalement** être mis à jour en continue.)*\n⚠️ **Vos retours sont attendu pour confirmé ce correctif.** ⚠️ \n\n🕹️  __**Gameplay :**__\n\n• Le lève fonctionnement du lève plaque à était modifier : 🛴 \n(Plus besoin de se placer précisément afin d\'actionner son mécanisme, le simple fait de viser le lève plaque ou sa plaque, permet de différencier les actions que le joueur souhaite effectuer.)\n\n🗂️  __**Autres**__\n\n• Corrections de certaines traductions. 🔤 \n• Ajout de nouvelles aide et indications ainsi que de leurs traductions. 💡 \n• Correction de visuel concernant le catalogue Brico Repos. 📕 \n• Correction du bug modifiant la taille de l\'interlocuteur lors des tutoriels. 💬', 'Stoappy', '2024-02-07 16:11:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `actualite`
--
ALTER TABLE `actualite`
  ADD PRIMARY KEY (`actu_id`);

--
-- Index pour la table `patch_note`
--
ALTER TABLE `patch_note`
  ADD PRIMARY KEY (`patchNote_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `actualite`
--
ALTER TABLE `actualite`
  MODIFY `actu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `patch_note`
--
ALTER TABLE `patch_note`
  MODIFY `patchNote_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
