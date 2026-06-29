import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { getMyPayments } from "@/lib/Actions/patient/action";
import { getUser } from "@/lib/core/session";
import { Card, Table } from "@heroui/react";
import React from "react";

const PaymentHistory = async () => {
  const user = await getUser();
  const patientId = user?.id;

  const payment = await getMyPayments(patientId);

  return (
    <div className="py-10 px-6">
      <DashboardHeading
        tittle={"Payment History"}
        description={"All your transaction records"}
      />

      <Card className="mt-6">
        <h3 className="font-semibold text-foreground text-lg">Transaction Records</h3>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Transaction Id</Table.Column>
                <Table.Column>Doctor</Table.Column>
                <Table.Column>Date</Table.Column>
                <Table.Column>Method</Table.Column>
                <Table.Column>Amount</Table.Column>
                <Table.Column>Status</Table.Column>
              </Table.Header>
              <Table.Body>
                {payment &&
                  payment.map((item) => (
                    <Table.Row key={item._id}>
                      <Table.Cell> TXN:
                        {item.transactionId.length > 15
                          ? `${item.transactionId.slice(0, 15)}...`
                          : item.transactionId}
                      </Table.Cell>
                      <Table.Cell>{item.doctorName}</Table.Cell>
                      <Table.Cell>{item.paymentDate}</Table.Cell>
                      <Table.Cell>{item.price}</Table.Cell>
                      <Table.Cell>credit card</Table.Cell>
                      <Table.Cell>Paid</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </Card>
    </div>
  );
};

export default PaymentHistory;
