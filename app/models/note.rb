class Note < ApplicationRecord
  validates :note, presence: true

  belongs_to :recipe
end
