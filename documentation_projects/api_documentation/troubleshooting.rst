Troubleshooting
===============

This section covers common API issues and possible solutions.

Authentication Failed
---------------------

**Problem**

The API returns a 401 Unauthorized response.

**Possible Causes**

- Missing authentication token
- Expired token
- Invalid credentials

**Solution**

Verify the token value and request a new token if necessary.


Invalid Request Parameters
--------------------------

**Problem**

The API returns a 400 Bad Request response.

**Solution**

Check required parameters and ensure that request formats match the API specification.