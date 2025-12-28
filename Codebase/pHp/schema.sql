-- Créer la table utilisateurs
CREATE TABLE IF NOT EXISTS utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
    dernier_connexion DATETIME NULL,
    actif TINYINT(1) DEFAULT 1
);

-- Ajouter un index sur l'email pour les recherches plus rapides
CREATE INDEX idx_email ON utilisateurs(email);
