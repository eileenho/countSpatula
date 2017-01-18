import React from 'react';
import { withRouter } from 'react-router';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: "",
      note: "",
      cooked_date: "",
      recipe_id: this.props.recipeId
    };
    this.cloudinate = this.cloudinate.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  cloudinate(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'di8mt9hbc',
        upload_preset: 'mtaoarpe',
        theme: 'minimal',
      },
      (errors, imageInfo) => {
        if (errors === null) {
          let cloud_url = imageInfo[0].url;
          this.setState({
            image_url: cloud_url
          });
        }
      }
    );
  }

  removeImage(){
    this.setState({
      image_url: ""
    });
  }

  handleImageSubmit(){
      if(this.state.image_url === ""){
        return(
          <div>
            <button onClick={this.cloudinate}>Add Image</button>
          </div>
        );
      } else {
        return(
          <div>
            <img src={this.state.image_url}/>
            <button onClick={this.removeImage}>Replace Image</button>
          </div>
        );
      }
    }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNote(this.state); //.then(this.props.requestRecipe(this.props.recipeId));
  }

  render() {
    return (
      <div className="note-form-container">
        <form onSubmit={this.handleSubmit} className="note-form-box">
          <h1>Add note</h1>
          <div className="note-form">
            <label>Date cooked: <br />
              <input type="date"
                     value={this.state.cooked_date}
                     onChange={this.update("cooked_date")}
                     className="note-form-date" />
            </label><br />
            <label>Note: <br />
              <input type="text"
                     value={this.state.note}
                     onChange={this.update("note")}
                     className="note-form-note" />
            </label><br />
            <label className="recipe-form-label">Image:
              <div className="image-form">
                {this.handleImageSubmit()}
              </div>
            </label><br/>
          <input type='submit' value='Add Note'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NoteForm);
