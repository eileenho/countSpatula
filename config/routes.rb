Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :recipes
    resources :notes
    resources :tags, only: [:index, :show, :create, :destroy]
  end
end
