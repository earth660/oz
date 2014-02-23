
class SearchesController < ApplicationController
 before_action :set_location

	def search

	@location = Post.all	
	  if User.find(current_user[:id])
		  @user = User.find(current_user[:id])
		  @locations = Post.near($posttest, 10)#  距離検索　緯度経度 , 距離
	 end

	end
	
	def posttest
		@address = params[:address]
		$posttest =  Geocoder.coordinates(@address)
		
		redirect_to "/searches/search"
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
