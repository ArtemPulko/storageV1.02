var createElem = document.querySelector("button")
var table = document.getElementById("mainTable")


createElem.addEventListener('click',function(){
window.location.href = 'createPage.html';
})


if(localStorage != undefined)
{
    
    for(var i = 0;i<localStorage.length;i++)
    {

              var info = localStorage.getItem(localStorage.key(i))
             let getinfoaboutPlant = JSON.parse(info)

                 var tr = document.createElement('tr')
                 var range = 0
          for(k in getinfoaboutPlant)
          { 
            
            var temp = localStorage.key(i)
            range++
            var td = document.createElement('td')
            td.innerHTML = getinfoaboutPlant[k]
            tr.appendChild(td)
          
          }
          var red = document.createElement('button')
          red.innerHTML = "редактировать"
          var del = document.createElement('button')
          del.id = localStorage.key(i)
          red.id = localStorage.key(i) + "red"
          del.innerHTML = "Удалить запись"
          

         del.addEventListener('click',function()
         {            
            var idelem = this.id;
            localStorage.removeItem(idelem)
            location.reload();
          })
          red.addEventListener('click',function()
            {   
                var idelem = this.id;
             localStorage.setItem(0,idelem[0])
            window.location.href = 'redactPage.html';
         })
         if(red.id != "0red"  && del.id != "0del"  ){
             tr.appendChild(red)
             tr.appendChild(del)
         }
         table.appendChild(tr)
        
    }

}
