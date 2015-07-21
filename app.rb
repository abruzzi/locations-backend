require 'sinatra/base'
require 'sinatra/cross_origin'

require 'json'


class Locations < Sinatra::Base
    set :public_folder,  File.dirname(__FILE__)

    register Sinatra::CrossOrigin

    configure do
        enable :cross_origin
    end

    before do
      content_type "application/json"
    end

    def load_data
      @locations = JSON.parse(File.read('locations.json'))
    end

    def initialize
        super
        load_data
    end

    get '/locations' do
      if params[:location]
        @locations.select {|item| item["name"].downcase.include?(params[:location].downcase)}.to_json
      else
        @locations.to_json
      end
    end
end
