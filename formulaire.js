// alert('coucou');
//on fait une fonction anonyme
$(function(){
    var choixChat = $('#choix');// on cherche le select    
    // console.log(choixChat);
    var raisonChoix = $('#raison');//on cherche le textarea
    // console.log(raisonChoix);
    var erreurs = false;// ???
    // soumission du formulaire on cherche l'id du form
    //if else
    $('#adopteChat').on('submit', function(e){
        e.preventDefault();// on empêche l'envoie du form
        // on vérifie la longueur de la valeur sélectionnée dans le select
        // les classes alert etc. viennent de Boostrap et on les applique à la class parente donc form-group
        if(choixChat.val().length == 0){
            choixChat.parent().addClass('alert alert-danger');
            erreurs = true;
        } else {
            choixChat.parent().addClass('alert alert-success');
        }
        // On vérifie la longueur du textarea (min 15 caractères)
        if(raisonChoix.val().length <= 15){
            raisonChoix.parent().addClass('alert alert-danger');
            erreurs = true;
        } else {
            raisonChoix.parent().addClass('alert alert-success');
        }
        if(erreurs === false){
            $(this).replaceWith('<div class="alert alert-succes">Bien envoyé !<div>');
        }
    });
    // on retire les classes dès que les champs changent 
    choixChat.on('change', function(e){
        $(this).parent().removeClass('alert alert-danger');
        erreurs = false;
    });
    raisonChoix.on('change', function(e){
        $(this).parent().removeClass('alert alert-danger');
        erreurs = false;
    });
});