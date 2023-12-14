# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

- N° de groupe : 28
- Membres du groupe :
  - [Chen Wen](https://github.com/Cwen28)
  - [Van Bellinghen Brandon](https://github.com/BrandonVB11)
- Repository GitHub du projet:
    - [GitHub Repo](https://github.com/BrandonVB11/devops-mini-proj-tdd-greetings)

## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Le fichier YML déclenche un pipeline GitHub Actions à chaque push sur la branche main ou lorsqu'une pull request est ouverte ou modifiée. 
Le pipeline effectue des opérations telles que le formatage du code, l'exécution des tests avec Jest, la construction du projet, et affiche des messages indiquant le début et la fin du pipeline, ainsi qu'un message de félicitations en cas de succès.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
La section 'on' spécifie les évènement qui déclenchent l'exécution du pipeline. 
'on push' : Signifie que le pipeline sera déclenché à chaque fois qu'il y aura un push sur la branche principale.
'on pull request' : Signifie le pipeline sera déclenché à chaque fois qu'une pull request est ouverte ou modifiée. 
Chaque option a son avantage. Mais de notre point de vue, nous conseillons le 'on pull request'. Même si cela prend plus de temps s'il y a des validations à effectuer, cette option permet de tester les modifications proposées avant de les fusionner dans la branche principale. Et ça évite également des exécutions inutiles du pipeline pour des commits qui n'ont pas encore été intégrés.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
 'run-on' spécifie l'environnement d'exécution global pour toutes les étapes d'un travail, tandis que 'run' est utilisé à l'intérieur de chaque étape pour indiquer la commande ou le script spécifique à exécuter pendant cette étape sur l'environnement défini par 'run-on'.
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
'use' spécifie l'action Github ou le référentiel contenant le script à utiliser. L'action ou le script spécifié par 'use" sera exécuté comme une étape de la construction.
Par exemple : 'uses : actions/checkout@v3' est une action GitHub prédéfinie qui permet de récupérer le code source du référentiel.
'run' indique la commande ou le script à exécuter pendant cette étape. Le script spécifié par 'run' sera exécuté sur l'environnement de l'action ou du référentiel spécifié par 'uses'
Par exemple : 'run : npm i' est une commande npm qui installe les dépendances du projet.
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui, on peut intervetir les étapes dans notre pipelice, mais il est essentiel de comprendre l'impact logique de ces changements et d'assurer que l'ordre des étapes répond toujours aux besoins de notre processus de construction et de déploiement.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
- Quel outil pour le test de sécurité? 
- Où se trouve le test de sécurité qu'on souhaiterait exécuter?
- Quand devons nous exécuter le test de sécurité dans le pipeline ?
- Quelle est la tolérance aux faux positifs ?
- Comment gérer les résultats des tests de sécurité ? 
```