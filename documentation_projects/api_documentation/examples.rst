Examples
========

This section provides common API usage examples.

Request Example
---------------

.. code-block:: bash

   curl -X GET \
   https://api.example.com/v1/users/12345 \
   -H "Authorization: Bearer <token>"


Response Handling
-----------------

A successful request returns a JSON response with the requested data.

Clients should check HTTP status codes to determine whether a request
completed successfully.