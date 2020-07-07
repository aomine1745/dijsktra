function dijkstra (w,a,z,L){
 L[a]=0;
   //vector con vertices
   //console.log("El valor inicial de los vertices es : "+L);
   
   var T=[];
   for (var i = 0; i < L.length; i++) {
    T[i]=i;
  }
  var Laux=[];
  console.log("Valor inicial de los vertices es :");
  console.log(L);
  console.log("Valor inicial de T es :");
  console.log(T);
  console.log("¡Inicia el bucle while!");
  while (T.includes(z)){
   console.log("Valores que quedan en T : "); 
   console.log(T);
   console.log("¿"+z+" pertenece a T? : "+T.includes(z));
   var v;
   var Laux=[];
   //console.log("vec "+Laux);
   //console.log("vertices : "+T);
   //console.log(T);
   //le asigno infinito a los valores que no pertenecen a T
   for (var i = 0; i < L.length; i++) {
     if(T.includes(i)){
       if(i>0){
         Laux[i]=L[i];
       }else{
        Laux[i]=Infinity;
      }
    }else{
      Laux[i]=Infinity;
    }
  }
  console.log("Vector auxiliar : ");
  console.log(Laux);
  v=encontrar_minimo(Laux);
  console.log("El mínimo valor de los vertices es: "+Math.min.apply(null,Laux));
  console.log("Entonces el vertice minimo es : "+v);

  remover_valor(T,v);
  console.log("Al remover el valor a T este queda : ");
  console.log(T);
   //poner infito al eliminado de Laux
   //console.log("vec L es "+L);
   //adyacentes
   let aux_adya=encontrar_adyacente(v,w,T);
   console.log("Los vertices adyacentes a "+v+" son : ");
   console.log(aux_adya);
   //console.log(L);
   
   for (var x = 1; x < L.length; x++) {

    if(aux_adya.includes(x)){
      let a_d=Number(L[x]);
      let b_d=Number(L[v])+Number(w[v][x]);
      console.log("Mínimo entre "+L[x]+" y "+"("+L[v]+" + "+w[v][x]+") es : "+Math.min(a_d,b_d));
      L[x]=Math.min(a_d,b_d);
      
    }

  }

}
console.log(L);
console.log("El camino más corto entre "+a+" y "+z+" es : "+L[z]);
var valor_generado="<p class='matrix-result'>El camino más corto entre "+a+" y "+z+" es: "+L[z]+"</p>";
document.getElementById("matrices").innerHTML = valor_generado;
}

function encontrar_minimo(vect){
  var aux=0;
  for (var i = 0; i < vect.length; i++) {
    if(vect[i]==Math.min.apply(null,vect)){
      aux=i;
      break;
    }
  }
  return aux;
}

function remover_valor ( vect, item ) {
  var i = vect.indexOf( item );

  if ( i !== -1 ) {
    vect.splice( i, 1 );
  }
}

function encontrar_adyacente (v,matriz,t){
  var vector_adyacentes=[];

  for (var i of t) {
   if(i>0){
     if(matriz[v][i]>0){
       vector_adyacentes.push(i);
     }
   }
 }
 return vector_adyacentes;
}