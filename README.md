Mondido Payments for Meteor
=================

Loads the Mondido script with the merchant_id

* work in progress *

Installation
------------

```
meteor add chhib:mondido
```

Initialize Mondido on the server.

~~~js
// Server
Mondido.configure({
  merchant_id: 999 // The merchant_id
});
~~~
