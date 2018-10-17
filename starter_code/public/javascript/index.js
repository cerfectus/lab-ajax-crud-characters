const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    $(".character-info").detach();
    charactersAPI.getFullList()


  }
  
  document.getElementById('fetch-one').onclick = function(){
    let charID = document.getElementById("fetch.one-value").nodeValue
    $(".character-info").detach();
    charactersAPI.getOneRegister();

  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
