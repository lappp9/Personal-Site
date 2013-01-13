source 'http://rubygems.org'

gem 'rails', '3.1.1'
gem 'haml'
gem 'haml-rails'
gem 'thin'
gem 'newrelic_rpm'
gem "friendly_id", "~> 4.0.9"
# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'
#
group :production do
  gem 'pg'
end
group :development, :test do
  gem 'sqlite3'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.1.4'
  gem 'coffee-rails', '~> 3.1.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

gem 'annotate', ">=2.5.0"

group :development, :test do
  gem 'database_cleaner'
  gem 'capybara', :require => false
  gem 'launchy'
  gem 'autotest-growl'
  gem 'spork', '0.9.2'
  gem 'ruby-debug19', require: 'ruby-debug'
  gem 'pow-debug'
end

group :test do 
gem 'factory_girl'
  gem 'cucumber-rails', :require => false
  gem 'cucumber-rails-training-wheels', :require => false
  gem 'rspec-rails'
  gem 'ZenTest'
  gem 'autotest-fsevent'
  gem 'rb-fsevent', '0.9.1', :require => false
  gem 'growl', '1.0.3'
  gem 'simplecov', :require => false
end 


group :test do
  # Pretty printed test output
  gem 'turn', :require => false
end
