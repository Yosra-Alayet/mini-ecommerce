# MiniEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Context du Projet
Contexte
Vous travaillez pour une startup qui souhaite lancer rapidement un MVP (Produit Minimum Viable) d'une galerie de produits e-commerce. Votre tâche est de créer une application frontend ou mobile simple mais fonctionnelle, qui servira de base pour de futurs développements.

Instructions
L'exercice consiste en un MVP avec deux user stories, dont la seconde possède des variantes. Des fonctionnalités bonus facultatives sont proposées pour démontrer des capacités supplémentaires. La créativité dans la résolution de problèmes et l'attention aux détails sont encouragées.

Contraintes
Temps recommandé : 2 à 3 heures (pour le MVP de base, sans les fonctionnalités bonus)
Framework technique : Choisissez l'une des options suivantes :
Vue.js
React
Angular
React Native
Documentation du projet : Améliorez le fichier README.md avec les éléments suivants :
Instructions d'installation
Liste des fonctionnalités
Vue d'ensemble de l'architecture de votre application
Indication claire de la variante de la User Story 2 que vous avez implémentée
Livrables
Soumettez votre code sous forme de Pull Request au dépôt désigné ou partagez un lien vers un dépôt (par exemple, GitLab, GitHub).

Critères d'évaluation
Les applications seront évaluées selon les points suivants :

Fonctionnalité : L'application remplit-elle les user stories de base ?
Qualité du code : Structure, lisibilité, et respect des meilleures pratiques du framework choisi
Adaptabilité : L'application s'adapte-t-elle bien à différentes tailles d'écran (web) ou appareils (mobile) ?
Utilisation efficace du framework : Utilisation appropriée des fonctionnalités du framework choisi
Historique des commits : Clarté et organisation des commits
Détails du challenge
MVP
User Story 1
En tant que client, je veux voir une liste de produits afin de choisir quoi acheter.

Récupérez et affichez une liste de produits à partir de l'API Fake Store (https://fakestoreapi.com/products).
Chaque produit doit afficher au moins l'image, le nom et le prix, avec un bouton ou une fonctionnalité "Ajouter au panier".
User Story 2 (Variantes)
En tant que client, je veux interagir avec un panier d'achat pour gérer ma sélection de produits.

Implémentez UNE des variantes suivantes. Si aucune variante spécifique ne vous a été assignée, vous pouvez en choisir UNE parmi la liste ci-dessous :

a) Panier standard :

En tant que client, je veux ajouter des produits à mon panier et voir le panier pour gérer mes sélections avant de passer à la caisse.

Implémentez un panier d'achat où les utilisateurs peuvent ajouter des produits, voir les articles sélectionnés, ajuster les quantités et retirer des articles du panier.
b) Panier à quantité limitée :

En tant que client, je veux ajouter des produits à mon panier avec une limite de quantité, afin de respecter les restrictions d'achat.

Implémentez un panier d'achat où les utilisateurs peuvent ajouter des produits jusqu'à une quantité maximale (par exemple, 5 articles au total dans le panier), voir les articles sélectionnés et retirer des articles du panier.
c) Panier avec remise :

En tant que client, je veux ajouter des produits à mon panier et voir une remise appliquée, afin de comprendre mes économies potentielles.

Implémentez un panier d'achat où les utilisateurs peuvent ajouter des produits, voir les articles sélectionnés, et voir une remise fixe (par exemple, 10% de réduction) appliquée si le total dépasse un certain montant.
d) Panier persistant :

En tant que client, je veux que mon panier d'achat persiste lorsque je rafraîchis la page, afin de ne pas perdre mes sélections accidentellement.

Implémentez un panier d'achat qui sauvegarde son état dans le stockage local, permettant au panier de persister après le rafraîchissement de la page.
e) Panier avec montant minimum :

En tant que client, je veux savoir si mon panier atteint une valeur de commande minimale, afin que je puisse ajuster ma sélection pour pouvoir passer à la caisse.

Implémentez un panier d'achat qui indique si une valeur de commande minimale (par exemple, 50 $) est atteinte, activant ou désactivant en conséquence le bouton "Procéder à la caisse".
Fonctionnalités bonus (Facultatives, non incluses dans le temps recommandé)
Si vous terminez le MVP de base et souhaitez montrer des compétences supplémentaires, vous pouvez essayer ces fonctionnalités bonus :

Détails avancés des produits : Permettre aux utilisateurs de cliquer sur un produit pour voir une vue plus détaillée, récupérée à partir de l'API Fake Store.
Recherche de produits : Implémentez une fonctionnalité de recherche simple pour filtrer les produits par nom.
Design réactif basique :
Pour le web : Assurez-vous que l'application est utilisable à la fois sur les écrans de bureau et mobiles.
Pour le mobile : Assurez-vous que l'application s'adapte aux orientations portrait et paysage.
Animation simple : Ajoutez un effet d'animation subtil lors de l'ajout d'articles au panier.
Conseils
Pour les frameworks web : Envisagez d'utiliser des bibliothèques de composants UI basiques compatibles avec votre framework choisi pour améliorer l'apparence et l'utilisabilité de l'application.
Pour React Native : Utilisez les composants intégrés de React Native.
Concentrez-vous sur la mise en œuvre des fonctionnalités de base de la variante de panier assignée avant d'envisager des fonctionnalités bonus.
Implémentez uniquement la variante assignée de la User Story 2. Ne mélangez pas les fonctionnalités de différentes variantes.
Gardez votre implémentation simple et évitez le sur-ingénierie. L'objectif est un MVP fonctionnel dans les contraintes de temps.
N'oubliez pas de documenter clairement la variante de la User Story 2 que vous avez implémentée dans votre fichier README.md.







