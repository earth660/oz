class HomeController < ApplicationController
  def index
#   	$teacher = "hoge"
 	$post = Post.find_by(:id => current_teacher[:id])
  end

  def profile
  end
  
  def login
  end
  
  def post
  end
  
  def create
    profile_params
    teacher = Teacher.find_by(:id => current_teacher[:id])
    
    teacher.name = params[:name]
#     teacher.email = params[:email]
    teacher.sex = params[:sex]

#     if @post = Post.find_by(:id => current_teacher[:id])
#     	post.address ="hoge"
#     else

	$post = Post.find_or_create_by(:id => current_teacher[:id])

	$post.postal_code = params[:postal_code]
	$post.address = params[:address]
	$post.save
	
	
    if teacher.save
      redirect_to '/home/index'
    else
      render :action => "profile"
    end
  end
  
    private
  def profile_params
    params.permit!# (:name, :email, :sex, :postal_code, :univ, :address)
  end

end
