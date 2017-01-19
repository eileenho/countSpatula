class Tagging < ApplicationRecord
  validates :recipe, :tag, presence: true
  belongs_to :recipe
  belongs_to :tag
end
