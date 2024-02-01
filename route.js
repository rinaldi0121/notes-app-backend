const {addNotesHandler,
  getAllNotesHandler,
  getSpecificNotesHandler,
  editSpecificNotesHandler,
  deleteNotesById} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getSpecificNotesHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editSpecificNotesHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesById,
  },
];
module.exports=routes;
// {
//   // giving response to client with h parameter using h.response()...
//   method: 'POST',
//   path: '/user',
//   handler: (request, h)=>{
//     return h.response('created')
//         .type('text/plain')
//         .header('Custom-Header', 'some-value')
//         .code(201);
//   },
// },
// {
//   method: '*',
//   path: '/',
//   handler: (request, h)=>{
//     return 'tidak dapat diakses dengan method ini';
//   },
// },
// // you can get request.query from the user
// // without specifically adding it into the path
// // using request.query
// // but you can insert the key and value (parameter) using postman
// // ex: http://localhost:5000/?name=harry&location=bali
// {
//   method: 'GET',
//   path: '/hello/{name?}',
//   handler: (request, h) => {
//     const {name = 'stranger'} = request.params;
//     const {lang} = request.query;
//     if (lang === 'id') {
//       return `Hai, ${name}!`;
//     }
//     return `Hello, ${name} from ${lang}`;
//   },
// },
// {
//   method: 'GET',
//   path: '/about',
//   handler: (request, h)=>{
//     return 'about page';
//   },
// },
// {
//   method: '*',
//   path: '/about',
//   handler: (request, h)=>{
//     return 'tidak dapat diakses dengan method ini';
//   },
// },
// // path parameter getting it from request.params
// // (dynamic parameter according to client request with optional parameter)
// // can make multiple parameter
// // but the optional parameter must initiated in the end path parameter
// {
//   method: 'GET',
//   path: '/users/{username?}',
//   handler: (request, h)=>{
//     // just to insert the path from request.params to variable
//     // using object destructuring to get specific path
//     const {username = 'fill the path with username'} = request.params;
//     return `page username : ${username}`;
//   },
// },
// // expected user to send payload in JSON structure
// {
//   method: 'POST',
//   path: '/login',
//   handler: (request, h)=>{
//     const {username, password} = request.payload;
//     return `Welcome ${username} your password is ${password}`;
//   },
// },
// {
//   method: '*',
//   path: '/{any*}',
//   handler: (request, h)=>{
//     return '404';
//   },
// },
