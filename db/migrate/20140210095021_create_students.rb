class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :user_id
      t.string :email
      t.string :pw
      t.string :name
      t.string :name_stu
      t.string :image
      t.string :sex
      t.integer :age
      t.string :grade
      t.integer :grade_num
      t.boolean :carspace

      t.timestamps
    end
  end
end
