import React from 'react';
import merge from 'lodash/merge';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      title: "",
      one_liner: "",
      ingredients: {},
      directions: {},
      image_url: "",
      user_id: this.props.userId
    };
    this.updateIngredients = this.updateIngredients.bind(this);
    this.updateDirections = this.updateDirections.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateIngredients(e) {
     this.setState({
       moves: Object.assign(
         {},
         this.state.ingredients,
         { [e.target.id]: e.target.value })
     });
   }

   updateDirections(e) {
      this.setState({
        moves: Object.assign(
          {},
          this.state.directions,
          { [e.target.id]: e.target.value })
      });
    }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRecipe(this.state);
  }

  render () {
    return (
      <div className="recipe-form-container">
        <form onSubmit={this.handleSubmit} className="recipe-form-box">
          <h1>Add New Recipe</h1>
          <div className="recipe-form">
            <label>Title: <br />
              <input type="text"
                     value={this.state.title}
                     onChange={this.update("title")}
                     className="recipe-form-title" />
            </label><br />
            <label>Description: <br />
              <input type="text"
                     value={this.state.one_liner}
                     onChange={this.update("one_liner")}
                     className="recipe-form-description" />
            </label><br />

            <label>Ingredients <br />
                <div className="ingredients">
                  {this.showIngredient()}
                </div>
            </label>
            <button className="add-ingredient-button"
                    onClick={this.addIngredient}>Add Ingredient</button><br />

                  <label>Directions <br />
                <div className="directions">
                  {this.showDirection()}
                </div>
            </label>
            <button className="add-direction-button"
                    onClick={this.addDirection}>Add Direction</button><br />


            <label>Image URL: <br />
                <input type="text"
                       value={this.state.image_url}
                       onChange={this.update("image_url")}
                       className="recipe-form-image-url" />
            </label><br />

          <input type='submit' value='Add Recipe'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
