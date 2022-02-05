let url = "http://localhost:2222/city";
let restaurantUrl = "http://localhost:2222/restaurants?city_id=";
function getCity(){
    fetch(url)
    .then((res) => (res.json()))
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(data[i].city_name)
            element.appendChild(text)
            element.value=data[i].id
            document.getElementById('city').appendChild(element)

        }
    }) 
}

const getRestaurant = () =>{
    const cityId = document.getElementById('city').value;
    while (restaurant.length>0){
        restaurant.remove(0)
    }
    fetch(`${restaurantUrl}${cityId}`)
    .then((res) => (res.json()))
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(data[i].name)
            element.appendChild(text)
            document.getElementById('restaurant').appendChild(element)

        }
    })
}




function CloseDiv(){
    document.getElementById('coupon').style.visibility="hidden"
}