function comprar(){
    swal("Compra Completada","Gracias por su compra!","succsess")
}

function getTickets(place, noTickets) {
    if (noTickets) {
      swal(
        "Oh no!",
        "You are outta luck!, there are no more tickets for " + 
        place, "info",
      );
    } else {
      swal("Sold!", "You have tickets to the " + place + 
      " concert", "success");
    }
   }