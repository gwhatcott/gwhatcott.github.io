
    var section = document.querySelector('section');
    let URL ="/termproject/js/services.json";
    fetch(URL)
        .then(response => response.jsn())
        .then(function (data) {
            console.log('Json object from getData function:');
            console.log(data);
    }
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
request.send();
        request.onload = function() {
  var services = request.response;
  
  showServices(services);
}
 

function showServices(jsonObj) {
  var services = jsonObj['services'];
      
  for (var i = 0; i < services.length; i++) {
     
       if (i==2) {
                continue;}
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');

    myH2.textContent = services[i].name;
    myPara1.textContent = 'Name: ' + services[i].name;
    myPara2.textContent = 'Price: ' + services[i].price;
        
    var events = towns[i].events;
    for (var j = 0; j < events.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = events[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    
  }
}
