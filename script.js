
/*-----------------------VARIABLES---------------------------*/

const 
cursores = document.querySelector("#cursores"),
containerP = document.querySelector("#containerP");


/*-----------------------FUNCIONES---------------------------*/

function changeCursor (e) {
  if (e.target.id.includes("alien1") || e.target.parentElement.id.includes("alien1")) {
    return containerP.style.cursor = "url(https://cdn.discordapp.com/attachments/884392555230421012/884406290376450068/cursorAlien.png), auto";
  }

  if (e.target.id.includes("alien2") || e.target.parentElement.id.includes("alien2")) {
    return containerP.style.cursor = "url(https://cdn.discordapp.com/attachments/884392555230421012/884406296772755486/cursorAlienPointer.png), auto";
  }

  if (e.target.id.includes("default") || e.target.parentElement.id.includes("default")) {
    return containerP.style.cursor = "url(), auto";
  }

  console.error("ERROOORRRRR!!!!!!!!!!!")
}

/*------------------------CODIGO-----------------------------*/
/*listeners*/
cursores.addEventListener("click", changeCursor)
  /*listeners*/







//TODO: 
//FIXME: 