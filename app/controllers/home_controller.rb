class HomeController < ApplicationController

  def index
#   	$user = "hoge"
#  	$post = Post.find_by(:id => current_user[:id])
# 	$money = Money.find_by(:id => current_user[:id])

  end
  
  def teacher_form
  end
# 
#   def profile
#   	$post = Post.find_by(:id => current_user[:id])
#   end
#   
#   def login
#   end
#   
#   def post
#   end
#   
  def create
    profile_params
    user = User.find_by(:id => current_user[:id])
    
    user.name = params[:name]
#     user.email = params[:email]
    user.sex = params[:sex]
	user.long_msg = params[:long_msg]
#     if @post = Post.find_by(:id => current_user[:id]) 
#     	post.address ="hoge"
#     else


	$post = Post.find_or_create_by(:id => current_user[:id])

	$post.postal_code = params[:n2] + "-" + params[:n3]
	$post.address = params[:address]
	$post.save
	
	@money = Money.find_or_create_by(:id => current_user[:id])
	
	@money.el = params[:el]
	@money.jr = params[:jr]
	@money.hi = params[:hi]
	@money.save
	
    if user.save
      redirect_to '/home/index'
    else
      render :action => "profile"
    end
  end
  
  private
  	def profile_params
    	params.permit!# (:name, :email, :sex, :postal_code, :univ, :address, :who)
	end

end
