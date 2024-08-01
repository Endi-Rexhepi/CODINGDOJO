function addLike(idOfPost){
    likeNr = document.getElementById(idOfPost)
    likeNr.innerText =  parseInt(likeNr.innerText)+1
}