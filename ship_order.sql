UPDATE orders 
SET shipped_date = NOW()
WHERE order_id = :order_id