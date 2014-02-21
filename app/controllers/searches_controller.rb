class SearchesController < ApplicationController
 before_action :set_location
	def search
	
	@location = Post.all
	
	end
	
	def test1
	end	
	
	def howto_use
	end
	
	
	
	
	private

    def set_location
      @location = Post.find_by(:user_id => current_user.id)
    end

    def location_params
     params.require(:location).permit(:address, :latitude, :longitude)
    end

end
