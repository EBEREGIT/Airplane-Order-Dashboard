UPDATE orders 
SET shipped_date = NULL
WHERE order_id = :order_id