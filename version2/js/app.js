const url = 'https://api.myjson.com/bins/7c40e';

function getList() {
  
    fetch(url, {
      method: "GET"
    })
  .then(response => {
      if(response.ok){
        //let rj = response.json();  
        //console.log(rj);  
        return response.json();
       
      }else{
        throw new Error("Błąd połączenia")
      }
    })
  .then(resp => resp.results)
  .then(data => console.log(data))
  //.then(data => insertContent(data, listElement))
  
}

getList();