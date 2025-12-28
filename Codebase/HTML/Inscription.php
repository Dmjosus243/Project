<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S'inscrire</title>
    <link rel="stylesheet" href="../CSS/Seconnecter.css">
</head>
<body>
    <div class="login-container">
        <h1>Inscription</h1>
        
        <?php
        session_start();
        
        // Afficher les messages d'erreur
        if (isset($_SESSION['error'])) {
            echo '<div class="alert alert-danger">' . $_SESSION['error'] . '</div>';
            unset($_SESSION['error']);
        }
        ?>
        
        <form action="../pHp/register_process.php" method="POST" class="login-form">
            <div class="form-group">
                <label for="nom">Nom complet:</label>
                <input type="text" id="nom" name="nom" required placeholder="Entrez votre nom">
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Entrez votre email">
            </div>
            
            <div class="form-group">
                <label for="password">Mot de passe:</label>
                <input type="password" id="password" name="password" required placeholder="Minimum 6 caractères">
            </div>
            
            <div class="form-group">
                <label for="confirm_password">Confirmer le mot de passe:</label>
                <input type="password" id="confirm_password" name="confirm_password" required placeholder="Confirmez votre mot de passe">
            </div>
            
            <button type="submit" class="btn-login">S'inscrire</button>
        </form>
        
        <p class="signup-link">
            Vous avez déjà un compte? <a href="Seconnecter.php">Se connecter ici</a>
        </p>
    </div>
</body>
</html>
