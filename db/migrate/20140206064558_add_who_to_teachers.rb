class AddWhoToTeachers < ActiveRecord::Migration
  def change
    add_column :teachers, :who, :string
  end
end
