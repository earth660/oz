class CreateSubjectstus < ActiveRecord::Migration
  def change
    create_table :subjectstus do |t|
      t.integer :user_id
	  t.string :math
	  t.string :english
	  t.string :society
	  t.string :science
	  t.string :japanese
	  t.string :program
	  t.string :art 
	  t.string :think
	  t.string :other
      t.timestamps
    end
  end
end
