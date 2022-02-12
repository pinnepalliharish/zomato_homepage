page 1
http://localhost:7945/location   (available locations)
https://pomato-api.herokuapp.com/location

http://localhost:7945/restaurant_data   (available restaurants)
https://pomato-api.herokuapp.com/restaurant_data

http://localhost:7945/restaurant_data?state_id=1   (rest wrt state_id)
https://pomato-api.herokuapp.com/restaurant_data?state_id=1

http://localhost:7945/mealtypes    (data available quickSearch in 1st page)
https://pomato-api.herokuapp.com/mealtypes

---------------------------------------------------------------------------------------------------------------------------------------

page 2
http://localhost:7945/restaurant_data?state_id=3&meal_id=1   (rest wrt state and meal type )
https://pomato-api.herokuapp.com/restaurant_data?state_id=3&meal_id=1 

http://localhost:7945/restaurant_data?state_id=    (rest wrt state_id)
https://pomato-api.herokuapp.com/restaurant_data?state_id=

http://localhost:7945/restaurant_data?meal_id=    (rest wrt meal_id (i.e breakfast , lunch,...))
https://pomato-api.herokuapp.com/restaurant_data?meal_id=

filters 
>>cuisine filter
http://localhost:7945/filter/3?cuisine_id=4 (filter wrt to selected meal type and cuisine type)


>>cost filter
http://localhost:7945/filter/1?lcost=200&hcost=500   (filter wrt to selected meal type and cost range)
https://pomato-api.herokuapp.com/filter/1?lcost=200&hcost=500

>>cuisine and cost filter
http://localhost:7945/filter/1?lcost=400&hcost=1000&cuisine_id=1 
https://pomato-api.herokuapp.com/filter/1?lcost=400&hcost=1000&cuisine_id=1

>>cost sorting from low to high
http://localhost:7945/filter/1?cuisine_id=1&lcost=200&hcost=700&sort=1
https://pomato-api.herokuapp.com/filter/1?cuisine_id=1&lcost=200&hcost=700&sort=1

//cost sorting from high to low
http://localhost:7945/filter/1?cuisine_id=1&lcost=200&hcost=700&sort=-1
https://pomato-api.herokuapp.com/filter/1?cuisine_id=1&lcost=200&hcost=700&sort=-1

>>pagination (skip and limit of data)
http://localhost:7945/filter/1?cuisine_id=1&lcost=200&hcost=700&sort=1&skip=1&limit=1
https://pomato-api.herokuapp.com/filter/1?cuisine_id=1&lcost=200&hcost=700&sort=1&skip=1&limit=1


------------------------------------------------------------------------------------------------------------------------------------

page 3
http://localhost:7945/restaurant_data/2   (rest details(details of food which we select in 2nd page ))
https://pomato-api.herokuapp.com/restaurant_data/2

http://localhost:7945/restaurant_menu/2   (menu wrt rest)
https://pomato-api.herokuapp.com/restaurant_menu/2 

----------------------------------------------------------------------------------------------------------------------------------

page 4

localhost:7945/menuitem  (menuitems ordered by user in 3rd page)
https://pomato-api.herokuapp.com/menuitem

localhost:7945/placeOrder  (to place orders)
https://pomato-api.herokuapp.com/placeOrder

----------------------------------------------------------------------------------------------------------------------------------

page 5
http://localhost:7945/orders
https://pomato-api.herokuapp.com/orders

http://localhost:7945/orders?email="pbharish@gmail.com"
https://pomato-api.herokuapp.com/orders?email="pbharish@gmail.com"

----------------------------------------------------------------------------------------------------------------------------------

update order 

localhost:7945/updateOrder/6203fdf06cbacd5035133030?status=success   (put)
https://pomato-api.herokuapp.com/updateOrder/6203fdf06cbacd5035133030?status=success


----------------------------------------------------------------------------------------------------------------------------------

delete order

localhost:7945/deleteOrder  
https://pomato-api.herokuapp.com/deleteOrder