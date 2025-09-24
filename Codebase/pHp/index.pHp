<?php
// Configuration de la base de données
$host = 'localhost';
$db   = 'nom_de_la_base';
$user = 'utilisateur';
$pass = 'mot_de_passe';
$charset = 'utf8mb4';

// Connexion à la base de données avec PDO
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connexion réussie à la base de données.";
} catch (\PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
    exit;
}

// Exemple : Création d'une table utilisateurs
$sql = "CREATE TABLE IF NOT EXISTS utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
$pdo->exec($sql);

// Exemple : Insertion d'un utilisateur
/*
$nom = 'Jean Dupont';
$email = 'jean@example.com';
$mot_de_passe = password_hash('monmotdepasse', PASSWORD_DEFAULT);

$stmt = $pdo->prepare("INSERT INTO utilisateurs (nom, email, mot_de_passe) VALUES (?, ?, ?)");
$stmt->execute([$nom, $email, $mot_de_passe]);
*/

// Exemple : Récupération des utilisateurs
/*
$stmt = $pdo->query("SELECT * FROM utilisateurs");
while ($row = $stmt->fetch()) {
    echo $row['nom'] . " - " . $row['email'] . "<br>";
}
*/
?>