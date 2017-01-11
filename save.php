<a href="index.html"><h1>kotiin</h1></a>
<?php
    $name = $_POST['etunimi'];
    $lastname = $_POST['sukunimi'];
    $phone = $_POST['puhelin'];
    $spikes = $_POST['tavara'];
    
    echo $spikes;
    
    echo "Piikin tiedot:<br />
        Nimi: $name $lastname<br />
        Puhelinnnumero: $phone<br />
        Piikki: ";
    
    if (is_array($values) || is_object($values))
{
    foreach($spikes as $value){
        echo $value.text;
    }
}
?>