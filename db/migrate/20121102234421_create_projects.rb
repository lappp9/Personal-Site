class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :picture
      t.string :lang
      t.string :title
      t.string :url
      t.text :description

      t.timestamps
    end
  end
end
