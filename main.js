
function establecerDireccion(keyCode)  
  {
    if (keyCode == 65 || keyCode == 37)
     {
       if (direccionViborita() == "derecha")
       {
         return "derecha"
       }
       return "izquierda"
     }  
    else if (keyCode == 87 || keyCode == 38)
     {
        if (direccionViborita() == "abajo")
       {
         return "abajo"
       }
       return "arriba"
     }
    else if (keyCode == 68 || keyCode == 39)
     {
        if (direccionViborita() == "izquierda")
       {
         return "izquierda"
       }
       return "derecha"
     }
     else if (keyCode == 83 || keyCode == 40)
     {
        if (direccionViborita() == "arriba")
       {
         return "arriba"
       }
       return "abajo"
     }
  }

function viboritaPuedeComerManzana()
  {
    if (posicionEnXDeLaViborita() == posicionEnXDeLaManzana() && posicionEnYDeLaViborita() == posicionEnYDeLaManzana())
    {
      return true
    }
  }

function aumentarPuntaje()
  {
    puntaje++
    if (puntaje % 2 == 0)
    {
      nivel++
      fps++
    }
  }
function perdio(viborita)
{
  if (posicionEnXDeLaViborita() === -1 || posicionEnYDeLaViborita() === -1 ||posicionEnXDeLaViborita() ===anchoDeLaVentana() || posicionEnYDeLaViborita() ===altoDeLaVentana() || seEnredo(viborita))
      {
        return true
      }
}