export const CATEGORIES = [
  'Restaurants',
  'Cafés & douceurs',
  'Bars & sorties',
  'Boutiques',
  'Hors de Montpellier',
  'Nature & balades',
  'Sélections',
  'Événements & culture',
] as const

export type Category = (typeof CATEGORIES)[number]

export interface Place {
  category: Category
  name: string
  description: string
  address: string
  posts: string[]
}

const ig = (path: string) => `https://www.instagram.com/${path}/`

export const PLACES: Place[] = [
  {
    category: 'Restaurants',
    name: 'By Naan',
    description:
      'Street food autour du cheese naan : naans garnis de viande grillée, poulet croustillant, steak ou falafels, avec frites maison.',
    address: "52 Rue de l'Aiguillerie, Montpellier",
    posts: [ig('delicity.montpellier/p/Dfjs0qLCIhj')],
  },
  {
    category: 'Restaurants',
    name: 'Emiko',
    description:
      'Petit izakaya japonais intimiste avec un chef japonais : ramen tonkotsu au miso, anguille flambée, sushis, bento. Réserver.',
    address: '10 bis Rue des Balances, Montpellier',
    posts: [ig('unptitcroc_fr/reel/Dfg2eGbowWa'), ig('legoutdusorbet/reel/DQoFs29jLfo')],
  },
  {
    category: 'Restaurants',
    name: 'Yiwu Ramen',
    description: 'Adresse de ramen recommandée comme incontournable aux nouveaux arrivants.',
    address: '12 bis Rue Jules Ferry, Montpellier',
    posts: [ig('quedubonfr/reel/DeR46Z3hDoV')],
  },
  {
    category: 'Restaurants',
    name: 'Hayas',
    description:
      "Place Sainte-Anne, au pied de l'église. Cuisine de saison ; formule midi (entrée + plat ou plat + dessert) 18 €.",
    address: '12 Rue Sainte-Anne, Montpellier',
    posts: [
      ig('dolce_vita_montpellier/p/DcoUUtVjczb'),
      ig('dolce_vita_montpellier/p/DXeulEPjTUI'),
      ig('dolce_vita_montpellier/p/DUfl7p3jaJb'),
      ig('dolce_vita_montpellier/p/DTzytWbjcul'),
    ],
  },
  {
    category: 'Restaurants',
    name: "La Maison d'Anna",
    description:
      'Petite trattoria des Pouilles : pâtes fraîches, orecchiette, pizzetta, focaccia, tiramisu. Carte du jour. Près de la Comédie.',
    address: '1 Rue des Trésoriers de France, Montpellier',
    posts: [
      ig('vivez_montpellier/reel/DcL2bQRsNCq'),
      ig('dolce_vita_montpellier/p/DZpxZvmjRGC'),
      ig('eve.not20/reel/DVgxW5YDiJB'),
      ig('vivez_montpellier/reel/DNfko7HNp0Y'),
    ],
  },
  {
    category: 'Restaurants',
    name: "D'ici et d'ailleurs",
    description:
      "Chef d'origine colombienne, tout est fait maison (même le pain). Gnocchis sans gluten, empanadas à 3 €, desserts au dulce de leche. Plats 15–20 €.",
    address: '6 Rue Loys, Montpellier',
    posts: [ig('legoutdusorbet/reel/DW4GkhRMdxu')],
  },
  {
    category: 'Restaurants',
    name: 'Chez Matias',
    description: 'Empanadas cuites au four, recettes de famille.',
    address: '6 Place Jean Jaurès, Montpellier',
    posts: [ig('chez.matias.empanadas/p/DWgZN7WDQB_')],
  },
  {
    category: 'Restaurants',
    name: 'Antonio e Marco Morreale',
    description:
      'Nouvel italien à Port Marianne : pâtes fraîches, portions généreuses, affogato. €€–€€€.',
    address: '23 Rue de Chio, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DYm0013jdQo')],
  },
  {
    category: 'Restaurants',
    name: "L'Endroit du Jour",
    description: 'Jeune restaurant aux menus créatifs qui changent chaque semaine.',
    address: 'Antigone, Montpellier',
    posts: [ig('lendroitdujour/p/DXEXjIpjJPm')],
  },
  {
    category: 'Restaurants',
    name: 'Eugénie Crêperie',
    description:
      'Crêperie moderne près de Saint-Roch : produits locaux, farine bretonne, cocktails au cidre, coin jeux pour enfants. Midi du mardi au samedi, soir du jeudi au samedi. €–€€.',
    address: '9 Rue Jules Latreille, Montpellier',
    posts: [
      ig('dolce_vita_montpellier/p/DSQaFbtjTMV'),
      ig('dolce_vita_montpellier/p/DIeY41Ato0a'),
      ig('epicu.montpellier.food/p/DHQZkDLtlCv'),
      ig('dolce_vita_montpellier/p/DGJJm8XtruL'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Ambeis',
    description: "Restaurant intimiste de quelques tables dans l'Écusson. Menu en 3 temps 38 €.",
    address: '4 Rue du Puits des Esquilles, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DPt4QZgjWuR')],
  },
  {
    category: 'Restaurants',
    name: 'La Cigale',
    description:
      'Brasserie ouverte de 7 h 30 à minuit (1 h du jeudi au samedi). Réservation : 09 74 97 46 40.',
    address: '7 Boulevard des Arceaux, Montpellier',
    posts: [ig('la_cigale_montpellier/p/DOao1wDiJCw')],
  },
  {
    category: 'Restaurants',
    name: 'Baba Ristorante',
    description: 'Des jumeaux qui marient cuisine méditerranéenne et asiatique.',
    address: '21 Rue Vallat, Montpellier',
    posts: [ig('mimiquiregale_mtp/reel/DM5UkF6Nzl-')],
  },
  {
    category: 'Restaurants',
    name: 'Romagna Kitchen',
    description:
      "Cuisine d'Émilie-Romagne : pâtes fraîches, lasagnes, piadina, arancini, tiramisu.",
    address: '20 Rue du Faubourg du Courreau, Montpellier',
    posts: [ig('delicity.montpellier/reel/DMS47ScJNcq')],
  },
  {
    category: 'Restaurants',
    name: 'Menjia Bistrot Canaille',
    description: 'Bistrot référencé au Gault & Millau trois mois seulement après son ouverture.',
    address: '',
    posts: [ig('menjia_bistrot_canaille/reel/DMM2F_INnrj')],
  },
  {
    category: 'Restaurants',
    name: 'Décadence (bar à manger)',
    description: 'Terrasse place Saint-Ravy, petites assiettes à partager. Formule midi 19 €.',
    address: '1 Rue Saint-Ravy, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DLktSSNNPkr')],
  },
  {
    category: 'Restaurants',
    name: 'Chic et Bohème',
    description:
      'Restaurant avec jardin, carte renouvelée régulièrement. Midi du mardi au samedi et vendredi soir.',
    address: '31 Rue Proudhon (Beaux-Arts), Montpellier',
    posts: [
      ig('chic.et.boheme/p/DdRvlQqtptQ'),
      ig('chic.et.boheme/p/Dc-vaEpOCUL'),
      ig('chic.et.boheme/p/DLjiewBtnNo'),
      ig('chic.et.boheme/p/DGbM4rlt_mb'),
      ig('chic.et.boheme/p/DEuNj0aN9LW'),
      ig('chic.et.boheme/p/DCywuvfNp1b'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Tiflis',
    description:
      "Géorgien, tout fait maison : khinkalis, aubergines aux noix, pain géorgien, vin d'amphore.",
    address: '',
    posts: [ig('legoutdusorbet/reel/DLUAsExt2GB')],
  },
  {
    category: 'Restaurants',
    name: 'La Nonna',
    description: "Italien inspiré de la cuisine des grands-mères, près d'Odysseum. Parking privé.",
    address: '1086 Avenue Albert Einstein, Montpellier',
    posts: [ig('axelletchloe/reel/DLAla4fI1KA')],
  },
  {
    category: 'Restaurants',
    name: 'Le Secco',
    description: 'Restaurant franco-italien du quartier Saint-Roch.',
    address: '',
    posts: [ig('jedis_m_/reel/DLFuSgdNmA9')],
  },
  {
    category: 'Restaurants',
    name: 'La Table des Poètes',
    description:
      '« Cantine gastronomique » avec terrasse cachée, quartier Chaptal. Du mardi au samedi, midi et soir. 04 99 61 19 59.',
    address: '2 Rue Desmazes, Montpellier',
    posts: [ig('la_table_des_poetes/p/DJI3aW4ITdF'), ig('epicu.montpellier.food/reel/DFdAlVFAYH4')],
  },
  {
    category: 'Restaurants',
    name: 'CEBA',
    description:
      "Tenu par Agathe et Oscar ; la carte change tous les deux jours. Os à moelle, focaccia, pithivier d'effiloché de porc.",
    address: '',
    posts: [ig('atablelescopains/reel/DIgzJk_NoJi')],
  },
  {
    category: 'Restaurants',
    name: 'Le Mas de Lafeuillade',
    description:
      'Cuisine créative, de saison et maison dans un mas plein de charme au décor vintage. Du mardi au samedi, midi et soir.',
    address: '220 Rue du Capitaine Pierre Pontal, Montpellier',
    posts: [
      ig('epicu.montpellier.food/p/DIYiMOXtYnE'),
      ig('bonsplans.montpellier/reel/Da3MTLsAAvo'),
      ig('bonsplans.montpellier/reel/DMx2qBPIEK_'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Volfoni',
    description: 'Italien (pizzas, pâtes) à Port Marianne.',
    address: 'Avenue du Pirée, Montpellier',
    posts: [ig('quedubonfr/reel/DHjKe9lNJJc'), ig('dolce_vita_montpellier/p/DGgU2H2N6V9')],
  },
  {
    category: 'Restaurants',
    name: 'Pinot Bistrot',
    description:
      'Assiettes façon tapas et belle carte des vins. Tous les jours, 19 h–minuit ; réservation conseillée.',
    address: '6 Rue du Petit Saint-Jean, Montpellier',
    posts: [
      ig('pinot_bistrot_montpellier/p/DHbBllcgLQ4'),
      ig('dolce_vita_montpellier/p/DGqhGIhte2w'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Tentacool',
    description:
      '« Fast-good » de la mer, pêche locale et responsable. Du mardi midi au samedi soir.',
    address: '20 Rue des Écoles Laïques, Montpellier',
    posts: [
      ig('tentacool___montpellier/reel/DHML6ADNwDC'),
      ig('tentacool___montpellier/p/DDM8dRgNkpx'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Coppia',
    description: 'Cuisine du marché repérée par Le Fooding ; khao soi thaï le week-end.',
    address: '',
    posts: [
      ig('coppia.montpellier/p/DLZWBXVCtSt'),
      ig('coppia.montpellier/p/DG_An_miwIp'),
      ig('coppia.montpellier/p/DFiLeZNiwgD'),
      ig('coppia.montpellier/p/DEc0jByiqMb'),
      ig('lefooding/p/DDW0oRDNaBd'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Faim, soif aussi',
    description:
      '« Comptoir de copains ». Midi du jeudi au samedi (19 € / 23 €), soir du mardi au samedi. 09 55 95 05 27.',
    address: '13 Rue Eugène Lisbonne, Montpellier',
    posts: [
      ig('faim.soifaussi/p/DGdMgS2N8AD'),
      ig('faim.soifaussi/p/DEpkUZctu0O'),
      ig('faim.soifaussi/p/DEaVVKWNH7e'),
      ig('villaschweppes/reel/DctPi47tYZ2'),
      ig('atablelescopains/reel/DasqlqLKsOG'),
      ig('worklife_io/reel/DZexrC3DJr4'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Il Bar a Pizze',
    description: 'Pizzeria, sur place ou à emporter. Du lundi au samedi. 06 07 39 61 65.',
    address: '290 Avenue Théroigne de Méricourt, Montpellier',
    posts: [ig('ilbarapizze/p/DGXvhvnNUmH'), ig('ilbarapizze/p/DABjFdqtBVu')],
  },
  {
    category: 'Restaurants',
    name: 'Braise',
    description:
      'Menu de la semaine autour des viandes fumées (travers de bœuf, par exemple). Du mardi au samedi. 04 99 62 64 25.',
    address: '',
    posts: [ig('braise.montpellier/p/DFmoOHdsDdE')],
  },
  {
    category: 'Restaurants',
    name: 'Via Pila',
    description:
      'Italien près du Corum : burrata, pâtes Saint-Jacques et truffe, tiramisu. Réserver.',
    address: '2 Rue du Pila Saint-Gély, Montpellier',
    posts: [ig('adopt.montpel/p/CxQtfbmNw-W')],
  },
  {
    category: 'Restaurants',
    name: 'La Mamma Saint-Roch',
    description: 'Italien animé, portions généreuses à prix doux.',
    address: 'Quartier Saint-Roch, Montpellier',
    posts: [ig('adopt.montpel/p/C1xVeC-NMyC')],
  },
  {
    category: 'Restaurants',
    name: 'Puja',
    description: 'Restaurant indien, copieux et savoureux.',
    address: 'Rue Ferdinand Fabre, Montpellier',
    posts: [ig('adopt.montpel/p/C_D_cjNtn27')],
  },
  {
    category: 'Restaurants',
    name: 'Cucina Nostra',
    description: 'Bar à pâtes (au choix) et pizzas. Réserver.',
    address: 'Rue des Écoles Laïques, Montpellier',
    posts: [ig('adopt.montpel/p/DBmIfzCtodF')],
  },
  {
    category: 'Restaurants',
    name: 'Jules César',
    description: 'Pizza napolitaine et pâtes maison (cacio e pepe).',
    address: '28 Rue Lamartine, Montpellier',
    posts: [ig('delicity.montpellier/reel/DDQEbCdMzoc')],
  },
  {
    category: 'Restaurants',
    name: 'Club Casse-Croûte',
    description: 'Café, cantine et bar avec une aire de jeux en face. Plat du jour 14 €.',
    address: '41 Rue de la Valfère, Montpellier',
    posts: [
      ig('dolce_vita_montpellier/p/DEvBzt-NdW1'),
      ig('villaschweppes/reel/DctPi47tYZ2'),
      ig('atablelescopains/reel/DasqlqLKsOG'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Bar Lipopette',
    description: 'Cuisine maison et de saison. €€.',
    address: '7 Rue du Faubourg du Courreau, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DEiJ226NPkB')],
  },
  {
    category: 'Restaurants',
    name: 'Rocco et sa mère',
    description: 'Italien : carbonara, tiramisu à la pistache. €€–€€€.',
    address: "8 Rue du Plan d'Agde, Montpellier",
    posts: [ig('dolce_vita_montpellier/p/DEDQTMata1E')],
  },
  {
    category: 'Restaurants',
    name: 'Le Paresseux',
    description: 'Cuisine bistronomique du marché dans une cave voûtée en pierre. 04 67 67 12 07.',
    address: '15 Rue Jules Latreilhe, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DDd-C-SN34S')],
  },
  {
    category: 'Restaurants',
    name: 'Le Bazar',
    description:
      'Cuisine méditerranéenne dans un jardin secret ; brasero le week-end. Parking privé gratuit. 04 67 02 15 40.',
    address: '448 Rue de la Roqueturière (Aiguelongue), Montpellier',
    posts: [
      ig('restolebazar/p/DbIPWacAqHX'),
      ig('restolebazar/reel/Daf5i77OdIf'),
      ig('restolebazar/p/DaNEiIoAqR0'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Le Jardin des Frangins',
    description: 'Restaurant dans une maison de famille avec piscine, tenu par deux frères.',
    address: 'Les Aubes, Montpellier',
    posts: [ig('lessentiel.montpellier/p/DbkFc_BCl41'), ig('worklife_io/reel/DZexrC3DJr4')],
  },
  {
    category: 'Restaurants',
    name: 'Olla Oasis Urbaine',
    description: 'Poke bowls gourmands, salle végétalisée et terrasse face à la rue Saint-Guilhem.',
    address: '12 Boulevard Ledru-Rollin, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DLb3FMdtzjz')],
  },
  {
    category: 'Restaurants',
    name: 'Pura Vida',
    description: "Lieu tendance avec 1 000 m² d'extérieur. Du mardi au samedi ; bachata le mardi.",
    address: '',
    posts: [ig('montpel.mania/reel/Da-x3LzM7WS')],
  },
  {
    category: 'Restaurants',
    name: 'Maria Bonita',
    description: 'Empanadas faites main pour apéros et événements.',
    address: '',
    posts: [ig('mariabonitamontpellier/reel/DMKpgDIAxXI')],
  },
  {
    category: 'Restaurants',
    name: 'Ail Ail Ail',
    description: 'Cuisine shanghaïenne maison (wontons, nouilles, mochis) vendue sur les marchés.',
    address: '',
    posts: [ig('ailailail.asia/p/DDhP91cszfU')],
  },
  {
    category: 'Restaurants',
    name: 'La Maison Rouge',
    description: "Un verre ou un repas au cœur d'un parc classé.",
    address: '',
    posts: [ig('lamaisonrouge34090/reel/DBbdcgSsWkK')],
  },
  {
    category: 'Restaurants',
    name: 'Miranove',
    description: "Rooftop à Port Marianne, concerts l'été.",
    address: 'Port Marianne, Montpellier',
    posts: [
      ig('miranove.montpellier/p/DLklAAduVXk'),
      ig('bonsplans.montpellier/reel/Da3MTLsAAvo'),
      ig('bonsplans.montpellier/reel/DMx2qBPIEK_'),
    ],
  },
  {
    category: 'Restaurants',
    name: 'Menow',
    description: "Brunch franco-marocain, ouvert le soir jusqu'à 20 h.",
    address: '6 Rue En Gondeau, Montpellier',
    posts: [ig('lupitamotta/reel/DFfX0QTgHTy')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Blend',
    description:
      'Café de spécialité, gâteaux maison et cookies tièdes, dans la rue la plus photogénique de la ville.',
    address: '3 Rue du Bras de Fer, Montpellier',
    posts: [
      ig('dolce_vita_montpellier/p/DXHjZCRjZuk'),
      ig('lepalaisdevalentine/p/DWwlsYAiHA5'),
      ig('le_bonbon_montpellier/p/Dd4SDEdDm9k'),
    ],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Polanka',
    description: "Coffee shop caché derrière l'église Saint-Roch. Latte et banana bread.",
    address: '4 Rue des Teissiers, Montpellier',
    posts: [
      ig('dolce_vita_montpellier/p/DZxf0fYjY3F'),
      ig('polankacoffee/p/DO0UG7WDOPe'),
      ig('yona.spots/p/Dewy95fEeIM'),
      ig('le_bonbon_montpellier/p/Dd4SDEdDm9k'),
    ],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Bleu',
    description:
      'Fromagerie-charcuterie : grilled cheese (8 €) ou sandwichs baguette (7,50 €) le midi, du mardi au samedi dès 11 h 30.',
    address: "28 Rue de l'Aiguillerie, Montpellier",
    posts: [ig('bleu.montpellier/p/DYzFf4KjPfC'), ig('bleu.montpellier/p/DWJENjQDBA6')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Fromagerie Biquette',
    description: 'Fromagerie.',
    address: '54 Boulevard des Arceaux, Montpellier',
    posts: [ig('fromagerie_biquette/p/DU7o9U1DKkP')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Flour – La Cookiserie',
    description: 'Cookies maison à la farine locale, cookies glacés, coffee shop et salon de thé.',
    address: '8 Rue du Faubourg du Courreau, Montpellier',
    posts: [ig('flour.cookies/reel/DMSSWfetKEU'), ig('flour.cookies/p/DE20AtWNoLz')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Chez Apolline',
    description:
      "Pâtisserie et salon de thé : tea time à l'anglaise de 14 h à 17 h, déjeuner healthy (quiche, club sandwich).",
    address: '19 Rue Vallat, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DLDLySwNkBg'), ig('lepalaisdevalentine/p/De9xO6xCJFR')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Dopamine',
    description:
      'Pâtisserie (Paris-Brest de saison). Mardi 10 h–15 h ; du mercredi au samedi 10 h–15 h et 16 h 30–18 h 30. 06 79 75 06 46.',
    address: '14 Rue de la Fontaine, Montpellier',
    posts: [ig('dopamine_mtp/p/DI5aejIgfLE')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Partea Time',
    description: 'Salon de thé avec blind tests le vendredi et soirées karaoké.',
    address: '4 Rue de la Barralerie, Montpellier',
    posts: [ig('le_bonbon_montpellier/p/DGdv_THSzD4'), ig('mymycitron/reel/DFlXuGPotcB')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Osmose',
    description: 'Pâtisseries travaillées : flan, madeleine au chocolat. €€.',
    address: '25 Rue du Faubourg du Courreau, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DDup-cStQYc')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Craqueline',
    description: 'Choux et salon de thé. 3,10 € le chou, 18 € la boîte de 6.',
    address: '4 Rue Marceau, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DZu7BjUjShp')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Des Rêves et du Pain',
    description:
      'Café, viennoiseries et snacks à emporter, à côté de leur boulangerie de Sainte-Anne. Du mardi au samedi, 9 h–17 h.',
    address: "1 Rue d'Albisson, Montpellier",
    posts: [ig('desrevesetdupain/p/DZukb94iC3J')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Le 19ème',
    description:
      "Gâteaux maison du jour : cinnamon roll, banana bread vegan sans gluten, cheesecake. Jusqu'à 17 h 30.",
    address: '',
    posts: [ig('le19eme.montpellier/p/DQwV0uMiKSi')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Le Glacier du Petit Jardin',
    description: 'Glaces artisanales aux fruits naturels ; coupes, boules dès 3 €.',
    address: '',
    posts: [ig('mangeramtp/p/DLkuh_eoZnL')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Baba Budan',
    description: 'Café de spécialité et focaccias (mortadelle, burrata, oignon).',
    address: '',
    posts: [ig('bababudan.montpellier/p/Daj_AtstwCM'), ig('yona.spots/p/Dewy95fEeIM')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Coldrip',
    description:
      'Café et petite restauration (grilled cheese, soupes). Centre-ville, tous les jours 9 h–16 h.',
    address: '',
    posts: [
      ig('coldripfoodandcoffee/p/DEpxZdNtWHv'),
      ig('yona.spots/p/Dewy95fEeIM'),
      ig('le_bonbon_montpellier/p/Dd4SDEdDm9k'),
    ],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Frida Café',
    description: 'Café avec prêt de livres gratuit et pâtisseries maison. Tous les jours 9 h–18 h.',
    address: "1 Rue de l'Université, Montpellier",
    posts: [ig('bibliothequeer/reel/DeCS-8hs0_g')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Mogué',
    description:
      'Tiers-lieu café-bar tenu par deux frères : café de spécialité le jour, bière locale le soir, expos et ateliers. 8 h–1 h.',
    address: '14 Rue Pila Saint-Gély, Montpellier',
    posts: [ig('moguemontpellier/reel/DdGaJ5PgXaS')],
  },
  {
    category: 'Cafés & douceurs',
    name: 'Atelier Le Collygée',
    description: 'Café cosy à la jolie vaisselle, avec des « cafés suspendus ».',
    address: '',
    posts: [ig('moicesthanae/reel/DTSjdCgDKlV')],
  },
  {
    category: 'Bars & sorties',
    name: 'Barri',
    description: 'Bar de quartier avec résidences DJ et concerts.',
    address: '4 Boulevard Louis Blanc, Montpellier',
    posts: [ig('barri_mtp/reel/Deg9bNDtrG4'), ig('barri_mtp/p/Dctf35yjc8c')],
  },
  {
    category: 'Bars & sorties',
    name: 'Restanque',
    description: 'Bar avec soirées concerts. Réservation : 04 67 20 97 36.',
    address: '3 Rue du Lantissargues, Montpellier',
    posts: [ig('restanque_ateliers/p/Db28HwGoshS'), ig('le_bonbon_montpellier/p/DfFmztaijTn')],
  },
  {
    category: 'Bars & sorties',
    name: 'Le Réservoir',
    description: "Bières artisanales, vin et tapas ; prisé pour l'afterwork, hors du centre.",
    address: '55 Rue de Montels Saint-Pierre, Montpellier',
    posts: [ig('adopt.montpel/p/DHQjOMeNQ6A')],
  },
  {
    category: 'Bars & sorties',
    name: 'Maison Fleurie',
    description: 'Bar à petites assiettes (gyozas croustillants, fromage) et vin. €€.',
    address: '16 Rue des Sœurs Noires, Montpellier',
    posts: [ig('dolce_vita_montpellier/p/DH3w9PhNz2N'), ig('welove_montpellier/p/DUymZACDCHO')],
  },
  {
    category: 'Bars & sorties',
    name: 'MBA (guinguette urbaine)',
    description:
      'Ancien supermarché près de la gare Saint-Roch devenu lieu de culture, de musique et de bière artisanale.',
    address: 'Près de la gare Saint-Roch, Montpellier',
    posts: [ig('le_bonbon_montpellier/p/DLXyFY5tno2')],
  },
  {
    category: 'Bars & sorties',
    name: 'Delirium Café',
    description: 'Bar avec concerts gratuits (soirées cumbia, par exemple).',
    address: '28 Rue du Faubourg Figuerolles (place Salengro), Montpellier',
    posts: [ig('lacumbiambademontpellier/p/DFWDR03N_df')],
  },
  {
    category: 'Bars & sorties',
    name: 'Le Dôme',
    description: 'Brasserie qui accueille les rodas de samba de Cafofo.',
    address: '2 Avenue Clemenceau, Montpellier',
    posts: [ig('cafofo.mtp/p/DEuJhFwtYng')],
  },
  {
    category: 'Bars & sorties',
    name: 'Le Cinq',
    description: 'Bar qui accueille des soirées forró.',
    address: '5 Boulevard des Arceaux, Montpellier',
    posts: [ig('consulado.brasil.montpellier/p/DZrlN4potfN')],
  },
  {
    category: 'Bars & sorties',
    name: 'La Tendresse',
    description: 'Lieu associatif (10 ans) : ateliers, hackerspace et événements.',
    address: '',
    posts: [ig('latendressemontpellier/p/Dc6GDwQt7dz')],
  },
  {
    category: 'Boutiques',
    name: 'Pavane',
    description:
      'Boutique tenue par 13 créateurs locaux : mode, déco, bijoux, céramique, savons, papeterie.',
    address: '7 Rue En Gondeau, Montpellier',
    posts: [ig('pavane.montpellier/reel/DJmj-8eMK3g')],
  },
  {
    category: 'Boutiques',
    name: 'Segundo Broc',
    description: 'Meubles et déco de seconde main près de Montpellier, deux ventes par mois.',
    address: '',
    posts: [ig('antoinecostel/reel/DfJ5W69tl3g')],
  },
  {
    category: 'Boutiques',
    name: 'La Bulle (et autres friperies)',
    description:
      'Friperie près de la gare Saint-Roch, presque tout à moins de 10 €. Aussi citées : Seconde Vie Le Hangar, Le Club des Simone, Manine Frip, La Clique.',
    address: 'Près de la gare Saint-Roch, Montpellier',
    posts: [ig('moicesthanae/reel/DWosotDEtPZ')],
  },
  {
    category: 'Boutiques',
    name: 'Costieni',
    description: 'Vêtements sur mesure, pensés selon les morphologies.',
    address: '',
    posts: [ig('costieni_/reel/DLYLlG5sXkr')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Le Mas des Frangins',
    description:
      'Exploitation ostréicole de deux frères avec restaurant sur place : huîtres (même aux fruits), brasucade de moules. Aussi un stand aux Halles de Béziers.',
    address: 'Mèze (34140)',
    posts: [
      ig('legoutdusorbet/reel/DKynd7GN6-J'),
      ig('le_mas_des_frangins/p/C9sTeTFgvZa'),
      ig('le_mas_des_frangins/p/DLkyfaFNg8I'),
      ig('bonsplans.montpellier/reel/Da3MTLsAAvo'),
      ig('bonsplans.montpellier/reel/Dax0mpFgeOp'),
      ig('bonsplans.montpellier/reel/DMx2qBPIEK_'),
    ],
  },
  {
    category: 'Hors de Montpellier',
    name: "L'Instant Thau",
    description: "Des ostréiculteurs servent leur production au bord de l'étang de Thau. €–€€.",
    address: '1126 Route de la Coquille, Loupian',
    posts: [ig('lepalaisdevalentine/p/DbBrJhHiP6S'), ig('dolce_vita_montpellier/p/DZ7y9Oljdhi')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Les Demoiselles Dupuy',
    description: 'Huîtres, moules et gratinées face aux parcs à huîtres. Pas de CB. €–€€.',
    address: 'Chemin de la Catonnière Ouest, 34140 Bouzigues',
    posts: [ig('ciao_bellaparis/p/DcDm8DiCDbO')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Le Mas Soula, La Palourdière, Les Ostréiculteurs',
    description:
      "Trois tables sur l'étang de Thau (pépite cachée, spot coucher de soleil, huîtres Maona).",
    address: 'Étang de Thau',
    posts: [ig('atablelescopains/reel/DcYCj-Mqir0')],
  },
  {
    category: 'Hors de Montpellier',
    name: "Les Pieds dans l'Eau",
    description: "Un verre de vin avec vue sur l'étang de Thau.",
    address: 'Étang de Thau',
    posts: [ig('lespieds_dans_l_eau/reel/DbJDPT0k49T')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Au Poisson Bleu',
    description: "Restaurant d'un côté, poissonnerie de l'autre.",
    address: '10 Rue Simon, Palavas-les-Flots',
    posts: [ig('nat_daily_off_/reel/DaMSuIOCEj4')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Plage Bonaventure',
    description: 'Plage privée et paillote, produits locaux. Tous les jours 10 h–1 h.',
    address: 'Route de Maguelone, Palavas-les-Flots',
    posts: [ig('axelletchloe/reel/DJratwlIt_6')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Pimpant',
    description: 'Restaurant sétois qui accueille des chefs en résidence.',
    address: '82 Grand Rue Mario Roustan, Sète',
    posts: [ig('pimpantsete/p/DHRCFBjN10a')],
  },
  {
    category: 'Hors de Montpellier',
    name: "Table de la mer au bord de l'étang de Thau",
    description:
      'Restaurant sans nom, presque secret, à Sète : sardines grillées, seiches, Brassens en fond sonore.',
    address: 'Sète',
    posts: [ig('legoutdusorbet/reel/DJBRCrKNLAF')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Paniozzi',
    description: 'Panuozzo, pizzas et pâtes fraîches.',
    address: '21 Rue de la Croix, 34880 Lavérune',
    posts: [ig('quedubonfr/reel/DGODnZ6Mv1p')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Bistrot des Mourres',
    description: 'Cuisine locale et de saison, vins nature, dans un village du Gard.',
    address: '2 Place du Presbytère, 30390 Estézargues',
    posts: [ig('legoutdusorbet/reel/Den_WTUzIwV')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Le Mas Mouth',
    description:
      "Restaurant chez l'habitant, isolé dans les Cévennes, né d'une reconversion de l'archéologie à la cuisine.",
    address: 'Montoulieu (34)',
    posts: [ig('legoutdusorbet/reel/DLMT9WFtfjS')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'La Guinguette du Ponant',
    description: "Guinguette au bord de l'étang du Ponant : brochettes grillées et tapas.",
    address: 'La Grande-Motte',
    posts: [ig('le_bonbon_montpellier/p/DH30V9AKhvc')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Labyrinthe & Guinguette de Launac',
    description:
      'Labyrinthe de maïs de 3 hectares, guinguette avec pizzas et crêpes, brunch le dimanche. 06 11 85 43 01.',
    address: 'Domaine de Launac, 34690 Fabrègues',
    posts: [
      ig('labyrinthe_guinguette_launac/reel/Da4ajncoQY_'),
      ig('labyrinthe_guinguette_launac/reel/DZamcdLgfRa'),
    ],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Guinguette Massillan',
    description:
      'Guinguette du domaine de Massillan : planches à partager, diffusion de matchs. Réserver.',
    address: 'Entre Jacou et Le Crès',
    posts: [
      ig('bonsplans.montpellier/reel/DbJFQKPgb_d'),
      ig('yona.spots/reel/DanpP5mMDR6'),
      ig('pic.saint.loup_tourisme/p/DZk3xwCjYGk'),
      ig('pic.saint.loup_tourisme/p/DM5oTdfNKSO'),
    ],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Domaine DeCalage',
    description: "« Jeudis Décalés » : vin, food trucks et danse les jeudis d'été.",
    address: 'Mas de Calage',
    posts: [ig('domaine.decalage/reel/Dca5-IVA5qV'), ig('domaine.decalage/reel/DYUxgxwINch')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Domaine du Mas Neuf',
    description:
      'Apéros coucher de soleil le jeudi en juillet-août, 19 h–minuit : food trucks, concert, DJ.',
    address: "20 Chemin de la Poule d'Eau (à 20 min de Montpellier)",
    posts: [ig('welove_montpellier/p/DL2oLpKtkxY')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Domaine Puech',
    description:
      '« Jeudis rosés » en juillet et début août : musique, vin, food truck. Réservation en ligne.',
    address: 'Saint-Clément-de-Rivière',
    posts: [ig('dolce_vita_montpellier/p/DL71R9Dt6BI')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'La Baudille',
    description: "Brasserie artisanale qui accueille des sessions DJ avec Radio Pays d'Hérault.",
    address: '965 Route de Lagamas, Montpeyroux',
    posts: [ig('la_baudille_montpeyroux/p/Dcs-TOBDTLx')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Guinguette de la Vis',
    description: 'Guinguette dans le hameau de Madières, ouverte du mardi au dimanche.',
    address: 'Madières',
    posts: [ig('laguinguettedelavis/p/Dah6A1VMPE5')],
  },
  {
    category: 'Hors de Montpellier',
    name: 'Maison Verchant',
    description:
      "Maison d'hôtes du domaine de Verchant avec spa extérieur et piscine, à 20 min de Montpellier.",
    address: 'Domaine de Verchant, Castelnau-le-Lez',
    posts: [ig('by_theocean_/reel/DZ7yxL_M0Gp')],
  },
  {
    category: 'Hors de Montpellier',
    name: "L'Oyat Plage",
    description: 'Bar de plage avec concerts.',
    address: 'Parking Les Baronnets, Le Grau-du-Roi',
    posts: [ig('mangomango_officiel/reel/DbiZSPRi9H9')],
  },
  {
    category: 'Nature & balades',
    name: 'Creux de Miège',
    description:
      'Cirque calcaire caché avec une source ; boucle de 2,5 km. À faire à vélo depuis Montpellier.',
    address: 'Chemin de Recouly, entre Montpellier et Mireval',
    posts: [ig('montpellieraineenvadrouille/reel/DZkn4yVIw-t')],
  },
  {
    category: 'Nature & balades',
    name: 'Base nautique de Lavalette',
    description: "Balade en forêt le long du Lez, à 200 m de l'arrêt de tram Agropolis (ligne 5).",
    address: '1076 Rue Jean-François Breton, Montpellier',
    posts: [ig('arthur.lansonneur/p/DXUfFIzjBQ6')],
  },
  {
    category: 'Nature & balades',
    name: 'Parc Font-Colombe',
    description: 'Parc caché aux arbres centenaires, aire de jeux et château Bon du XVIIe siècle.',
    address: 'Les Bouisses, Montpellier',
    posts: [ig('arthur.lansonneur/p/DXRM6tGjGR-')],
  },
  {
    category: 'Nature & balades',
    name: 'Les Enfants Dehors',
    description:
      'Lieu familial dans un vieux parc, food truck végétarien, événements pour enfants.',
    address: '',
    posts: [ig('macarel._/reel/DZh_rgDokeV')],
  },
  {
    category: 'Nature & balades',
    name: '3 randos de printemps',
    description:
      "Peyre Martine (Saint-Jean-de-Buèges, 10 km), cirque de l'Infernet (Saint-Guilhem, 10 km), cirque du Bout du Monde.",
    address: '',
    posts: [ig('montpellieraineenvadrouille/reel/DXzU7IDBRZl')],
  },
  {
    category: 'Nature & balades',
    name: '5 coins baignade',
    description: "Lac du Crès, cascade de la Vis, lac de Cécélès, pont du Diable, et d'autres.",
    address: '',
    posts: [ig('montpellieraineenvadrouille/reel/DZzN7kFIfo1')],
  },
  {
    category: 'Nature & balades',
    name: '6 coins nature autour de Montpellier',
    description: "Tour d'horizon en vidéo (noms dans le reel).",
    address: '',
    posts: [ig('anahi.traveler/reel/DetxNPctNzs')],
  },
  {
    category: 'Nature & balades',
    name: '4 spots au nord de Montpellier',
    description: 'Canyon du Diable, ravin des Arcs, lac de Cécélès, Pic Saint-Loup.',
    address: '',
    posts: [ig('montpelliernow/p/DHwCjiEs34Z')],
  },
  {
    category: 'Nature & balades',
    name: 'Cirque de Navacelles',
    description: 'Cirque spectaculaire, à environ 1 h en transports en commun.',
    address: 'Saint-Maurice-Navacelles',
    posts: [ig('guillaumepayen/p/DNH6J6HsWDb')],
  },
  {
    category: 'Nature & balades',
    name: 'Moulin de Martel',
    description:
      "Baignade en rivière près d'un vieux moulin ; guinguette, location de canoës et de paddles. Parking juste après le pont.",
    address: 'Gorges de la Cèze (Gard)',
    posts: [ig('baladesdusud/reel/DcX54kLNP-E')],
  },
  {
    category: 'Nature & balades',
    name: "Domaine d'Anglas",
    description: "Camping au bord de l'Hérault.",
    address: "Brissac (bord de l'Hérault)",
    posts: [ig('camping_danglas/reel/DaNGwBAgGnq')],
  },
  {
    category: 'Nature & balades',
    name: 'Observation des dauphins',
    description: 'Sorties en bateau pour voir des grands dauphins.',
    address: 'Carnon',
    posts: [ig('naturamed.carnon/reel/DdgXeTPMnYX')],
  },
  {
    category: 'Nature & balades',
    name: 'Les Mercredis de la Fontaine',
    description: 'Marché de producteurs le mercredi matin en été (8 h–12 h).',
    address: 'Place de la Fontaine, Saint-Martin-de-Londres',
    posts: [ig('pic.saint.loup_tourisme/p/DbEKdbjF7Ug')],
  },
  {
    category: 'Nature & balades',
    name: 'Carrières des Lumières',
    description: 'Projections artistiques immersives dans une ancienne carrière.',
    address: 'Les Baux-de-Provence',
    posts: [ig('montpellieraineenvadrouille/reel/DN3TsPOUIhS')],
  },
  {
    category: 'Nature & balades',
    name: 'Balade des cascades',
    description: '5,8 km aller-retour avec vasques et cascades (lieu dans le reel).',
    address: '',
    posts: [ig('petit.coin.de.france/reel/DZ_zP8ltIh6')],
  },
  {
    category: 'Nature & balades',
    name: 'Roc de Félip',
    description: "Sentier du Pla del Mir jusqu'au lac d'Aude.",
    address: 'Les Angles (Pyrénées)',
    posts: [ig('randoenoccitanie/p/Dbx7GSUq5_z')],
  },
  {
    category: 'Nature & balades',
    name: 'Road trip de 3 jours',
    description:
      "Gorges d'Héric, Rougier de Camarès, Belcastel, Cordes-sur-Ciel, Olargues, Saint-Antonin-Noble-Val.",
    address: 'Occitanie',
    posts: [ig('bobby_vadrouille/reel/DYbfQDpsX5H')],
  },
  {
    category: 'Nature & balades',
    name: 'Idées en Lozère',
    description:
      'Aven Armand, observation des étoiles, canyoning, via corda à Sainte-Enimie, cavage de truffes.',
    address: 'Lozère',
    posts: [ig('larandonneuse_/p/Da3Lo8qCC6Z')],
  },
  {
    category: 'Nature & balades',
    name: 'Food tour de Montpellier',
    description: 'Visite gourmande guidée en 6 étapes avec @by_theocean_.',
    address: 'Montpellier',
    posts: [ig('lepalaisdevalentine/p/DZ7tjY-iGl5')],
  },
  {
    category: 'Sélections',
    name: '6 restaurants asiatiques',
    description:
      'Maison Plum, Toly (phở, bánh cuốn), Kasutori, Umami, Le Coin Nouilles Chunxi, Weilai.',
    address: '',
    posts: [ig('atablelescopains/reel/DfMVr67q8xg')],
  },
  {
    category: 'Sélections',
    name: 'Coffee shops ouverts le dimanche',
    description:
      'De La Sierra (Port Marianne et Comédie), Polanka, Coffee Club, Bun Café, Coldrip, Earlie, Café Cours, Club Casse-Croûte, Aku, Baba Budan.',
    address: '',
    posts: [ig('yona.spots/p/Dewy95fEeIM')],
  },
  {
    category: 'Sélections',
    name: 'Les meilleurs coffee shops',
    description:
      'Coffee Club, Coldrip, De La Sierra, Blend, Café Cours, ADN Café, Silence Café Audio, Sofa, Polanka, Botan.',
    address: '',
    posts: [ig('le_bonbon_montpellier/p/Dd4SDEdDm9k')],
  },
  {
    category: 'Sélections',
    name: 'Parcours chocolat chaud',
    description: "Chez Apolline et d'autres adresses pour un chocolat chaud.",
    address: '',
    posts: [ig('lepalaisdevalentine/p/De9xO6xCJFR')],
  },
  {
    category: 'Sélections',
    name: '5 bars musicaux',
    description: 'Silence Café Audio, Le Grillon, Piñata Radio, Le Discopathe, Café Restanque.',
    address: '',
    posts: [ig('le_bonbon_montpellier/p/DfFmztaijTn')],
  },
  {
    category: 'Sélections',
    name: '10 spas',
    description:
      "Domaine de Biar, Domaine de Verchant, Nido Club 7, Pullman, Plage Palace, Massane, Belaroia, Bains d'Hygie, Zénitude, Bohemia.",
    address: '',
    posts: [ig('vivez_montpellier/p/DeWNi0TEREM')],
  },
  {
    category: 'Sélections',
    name: "6 terrasses d'été",
    description: 'Ikal, Hayas, La Pétanque, Faim soif aussi, ABMA, Club Casse-Croûte.',
    address: '',
    posts: [ig('atablelescopains/reel/DasqlqLKsOG')],
  },
  {
    category: 'Sélections',
    name: '10 adresses pour déjeuner',
    description:
      "Rosemarie, Koyo Izakaya, Faim soif aussi, Le Bon Sens, Babaïa, L'Arca, Le Jardin des Frangins, Buonanotte, Meraki…",
    address: '',
    posts: [ig('worklife_io/reel/DZexrC3DJr4')],
  },
  {
    category: 'Sélections',
    name: 'Bars ouverts le lundi soir',
    description:
      'Glouglou, Toto Utard, Bivouak Café, Maison Fleurie, Chez Pinot, Caffè Panis, Café Pitot, Tub, Harts…',
    address: '',
    posts: [ig('welove_montpellier/p/DUymZACDCHO')],
  },
  {
    category: 'Sélections',
    name: "5 restaurants d'été",
    description:
      'Rooftop, huîtres, bord de rivière, paillote et mas au calme (Carré Mer, Petit Jardin, Mas de Lafeuillade, Mas des Frangins, Miranove).',
    address: '',
    posts: [
      ig('bonsplans.montpellier/reel/DMx2qBPIEK_'),
      ig('bonsplans.montpellier/reel/Da3MTLsAAvo'),
    ],
  },
  {
    category: 'Sélections',
    name: 'Guinguettes autour du Pic Saint-Loup',
    description:
      "Domaine de l'Oulivie, Haut-Lirou, Château La Roque, Massillan, Clos des Oliviers, Puech, Bergerie du Capucin, La Chouette du Chai…",
    address: '',
    posts: [
      ig('pic.saint.loup_tourisme/p/DZk3xwCjYGk'),
      ig('pic.saint.loup_tourisme/p/DM5oTdfNKSO'),
    ],
  },
  {
    category: 'Sélections',
    name: 'De Sète à Arles en 6 guinguettes',
    description: "La Guinguette (Sète), Guinguette des Amoureux (lac de Cécélès) et d'autres.",
    address: '',
    posts: [ig('sudvibesmagazine/p/DavKfZ-CGCM')],
  },
  {
    category: 'Sélections',
    name: "Soirées d'été dans les domaines viticoles",
    description: 'Soirées vigneronnes gratuites ou à petit prix dans la métropole.',
    address: '',
    posts: [ig('vivez_montpellier/p/DahyPY7jADs')],
  },
  {
    category: 'Sélections',
    name: 'La Villa Schweppes à Montpellier',
    description: 'Club Casse-Croûte, Aperture, Faim soif aussi.',
    address: '',
    posts: [ig('villaschweppes/reel/DctPi47tYZ2')],
  },
  {
    category: 'Sélections',
    name: "Les adresses d'Échappées Belles",
    description: "Maguelone, canoë dans les gorges de l'Hérault, parfums Sharini, et d'autres.",
    address: '',
    posts: [ig('echappees_belles/p/DfMXQ2Hlaru')],
  },
  {
    category: 'Événements & culture',
    name: "Rencontres d'Arles",
    description: 'Festival de photographie.',
    address: 'Arles',
    posts: [ig('m_magazine/reel/Dcgp0yQscB2'), ig('konbini/p/DaIImh9jVIB')],
  },
  {
    category: 'Événements & culture',
    name: 'Faim résidence',
    description: "Restaurant éphémère et rooftop d'été de Faim, soif aussi à Arles.",
    address: 'Place Voltaire, Arles',
    posts: [ig('faim.soifaussi/p/DMIHFevNA91')],
  },
]
