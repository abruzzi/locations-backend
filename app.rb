require 'sinatra/base'
require 'sinatra/cross_origin'

require 'json'


class Locations < Sinatra::Base
    set :public_folder,  File.dirname(__FILE__)
    
    register Sinatra::CrossOrigin

    configure do
        enable :cross_origin
    end

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

    # get '/' do
    #     File.open('index.html')
    # end

    # get '/test' do
    #     File.open('SpecRunner.html')
    # end
end

