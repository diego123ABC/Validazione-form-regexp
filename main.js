function validazione() {
    var nome = document.modulo.nome.value.trim(); //trim toglie gli spazi vuoti all'inizio e alla fine
    var cognome = document.modulo.cognome.value.trim();
    var email = document.modulo.email.value.trim();
    var nascita = document.modulo.nascita.value.trim();
    var sesso = document.modulo.sesso.options[document.modulo.sesso.selectedIndex].value.trim();

    // Espressione regolare per il nome (consentendo lettere e spazi)
    var nome_reg_exp = /^[a-zA-Z\s]+$/;

    // Espressione regolare per il cognome (consentendo lettere e spazi)
    var cognome_reg_exp = /^[a-zA-Z\s]+$/;

    // Espressione regolare per l'email
    var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;

    // Espressione regolare per la data di nascita nel formato gg/mm/aaaa
    var data_reg_exp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}$/;

    // Validazione nome
    if (!nome.match(nome_reg_exp)) {
        alert("Il campo Nome non è valido.");
        document.modulo.nome.focus();
        return false;
    }
    // Validazione cognome
    else if (!cognome.match(cognome_reg_exp)) {
        alert("Il campo Cognome non è valido.");
        document.modulo.cognome.focus();
        return false;
    }
    // Validazione email
    else if (!email_reg_exp.test(email)) {
        alert("Inserire un indirizzo email corretto.");
        document.modulo.email.select();
        return false;
    }
    // Validazione data di nascita
    else if (!data_reg_exp.test(nascita)) {
        alert("Inserire nascita in formato gg/mm/aaaa");
        document.modulo.nascita.value = "";
        document.modulo.nascita.focus();
        return false;
    }
    // Validazione sesso
    else if (!sesso) {
        alert("Il campo Sesso è obbligatorio.");
        document.modulo.sesso.focus();
        return false;
    }

    return true;
}