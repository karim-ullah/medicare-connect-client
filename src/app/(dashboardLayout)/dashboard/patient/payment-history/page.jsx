import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { getMyPayments } from "@/lib/Actions/patient/action";
import { getUser } from "@/lib/core/session";
import { Card, Table } from "@heroui/react";

const PaymentHistory = async () => {
  const user = await getUser();
  const patientId = user?.id;

  const payments = (await getMyPayments(patientId)) ?? [];

  return (
    <div className="px-6 py-10">
      <DashboardHeading
        tittle={"Payment History"}
        description={"All your transaction records"}
      />

      <Card className="mt-6">
        <h3 className="text-lg font-semibold text-foreground">
          Transaction Records
        </h3>

        {payments.length > 0 ? (
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Payment history"
                className="min-w-[600px]"
              >
                <Table.Header>
                  <Table.Column isRowHeader>Transaction Id</Table.Column>
                  <Table.Column>Doctor</Table.Column>
                  <Table.Column>Date</Table.Column>
                  <Table.Column>Method</Table.Column>
                  <Table.Column>Amount</Table.Column>
                  <Table.Column>Status</Table.Column>
                </Table.Header>
                <Table.Body>
                  {payments.map((item) => (
                    <Table.Row key={item._id}>
                      <Table.Cell>
                        TXN:{" "}
                        {item.transactionId
                          ? item.transactionId.length > 15
                            ? `${item.transactionId.slice(0, 15)}...`
                            : item.transactionId
                          : "—"}
                      </Table.Cell>
                      <Table.Cell>{item.doctorName}</Table.Cell>
                      <Table.Cell>{item.paymentDate}</Table.Cell>
                      <Table.Cell>Credit card</Table.Cell>
                      <Table.Cell>${item.price}</Table.Cell>
                      <Table.Cell>Paid</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        ) : (
          <p className="mt-4 rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted">
            No transactions yet.
          </p>
        )}
      </Card>
    </div>
  );
};

export default PaymentHistory;
