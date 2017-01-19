Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :recipes
    resources :notes
    resources :tags, only: [:index, :show, :create, :destroy]
  end
  get 'api/recipes/:id/tags', to: 'api/recipes#tags'
  delete 'api/tagging/:id', to: 'api/tags#destroyTagging'
end
