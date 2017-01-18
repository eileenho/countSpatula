class Recipe < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :notes
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  def all_tags=(name)
    self.tags = name.split(", ").map do |name|
      Tag.where(name: name.strip).first_or_create!
    end
  end

  def all_tags
    self.ags.map(&:name).join(", ")
  end

end
