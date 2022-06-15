---
layout: default
title: Design
---

# Architecture

API controllers will be under their parent module’s controllers under a subdirectory `api/v{Version Number}`. For example, member API controllers will be in the path `web/members/controllers/api/v1`. Subsequent API versions will be created as needed.

## Security

Authentication should be API key-based, where a client connects with their username/email and password and is granted an API key. Basic HTTP auth should not be supported. The API key should be sent in request headers under x-api

<!-- TODO: Incomplete -->

## Routing

Routes and URI should be plural nouns and never verbs or operations – it should be strictly defined in terms of system resources or objects. There should only ever be two base URLs per resource: one to fetch the collection and one for a specific element in the collection. Concrete names should always be preferred over abstract ones.

Plan is to use the current router (`?route=module/path/to/somewhere`) and extend it to handle router variables (`?route=module/_var1/to/_var2` -> `?route=module/to` with route arguments passed to controller).

### Security concerns

This should be no less secure than the current router system since arguments are _not_ passed as arguments to the final controller method but as a property of the class, and routes can still be entered directly. Invalid data in route variables will still get filtered, so route variables are limited to strictly alphanumeric characters.

## Request inbounding

All operation must use the appropriate HTTP requests, and operation idempotency must be respected. Operations supported are listed below. Operations that are idempotent are italicized [1].

1. `GET` – Return the value of an object
2. `PUT` – Replace an object or create a named object when applicable.
3. `DELETE` – Delete an object.
4. `POST` – Create a new object based on provided data, or submit a command.
5. `HEAD` – Return metadata of object for a `GET` response. Resources that support the `GET` method may support the `HEAD` method as well.
6. `PATCH` – Apply a partial update to an object.
7. `OPTIONS` – Get information about a request.

Requests can either be in form fields or sent as data to `php://input`. The later requires headers to be set that indicate the data type.

## Response

Errors to a response should contain a code, message, and description. Description should include a relevant link to documentation. Fielded requests like POST or PATCH need fielded errors in an array. Details will be in the API specification.

# Required functionality and endpoints
