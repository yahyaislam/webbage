var title = document.getElementById('t'),
    prix = document.getElementById('p'),
    taxes = document.getElementById('x'),
    ads = document.getElementById('a'),
    discount = document.getElementById('d'),
    total = document.getElementById('l'),
    count = document.getElementById('c'),
    category = document.getElementById('g'),
    create = document.getElementById('e'),
    searach = document.getElementById('search'),
    aaa = 'update',
    // matgayie wahmi == i
    temp;


// 7isab total 
function tot(){
    if( prix.value != ''){
        total.innerHTML = (+prix.value + +taxes.value + +ads.value) - +discount.value
        total.style.background = 'green'
    }else{
        total.style.background = 'rgb(118, 6, 6)'
    }
}

// creat
// na5admo bl araay ba ki ndif wahd jdid mattfasaach li 9ablo
var dat;
if(localStorage.product != null){ 
             //na7awlo ll array
    dat = JSON.parse(localStorage.product)
}else{
    dat = [];
}

create.onclick = function(){
    var ne = {title:title.value,
              prix:prix.value,
              taxes:taxes.value,
              ads:ads.value,
              discount:discount.value,
              total:total.innerHTML,
              count:count.value,
              category:category.value,
           }  
           // nasta3mal puch bah ndif ne fi nihayt dat

           // char6 li n3adlo bih fl mantoj
           if(  aaa == 'update'){

            dat[temp]=ne
            aaa='create'
            create.innerHTML = 'create'
            count.style.display = 'block'
            
           }else{ 
               // nas5dam bokl tadhar lmontjat 3la 7sab llcount
              if(ne.count > 1){
                 for(var i = 0;i<ne.count;i++){
                 dat.push(ne);
                       }
               }else{
                  dat.push(ne);
                   }
           }

            // nasta3mloha bah ki ndir rilod maytasawch   // n7awlo ll string
            localStorage.setItem('product',JSON.stringify(dat))
         ad();   
         del();
         tot();
            
}
// tafrig input kinlad fi create na5dmha wn3aytalha fl onclick
  function del(){
      title.value = ''
      prix.value = ''
      taxes.value = ''
      ads.value = ''
      discount.value = ''
      total.innerHTML = ''
      count.value = ''
      category.value = ''  
}  
  // idhar lmontjat
function ad(){ 
    var tabel = '';
    for(var i = 0;i < dat.length; i++){
        tabel +=  `
        <tr>
        <td>${i}</td>
        <td>${dat[i].title}</td>
        <td>${dat[i].prix}</td>
        <td>${dat[i].taxes}</td>
        <td>${dat[i].ads}</td>
        <td>${dat[i].discount}</td>
        <td>${dat[i].total}</td>
        <td>${dat[i].count}</td>
        <td>${dat[i].category}</td>
        <td><button onclick="upda( ${i} )" class="up" >update</button></td>
        <td><button onclick="du( ${i} )" class="de">delete</button></td>
     </tr>
        `
    }
    document.getElementById('tbody').innerHTML = tabel;

    // idhar button 7adf kol almontajat
    var all = document.getElementById('all');
    if(dat.length > 0){
      all.innerHTML = `<button onclick="det()">delete all (${dat.length})</button>`
     }else{
        all.innerHTML =''
     }
}ad(); 

// 7adf montaj
function du(i){
    // lil 7adf min achacha
     dat.splice(i,1);
    // lil7adf min localstorage
    localStorage.product = JSON.stringify(dat)
      ad();
}
// 7adf kol almontajat
function det(){
   localStorage.clear()
   dat.splice(0)
   ad();
} 
 // na3adlo fl montaj ta3na
function upda(i){
  title.value = dat[i].title
  prix.value = dat[i].prix
  taxes.value = dat[i].taxes
  ads.value = dat[i].ads
  discount.value = dat[i].discount
  category.value = dat[i].category
  tot();
  count.style.display = 'none'
  create.innerHTML = 'update'
  temp=i;
  aaa = 'update';
  scroll({
    top:0,
  //  behavior: 'smooth',
  })
}
//  ta7did 6ari9At alba7th
 var bb = 'hoo';
function sear(id){
    searach = document.getElementById('search');
    if(id == 'tital'){
        searach.placeholder = 'search'
    bb = 'hoo';
    searach.value = ''
    }else{
        searach.placeholder = 'search'
         bb = 'category';
         searach.value = ''
    }
    searach.focus()
     ad();
 

}
 // alba7th 3an mantoj
 function yah(value){
    var tabel = '';
    if(bb == 'hoo'){
        for(var i=0 ; i < dat.length ; i++){
            if(dat[i].title.includes(value)){
                tabel +=  `
                <tr>
                <td>${i}</td>
                <td>${dat[i].title}</td>
                <td>${dat[i].prix}</td>
                <td>${dat[i].taxes}</td>
                <td>${dat[i].ads}</td>
                <td>${dat[i].discount}</td>
                <td>${dat[i].total}</td>
                <td>${dat[i].count}</td>
                <td>${dat[i].category}</td>
                <td><button onclick="upda( ${i} )" class="up" >update</button></td>
                <td><button onclick="du( ${i} )" class="de">delete</button></td>
             </tr>
                `;
             }
         }
     }else{
        for(var i=0 ; i < dat.length ; i++){
            if(dat[i].category.includes(value)){
                tabel +=  `
                <tr>
                <td>${i}</td>
                <td>${dat[i].title}</td>
                <td>${dat[i].prix}</td>
                <td>${dat[i].taxes}</td>
                <td>${dat[i].ads}</td>
                <td>${dat[i].discount}</td>
                <td>${dat[i].total}</td>
                <td>${dat[i].count}</td>
                <td>${dat[i].category}</td>
                <td><button onclick="upda( ${i} )" class="up" >update</button></td>
                <td><button onclick="du( ${i} )" class="de">delete</button></td>
             </tr>
                `;
             }
         }
     }
     document.getElementById('tbody').innerHTML = tabel;
    
 } 

