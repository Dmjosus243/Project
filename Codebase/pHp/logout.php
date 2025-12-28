<?php
session_start();

// Détruire toutes les variables de session
session_destroy();

// Rediriger vers la page de connexion
header('Location: ../HTML/Seconnecter.html');
exit();
?>
