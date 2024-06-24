const express = require('express');
const app = express();

const PORT = 8000

const bioData = {
  'david': {  
        'name' : 'David Sokoya',
        'age': 18,
        'ocupation': 'developer'
   },
   'samuel': {  
    'name' : 'Sam Eagle',
    'age':48,
    'ocupation': 'UIUX Designer'
  },
  'jubril': {  
    'name' : 'Lawal Jubril',
    'age':38,
    'ocupation': 'Banker'
  },
  'unknown': {  
    'name' : 'unknown',
    'age': 'unknown',
    'ocupation': 'unknown'
  }
}

app.get('/', (request, response)=> {

  response.sendFile(__dirname+ '/index.html')
})

app.get('/api/:users', (request, response) => {
  
  const user = request.params.users.toLocaleLowerCase()
  console.log(user)
  if (bioData[user]) {
    response.json(bioData[user])
  }else {
    response.json(bioData['unknown'])
  }
})

app.listen(PORT, ()=> {
  console.log(`server is running on ${PORT} go get it!`)
})

