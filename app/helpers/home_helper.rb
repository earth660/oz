module HomeHelper
	def current_post
		@current_post = Post.find_by_id( current_teacher.id )
	end
	
	def post_have?
		current_post != nil
	end
end
