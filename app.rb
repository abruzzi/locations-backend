require 'sinatra/base'
require 'json'


class Locations < Sinatra::Base
    set :public_folder,  File.dirname(__FILE__)

    def initialize 
        super
        @locations = JSON.parse(File.read('locations.json'))
    end

    get '/locations' do
        @locations.to_json
    end

    get '/locations/:location' do
        @locations.select {|item| item["name"].include?(params[:location])}.to_json
    end

    get '/' do
        File.open('index.html')
    end

    get '/test' do
        File.open('SpecRunner.html')
    end
end

