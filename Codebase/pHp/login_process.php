<?php
session_start();
require_once 'db.php';

// Traiter la soumission du formulaire
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';
    
    // Validation des champs
    if (empty($email) || empty($password)) {
        $error = "Veuillez remplir tous les champs.";
    } else {
        // Vérifier l'email dans la base de données
        $sql = "SELECT id, nom, email, mot_de_passe FROM utilisateurs WHERE email = ?";
        $stmt = $conn->prepare($sql);
        
        if ($stmt) {
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows == 1) {
                $user = $result->fetch_assoc();
                
                // Vérifier le mot de passe
                if (password_verify($password, $user['mot_de_passe'])) {
                    // Connexion réussie - créer les variables de session
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['user_email'] = $user['email'];
                    $_SESSION['user_nom'] = $user['nom'];
                    
                    // Rediriger vers la page d'accueil
                    header('Location: ../HTML/index.html');
                    exit();
                } else {
                    $error = "Email ou mot de passe incorrect.";
                }
            } else {
                $error = "Email ou mot de passe incorrect.";
            }
            $stmt->close();
        } else {
            $error = "Erreur de requête: " . $conn->error;
        }
    }
}
?>
