API Endpoints
=============

This section describes available API endpoints and their usage.

User Endpoint
-------------

Get User Information

.. code-block:: http

   GET /api/v1/users/{user_id}


Request Parameters
~~~~~~~~~~~~~~~~~~

+------------+----------+----------------+
| Parameter  | Type     | Description    |
+============+==========+================+
| user_id    | String   | User ID        |
+------------+----------+----------------+


Response Example
~~~~~~~~~~~~~~~~

.. code-block:: json

   {
       "id": "12345",
       "name": "John Smith",
       "status": "active"
   }