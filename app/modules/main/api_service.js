"use strict";

var app = angular.module( "tailoredKeywords" );

app.service( "ApiService", [ "$http", "settings", function( $http, settings ) {
  var apiUrl = settings.apiUrl;

  var getAddPath = function( userId ) { return "/users/" + userId + "/keywords/add" };
  var getRemovePath = function( userId ) { return "/users/" + userId + "/keywords/remove" };


  this.add = function( term, userId ) {
    var url = apiUrl + getAddPath( userId );

    return $http.post( url, {
      phrase: term.phrase || "",
      url:  term.url || "",
      country: term.country || ""
    } )
  }
} ] );