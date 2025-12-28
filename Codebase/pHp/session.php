<?php
// Démarrer la session
session_start();

// Vérifier si l'utilisateur est connecté
function isLoggedIn() {
    return isset($_SESSION['user_id']) && isset($_SESSION['user_email']);
}

// Rediriger vers la page de connexion si pas connecté
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: Seconnecter.html');
        exit();
    }
}

// Obtenir l'ID de l'utilisateur connecté
function getCurrentUserId() {
    return $_SESSION['user_id'] ?? null;
}

// Obtenir l'email de l'utilisateur connecté
function getCurrentUserEmail() {
    return $_SESSION['user_email'] ?? null;
}
?>
