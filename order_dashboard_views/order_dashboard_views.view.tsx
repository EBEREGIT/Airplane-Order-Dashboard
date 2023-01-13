import { Stack, Table, Title, useComponentState } from "@airplane/views";

const OrderDashboard = () => {
  const customers = useComponentState("customers");
  const selectedCustomer = customers.selectedRow;

  return (
    <Stack>
      <Title>Traders</Title>
      <Stack>
        {/* customers */}
        <Table
          id="customers"
          title="Customers"
          task="list_customers"
          hiddenColumns={["contact_title", "fax", "region"]}
          rowSelection="single"
        />

        {/* orders */}
        {selectedCustomer && (
          <Table
            id="orders"
            title={`Orders: ${selectedCustomer.company_name}`}
            hiddenColumns={[
              "ship_via",
              "ship_name",
              "ship_address",
              "ship_city",
              "ship_region",
              "ship_postal_code",
              "ship_country",
              "employee_id",
            ]}
            task={{
              slug: "list_customer_orders",
              params: { customer_id: selectedCustomer.customer_id },
            }}

            // ship and unship
            rowActions={[
              {
                slug: "ship_order",
                label: "Ship",
              },
              {
                slug: "unship_order",
                label: "unship",
              },
            ]}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default OrderDashboard;
