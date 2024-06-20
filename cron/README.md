# Back-end


## Guide d'installation

### Prérequis
Assurez-vous d'avoir les éléments suivants installés sur votre machine :
- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Étapes d'installation
1. **Cloner le dépôt :**
   ```sh
   git@github.com:yabovignissi/testcron.git
   cd testcron
2. Installer les dépendances
```npm  install```
3. Configurer la variable d'environnement
 - Créez un fichier .env à la racine de votre projet.
-  Référez-vous au fichier `.env.test` .

### Démarrer l'applicaction
  Creer la db et faire la migration  avec la commande ```npm  run migrate``` apres avoir créer votre base de donnée
  * Run ```npm run start``` to start the application.
  * Connect to the API using Postman on port 3000.  

### API 

###### task Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /task/ | Retourne toutes les taches|
| POST | /task/create | Creer une tâche |
| POST | /task/run/:id | Exécute une tâche manuellement en modifiant l"heure |
| GET | /task/status/:id | Vérifie l'état d'exécution d'une tâche |




### Technologies Used
  * NestJS : Un framework pour construire des applications Node.js évolutives et efficaces côté serveur.
  * Prisma Un ORM (Object-Relational Mapping) qui simplifie l'interaction entre l'application et la base de données..
  * PostgreSQL : Un système de gestion de base de données relationnelle.