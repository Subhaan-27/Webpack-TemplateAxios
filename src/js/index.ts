import axios, { AxiosResponse, AxiosError } from "../../node_modules/axios/index";
function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });   
  }
  function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').nodeValue;
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos', {
      params: {
        id: todoId
      }
    })
    .then(function (response) {
      console.log(response);
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
  }

  document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);
function performPostRequest(e:any) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').nodeValue;
  resultElement.innerHTML = '';
  
  axios.post('http://jsonplaceholder.typicode.com/todos', {
    userId: '1',
    title: todoTitle,
    completed: false
  })
  .then(function (response) {
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
    resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
  
  e.preventDefault();
}



  
  function generateSuccessHTMLOutput(response:AxiosResponse) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }
  function generateErrorHTMLOutput(error:AxiosError) {
    return  '<h4>Result</h4>' + 
            '<h5>Message:</h5> ' + 
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5> ' + 
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
  }

