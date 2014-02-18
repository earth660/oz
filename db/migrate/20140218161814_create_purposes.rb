class CreatePurposes < ActiveRecord::Migration
  def change
    create_table :purposes do |t|
	  t.integer :user_id
	  t.boolean :record
	  t.boolean :pass
	  t.boolean :conquer
	  t.boolean :level
	  t.boolean :basic
	  t.boolean :applied
	  t.boolean :mygoal
	  t.boolean :refusal
	  t.boolean :capacity

      t.timestamps
    end
  end
end
