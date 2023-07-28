# mid-term 
tokopedia play clone (backend only)

## Database Structure
db
## API Structure

## List API request and response
#Product<br>
* Product object
```
{
  linkProduct : string,
  title : string,
  price : number
}
```
**GET /product**
---
Return all products in the system.
* **URL Params**<br>
  None
* **Data Params**<br>
  None
* **Headers**
* **Success Response**
* **Code:**  200<br>
  **Content:** 
```
{
  products : [
                {<product_object>},
                {<product_object>},
                {<product_object>},
              ]
}
```
* **Error Response:** <br>
  **Code:** 500<br>
  **Content**
`{ message : err.message }`

**GET /product/:id**
---
Return the specified user.
* **URL Params**<br>
  *Required:* `id = [integer]` 
* **Data Params**<br>
  None
* **Headers**
* **Success Response**
* **Code:**  200<br>
  **Content:** 
`{<product_object>}`
* **Error Response:** <br>
  **Code:** 500<br>
  **Content**
`{ message : err.message }`

**POST /product**
---
Create a new product and return the new object.
* **URL Params**<br>
  None 
* **Data Params**<br>
```
{
  title : string,
  price : number
}
```
* **Headers** <br>
  Content-Type: ../json
* **Success Response**
* **Code:**  200<br>
  **Content:** 
`{<product_object>}`
* **Error Response:** <br>
  **Code:** 400<br>
  **Content**
`{ message : err.message }`

**PATCH /product/:id**
---
Update field on the specified product and return the updated object.
* **URL Params**<br>
  *Required:* `id = [integer]`  
* **Data Params**<br>
```
{
  linkProduct : string,
  title : string,
  price : number
}
```
* **Headers** <br>
  Content-Type: ../json
* **Success Response**
* **Code:**  200<br>
  **Content:** 
`{<product_object>}`
* **Error Response:** <br>
  **Code:** 400<br>
  **Content**
`{ message : err.message }`

**DELETE /product/:id**
---
Delete the specified product.
* **URL Params**<br>
  *Required:* `id = [integer]`  
* **Data Params**<br>
  None
* **Headers** <br>
  Content-Type: ../json
* **Success Response**
* **Code:**  200<br>
  **Content:** 
`{<product_object>}`
* **Error Response:** <br>
  **Code:** 400<br>
  **Content**
`{ message : err.message }`

#Video<br>
* Video object
```
{
  urlImage : string,
  thumbnail : string
}
```

**GET /video/:id**
---
Return the specified video.
* **URL Params**<br>
  *Required:* `id = [integer]` 
* **Data Params**<br>
  None
* **Headers**
* **Success Response**
* **Code:**  200<br>
  **Content:** 
`{<video_object>}`
* **Error Response:** <br>
  **Code:** 500<br>
  **Content**
`{ message : err.message }`

#Comment<br>
* Comment object
```
{
  username : string,
  comment : string,
  timestamp
}
```

**GET /comment/:id/comment**
---
Return the specified comment.
* **URL Params**<br>
  *Required:* `id = [integer]` 
* **Data Params**<br>
  None
* **Headers**
* **Success Response**
* **Code:**  200<br>
  **Content:** 
`{<comment_object>}`
* **Error Response:** <br>
  **Code:** 500<br>
  **Content**
`{ message : err.message }`


## How to run on local device
1. git clone https://github.com/fairuzazzahra/mid-term
2. cd mid-term
3. create .env and adjust the environment value
4. yarn install
5. yarn run
