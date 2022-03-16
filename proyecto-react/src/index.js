import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root')
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function home(){
//   return (
//       <section className="banner">
//           <h1 className="titulo">Tenemos lo mejor para ti...</h1>
//       </section>
//   )
// }
// export default home;
