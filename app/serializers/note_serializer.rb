class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  belongs_to :notebook
end
