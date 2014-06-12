require 'rspec'
require 'rspec/expectations'

require 'capybara/cucumber'
require 'capybara/session'
require 'json/pure'

BASE_URL = "localhost:9292"

Capybara.default_driver = :selenium
Capybara.run_server = false
Capybara.default_selector = :css
Capybara.default_wait_time = 30
Capybara.ignore_hidden_elements = false
Capybara.app = BASE_URL


FileUtils.mkdir_p 'build/reports'
