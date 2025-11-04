<?php
// Pour le terminal Windows, mieux vaut utiliser fgets(STDIN)
echo "Veuillez entrer votre note : ";
$note = (int)fgets(STDIN);

if ($note < 0 || $note > 20) {
    echo "Note invalide ! La note doit être entre 0 et 20.";
} elseif ($note < 10) {
    echo "Vous avez échoué.";
} elseif ($note == 10) {
    echo "Vous avez la moitié.";
} elseif ($note > 10 && $note <= 20) {
    echo "Vous avez réussi.";
}
?>