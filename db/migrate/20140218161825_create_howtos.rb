class CreateHowtos < ActiveRecord::Migration
  def change
    create_table :howtos do |t|
      t.integer :user_id
	  t.boolean :howto1
	  t.boolean :howto2
	  t.boolean :howto3
	  t.boolean :howto4
	  t.boolean :howto5
	  t.boolean :howto6
  	  t.boolean :howto7
	  t.boolean :howto8
	  t.boolean :howto9
  	  t.boolean :howto10
	  t.boolean :howto11
	  t.boolean :howto12
      t.timestamps
    end
  end
end
