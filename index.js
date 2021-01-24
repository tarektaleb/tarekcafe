function getData() {
    fetch('https://cafetarek.herokuapp.com/data')
        .then(response => response.json())
        .then(json => {
            mainul = document.getElementById('mainUl')
            for (let i = 0; i < json.length; i++) {
                var li = document.createElement('li')
                li.innerHTML = json[i].name;
                li.className = 'list-group-item'
                mainul.appendChild(li);
            }
        })
}