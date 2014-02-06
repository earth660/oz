class HomeController < ApplicationController

  def index
#   	$teacher = "hoge"
 	$post = Post.find_by(:id => current_teacher[:id])
	$money = Money.find_by(:id => current_teacher[:id])

  end

  def profile
  	$post = Post.find_by(:id => current_teacher[:id])
  end
  
  def login
  end
  
#↓  開発用ユーザーチェンジ
  def teacher
    profile_params
    teacher = Teacher.find_by(:id => current_teacher[:id])

	teacher.who = "teacher"

   if teacher.save
      redirect_to '/home/index'
    else
      render :action => "index"
    end

  end
  
  def home 
    profile_params
    teacher = Teacher.find_by(:id => current_teacher[:id])
	teacher.who = "home"
    if teacher.save
      redirect_to '/home/index'
    else
      render :action => "index"
    end


  end
#↑   開発用ユーザーチェンジ
 
  
  def post
  end
  
  def create
    profile_params
    teacher = Teacher.find_by(:id => current_teacher[:id])
    
    teacher.name = params[:name]
#     teacher.email = params[:email]
    teacher.sex = params[:sex]
	teacher.long_msg = params[:long_msg]
#     if @post = Post.find_by(:id => current_teacher[:id])
#     	post.address ="hoge"
#     else


	$post = Post.find_or_create_by(:id => current_teacher[:id])

	$post.postal_code = params[:n2] + "-" + params[:n3]
	$post.address = params[:address]
	$post.save
	
	@money = Money.find_or_create_by(:id => current_teacher[:id])
	
	@money.el = params[:el]
	@money.jr = params[:jr]
	@money.hi = params[:hi]
	@money.save
	
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
