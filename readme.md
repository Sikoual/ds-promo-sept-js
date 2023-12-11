Exercice 1 : 

Créer un bouton dans un fichier html
Créer un fichier js
Lier votre fichier html avec js
Lorsqu'on clique sur le bouton un message apparait : Le bouton a été cliqué !


Exercice 1 bis :

Sanityze -> Pour éviter les attaques XSS (Cross Site Scripting), on veut pouvoir sanityze nos formulaires,
Besoin : on échappé tous les caractères spéciaux voici le tableau ci-dessous :

< = @lt;
> = @gt;
" = &quot;
& = @amp;


Exemple :
<h2>Hello World</h2> = &lt;h2&gt;Hello World&lt;/h2&gt

