import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      title: "",
      ingredients: [""],
      directions: [""],
      image_url: "",
      user_id: this.props.userId
    };
    this.addIngredient = this.addIngredient.bind(this);
    this.editIngredient = this.editIngredient.bind(this);
    this.showIngredient = this.showIngredient.bind(this);
    this.addDirection = this.addDirection.bind(this);
    this.editDirection = this.editDirection.bind(this);
    this.showDirection = this.showDirection.bind(this);
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

  addIngredient(e) {
    e.preventDefault();
    let newIngredients = merge([], this.state.ingredients);
    newIngredients.push("");
    this.setState({
      ingredients: newIngredients
    });
  }

  editIngredient(i) {
    return e => {
      let newIngredients = merge([], this.state.ingredients);
      newIngredients[i] = e.currentTarget.value;
      this.setState({
        ingredients: newIngredients
      });
    };
  }

  showIngredient() {
    if (this.state.ingredients) {
      return this.state.ingredients.map( (ingredient, i) =>
        <div>
          <input type="text"
               value={ingredient}
               key={i}
               onChange={this.editIngredient(i)}
               className="recipe-form-input" /><br />
        </div>
      );
    }
  }

  addDirection(e) {
    e.preventDefault();
    let newDirections = merge([], this.state.directions);
    newDirections.push("");
    this.setState({
      directions: newDirections
    });
  }

  editDirection(i) {
    return e => {
      let newDirections = merge([], this.state.directions);
      newDirections[i] = e.currentTarget.value;
      this.setState({
        directions: newDirections
      });
    };
  }

  showDirection() {
    if (this.state.directions) {
      return this.state.directions.map( (direction, i) =>
        <div>
          <input type="text"
             value={direction}
             key={i}
             onChange={this.editDirection(i)}
             className="recipe-form-input"/><br />
         </div>
      );
    }
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
            <button onClick={this.cloudinate} className="image-button">Add Image</button>
          </div>
        );
      } else {
        return(
          <div>
            <img src={this.state.image_url}/>
            <button onClick={this.removeImage} className="image-button">Replace Image</button>
          </div>
        );
      }
    }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRecipe(this.state)
      .then(data => this.props.router.push(`/profile/${data.recipe.id}`));
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit} className="recipe-form-box">
          <h1>Add New Recipe</h1>
            <label>Title: <br />
              <input type="text"
                     value={this.state.title}
                     onChange={this.update("title")}
                     className="recipe-form-input" />
                 </label><br />

          <label>Ingredients: <br />
                <div className="ingredients">
                  {this.showIngredient()}
                </div>
            </label>
            <button className="add-input-button"
                    onClick={this.addIngredient}>Add Another Ingredient</button><br />

                  <label>Directions: <br />
                <div className="directions">
                  {this.showDirection()}
                </div>
            </label>
            <button className="add-input-button"
                    onClick={this.addDirection}>Add Next Direction</button><br />
            <label className="recipe-form-label">Image:
              <div className="image-form">
                {this.handleImageSubmit()}
              </div>
            </label><br/>

          <input type='submit' value='Add Recipe' className="add-input-button"></input>
        </form>
    );
  }
}

// <label>Description: <br />
//   <input type="text"
//          value={this.state.one_liner}
//          onChange={this.update("one_liner")}
//          className="recipe-form-input" />
// </label><br />

export default withRouter(RecipeForm);
