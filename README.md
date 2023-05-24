# Ambula Explorer

## Description

Ambula Explorer est une application front-end qui offre une interface pour explorer la blockchain. Elle propose plusieurs pages avec différentes fonctionnalités et informations liées à la blockchain.

## Pages

1. **Page d'accueil** : Cette page sert de point d'entrée pour toute personne souhaitant découvrir la blockchain.

2. **Build** : Le but de cette page est d'informer les personnes sur une éventuelle future ouverture de la blockchain.

3. **À propos** : Cette page fournit une meilleure compréhension des objectifs de la blockchain, de sa feuille de route et de ses avantages.

4. **Produit** : Cette page affiche des informations en temps réel sur la blockchain, notamment chaque bloc produit dans la chaîne et tous les nœuds actuellement connectés.

5. **Panneau d'administration** : Cette page permet aux individus autorisés de manipuler la blockchain à travers différentes opérations :

    - Vérification du statut de la chaîne (en ligne/hors ligne).
    - Lancement de la chaîne.
    - Ajout d'un nœud.
    - Fin de la chaîne.
    - Redémarrage d'un nœud.
    - Suppression d'un nœud.
    - Journalisation d'un nœud.

6. **Flux d'activité** : Le flux d'activité offre un aperçu rapide des événements récents sur la chaîne.

7. **Benchmarks et Comparaisons** (Potentiellement prévu) : Il était prévu d'implémenter une page pour effectuer des benchmarks et des comparaisons entre la preuve d'importance (PoI) et la preuve de travail (PoW), mais cela n'a pas été réalisé en raison de contraintes de temps.

## Gestion de la blockchain

La blockchain est lancée dynamiquement sur des Linodes, qui sont des serveurs pouvant être alloués à la demande. Des playbooks Ansible sont utilisés pour récupérer l'image Docker de la blockchain et la lancer sur des serveurs alloués dynamiquement. Cette approche présente deux avantages : écologique et économique.

L'avantage écologique est obtenu en utilisant les Linodes, qui peuvent être provisionnés selon les besoins, réduisant ainsi la consommation d'énergie lorsque la blockchain n'est pas utilisée activement. L'avantage économique provient de la flexibilité offerte par les Linodes, permettant une allocation efficace des ressources en fonction de la demande, optimisant ainsi les coûts.

## Installation et exécution

Pour lancer le front-end Ambula Explorer, suivez les étapes ci-dessous :

1. Assurez-vous d'avoir Node.js installé sur votre machine.

2. Clonez le dépôt Ambula Explorer depuis [lien du dépôt](https://github.com/ambula-labs/ambula-explorer).

3. Accédez au répertoire cloné via la ligne de commande.

4. Exécutez la commande suivante pour installer les dépendances nécessaires :

    ```
    npm install
    ```

5. Une fois l'installation terminée, vous pouvez démarrer le serveur de développement en utilisant la commande :

    ```
    npm run dev
    ```

6. Le front-end Ambula Explorer sera alors accessible à l'adresse `http://localhost:5173` dans votre navigateur.

Veuillez noter que ces instructions supposent que vous avez déjà configuré correctement l'environnement de développement avec Node.js et que vous avez accès au dépôt du projet.
