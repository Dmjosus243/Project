<?php
session_start();
require_once 'db.php';

// Traiter la soumission du formulaire d'inscription
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nom = isset($_POST['nom']) ? trim($_POST['nom']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';
    $confirm_password = isset($_POST['confirm_password']) ? trim($_POST['confirm_password']) : '';
    
    $error = '';
    
    // Validation des champs
    if (empty($nom) || empty($email) || empty($password) || empty($confirm_password)) {
        $error = "Veuillez remplir tous les champs.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Format d'email invalide.";
    } elseif (strlen($password) < 6) {
        $error = "Le mot de passe doit contenir au moins 6 caractères.";
    } elseif ($password !== $confirm_password) {
        $error = "Les mots de passe ne correspondent pas.";
    } else {
        // Vérifier si l'email existe déjà
        $sql = "SELECT id FROM utilisateurs WHERE email = ?";
        $stmt = $conn->prepare($sql);
        
        if ($stmt) {
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows > 0) {
                $error = "Cet email est déjà enregistré.";
            } else {
                // Hacher le mot de passe
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                
                // Insérer le nouvel utilisateur
                $sql = "INSERT INTO utilisateurs (nom, email, mot_de_passe, date_inscription) VALUES (?, ?, ?, NOW())";
                $stmt = $conn->prepare($sql);
                
                if ($stmt) {
                    $stmt->bind_param("sss", $nom, $email, $hashed_password);
                    
                    if ($stmt->execute()) {
                        // Inscription réussie
                        $_SESSION['success'] = "Inscription réussie! Vous pouvez maintenant vous connecter.";
                        header('Location: ../HTML/Seconnecter.html');
                        exit();
                    } else {
                        $error = "Erreur lors de l'inscription: " . $stmt->error;
                    }
                    $stmt->close();
                } else {
                    $error = "Erreur de requête: " . $conn->error;
                }
            }
            $stmt->close();
        } else {
            $error = "Erreur de requête: " . $conn->error;
        }
    }
    
    // Si erreur, rediriger vers l'inscription avec le message
    if (!empty($error)) {
        $_SESSION['error'] = $error;
        header('Location: ../HTML/Inscription.html');
        exit();
    }
}
?>
