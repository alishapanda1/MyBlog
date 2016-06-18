var React=require('react');


var Editor=React.createClass({
  handleTitleChange: function(e) {
    this.setState({Title: e.target.value});
  },
  handleContentChange: function(e) {
    this.setState({Content: e.target.value});
  },
  handleSavePost: function(e) {
     e.preventDefault();
     //this.props.handleCloseModal();

     var Content = this.state.Content;
     var Title = this.state.Title;
     if (!Title || !Content) {
         return;
     }
    $.ajax({
     url: "http://localhost:8080/api/posts/add",
     dataType: 'json',
     type: 'POST',
     data: this.state,
     success: function(data) {
       console.log('saved');

     }.bind(this),
     error: function(xhr, status, err) {
       console.error("http://localhost:8080/api/posts/add", status, err.toString());
     }.bind(this)
   });
   //transition.redirect('/login', null, { redirect: transition.path });

   },
  render: function(){
    return(<div className="col-lg-12" id="editor">
      <form method="POST" action="#" className="form-horizontal" onSubmit={this.handleSavePost}>
      <input className="col-lg-6" ref="title" type="text" name="Title" onChange={this.handleTitleChange} placeholder="Add Title here..."/><br/><br/>
      <textarea className="col-lg-12" ref="content" rows="6" name="Content" onChange={this.handleContentChange} placeholder="What is on your mind today ?..."></textarea><br/><br/><br/><br/><br/><br/><br/>
      <input className="btn btn-primary btn-block" type="submit" value="Post to Wall" />
      </form>
      </div>);
  }
});



module.exports=<Editor />;
