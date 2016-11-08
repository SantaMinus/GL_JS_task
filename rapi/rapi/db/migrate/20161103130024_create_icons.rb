class CreateIcons < ActiveRecord::Migration[5.0]
  def change
    create_table :icons do |t|
      t.integer :icon
      t.string :name
      t.text :cap1
      t.text :cap2
      t.integer :num1
      t.integer :num2

      t.timestamps
    end
  end
end
