`cd #{File.join(Dir.pwd)} && bundle exec jekyll`
run Rack::Directory.new("#{File.join(Dir.pwd, "_site")}")
