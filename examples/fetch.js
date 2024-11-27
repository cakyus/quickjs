
import * as std from "std";

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// @param String body
// @param ResponseOption options

function Response(body, options){

  this.body = body;

  this.text = function(){
    return this.body; 
  };
}

function ResponseOption(){

  // @var status 
  // The status code for the response. The default value is 200. 

  this.status = "200";

  // @var statusText

  // The status message associated with the status code, such as "OK". The
  // default value is "".

  this.statusText = "";

  // @var headers

  // Any headers you want to add to your response, contained within a Headers
  // object or object literal of String key/value pairs (see HTTP headers for a
  // reference). By default this is empty. 

  this.headers = [];
}

export function fetch(url){

  // curl --location "https://developer.mozilla.org/"
  let body = "Hello World !";

  let options = new ResponseOption();
  options.status = "200";
  options.statusText = "OK";

  let command = "curl --silent --location https://developer.mozilla.org/";

  let f = std.popen(command, "r");
  body = f.readAsString();
  f.close();

  let response = new Response(body, options);

  return response;
}
