class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
	  t.string :address
      t.float :latitude
      t.float :longitude
      t.string :postal_code
      t.string :postal_code_1
      t.string :postal_code_2

      t.timestamps
    end
  end
end
