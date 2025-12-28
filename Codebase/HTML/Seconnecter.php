<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Se Connecter</title>
    <link rel="stylesheet" href="../CSS/Seconnecter.css">
</head>
<body>
    <div class="login-container">
        <h1>Connexion</h1>
        
        <?php
        session_start();
        
        // Afficher les messages d'erreur ou de succès
        if (isset($_SESSION['error'])) {
            echo '<div class="alert alert-danger">' . $_SESSION['error'] . '</div>';
            unset($_SESSION['error']);
        }
        
        if (isset($_SESSION['success'])) {
            echo '<div class="alert alert-success">' . $_SESSION['success'] . '</div>';
            unset($_SESSION['success']);
        }
        ?>
        
        <form action="../pHp/login_process.php" method="POST" class="login-form">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Entrez votre email">
            </div>
            
            <div class="form-group">
                <label for="password">Mot de passe:</label>
                <input type="password" id="password" name="password" required placeholder="Entrez votre mot de passe">
            </div>
            
            <button type="submit" class="btn-login">Se Connecter</button>
        </form>
        
        <p class="signup-link">
            Pas encore inscrit? <a href="Inscription.html">S'inscrire ici</a>
        </p>
    </div>
</body>
</html>
