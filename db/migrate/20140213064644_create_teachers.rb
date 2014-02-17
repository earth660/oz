class CreateTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.integer :user_id
      t.string :email
      t.string :pw
      t.string :name
      t.string :image
      t.string :sex
      t.integer :age
      t.string :univ
      t.string :faculty
      t.string :dept
      t.string :acmail
      t.text :short_msg
      t.text :long_msg
      t.boolean :car
      t.boolean :car_license
      t.string :ac_license

      t.timestamps
    end
  end
end
