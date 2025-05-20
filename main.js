const devises = [
  { nom: "FCFA", code: "XAF", base: 600 },
  { nom: "DOLLAR", code: "$", base: 1 },
  { nom: "EURO", code: "€", base: 0.9 }
];

//Récupération des listes de sélection
const sourceSelect = document.querySelector("#source");
const targetSelect = document.querySelector("#target");

//Récupration de zone de saisie
const amountInput = document.querySelector("#amount");

//Remplissage des listes de sélection par les éléments du tableau
devises.forEach(devise => {
  //Liste des dévises sources
  const optionSource = document.createElement("option");
  optionSource.value = devise.nom;
  optionSource.textContent = devise.nom;
  sourceSelect.appendChild(optionSource);

  //Liste des dévises cibles
  const optionTarget = document.createElement("option");
  optionTarget.value = devise.nom;
  optionTarget.textContent = devise.nom;
  targetSelect.appendChild(optionTarget);
});

//Fonction de conversion
function convert() {
  //Récuperation des valeurs
  const sourceNom = sourceSelect.value;
  const targetNom = targetSelect.value;
  const amount = parseFloat(amountInput.value);
  const convertValue = document.querySelector("#convertValue");

  //Vérification des valeurs
  if (sourceNom === "" || targetNom === "" || isNaN(amount)) {
    alert("Veuillez remplir tous les champs correctement.");
  }else{
    //Recherche des objets correspondant
    const sourceDevise = devises.find(item => item.nom === sourceNom);
    const targetDevise = devises.find(item => item.nom === targetNom);

    //Conversion en Dollar
    const amountInDollar = amount / sourceDevise.base;
    //Conversion vers une autre devise
    const amountConverti = amountInDollar * targetDevise.base;

    //Ajout de la valeur sur la page 
    convertValue.textContent = `${amountConverti.toFixed(4)}`;
  }
}