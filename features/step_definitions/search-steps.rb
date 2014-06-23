require "rspec"

Given /^I am on the home page$/ do
    visit "http://#{BASE_URL}/index.html"
end

Then /^I should see the search box$/ do
    page.should have_css('#locationInput')
end

When /^I type "([^"]*)" in search box$/ do |location|
    @location = location
    fill_in 'locationInput', :with => location
end

And /^I click search button$/ do
    click_on 'searchButton'
end

Then /^there are (\d)+ locations show up$/ do |number|
    page.should have_content(@location)
    all('.panel h5').length.should eq number.to_i
end

def convert pos
    {
        "1st" => 0,
        "2nd" => 1,
        "3rd" => 2,
        "4th" => 3
    }[pos.to_s]

end

When /^I liked the "([^"]*)" location$/ do |pos|
    num = convert(pos)
    all(".panel a")[num].click
end

Then /^I should see it in liked locations$/ do
    page.should have_selector('#likedPlaces .like')
end

