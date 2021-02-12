# express-react

**how to use**<br/>
<br/>
***cloning and installing dependency***<br/>
```
git clone git@github.com:elsetiyawan/express-react.git<br/>
cd express-react<br/>
npm install <br/>
cd client<br/>
npm install<br/>
```

***databases***
```
copy the .env.example to .env
change the MONGO_URI to your own mongdb access
```

***running the app***<br/>
you need to have nodemon and concurrently
```
npm install -g nodemon concurrently
npm run dev
```
in case you cannot run the under the concurrently
```
cd express-react
npm run server
npm run client
```
Your application will be ready in ```http://localhost:3000```

