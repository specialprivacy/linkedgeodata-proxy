# Linked geo data proxy

## Description
This is a docker container which runs a service that proxies HTTPS requests from the dynamic consent prototype to HTTP linkedgeodata.org, as it's never served over HTTPS and the application would fail otherwise (as a HTTPS served website can't make request to a non HTTPS one).

## Configuration
No configuration required