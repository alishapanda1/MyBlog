var React = require('react');

// var PostList = require('./PostList');


var Blog = React.createClass({

    loadPostsFromServer: function(){
        $.ajax({
            url: "http://localhost:8080/api/posts",
            dataType: 'json',
            cache: false,
            success: function(data) {
              console.log(data);
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("http://localhost:8080/api/posts", status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadPostsFromServer();
        setInterval(this.loadPostsFromServer, 2000);
    },


    render : function(){
      var myposts=[];
      this.state.data.forEach(function(post){
        if(post.Title != null){
          myposts.push(<div className="myPost" id="mypost"><h3>{post.Title}</h3><br/>
            <h4>{post.Content}</h4></div>);
        }
      });
        return(
            <div className="myPosts" id="myposts">
            {myposts}
                </div>
        );
    }
});

module.exports = <Blog /> ;
