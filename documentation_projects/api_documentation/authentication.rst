Authentication
==============

API authentication ensures that only authorized users can access protected resources.

Authentication Method
---------------------

This API uses token-based authentication.

Clients must include an access token in the request header:

.. code-block:: http

   Authorization: Bearer <access_token>


Authentication Workflow
-----------------------

1. User sends login credentials.
2. Server validates the credentials.
3. Server returns an access token.
4. Client includes the token in subsequent API requests.