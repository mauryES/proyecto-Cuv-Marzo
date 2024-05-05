
function comprar(){
    swal("Compra Completada","Gracias por su compra!","succsess")
}

function getTickets(place, noTickets) {
    if (noTickets == 0) {
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
  //  <--------------------------------------------------------------->
  
  let tickets = {
    "BuenosAires": 55,
    "RioDeJaneiro":23,
    "Madrid":1,
    "Paris":0,
    "Berlin":100,
    
 }