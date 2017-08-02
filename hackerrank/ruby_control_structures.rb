def scoring(array)
  array.each do |user|
        user.update_score unless user.is_admin?
    end
end


loop do
    coder.practice    
    break if coder.oh_one?
end

loop do 
    coder practice until coder.oh_one?
end

