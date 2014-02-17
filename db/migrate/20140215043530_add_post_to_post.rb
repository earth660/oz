class AddPostToPost < ActiveRecord::Migration
  def change
    add_column :posts, :postal_code_1, :string
    add_column :posts, :postal_code_2, :string
  end
end
