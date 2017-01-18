class Recipe < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :notes
end
