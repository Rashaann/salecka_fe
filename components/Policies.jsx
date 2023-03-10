import React, { useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalArticle from './ModalArticle';
import ModalLogoutMessage from './ModalLogoutMessage';


import { useDispatch, useSelector } from 'react-redux';
import { addDataArticle, addFavsData, removeFavsData, addCartsData } from '../reducers/salecka';
import Router from "next/router";

import styles from '../styles/Articles.module.css';


export default function Policies() {
  const [isConnectionModal, setIsConnectionModal] = useState(false);
  const [isArticleModal, setIsArticleModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);




  //DISPLAY CONFIRMATION MESSAGE OF SUCCESSFULL LOGOUT
  if(isLoggedOut){
      setTimeout(()=>{
        setIsLoggedOut(false);
      },2000);
  }

  return (
    <div>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isArticleModal && <ModalArticle setIsArticleModal={setIsArticleModal} chosenArticle={chosenArticle} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw'}}>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh', width:'30vw'}}>
            <a href="#privacy_policy" style={{textDecoration:'none', color:'black'}}><p>Politique de confidentialit√©</p></a>
            <a href="#cookies" style={{textDecoration:'none', color:'black'}}><p>Politique de cookies</p></a>
            <a href="#terms_of_use" style={{textDecoration:'none', color:'black'}}><p>Conditions d'utilisation</p></a>
            <a href="#terms_of_use" style={{textDecoration:'none', color:'black'}}><p>Conditions de vente</p></a>
            <a href="#reimbursement_policy" style={{textDecoration:'none', color:'black'}}><p>Politique de remboursement</p></a>
            <a href="#legal_notice" style={{textDecoration:'none', color:'black'}}><p>Mentions l√©gales</p></a>
          </div>
          <div style={{display:'flex', flexDirection:'column', height:'100vh', width:'65vw', overflowY:'scroll',}}>
            <div>
              <h1 id='privacy_policy'>Politique de confidentialit√© de Salecka</h1>

              <p>La pr√©sente Politique de confidentialit√© d√©crit la fa√ßon dont vos informations personnelles sont recueillies, utilis√©es et partag√©es lorsque vous vous rendez sur salecka.com (le ¬ę Site ¬Ľ) ou que vous y effectuez un achat.</p>

              <h3>INFORMATIONS PERSONNELLES RECUEILLIES</h3>

              <p>Lorsque vous vous rendez sur le Site, nous recueillons automatiquement certaines informations concernant votre appareil, notamment des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies qui sont install√©s sur votre appareil. En outre, lorsque vous parcourez le Site, nous recueillons des informations sur les pages web ou produits individuels que vous consultez, les sites web ou les termes de recherche qui vous ont permis d'arriver sur le Site, ainsi que des informations sur la mani√®re dont vous interagissez avec le Site. Nous d√©signons ces informations collect√©es automatiquement sous l'appellation ¬ę Informations sur l'appareil ¬Ľ.

              Nous recueillons les Informations sur l'appareil √† l'aide des technologies suivantes :</p>

              <h3 id='cookies'>FICHIERS T√ČMOINS (COOKIES)</h3>

              <p>Voici une liste de fichiers t√©moins que nous utilisons. Nous les avons √©num√©r√©s ici pour que vous ayez la possibilit√© de choisir si vous souhaitez les autoriser ou non.

              _session_id, identificateur unique de session, permet √† Shopify de stocker les informations relatives √† votre session (r√©f√©rent, page de renvoi, etc.).

              _shopify_visit, aucune donn√©e retenue, persiste pendant 30 minutes depuis la derni√®re visite. Utilis√© par le syst√®me interne de suivi des statistiques du fournisseur de notre site web pour enregistrer le nombre de visites.

              _shopify_uniq, aucune donn√©e retenue, expire √† minuit (selon l‚Äôemplacement du visiteur) le jour suivant. Calcule le nombre de visites d‚Äôune boutique par client unique.

              cart, identificateur unique, persiste pendant 2 semaines, stocke l‚Äôinformation relative √† votre panier d‚Äôachat.

              _secure_session_id, identificateur unique de session

              storefront_digest, identificateur unique, ind√©fini si la boutique poss√®de un mot de passe, il est utilis√© pour savoir si le visiteur actuel a acc√®s.
              - Les ¬ę fichiers journaux ¬Ľ suivent l'activit√© du Site et recueillent des donn√©es telles que votre adresse IP, le type de navigateur que vous utilisez, votre fournisseur d'acc√®s Internet, vos pages r√©f√©rentes et de sortie, et vos donn√©es d'horodatage (date et heure).
              - Les ¬ę pixels invisibles ¬Ľ, les ¬ę balises ¬Ľ et les ¬ę pixels ¬Ľ sont des fichiers √©lectroniques qui enregistrent des informations sur la fa√ßon dont vous parcourez le Site.
              
              Par ailleurs, lorsque vous effectuez ou tentez d'effectuer un achat par le biais du Site, nous recueillons certaines informations vous concernant, notamment votre nom, votre adresse de facturation, votre adresse d'exp√©dition, vos informations de paiement (y compris vos num√©ros de cartes de cr√©dit, votre adresse e-mail et votre num√©ro de t√©l√©phone). Ces informations collect√©es automatiquement sont d√©sign√©es par l‚Äôappellation ¬ę Informations sur la commande ¬Ľ.

              Lorsque nous utilisons l'expression ¬ę Informations personnelles ¬Ľ dans la pr√©sente Politique de confidentialit√©, nous faisons allusion √† la fois aux Informations sur l'appareil et aux Informations sur la commande.</p>

              <h3>COMMENT UTILISONS-NOUS VOS INFORMATIONS PERSONNELLES ?</h3>

              <p>En r√®gle g√©n√©rale, nous utilisons les Informations sur la commande que nous recueillons pour traiter toute commande pass√©e par le biais du Site (y compris pour traiter vos informations de paiement, organiser l'exp√©dition de votre commande et vous fournir des factures et/ou des confirmations de commande).  En outre, nous utilisons ces Informations sur la commande pour :
              communiquer avec vous ;
              √©valuer les fraudes ou risques potentiels ; et
              lorsque cela correspond aux pr√©f√©rences que vous nous avez communiqu√©es, vous fournir des informations ou des publicit√©s concernant nos produits ou services.

              Nous utilisons les Informations sur l'appareil (en particulier votre adresse IP) que nous recueillons pour √©valuer les fraudes ou risques potentiels et, de mani√®re plus g√©n√©rale, pour am√©liorer et optimiser notre Site (par exemple, en g√©n√©rant des analyses sur la fa√ßon dont nos clients parcourent et interagissent avec le Site, et pour √©valuer la r√©ussite de nos campagnes de publicit√© et de marketing).</p>

              <h3>PARTAGE DE VOS INFORMATIONS PERSONNELLES</h3>

              <p>Nous partageons vos Informations personnelles avec des tiers qui nous aident √† les utiliser aux fins d√©crites pr√©c√©demment.  Par exemple, nous utilisons Shopify pour h√©berger notre boutique en ligne ‚Äď pour en savoir plus sur l'utilisation de vos Informations personnelles par Shopify, veuillez consulter la page suivante : https://www.shopify.fr/legal/confidentialite.  Nous utilisons √©galement Google Analytics pour mieux comprendre comment nos clients utilisent le Site ‚Äď pour en savoir plus sur l'utilisation de vos Informations personnelles par Google, veuillez consulter la page suivante : https://www.google.com/intl/fr/policies/privacy/.  Vous pouvez aussi d√©sactiver Google Analytics ici : https://tools.google.com/dlpage/gaoptout.

              Enfin, il se peut que nous partagions aussi vos Informations personnelles pour respecter les lois et r√®glementations applicables, r√©pondre √† une assignation, √† un mandat de perquisition ou √† toute autre demande l√©gale de renseignements que nous recevons, ou pour prot√©ger nos droits.
              
              En outre, vous pouvez refuser certains de ces services en vous rendant sur le portail de d√©sactivation de Digital Advertising Alliance √† l'adresse suivante : https://optout.aboutads.info/?c=3&lang=fr.</p>

              <h3>NE PAS SUIVRE</h3>
              <p>Veuillez noter que nous ne modifions pas la collecte de donn√©es de notre Site et nos pratiques d'utilisation lorsque nous d√©tectons un signal ¬ę Ne pas suivre ¬Ľ sur votre navigateur.</p>


              <h3>VOS DROITS</h3>
              <p>Si vous √™tes r√©sident(e) europ√©en(ne), vous disposez d'un droit d'acc√®s aux informations personnelles que nous d√©tenons √† votre sujet et vous pouvez demander √† ce qu'elles soient corrig√©es, mises √† jour ou supprim√©es. Si vous souhaitez exercer ce droit, veuillez nous contacter au moyen des coordonn√©es pr√©cis√©es ci-dessous.
              Par ailleurs, si vous √™tes r√©sident(e) europ√©en(ne), notez que nous traitons vos informations dans le but de remplir nos obligations contractuelles √† votre √©gard (par exemple si vous passez une commande sur le Site) ou de poursuivre nos int√©r√™ts commerciaux l√©gitimes, √©num√©r√©s ci-dessus.  Veuillez √©galement noter que vos informations seront transf√©r√©es hors de l'Europe, y compris au Canada et aux √Čtats-Unis.</p>


              <h3>R√ČTENTION DES DONN√ČES</h3>
              <p>Lorsque vous passez une commande par l'interm√©diaire du Site, nous conservons les Informations sur votre commande dans nos dossiers, sauf si et jusqu'√† ce que vous nous demandiez de les supprimer.</p>

              <h3>MINEURS</h3>
              <p>Le Site n'est pas destin√© aux individus de moins de 18 ans.</p>

              <h3>CHANGEMENTS</h3>
              <p>Nous pouvons √™tre amen√©s √† modifier la pr√©sente politique de confidentialit√© de temps √† autre afin d'y refl√©ter, par exemple, les changements apport√©s √† nos pratiques ou pour d'autres motifs op√©rationnels, juridiques ou r√©glementaires.</p>
              
              <h3>NOUS CONTACTER</h3>
              <p>Pour en savoir plus sur nos pratiques de confidentialit√©, si vous avez des questions ou si vous souhaitez d√©poser une r√©clamation, veuillez nous contacter par e-mail √† rashaandesnoyers@hotmail.com, ou par courrier √† l'adresse suivante :

              7 All√©e du Perruchet, Thiais, Ile-de-France, 94320, France</p>
            </div>
            <div>
              <h1 id='terms_of_use'>Conditions g√©n√©rales de vente et d'utilisation</h1>

              <h3>APER√áU</h3>

              <p>Ce site web est exploit√© par Salecka. Partout sur le site, nous employons les termes ¬ę nous ¬Ľ, ¬ę notre ¬Ľ et ¬ę nos ¬Ľ en r√©f√©rence √† Salecka. Ce site web, y compris l'ensemble des informations, outils et services auquel il donne acc√®s, est offert par Salecka √† l'utilisateur que vous √™tes, √† condition que vous acceptiez la totalit√© des modalit√©s, conditions, politiques et avis stipul√©s ici.

                En visitant notre site et/ou en achetant quelque chose aupr√®s de notre entreprise, vous prenez part √† notre ¬ę Service ¬Ľ et acceptez d'√™tre li√©(e) par les modalit√©s et conditions suivantes (¬ę Conditions g√©n√©rales ¬Ľ, ¬ę Conditions d'utilisation ¬Ľ), y compris par les modalit√©s, conditions et politiques mentionn√©es aux pr√©sentes et/ou accessibles en hyperlien. Les pr√©sentes Conditions d'utilisation s'appliquent √† tous les utilisateurs du Site, y compris, sans s'y limiter, aux individus qui sont des visiteurs, des fournisseurs, des clients, des marchands et/ou des fournisseurs de contenu.
                Veuillez lire attentivement les pr√©sentes Conditions d'utilisation avant d'acc√©der √† notre site web et de l'utiliser. En acc√©dant √† une quelconque partie du Site ou en l'utilisant, vous acceptez d'√™tre li√©(e) par les pr√©sentes Conditions d'utilisation. Si vous n'acceptez pas la totalit√© des modalit√©s et conditions du pr√©sent accord, vous ne pourrez peut-√™tre pas acc√©der au site web ou utiliser ses services. Si les pr√©sentes Conditions d'utilisation sont consid√©r√©es comme une offre, leur acceptation se limite express√©ment √† elles.

                Chacun des nouveaux outils ou fonctionnalit√©s qui sont ajout√©s √† la pr√©sente boutique est √©galement assujetti aux Conditions d'utilisation. Vous pouvez consulter la version la plus r√©cente des Conditions d'utilisation √† tout moment sur cette page. Nous nous r√©servons le droit de mettre √† jour, modifier ou remplacer n'importe quelle partie des pr√©sentes Conditions d'utilisation en publiant lesdites mises √† jour et/ou modifications sur notre site web. Il vous incombe de v√©rifier cette page de temps √† autre pour voir si des changements y ont √©t√© apport√©s. En continuant √† acc√©der au site web ou √† l'utiliser apr√®s la publication des modifications, vous acceptez celles-ci.
                Notre boutique est h√©berg√©e sur Shopify Inc. Cette soci√©t√© nous fournit la plateforme e-commerce en ligne qui nous permet de vous vendre nos produits et services.</p>

              <h3>SECTION 1 ‚Äď CONDITIONS D'UTILISATION DE LA BOUTIQUE EN LIGNE</h3>
              <p>En acceptant les pr√©sentes Conditions d'utilisation, vous d√©clarez avoir atteint ou d√©pass√© l'√Ęge de la majorit√© dans votre r√©gion, province ou √Čtat et nous avoir donn√© l'autorisation de permettre √† toute personne mineure √† votre charge d'utiliser ce site.

                Vous ne devez en aucune fa√ßon utiliser nos produits √† des fins ill√©gales ou non autoris√©es, ni violer des lois de votre juridiction lorsque vous utilisez le Service (y compris, sans toutefois s'y limiter, les lois relatives aux droits d'auteur).

                Vous ne devez pas transmettre de vers informatique, de virus ou tout code de nature destructrice.

                Une infraction ou une violation de n'importe laquelle des Conditions entra√ģnera la r√©siliation imm√©diate de vos Services.</p>


              <h3>SECTION 2 ‚Äď CONDITIONS G√ČN√ČRALES</h3>
              <p>Nous nous r√©servons le droit de refuser de servir quelqu'un √† tout moment et pour quelque raison que ce soit.

                Vous comprenez que votre contenu (√† l'exception des informations relatives √† votre carte de cr√©dit) peut √™tre transf√©r√© sans chiffrement et que cela comprend (a) des transmissions sur plusieurs r√©seaux ; et (b) des changements effectu√©s dans le but de se conformer et de s'adapter aux exigences techniques de la connexion de r√©seaux ou d'appareils. Les informations de votre carte de cr√©dit sont toujours chiffr√©es lors de leur transfert sur les r√©seaux.

                Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter toute partie du Service, toute utilisation du Service ou tout acc√®s au Service, ou encore tout contact sur le site web √† travers lequel le Service est fourni, sans notre autorisation √©crite expresse.

                Les titres utilis√©s dans le pr√©sent accord sont inclus √† titre indicatif uniquement et ne limiteront ni n'affecteront aucunement ces Conditions.</p>

              <h3>SECTION 3 ‚Äď EXACTITUDE, EXHAUSTIVIT√Č ET ACTUALIT√Č DES INFORMATIONS</h3>

              <p>Nous ne saurions √™tre tenus responsables si les informations propos√©es sur ce site sont inexactes, incompl√®tes ou caduques. Le contenu de ce site est fourni √† titre d'information g√©n√©rale uniquement et ne doit pas √™tre consid√©r√© ou utilis√© comme seule base pour la prise de d√©cisions sans consulter des sources d'information plus importantes, plus exactes, plus compl√®tes ou plus actuelles. Si vous vous fiez au contenu de ce site, vous le faites √† vos propres risques.

                Ce site peut contenir certaines donn√©es historiques. Par d√©finition, les donn√©es historiques ne sont pas actuelles et sont fournies uniquement √† titre de r√©f√©rence. Nous nous r√©servons le droit de modifier les contenus de ce site √† tout moment, mais nous n'avons aucune obligation de mettre √† jour les informations qu'il contient, quelles qu'elles soient. Vous reconnaissez qu'il vous incombe de surveiller les changements apport√©s √† notre site.</p>

              <h3>SECTION 4 ‚Äď MODIFICATIONS DU SERVICE ET DES PRIX</h3>
              <p>Les prix de nos produits sont modifiables sans pr√©avis.

                Nous nous r√©servons le droit de modifier ou de mettre fin au Service (ou √† une quelconque partie de celui-ci) √† tout moment et sans pr√©avis.

                Nous ne pourrons √™tre tenus responsables envers vous ou tout tiers de tout changement de prix, ou encore de toute modification, suspension ou interruption du Service.</p>

              <h3>SECTION 5 ‚Äď PRODUITS OU SERVICES (le cas √©ch√©ant)</h3>
              <p>Il est possible que certains produits ou services ne soient disponibles qu'en ligne √† travers le site web. Il se peut que les quantit√©s de ces produits ou services soient limit√©es et que leur retour ou leur √©change soit strictement assujetti √† notre Politique de retour.

                Nous nous sommes efforc√©s de pr√©senter aussi pr√©cis√©ment que possible les couleurs et images des produits figurant sur la boutique. Nous ne pouvons cependant pas garantir la pr√©cision d'affichage des couleurs sur l'√©cran de votre ordinateur.
                Nous nous r√©servons le droit, sans toutefois y √™tre oblig√©s, de limiter la vente de nos produits ou Services √† n'importe quelle personne, r√©gion g√©ographique ou juridiction donn√©e. Nous nous autorisons √† exercer ce droit au cas par cas. Nous nous r√©servons le droit de limiter les quantit√©s des produits ou services que nous offrons. Toutes les descriptions des produits et leur tarification sont modifiables √† tout moment, sans pr√©avis et √† notre enti√®re discr√©tion. Nous nous r√©servons le droit d'interrompre la vente d'un produit √† tout moment. Toute offre de produit ou service sur ce site est nulle l√† o√Ļ la loi l'interdit.

                Nous ne garantissons pas que la qualit√© des produits, services, informations ou autres mat√©riels que vous achetez ou que vous vous procurez r√©pondra √† vos attentes ni que les erreurs que comporte √©ventuellement le Service seront corrig√©es.</p>
                
              <h3>SECTION 6 ‚Äď EXACTITUDE DE LA FACTURATION ET DES INFORMATIONS DE COMPTE</h3>
              <p>Nous nous r√©servons le droit de refuser toute commande que vous passez aupr√®s de nous. Nous pouvons, √† notre seule discr√©tion, limiter ou annuler les quantit√©s achet√©es par personne, par foyer ou par commande. Ces restrictions peuvent inclure les commandes pass√©es par ou sur le m√™me compte client, la m√™me carte de cr√©dit et/ou des commandes utilisant la m√™me adresse de facturation et/ou d'exp√©dition. Si nous modifions ou annulons une commande, il se peut que nous tentions de vous en aviser en vous contactant au moyen de l'adresse e-mail et/ou de l'adresse de facturation ou du num√©ro de t√©l√©phone fournis au moment de la commande. Nous nous r√©servons le droit de limiter ou d'interdire les commandes qui, selon nous, semblent avoir √©t√© pass√©es par des n√©gociants, des revendeurs ou des distributeurs.
                Vous acceptez de fournir des informations d'achat et de compte actuelles, compl√®tes et exactes pour tous les achats effectu√©s dans notre boutique. Vous acceptez de mettre rapidement √† jour votre compte et toute autre information, y compris votre adresse e-mail et vos num√©ros de cartes de cr√©dit et leurs dates d'expiration, afin que nous puissions finaliser vos transactions et vous contacter en cas de besoin.

                Pour plus d'informations, veuillez consulter notre Politique de retour.</p>

              <h3>SECTION 7 ‚Äď OUTILS FACULTATIFS</h3>
              <p>Nous sommes susceptibles de vous fournir l'acc√®s √† des outils tiers que nous ne surveillons, ne contr√īlons et ne g√©rons pas.

                Vous reconnaissez et acceptez que nous vous fournissons l'acc√®s √† ces outils ¬ę tels quels ¬Ľ et ¬ę sous r√©serve de disponibilit√© ¬Ľ, sans garantie, repr√©sentation ou condition d'aucune sorte et sans la moindre approbation. Nous ne saurions √™tre tenus responsables de quoi que ce soit √† l'√©gard de ce qui pourrait r√©sulter de ou √™tre reli√© √† votre utilisation des outils facultatifs tiers.

                Toute utilisation par vous des outils facultatifs propos√©s par le biais du site est enti√®rement √† votre discr√©tion et √† vos propres risques. En outre, il vous appartient de vous renseigner sur les conditions dans lesquelles ces outils sont fournis par le(s) fournisseur(s) tiers concern√©(s) et accepter ces conditions.

                Il se peut √©galement qu'√† l'avenir, nous proposions de nouveaux services et/ou de nouvelles fonctionnalit√©s √† travers le site web (y compris le lancement de nouveaux outils et ressources). Ces nouveaux services et/ou fonctionnalit√©s seront aussi assujettis aux pr√©sentes Conditions d'utilisation.</p>

              <h3>ARTICLE 8 ‚Äď LIENS DE TIERS</h3>
              <p>Certains contenus, produits et services accessibles via notre Service peuvent inclure des √©l√©ments provenant de tiers.

                Les liens de tiers sur ce site peuvent vous rediriger vers des sites web de tiers qui ne sont pas affili√©s √† nous. Nous ne sommes pas tenus d‚Äôexaminer ou d‚Äô√©valuer leur contenu ou leur exactitude, de m√™me que nous ne garantissons pas et n‚Äôassumons aucune responsabilit√© quant aux contenus ou sites web, ou aux autres contenus, produits ou services de sources tierces.

                Nous ne sommes pas responsables des pr√©judices ou dommages li√©s √† l‚Äôachat ou √† l‚Äôutilisation de biens, services, ressources, contenus ou de toute autre transaction reli√©e √† ces sites web tiers. Veuillez lire attentivement les politiques et pratiques de ces tiers et assurez-vous de bien les comprendre avant de vous engager dans une transaction. Les plaintes, r√©clamations, pr√©occupations ou questions concernant les produits de tiers doivent √™tre adress√©es √† ces m√™mes tiers.</p>

              <h3>ARTICLE 9 ‚Äď COMMENTAIRES, RETOURS D'EXP√ČRIENCE ET AUTRES SOUMISSIONS</h3>
              <p>Si, √† notre demande, vous soumettez des contenus sp√©cifiques (par exemple, dans le cadre de votre participation √† des concours), ou si, sans demande de notre part, vous envoyez des id√©es cr√©atives, des suggestions, des propositions, des plans ou d‚Äôautres √©l√©ments, que ce soit en ligne, par e-mail, par courrier ou autrement (collectivement, ¬ę commentaires ¬Ľ), vous nous accordez le droit, √† tout moment et sans restriction, de modifier, copier, publier, distribuer, traduire et utiliser dans quelque m√©dia que ce soit tous les commentaires que vous nous transmettez. Nous ne sommes pas et ne devrons en aucun cas √™tre tenus (1) de maintenir la confidentialit√© des commentaires ; (2) de d√©dommager qui que ce soit pour tout commentaire fourni ; ou (3) de r√©pondre aux commentaires.
                7. Nous pouvons, mais nous n'en avons pas l'obligation, supprimer le contenu et les Comptes contenant du contenu que nous jugeons, √† notre seule discr√©tion, ill√©gal, offensant, mena√ßant, diffamatoire, pornographique, obsc√®ne ou autrement r√©pr√©hensible ou qui viole la propri√©t√© intellectuelle d'une partie ou les pr√©sentes Conditions d'utilisation.
                Vous convenez que vos commentaires ne doivent en aucun cas porter atteinte aux droits de tiers, y compris aux droits d'auteur, aux marques de commerce, √† la vie priv√©e, √† la personnalit√© ou √† tout autre droit personnel ou de propri√©t√© intellectuelle. Vous convenez en outre que vos commentaires ne devront contenir aucun √©l√©ment ill√©gal, injurieux ou obsc√®ne, ni aucun virus informatique ou autre logiciel malveillant susceptible d'affecter d'une quelconque fa√ßon le fonctionnement du Service ou de tout site web connexe. Vous ne pouvez pas utiliser de fausse adresse e-mail, pr√©tendre √™tre quelqu‚Äôun que vous n‚Äô√™tes pas, ou essayer de nous induire, nous ou les tiers, en erreur quant √† l‚Äôorigine des commentaires. Vous √™tes enti√®rement responsable de tous les commentaires que vous √©mettez ainsi que de leur exactitude. Nous d√©clinons toute responsabilit√© √† l'√©gard des commentaires publi√©s par vous ou un tiers.</p>

              <h3>ARTICLE 10 ‚Äď INFORMATIONS PERSONNELLES</h3>
              <p>La transmission de vos informations personnelles sur notre boutique est r√©gie par notre Politique de confidentialit√©.  Cliquez ici pour consulter notre Politique de Confidentialit√©.</p>

              <h3>ARTICLE 11 ‚Äď ERREURS, INEXACTITUDES ET OMISSIONS</h3>
              <p>Il se peut qu'il y ait parfois, sur notre site ou dans le Service, des informations contenant des erreurs typographiques, des inexactitudes ou des omissions reli√©es aux descriptions, aux prix, aux promotions, aux offres, aux frais d‚Äôexp√©dition, aux d√©lais d'acheminement et √† la disponibilit√© des produits. Nous nous r√©servons le droit de corriger toute erreur, inexactitude ou omission, et de changer ou d'actualiser des informations, voire d‚Äôannuler des commandes si une quelconque information dans le Service ou sur tout site web connexe est inexacte, et ce, √† tout moment et sans pr√©avis (y compris apr√®s que vous ayez pass√© votre commande).

                Nous ne sommes pas tenus d'actualiser, de modifier ou de clarifier les informations indiqu√©es dans le Service ou sur tout site web connexe, y compris mais sans s'y limiter, les informations sur les prix, sauf si la loi l'exige. Aucune date pr√©cise de mise √† jour ou d‚Äôactualisation appliqu√©e au Service ou √† tout site web connexe ne saurait √™tre d√©finie pour indiquer que l'ensemble des informations offertes dans le Service ou sur tout site web connexe ont √©t√© modifi√©es ou mises √† jour.</p>

              <h3>ARTICLE 12 ‚Äď UTILISATIONS INTERDITES</h3>
              <p>En plus des autres interdictions √©nonc√©es dans les Conditions d‚Äôutilisation, il vous est interdit d‚Äôutiliser le site ou son contenu :
                <br/>(a) √† des fins ill√©gales ;
                <br/>(b) pour inciter des tiers √† r√©aliser des actes ill√©gaux ou √† y prendre part ;
                <br/>(c) pour enfreindre toute ordonnance locale ou toute r√©glementation, r√®gle ou loi internationale, f√©d√©rale, provinciale ou √©tatique ;
                <br/>(d) pour transgresser ou violer nos droits de propri√©t√© intellectuelle ou ceux de tiers ;
                <br/>(e) pour harceler, maltraiter, insulter, blesser, diffamer, calomnier, d√©nigrer, intimider ou discriminer quiconque en fonction du sexe, de l‚Äôorientation sexuelle, de la religion, de l‚Äôorigine ethnique, de la race, de l‚Äô√Ęge, de l‚Äôorigine nationale ou d‚Äôun handicap ;
                <br/>(f) pour soumettre des renseignements faux ou trompeurs ;
                <br/>(g) pour mettre en ligne ou transmettre des virus ou tout autre type de code malveillant qui sera ou pourrait √™tre utilis√© en vue de compromettre la fonctionnalit√© ou le fonctionnement du Service ou de tout site web connexe, ainsi que d'autres sites web ou d‚ÄôInternet ;
                <br/>(h) pour recueillir ou suivre les renseignements personnels d‚Äôautrui ;
                <br/>(i) pour spammer, hame√ßonner, d√©tourner un domaine, extorquer des informations, parcourir, explorer ou balayer le web ;
                <br/>(j) √† des fins obsc√®nes ou immorales ; ou
                <br/>(k) pour perturber ou contourner les mesures de s√©curit√© du Service ou de tout site connexe, ainsi que d'autres sites web ou d‚ÄôInternet.
                <br/>Nous nous r√©servons le droit de mettre fin √† votre utilisation du Service ou de tout site web connexe pour avoir enfreint les interdits en mati√®re d'utilisation.</p>

              <h3>ARTICLE 13 ‚Äď EXCLUSION DE GARANTIES ET LIMITATION DE RESPONSABILIT√Č</h3>
              <p>Nous ne garantissons, certifions ou d√©clarons en aucun cas que votre utilisation de notre Service sera ininterrompue, s√©curis√©e, sans d√©lai ou sans erreur.

                Nous ne garantissons pas que les r√©sultats qui pourraient √™tre obtenus en utilisant le Service seront exacts ou fiables.

                Vous acceptez que, de temps √† autre, nous puissions retirer le Service pour des p√©riodes ind√©termin√©es ou l'annuler √† tout moment et sans pr√©avis.
                Vous convenez express√©ment que votre utilisation du Service, ou votre incapacit√© √† utiliser celui-ci, est √† votre seul risque. Le Service ainsi que tous les produits et services qui vous sont fournis par le biais de celui-ci sont (sauf mention expresse de notre part) fournis ¬ę tels quels ¬Ľ et ¬ę sous r√©serve de disponibilit√© ¬Ľ pour votre utilisation, et ce, sans repr√©sentation, garanties ou conditions d'aucune sorte, soit expresses soit implicites, y compris toutes les garanties ou conditions implicites de commercialisation ou de qualit√© marchande, d‚Äôadaptation √† un usage particulier, de durabilit√©, de titre et d‚Äôabsence de contrefa√ßon.
                Salecka, nos directeurs, responsables, employ√©s, soci√©t√©s affili√©es, agents, contractants, stagiaires, fournisseurs, prestataires de services et conc√©dants ne peuvent en aucun cas √™tre tenus responsables de toute blessure, perte, r√©clamation, ou de quelconques dommages directs, indirects, accessoires, punitifs, sp√©ciaux ou cons√©cutifs, y compris mais sans s'y limiter, de la perte de profits, revenus, √©conomies ou donn√©es, de co√Ľts de remplacement ou autres dommages similaires, qu‚Äôils soient contractuels, d√©lictuels (m√™me en cas de n√©gligence), de responsabilit√© stricte ou autre, r√©sultant de votre utilisation du Service ou de tout service ou produit recourant √† celui-ci, ou de toute autre r√©clamation li√©e de quelque mani√®re que ce soit √† votre utilisation du Service ou de tout produit, y compris mais sans s'y limiter, √† des erreurs ou omissions dans un contenu, ou √† de quelconques pertes ou dommages d√©coulant de l‚Äôutilisation du Service ou d'un contenu (ou produit) publi√©, transmis ou rendu accessible par le biais du Service, et ce, m√™me si vous avez √©t√© averti(e) de la possibilit√© qu‚Äôils surviennent.
                Du fait que certains √Čtats ou juridictions ne permettent pas d‚Äôexclure ou de limiter la responsabilit√© quant aux dommages cons√©cutifs ou accessoires, notre responsabilit√© dans ces √Čtats ou juridictions sera limit√©e dans la mesure maximale permise par la loi.</p>

              <h3>ARTICLE 14 ‚Äď INDEMNISATION</h3>
              <p>Vous acceptez d‚Äôindemniser, de d√©fendre et de tenir Salecka et notre soci√©t√© m√®re, nos filiales, soci√©t√©s affili√©es, partenaires, responsables, directeurs, agents, contractants, conc√©dants, prestataires de services, sous-traitants, fournisseurs, stagiaires et employ√©s, quittes de toute r√©clamation ou demande, y compris d'honoraires raisonnables d‚Äôavocat, √©mise par un quelconque tiers √† cause de ou cons√©cutivement √† votre violation des pr√©sentes Conditions d‚Äôutilisation ou des documents auxquels elles font r√©f√©rence, ou √† votre violation de quelconques lois ou droits d‚Äôun tiers.</p>

              <h3>ARTICLE 15 ‚Äď DISSOCIABILIT√Č</h3>
              <p>Dans le cas o√Ļ une quelconque disposition des pr√©sentes Conditions d‚Äôutilisation est jug√©e ill√©gale, nulle ou inapplicable, cette disposition sera n√©anmoins applicable dans la pleine mesure permise par la loi, et la partie non applicable sera consid√©r√©e comme √©tant dissoci√©e de ces Conditions d‚Äôutilisation, sans que ce jugement n'affecte la validit√© et l‚Äôapplicabilit√© des autres dispositions.</p>

              <h3>ARTICLE 16 ‚Äď R√ČSILIATION</h3>
              <p>Les obligations et responsabilit√©s engag√©es par les parties avant la date de r√©siliation resteront en vigueur apr√®s la r√©siliation de cet accord, et ce, √† toutes fins.

                Les pr√©sentes Conditions d‚Äôutilisation resteront en vigueur, √† moins et jusqu‚Äô√† ce qu‚Äôelles soient r√©sili√©es par vous ou par nous. Vous pouvez r√©silier ces Conditions d‚Äôutilisation √† tout moment en nous avisant que vous ne souhaitez plus utiliser nos Services, ou lorsque vous cessez d‚Äôutiliser notre site.
                Si nous jugeons ou suspectons, √† notre seule discr√©tion, que vous ne respectez pas ou que vous n'avez pas respect√© une quelconque modalit√© ou disposition des pr√©sentes Conditions d‚Äôutilisation, nous pouvons √©galement r√©silier cet accord √† tout moment et sans pr√©avis. Vous demeurerez alors responsable de toutes les sommes redevables jusqu‚Äô√† la date de r√©siliation (incluse), en cons√©quence de quoi nous pouvons vous refuser l‚Äôacc√®s √† nos Services (ou √† une partie de ceux-ci).</p>

              <h3>ARTICLE 17 ‚Äď INT√ČGRALIT√Č DE L‚ÄôACCORD</h3>
              <p>Tout manquement de notre part √† l‚Äôexercice ou √† l‚Äôapplication d'un droit ou d'une disposition des pr√©sentes Conditions d‚Äôutilisation ne constitue pas une renonciation √† ce droit ou √† cette disposition.

                Les pr√©sentes Conditions d‚Äôutilisation ou toute autre politique ou r√®gle d‚Äôexploitation que nous publions sur ce site ou qui concernent le Service constituent l‚Äôint√©gralit√© de l‚Äôentente et de l‚Äôaccord entre vous et nous, et r√©gissent votre utilisation du Service. Elles remplacent l'ensemble des accords, communications et propositions ant√©rieurs et actuels, oraux ou √©crits, entre vous et nous (y compris, mais sans s'y limiter, toute version ant√©rieure des Conditions d‚Äôutilisation).
                Toute ambigu√Įt√© quant √† l‚Äôinterpr√©tation de ces Conditions d‚Äôutilisation ne doit pas √™tre interpr√©t√©e en d√©faveur de la partie r√©dactrice.</p>

              <h3>ARTICLE 18 ‚Äď LOI APPLICABLE</h3>
              <p>Les pr√©sentes Conditions d‚Äôutilisation, ainsi que tout accord distinct par lequel nous vous fournissons les Services sont r√©gis et interpr√©t√©s en vertu des lois de 7 All√©e du Perruchet, Thiais, Ile-de-France, 94320, France.</p>

              <h3>ARTICLE 19 ‚Äď MODIFICATIONS APPORT√ČES AUX CONDITIONS D‚ÄôUTILISATION</h3>
              <p>Vous pouvez consulter la version la plus r√©cente des Conditions d‚Äôutilisation √† tout moment sur cette page.

                Nous nous r√©servons le droit, √† notre seule discr√©tion, de mettre √† jour, modifier ou remplacer toute partie des pr√©sentes Conditions d'utilisation en publiant lesdites mises √† jour et/ou modifications sur notre site web. Il vous incombe de v√©rifier notre site web de temps √† autre pour voir si des changements y ont √©t√© apport√©s. En continuant √† acc√©der √† notre site web et au Service ou √† les utiliser apr√®s la publication de modifications apport√©es aux pr√©sentes Conditions d'utilisation, vous acceptez celles-ci.</p>

              <h3>ARTICLE 20 ‚Äď COORDONN√ČES</h3>
              <p>Les questions relatives aux Conditions d‚Äôutilisation doivent nous √™tre envoy√©es √† rashaandesnoyers@hotmail.com.</p>
            </div>
            <div>
              <h1 id='reimbursement_policy'>Politique de remboursement</h1>
              <h3>RETOURS</h3>
              <p>Notre politique dure 30 jours. Si plus de 30 jours se sont √©coul√©s depuis votre achat, nous ne pouvons malheureusement offrir ni remboursement ni √©change.

                Pour pouvoir √™tre retourn√©, votre article doit √™tre inutilis√© et dans l'√©tat o√Ļ vous l'avez re√ßu. Il doit aussi √™tre dans son emballage d'origine.

                Le retour de certains types de marchandises n'est pas autoris√©. Ainsi, les denr√©es p√©rissables, telles que les aliments, les fleurs, les journaux ou les magazines, ne peuvent pas √™tre retourn√©es. De m√™me, nous n'acceptons pas les produits intimes ou sanitaires, les mati√®res ou substances dangereuses, ni les liquides ou les gaz inflammables.

                Autres articles dont le retour n'est pas autoris√© :
                * Cartes-cadeaux
                * Logiciels t√©l√©chargeables
                * Certains produits de sant√© et de soin personnel

                Pour compl√©ter votre retour, nous exigeons un re√ßu ou une preuve d'achat.
                Ne retournez pas votre achat au fabricant.

                Dans certains cas, seuls des remboursements partiels sont accord√©s : (le cas √©ch√©ant)
                * Livres montrant des signes d'utilisation √©vidents
                * CD, DVD, cassettes VHS, logiciels, jeux vid√©o, cassettes audio ou disques en vinyle ayant √©t√© ouverts.
                * Tout article qui n'est pas dans son √©tat d'origine, qui est endommag√© ou auquel il manque des pi√®ces pour une raison non due √† une erreur de notre part.
                * Tout article retourn√© plus de 30 jours apr√®s sa livraison</p>
                
                Remboursements (le cas √©ch√©ant)
                <p>Une fois votre retour re√ßu et inspect√©, nous vous adresserons un e-mail pour vous indiquer que nous avons re√ßu l'article retourn√©. Nous vous pr√©ciserons √©galement si votre remboursement est approuv√© ou refus√©.
                S'il est approuv√©, votre remboursement est alors trait√© et votre carte de cr√©dit ou moyen de paiement initial se voit cr√©dit√©(e) automatiquement dans un d√©lai de quelques jours.

                Remboursements retard√©s ou manquants (le cas √©ch√©ant)
                Si vous n'avez pas encore re√ßu de remboursement, rev√©rifiez d'abord votre compte bancaire.
                Puis contactez la soci√©t√© √©mettrice de votre carte de cr√©dit, car il se peut que l'affichage officiel de votre remboursement prenne un peu de temps.
                Ensuite, contactez votre banque. L'affichage d'un remboursement est souvent pr√©c√©d√© d'un d√©lai de traitement.
                Si vous avez effectu√© toutes ces d√©marches et que vous n'avez toujours pas re√ßu votre remboursement, contactez-nous √† l'adresse suivante : rashaandesnoyers@hotmail.com.
                Articles sold√©s ou en promotion (le cas √©ch√©ant)
                Seuls les articles √† prix normal sont remboursables. Malheureusement, les articles sold√©s ou en promotion ne le sont pas.

                √Čchanges (le cas √©ch√©ant)
                Nous ne rempla√ßons que les articles initialement d√©fectueux ou endommag√©s.  Si vous devez remplacer le v√ītre par le m√™me article, adressez-nous un e-mail √† rashaandesnoyers@hotmail.com et envoyez votre article √† : 7 All√©e du Perruchet, Thiais, Ile-de-France, 94320, France.

                Cadeaux
                Si l'article a √©t√© marqu√© comme cadeau au moment de l'achat et s'il vous a √©t√© exp√©di√© directement, vous recevrez un cr√©dit cadeau d'une valeur √©quivalente √† celle de l'article retourn√©. Une fois l'article retourn√© re√ßu, un bon cadeau vous sera envoy√© par voie postale.

                Si l'article n'a pas √©t√© marqu√© comme cadeau au moment de l'achat, ou si la personne √† l'origine du cadeau s'est fait envoyer la commande dans le but de vous la remettre plus tard, c'est √† elle que nous adresserons le remboursement et elle saura donc que vous avez retourn√© son cadeau.
                Exp√©dition
                Pour retourner votre produit, vous devez l'envoyer √† l'adresse postale suivante : 7 All√©e du Perruchet, Thiais, Ile-de-France, 94320, France.

                Les co√Ľts d'exp√©dition li√©s au retour de votre article sont √† votre charge. Ils ne sont pas remboursables. Si vous recevez un remboursement, le co√Ľt d'exp√©dition du retour en sera d√©duit.

                Selon l'endroit o√Ļ vous vivez, le d√©lai de r√©ception de votre produit √©chang√© peut varier.

                Si vous exp√©diez un article d'une valeur sup√©rieure √† 75 ‚ā¨, nous vous recommandons d'utiliser un service de suivi d'exp√©dition ou de faire assurer votre envoi. Nous ne garantissons pas que nous recevrons l'article retourn√©.
              </p>
            </div>
            <div>
              <h1 id='legal_notice'>Mentions l√©gales</h1>

                <p>Conform√©ment aux dispositions de la loi n¬į 2004-575 du 21 juin 2004 pour la confiance en l'√©conomie num√©rique, il est pr√©cis√© aux utilisateurs du site Salecka l'identit√© des diff√©rents intervenants dans le cadre de sa r√©alisation et de son suivi.</p>

                <h3>EDITION DU SITE</h3>
                <p>Le pr√©sent site, accessible √† l‚ÄôURL www.salecka.com (le ¬ę Site ¬Ľ), est √©dit√© par :

                Rashaan DESNOYERS, r√©sidant 7 All√©e du Perruchet 94320 THIAIS, de nationalit√© Fran√ßaise (France), n√©(e) le 17/12/1996, </p>

                <h3>HEBERGEMENT</h3>
                <p>Le Site est h√©berg√© par la soci√©t√© Shopify Inc., situ√© Google LLC 1600 Amphitheatre Parkway Mountain View, CA 94043 USA, (contact t√©l√©phonique ou email : (+1) 650 253 0000).</p>

                <h3>Directeur de publication</h3>
                <p>Le Directeur de la publication du Site est Rashaan DESNOYERS.</p>

                <h3>Nous contacter</h3>
                <p>Par t√©l√©phone : +33760276334</p>
                <p>Par email : rashaandesnoyers@hotmail.com</p>
                <p>Par courrier : 7 All√©e du Perruchet 94320 THIAIS</p>

                <h3>Donn√©es personnelles</h3>
                <p>Le traitement de vos donn√©es √† caract√®re personnel est r√©gi par notre Charte du respect de la vie priv√©e, disponible depuis la section "Charte de Protection des Donn√©es Personnelles", conform√©ment au R√®glement G√©n√©ral sur la Protection des Donn√©es 2016/679 du 27 avril 2016 (¬ęRGPD¬Ľ).</p>
            </div>
          </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}