var React=require('react');
var Router=require('react-router');
var Routes=require('./Routes.js');

// var Hello=React.createClass({
//   render: function(){
//     return(<div>Hello</div>)
//   }
// });


React.render(Routes, document.getElementById('mycontainer'));
