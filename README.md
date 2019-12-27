# Linked geo data proxy

This service exists only to proxy HTTPS requests from the dynamic consent prototype to HTTP linkedgeodata.org, as it's never served over HTTPS and the application would fail otherwise (as a HTTPS served website can't make request to a non HTTPS one).