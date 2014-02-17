class CreateWeekstus < ActiveRecord::Migration
  def change
    create_table :weekstus do |t|
	  t.integer :user_id
	  t.boolean :mon
	  t.boolean :tue
	  t.boolean :wed
	  t.boolean :thu
	  t.boolean :fri
	  t.boolean :sat
	  t.boolean :sun
      t.timestamps
    end
  end
end
