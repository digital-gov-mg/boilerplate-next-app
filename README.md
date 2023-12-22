# Modèle Next.js avec Prettier, Storybook, Cypress, et Stitches pour le Développement Axé sur les Composants

Bienvenue dans notre modèle Next.js complet, méticuleusement conçu pour améliorer votre expérience de développement avec Prettier pour la mise en forme du code, Storybook pour le développement de composants, Cypress pour les tests de bout en bout, et Stitches pour des styles et des thèmes sans couture. Ce modèle embrasse la philosophie du Développement Axé sur les Composants, mettant l'accent sur la modularité, la réutilisabilité et la clarté dans la structure de votre application.

## Pour Commencer

1. **Cloner le Dépôt :**

   ```bash
   git clone https://github.com/digital-gov-mg/boilerplate-next-app.git votre-projet
   cd votre-projet
   ```

2. **Installer les Dépendances :**

   ```bash
   npm install
   ```

3. **Lancer le Serveur de Développement :**

   ```bash
   npm run dev
   ```

   Visitez [http://localhost:3000](http://localhost:3000) pour explorer votre application Next.js.

## Mise en Forme du Code avec Prettier

Maintenez un style de code cohérent et propre sans effort. Ce modèle intègre [Prettier](https://prettier.io/) pour la mise en forme du code. Exécutez la commande suivante pour maintenir l'esthétique de votre code :

```bash
npm run format
```

## Storybook pour le Développement de Composants

Storybook est votre toile créative pour construire et présenter des composants de manière isolée. Pour débloquer cet espace créatif, exécutez :

```bash
npm run storybook
```

Visitez [http://localhost:6006](http://localhost:6006) pour plonger dans les histoires de vos composants.

## Cypress pour les Tests de Bout en Bout

Cypress s'intègre parfaitement dans notre architecture, offrant clarté et profondeur à vos tests. Ouvrez le testeur Cypress avec :

```bash
npm run cypress
```

Explorez la [documentation Cypress](https://docs.cypress.io/) pour des tests de bout en bout puissants.

## Stitches pour le Styling et les Thèmes

[Stitches](https://stitches.dev/) est une bibliothèque qui offre une approche novatrice pour la gestion des styles et des thèmes. Elle vous permet de définir vos styles directement dans votre code JavaScript, offrant ainsi une meilleure maintenabilité et une utilisation dynamique.Personnalisez et étendez les styles avec facilité dans le fichier `stitches.config.js`.

## Développement Axé sur les Composants

Adoptez cette philosophie en mettant l'accent sur la construction d'interfaces à travers les composants. Explorez davantage le concept sur [ComponentDriven.org](https://www.componentdriven.org/). Cette approche met en avant les avantages suivants :

- **Modularité :** Développez et itérez rapidement avec des composants isolés et testables indépendamment.
- **Réutilisabilité :** Réutilisez des composants bien définis pour assurer une apparence cohérente dans votre application.
- **Clarté :** Facilitez la collaboration entre designers, développeurs et autres parties prenantes en fournissant un langage partagé à travers les composants.

## Structure de Dossiers

Notre structure de dossiers respecte les meilleures pratiques établies pour le Développement Axé sur les Composants:

```plaintext
.
├── components
│   ├── Button
│   │   ├── Button.js
│   │   ├── Button.test.js
│   │   └── Button.stories.js
│   ├── Header
│   │   ├── Header.js
│   │   ├── Header.test.js
│   │   └── Header.stories.js
│   └── ...
├── pages
│   ├── index.js
│   ├── about.js
│   └── ...
├── public
│   ├── images
│   └── ...
├── styles
│   ├── globals.css
│   └── ...
├── cypress
│   ├── integration
│   └── ...
├── .prettierrc
├── .storybook
│   └── main.js
├── cypress.json
├── next.config.js
├── stitches.config.js
├── package.json
├── README.md
└── ...
```

Étendez et modifiez cette structure avec la confiance que chaque changement résonne à travers votre écosystème axé sur les composants.

## Avantages du Développement Axé sur les Composants

- **Développement Efficace :** Construisez et itérez rapidement avec des composants isolés et testables indépendamment.
- **Design Cohérent :** Assurez une apparence cohérente en réutilisant des composants bien définis.
- **Collaboration :** Facilitez la collaboration entre designers, développeurs et autres parties prenantes en fournissant un langage partagé à travers les composants.

## Normes de Commit Git

Nous suivons les normes de commit [Conventional Commits](https://www.conventionalcommits.org/fr/v2.1.0/), assurant des messages de commit clairs et compréhensibles pour une gestion efficace du versionnement.

| Type de Commit     | Description                                         | Exemple de Commande                              |
|---------------------|-----------------------------------------------------|---------------------------------------------------|
| `feat`              | Nouvelle fonctionnalité                              | `git commit -m "feat: ajout de la fonction X"`   |
| `fix`               | Correction de bug                                   | `git commit -m "fix: résolution du bug Y"`       |
| `docs`              | Modification de la documentation                    | `git commit -m "docs: mise à jour de la doc"`     |
| `style`             | Modifications de style (sans impact sur le code)    | `git commit -m "style: ajustements de l'interface"` |
| `refactor`          | Refactoring du code                                 | `git commit -m "refactor: amélioration de la structure"` |
| `test`              | Ajout ou modification de tests                      | `git commit -m "test: ajout de tests pour la fonction Z"` |
| `chore`             | Tâches de maintenance diverses                       | `git commit -m "chore: mise à jour des dépendances"` |

## Configurations de Husky et Git Hooks

Nous utilisons [Husky](https://typicode.github.io/husky/) pour gérer les hooks Git. Voici comment

 cela est configuré dans le fichier `package.json` :

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

Assurez-vous d'avoir installé `lint-staged` et `commitlint` comme dépendances de développement, et ajoutez les scripts suivants dans votre `package.json` :

```json
"scripts": {
  "lint-staged": "lint-staged",
  "commitlint": "commitlint -E HUSKY_GIT_PARAMS"
}
```

Avec cette configuration, Husky exécutera `lint-staged` avant chaque commit pour vérifier les fichiers staged, et `commitlint` pour s'assurer que vos messages de commit suivent les normes définies.

## Contribuer

Les contributions ne sont pas seulement les bienvenues ; elles sont célébrées ! Ouvrez des "issues" ou soumettez des "Pull Requests" pour faire partie de notre parcours.

Adoptez la puissance du Développement Axé sur les Composants! 🚀
