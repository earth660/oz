class HomeController < ApplicationController

  def index
#   	$user = "hoge"
#  	$post = Post.find_by(:id => current_user[:id])
# 	$money = Money.find_by(:id => current_user[:id])

  end
  
  def change_who
    
    if current_user.who == "teacher"
	    current_user.who = "student"
	    current_user.save
	    redirect_to '/home/indexstu'
	else
	    current_user.who = "teacher"
	    current_user.save
	    redirect_to '/home/index'
	end
	
  end
  
  def teacher_form
  	Teacher.where(:user_id => current_user.id).first_or_create
  	Post.where(:user_id => current_user.id).first_or_create
  	Money.where(:user_id => current_user.id).first_or_create do |f|
  	 f.el = '2000'
  	 f.jr = '2000'
  	 f.hi = '2000'
  	end
  	
  	$teacher = Teacher.find_by(:user_id => current_user.id)
  	$post = Post.find_by(:user_id => current_user.id)
  	$money = Money.find_by(:user_id => current_user.id)  	
 		
  end
  
  def student_form

    Student.where(:user_id => current_user.id).first_or_create
  	Poststu.where(:user_id => current_user.id).first_or_create
  	Subjectstu.where(:user_id => current_user.id).first_or_create
  	Weekstu.where(:user_id => current_user.id).first_or_create

  	
  	$student = Student.find_by(:user_id => current_user.id)
  	$post = Poststu.find_by(:user_id => current_user.id)
  	$money = Money.find_by(:user_id => current_user.id)
 	$week = Weekstu.find_by(:user_id => current_user.id)

  end

  def teacher_create
  	profile_params

  	
  	$teacher.name = params[:name]
  	$teacher.univ = params[:univ]
  	$teacher.faculty = params[:faculty]
  	$teacher.long_msg = params[:long_msg]

  	$post.postal_code_1 = params[:n2]
  	$post.postal_code_2 = params[:n3]
  	$post.postal_code = params[:n2] + "-" + params[:n3]
  	
	$money.el = params[:el]
	$money.jr = params[:jr]
	$money.hi = params[:hi]
	
  	if $teacher.save
  		$post.save
  		$money.save

  		redirect_to '/home/index'
  	else
        render :action => "profile"
    end

  	
  end
  
    def student_create
  	profile_params

  	
  	$student.name = params[:name]
  	$student.name_stu = params[:name_stu]

  	$post.postal_code_1 = params[:n2]
  	$post.postal_code_2 = params[:n3]
  	$post.postal_code = params[:n2] + "-" + params[:n3]
  	
  	

  	if $student.save
  		$post.save

  		redirect_to '/home/indexstu'
  	else
        render :action => "profile"
    end

  	
  end
  

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
