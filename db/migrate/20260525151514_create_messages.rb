class CreateMessages < ActiveRecord::Migration[8.1]
  def change
    create_table :messages do |t|
      t.belongs_to :sender, null: false, foreign_key: { to_table: :users }
      t.text :body, null: false
      t.belongs_to :receiver, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
