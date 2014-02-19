class HomeController < ApplicationController

  def index
#   	$user = "hoge"
#  	$post = Post.find_by(:id => current_user[:id])
# 	$money = Money.find_by(:id => current_user[:id])

  end
  
  def teacher_mypage
  end
  
  def studnet_mypage
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
#   デフォルト値の設定 本来は作成時に
  	Teacher.where(:user_id => current_user.id).first_or_create
  	Post.where(:user_id => current_user.id).first_or_create
  	Money.where(:user_id => current_user.id).first_or_create do |f|
  	 f.el = '2000'
  	 f.jr = '2000'
  	 f.hi = '2000'
  	end
  	Week.where(:user_id => current_user.id).first_or_create
  	Subject.where(:user_id => current_user.id).first_or_create  	
  	
  	$teacher = Teacher.find_by(:user_id => current_user.id)
  	$post = Post.find_by(:user_id => current_user.id)
  	$money = Money.find_by(:user_id => current_user.id)  	
 	$week = Week.find_by(:user_id => current_user.id)
 	$subject = Subject.find_by(:user_id => current_user.id)


  end
  
  def student_form
# デフォルト値の設定　本来は作成時に
    Student.where(:user_id => current_user.id).first_or_create
  	Poststu.where(:user_id => current_user.id).first_or_create
  	Subjectstu.where(:user_id => current_user.id).first_or_create
  	Weekstu.where(:user_id => current_user.id).first_or_create
  	Purpose.where(:user_id => current_user.id).first_or_create
  	Howto.where(:user_id => current_user.id).first_or_create

  	
  	$student = Student.find_by(:user_id => current_user.id)
  	$post = Poststu.find_by(:user_id => current_user.id)
  	$money = Money.find_by(:user_id => current_user.id)
 	$week = Weekstu.find_by(:user_id => current_user.id)
 	$subject = Subjectstu.find_by(:user_id => current_user.id)
 	$purpose = Purpose.find_by(:user_id => current_user.id)
 	$howto = Howto.find_by(:user_id => current_user.id)


  end

  def teacher_create
  	profile_params

  	
  	$teacher.name = params[:name]
  	$teacher.univ = params[:univ]
  	$teacher.faculty = params[:faculty]
  	$teacher.long_msg = params[:long_msg]
  	$teacher.car = params[:car]
  	$teacher.car_license = params[:car_license]

  	$post.postal_code_1 = params[:n2]
  	$post.postal_code_2 = params[:n3]
  	$post.postal_code = params[:n2] + "-" + params[:n3]
  	
	$money.el = params[:el]
	$money.jr = params[:jr]
	$money.hi = params[:hi]
	
	$subject.math = params[:mat]
  	$subject.english = params[:eng]
  	$subject.society = params[:soc]
  	$subject.science = params[:sci]
  	$subject.japanese = params[:jap]
  	$subject.other = params[:etc]
 	
 	$week.mon = params[:mon]
 	$week.tue = params[:tue]
 	$week.wed = params[:wed]
 	$week.thu = params[:thu]
 	$week.fri = params[:fri]
 	$week.sat = params[:sat]
 	$week.sun = params[:sun]
 	
  	if $teacher.save
  		$post.save
  		$money.save
  		$subject.save
  		$week.save

  		redirect_to '/home/index'
  	else
        render :action => "profile"
    end

  	
  end
  
    def student_create
  	profile_params
  	$student.name = params[:name]
  	$student.name_stu = params[:name_stu]
  	$student.sex = params[:sex]
  	$student.grade = params[:grade]
  	$student.grade_num = params[:grade_num]


  	$post.postal_code_1 = params[:n2]
  	$post.postal_code_2 = params[:n3]
  	$post.postal_code = params[:n2] + "-" + params[:n3]
  	
  	$subject.math = params[:mat]
  	$subject.english = params[:eng]
  	$subject.society = params[:soc]
  	$subject.science = params[:sci]
  	$subject.japanese = params[:jap]
  	$subject.other = params[:etc]
 	
 	$week.mon = params[:mon]
 	$week.tue = params[:tue]
 	$week.wed = params[:wed]
 	$week.thu = params[:thu]
 	$week.fri = params[:fri]
 	$week.sat = params[:sat]
 	$week.sun = params[:sun]
 	
 	$purpose.record = params[:record]
 	$purpose.pass = params[:pass]
 	$purpose.conquer = params[:conquer]
 	$purpose.level = params[:level]
 	$purpose.basic = params[:basic]
 	$purpose.applied = params[:applied]
 	$purpose.mygoal = params[:mygoal]
 	$purpose.refusal = params[:refusal]
 	$purpose.capacity = params[:capacity]
 	
 	$howto.howto1 = params[:howto1]
 	$howto.howto2 = params[:howto2]
 	$howto.howto3 = params[:howto3]
 	$howto.howto4 = params[:howto4]
 	$howto.howto5 = params[:howto5]
 	$howto.howto6 = params[:howto6]
 	$howto.howto7 = params[:howto7]
 	$howto.howto8 = params[:howto8]
 	$howto.howto9 = params[:howto9]
 	$howto.howto10 = params[:howto10]
 	$howto.howto11 = params[:howto11]
 	$howto.howto12 = params[:howto12]

  	if $student.save
  		$post.save
  		$subject.save
  		$week.save
  		$purpose.save
  		$howto.save
  		
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
