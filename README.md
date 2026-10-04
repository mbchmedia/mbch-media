# MBCH Media | site indépendant de Framer

Site statique HTML/CSS/JavaScript, sans installation, abonnement, compilation ni dépendance à Framer. Contenu en anglais comme le site original. Visuel original sauvegardé dans `assets/`.

## Mise en ligne sur GitHub Pages

1. Créer un dépôt **public** sur GitHub, par exemple `mbch-media` (nécessaire avec GitHub Free).
2. Décompresser l’archive. Dans le dépôt, déposer **le contenu** du dossier `mbch-media`, afin que `index.html` soit à la racine, et conserver le dossier `assets`. Le fichier caché `.nojekyll` est inclus pour désactiver Jekyll ; il peut aussi être créé dans GitHub via Add file → Create new file.
3. Aller dans **Settings → Pages → Build and deployment**.
4. Choisir **Deploy from a branch**, puis la branche **main** et **/(root)**. Cliquer **Save**.
5. Attendre la publication, puis ouvrir le lien affiché dans Pages. L’adresse provisoire sera généralement `https://TON-COMPTE.github.io/mbch-media/`.

Les chemins des fichiers sont relatifs : le site fonctionne à la racine d’un domaine et dans un sous-dossier GitHub Pages.

Guide officiel : https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Conserver mbchmedia.com

Le domaine reste payant auprès de ton registrar même si l’hébergement est gratuit. Vérifie qu’il t’appartient bien et qu’il reste renouvelé indépendamment de Framer.

1. Publier et tester d’abord le site sur l’adresse GitHub.
2. Vérifier le domaine dans GitHub, puis ajouter `mbchmedia.com` dans **Settings → Pages → Custom domain**. GitHub créera le fichier `CNAME` si tu publies depuis une branche. Aucun CNAME n’est préconfiguré dans ce dossier pour éviter de rediriger l’aperçu avant la migration.
3. Chez ton registrar, remplacer uniquement les enregistrements web de Framer pour `@` par les quatre enregistrements A de GitHub :

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

4. Pour `www`, créer un CNAME vers `TON-COMPTE.github.io` (sans https et sans nom de dépôt).
5. Vérifier les anciens enregistrements AAAA web : ne pas conserver ceux de Framer qui feraient encore pointer le site ailleurs. Consulter le guide officiel pour la configuration IPv6 facultative.
6. Attendre la validation du domaine et du certificat, puis activer **Enforce HTTPS**. La propagation DNS peut prendre jusqu’à 24 heures.
7. **Conserver les enregistrements de messagerie MX, SPF, DKIM et DMARC**, pour que `contact@mbchmedia.com` continue à fonctionner. Ne pas remplacer toute la zone DNS.

Guide officiel : https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Limites d’usage de GitHub Pages

La compatibilité technique ne garantit pas l’admissibilité de l’usage. GitHub présente Pages comme un service pour les projets personnels et d’organisations et interdit notamment son utilisation pour exploiter une entreprise en ligne ou pour les sites principalement destinés à faciliter des transactions commerciales. Ce site présente une activité d’édition et invite à des partenariats : vérifier l’adéquation de cet usage avant publication. Aucun paiement ni vente en ligne n’est ajouté ici. Le dossier est aussi portable vers un autre hébergeur statique si nécessaire.

Conditions officielles : https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## Formulaire de contact

Le destinataire est `contact@mbchmedia.com`, confirmé par le propriétaire.

Le formulaire valide les champs puis ouvre un e-mail prérempli. Le visiteur doit **envoyer l’e-mail depuis son application de messagerie**. Aucune demande n’est envoyée automatiquement et aucune fausse confirmation de réception n’est affichée. Le bouton « Copy message instead » permet de copier le message si l’application ne s’ouvre pas. Le lien direct vers l’adresse fonctionne sans JavaScript.

Un formulaire qui envoie directement depuis la page nécessite un service externe ou une fonction serveur. GitHub Pages seul ne le fournit pas. Le bon fonctionnement de la boîte e-mail n’a pas été vérifié par envoi.

## Confidentialité et mentions légales

Les textes d’origine ont été récupérés dans les fenêtres superposées du site Framer. Deux pages distinctes sont restaurées : `privacy.html` et `legal.html`.

La Privacy Policy conserve les engagements d’origine sur les usages, le partage, la conservation et les droits. La description du formulaire a été adaptée au fonctionnement par e-mail. Le type de collaboration a été ajouté à la liste des informations reçues. La date de mise à jour correspond à cette adaptation.

La Legal Notice reprend le nom MBCH MEDIA LLC, la forme LLC, l’adresse 704 Wallace St, Suite 598, Clovis, NM 88101, l’e-mail mbchmediallc@gmail.com, ainsi que les clauses d’origine. L’adresse admin@mbchmedia.com reste le contact relatif aux données personnelles. contact@mbchmedia.com reste le destinataire des collaborations, conformément à ta demande. Ces adresses distinctes ont été conservées intentionnellement.

Ces informations et engagements proviennent du site original, sans audit juridique ni vérification de leur actualité. Vérifier qu’ils restent exacts avant publication. Aucun hébergeur n’est présenté comme définitif puisque le site n’a pas encore été publié.

## Présentation de l’entreprise

Site vitrine volontairement discret. La page confirme l’existence de MBCH MEDIA LLC, son activité d’édition et ses marques éditoriales pour les bébés, tout-petits et enfants. La section détaillée sur la famille de marques a été retirée. Aucun nom de marque ni détail de catalogue n’est révélé.

Les liens Privacy Policy et Legal Notice ouvrent deux pages HTML distinctes, sans fenêtre superposée et sans dépendance à JavaScript. Les zones cliquables du pied de page ont été agrandies et les liens soulignés. Après remplacement des fichiers, actualiser l’aperçu pour afficher la dernière version.

## Modifier le site

- Textes et formulaire : `index.html`.
- Couleurs, mise en page et responsive : `styles.css`.
- Menu mobile, e-mail prérempli et copie : `script.js`.
- Politique de confidentialité : `privacy.html`.
- Mentions légales : `legal.html`.
- Photo et favicon : `assets/`.

## Aperçu sur ton Mac

Dans le dossier du site, lancer `python3 -m http.server 8000`, puis ouvrir `http://localhost:8000`. On peut aussi ouvrir directement `index.html` ; la copie vers le presse-papiers dépend alors des règles du navigateur.

## État de livraison

Site créé et testé localement. Aucun dépôt GitHub n’a été créé, aucun DNS n’a été modifié et aucun site n’a été publié. L’authentification GitHub disponible sur ce Mac était invalide au moment de la création.
