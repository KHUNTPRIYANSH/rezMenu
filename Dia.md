# functional diagram

+---------------------+        +----------------------+        +---------------------+
|      Home Page      |        |   Admin Dashboard    |        | Order Management   |
|                     |        |                      |        |        Page         |
+---------------------+        +----------------------+        +---------------------+
           |                              |                               |
           |                              |                               |
     [Customer]                    [Admin/Management]               [Admin/Management]
           |                              |                               |
+---------------------+        +----------------------+        +---------------------+
|       Menu Page     |        |  Kitchen Interface   |        |   Waiter/Waitress   |
|                     |        |                      |        |                     |
|  - Displays Menu    |        |  - Receives Orders   |        | - Receives Prepared |
|  - Allows Selection |        |  - Prepares Food     |        |    Orders           |
+---------------------+        +----------------------+        +---------------------+
           |                              |                               |
           |                              |                               |
     [Customer]                    [Kitchen Staff]                [Waiter/Waitress]
           |                              |                               |
+---------------------+        +----------------------+        +----------------------+
| Customization Page  |        |   Payment Page       |        |  Order Confirmation  |
|                     |        |                      |        |          Page        |
| - Asks Customization|        |  - Processes Payment |        | - Confirms the Order |
|   Questions         |        |  - Payment Gateway   |        | - Sends Order to     |
+---------------------+        +----------------------+        |   Kitchen            |
           |                              |                    +----------------------+
           |                              |                              |
     [Customer]                    [Payment Processor]                   |
           |                              |                              |
+---------------------+        +----------------------+                  |
|   Combo Display     |        |                      |                  |
|        Page         |        |                      |                  |
|  - Displays Custom  |        |                      |                  |
|    Food Combo       |        |                      |                  |
+---------------------+        +----------------------+                  |
           |                                                             |
           |                                                             |
     [Customer]                                                          |
           |                                                             |
+---------------------+                                                  |
|    Waiter/Waitress  |                                                  |
|                     |                                                  |
| - Serves Prepared   |                                                  |
|   Food to Customer  |__________________________________________________|
+---------------------+                                                  


# dfd

   +-------------------------+     +------------------------+
   |                         |     |                        |
   |       Customer          |     |      Admin/Staff       |
   |                         |     |                        |
   +-------------------------+     +------------------------+
                 |                           |
                 |                           |
      +----------+----------+        +-------+---------+
      |                     |        |                 |
      |   Scan QR Code      |        |    Admin        |
      |                     |        |    Manages      |
      +----------+----------+        |    System       |
                 |                   +-------+---------+
                 |                           |
      +----------+----------+        +-------+---------+
      |                     |        |                 |
      |    Access Menu      |        |  View Analytics |
      |                     |        |  and Reporting  |
      +----------+----------+        |                 |
                 |                   +-----------------+
                 |                           |
      +----------+----------+        +-------+---------+
      |                     |        |                 |
      |  Select "Surprise   |        |  Manage Orders  |
      |  Me" Option         |        |  and Forward to |
      |                     |        |  Kitchen        |
      +----------+----------+        +-------+---------+
                 |                           |
                 |                           |
      +----------+----------+        +-------+---------+
      |                     |        |                 |
      |   Answer            |        |  Kitchen Staff  |
      |   Customization     |        |  Prepares Food  |
      |   Questions         |        |                 |
      |                     |        +-----------------+
      +----------+----------+
                 |
                 |
      +----------+----------+
      |                     |
      |  Review & Confirm   |
      |  Order              |
      |                     |
      +----------+----------+
                 |
                 |
      +----------+----------+
      |                     |
      |   Proceed to        |
      |   Payment           |
      |                     |
      +----------+----------+
                 |
                 |
      +----------+----------+
      |                     |
      |   Receive Prepared  |
      |   Food              |
      |                     |
      +----------+----------+
                 |
                 |
      +----------+----------+
      |                     |
      |  Enjoy Meal         |
      |                     |
      +---------------------+


# webpage structure 

                                      [Home Page]
                                           |
                     +---------------------+---------------------+
                     |                                           |
               [Menu Page]                                 [Admin Dashboard]
                     |                                           |
      +--------------+--------------+              +-------------+---------------+
      |                             |              |                             |
[Customization Page]         [Payment Page]    [Order Management Page]        [Kitchen Interface]
      |                             |              |                             |
      +--------------+--------------+              +-------------+---------------+
                     |                                           |
          +----------+----------+                     +----------+----------+
          |                     |                     |                     |
    [Combo Display Page]  [Order Confirmation Page] [Admin Dashboard]   [Waiter/Waitress Interface]
