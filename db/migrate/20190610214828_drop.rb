class Drop < ActiveRecord::Migration[5.2]
  def change
    drop_table :items
    drop_table :lists
  end
end
