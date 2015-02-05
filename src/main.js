
var React = require('react');

var converter = new Showdown.converter();

var data = [
  {"title":"Test","imagelink":"./images/IMG_1367.JPG","text":"Lorem Ipsum"},
  {"title":"Test2","imagelink":"./images/IMG_1367.JPG","text":"Lorem *Ipsum* Test"}
];

var PictureBox = React.createClass({
  render: function(){
    return(
      <div className="gallery">
        <h1>Gallery Tuto</h1>
        <PictureList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

var PictureList = React.createClass({
  render: function(){
    var pictureNodes = this.props.data.map(function (picture) {
      return(
        <Picture title={picture.title} imagelink={picture.imagelink} >
        {picture.text}
        </Picture>
      );
    });
    return(
      <div className="pictureList">
        {pictureNodes}
      </div>
    );
  }
});

var Picture = React.createClass({
  render: function(){
    return (
      <div class="picture">
        <h2>{this.props.title}</h2>
      <img src={this.props.imagelink}/>
      <p>{converter.makeHtml(this.props.children.toString())}</p>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return(
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

React.render(
    // <Gallery picturesData={picturesArray}/>,
    <PictureBox url="{data}" />,
    document.getElementById('main')
)