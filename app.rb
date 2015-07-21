require 'sinatra/base'
require 'sinatra/cross_origin'

require 'json'
require 'httparty'

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
      url = "http://s3-us-west-2.amazonaws.com/testable-js-datastore/locations.json"
      response = HTTParty.get(url)
      @locations = JSON.parse(response.body)
    end

    def initialize
        super
        load_data
    end

    get '/refresh' do
      load_data
      redirect '/locations'
    end

    get '/locations' do
      if params[:location]
        @locations.select {|item| item["name"].downcase.include?(params[:location].downcase)}.to_json
      else
        @locations.to_json
      end
    end

    get '/' do
      File.open('index.html').read
    end
end
