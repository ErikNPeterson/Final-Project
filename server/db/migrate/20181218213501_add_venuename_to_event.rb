class AddVenuenameToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :venue_name, :string
  end
end
