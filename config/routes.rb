# -*- coding: utf-8 -*-
Oz::Application.routes.draw do


  get "home/index"
  get "home/indexstu"

  get "home/teacher_form"
  get "home/student_form"
  get "home/teacher_create"
  get "home/change_who"
  get "edit/index"
  
  post "home/teacher_create"
  post "home/student_create"

  post "edit/post"
  post "home/create"

  devise_for :users, path_names: {
    sign_in: "login",
    sign_out: "logout"
  }, skip: :all
  devise_scope :user do
    # registrations
    post "users" => "devise/registrations#create", as: :user_registration

    # passwords
    post "users/password" => "devise/passwords#create", as: :user_password
    get "users/password" => "devise/passwords#new", as: :new_user_password
 
    # sessions
    get "users/login" => "devise/sessions#new", as: :new_user_session
    post "users/login" => "devise/sessions#create", as: :user_session
    get "users/logout" => "devise/sessions#destroy", as: :destroy_user_session
  end


  #郵便番号検索
  get "searches/search"
  get "searches/new"
  post "searches/create"
  get "searches/show"
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  root "home#index"

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
