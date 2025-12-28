# Système d'Authentification PHP - Documentation

## Vue d'ensemble
Ce système d'authentification permet aux utilisateurs de s'inscrire et de se connecter à votre site.

## Fichiers créés

### 1. **db.php**
Fichier de connexion à la base de données
- Configure les paramètres de connexion MySQL
- À personnaliser avec vos identifiants de base de données

### 2. **session.php**
Gestion des sessions utilisateur
- `isLoggedIn()` : Vérifier si l'utilisateur est connecté
- `requireLogin()` : Protéger une page (redirection si non connecté)
- `getCurrentUserId()` : Obtenir l'ID de l'utilisateur
- `getCurrentUserEmail()` : Obtenir l'email de l'utilisateur

### 3. **login_process.php**
Traitement de la connexion
- Valide l'email et le mot de passe
- Utilise `password_verify()` pour la sécurité
- Crée une session utilisateur en cas de succès

### 4. **register_process.php**
Traitement de l'inscription
- Validation des données (email, mot de passe)
- Hachage sécurisé du mot de passe avec `password_hash()`
- Vérification si l'email existe déjà
- Enregistrement du nouvel utilisateur

### 5. **logout.php**
Déconnexion de l'utilisateur
- Détruit la session
- Redirige vers la page de connexion

### 6. **Seconnecter.php**
Page de connexion HTML + PHP
- Formulaire pour se connecter
- Affichage des messages d'erreur/succès

### 7. **Inscription.php**
Page d'inscription HTML + PHP
- Formulaire pour créer un compte
- Affichage des messages d'erreur

### 8. **schema.sql**
Structure de la base de données
- Table `utilisateurs` avec les champs nécessaires
- Exécuter ce script dans phpMyAdmin

## Installation et utilisation

### Étape 1 : Créer la base de données
1. Ouvrir phpMyAdmin
2. Créer une nouvelle base de données (ex: "mon_site")
3. Exécuter le script `schema.sql`

### Étape 2 : Configurer db.php
Modifier les valeurs dans db.php :
```php
define('DB_HOST', 'localhost');      // Serveur MySQL
define('DB_USER', 'root');            // Utilisateur MySQL
define('DB_PASS', '');                // Mot de passe MySQL
define('DB_NAME', 'mon_site');        // Nom de votre base
```

### Étape 3 : Utiliser dans vos pages
Pour protéger une page PHP :
```php
<?php
require_once 'pHp/session.php';
requireLogin(); // Protège la page
?>
```

Pour afficher le nom de l'utilisateur :
```php
<?php
require_once 'pHp/session.php';
echo "Bienvenue " . getCurrentUserEmail();
?>
```

### Étape 4 : Ajouter un bouton Déconnexion
```html
<a href="pHp/logout.php" class="btn">Déconnexion</a>
```

## Sécurité

✅ **Points forts du système :**
- Mots de passe hachés avec `password_hash()` (algorithme PHP standard)
- Requêtes préparées contre les injections SQL
- Validation des emails
- Vérification de longueur de mot de passe
- Utilisation des sessions PHP

⚠️ **Recommandations supplémentaires :**
- Ajouter HTTPS en production
- Implémenter un système de "Mot de passe oublié"
- Ajouter une limite de tentatives de connexion
- Enregistrer les tentatives échouées
- Ajouter une vérification d'email lors de l'inscription

## Exemple d'utilisation sur une page protégée

```php
<?php
require_once 'pHp/session.php';
requireLogin(); // Redirection si non connecté
?>
<!DOCTYPE html>
<html>
<head>
    <title>Accueil</title>
</head>
<body>
    <h1>Bienvenue <?php echo htmlspecialchars(getCurrentUserEmail()); ?></h1>
    <p>Vous êtes connecté en tant que: <?php echo htmlspecialchars($_SESSION['user_nom']); ?></p>
    <a href="pHp/logout.php">Se déconnecter</a>
</body>
</html>
```

## Problèmes courants

**Q: "Erreur de connexion à la base de données"**
A: Vérifier les paramètres dans db.php et que MySQL est en cours d'exécution

**Q: "Email ou mot de passe incorrect" lors d'une inscription valide**
A: Vérifier que la table `utilisateurs` a bien été créée avec le script schema.sql

**Q: Les sessions ne persistent pas**
A: Vérifier que les cookies sont activés dans le navigateur
