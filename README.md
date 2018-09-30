I used the proxy server "https://cors-anywhere.herokuapp.com/", because the data server doesn't allow cross-domain requests.
If the proxy server isn't available, you can use the local server:
- npm install
- node server.js
- change "urlProxy" in getDataFromServer() to "http://localhost:5001/"