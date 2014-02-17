class RenameTeacherIdToMoney < ActiveRecord::Migration
  def up
  	rename_column :Money, :teacher_id, :user_id
  end
  
  def down
  	rename_column :Money, :user_id, :teacher_id
  end
end
