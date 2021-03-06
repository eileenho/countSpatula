import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.recipe;
    this.toggleVisible = this.props.toggleVisible;

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
            <button classname="image-button" onClick={this.cloudinate}>Add Image</button>
          </div>
        );
      } else {
        return(
          <div>
            <img src={this.state.image_url}/>
            <button className="image-button" onClick={this.removeImage}>Replace Image</button>
          </div>
        );
      }
    }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateRecipe({
      title: this.state.title,
      one_liner: this.state.one_liner,
      image_url: this.state.image_url,
      user_id: this.props.userId,
      id: this.state.id,
      ingredients: this.state.ingredients,
      directions: this.state.directions,
    });
    this.toggleVisible();
  }

  render () {
    return (
      <div className="recipe-form-container">
        <form onSubmit={this.handleSubmit} className="recipe-form-box">
          <h1>Edit Recipe</h1>
          <div className="recipe-form">
            <label className="form-label">Image:
              <div className="image-form">
                {this.handleImageSubmit()}
              </div>
            </label><br/>
            <label className="form-label">Title:</label> <br />
              <input type="text"
                     value={this.props.recipe.title}
                     onChange={this.update("title")}
                     className="recipe-form-input" /><br />

            <label className="form-label">Ingredients </label><br />
                <div className="ingredients">
                  {this.showIngredient()}
                </div>
            <button className="add-input-button"
                    onClick={this.addIngredient}>Add Ingredient</button><br />

                  <label className="form-label">Directions </label><br />
                <div className="directions">
                  {this.showDirection()}
                </div>
            <button className="add-input-button"
                    onClick={this.addDirection}>Add Direction</button><br />

            <input className="add-input-button" type='submit' value='Update Recipe'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditRecipeForm);
