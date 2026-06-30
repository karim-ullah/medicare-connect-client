import { Table } from '@heroui/react';
import React from 'react';

const PaymentRow = ({payment}) => {
    return (
        <Table.Row >
                      <Table.Cell>{payment.doctorName}</Table.Cell>
                      <Table.Cell>{payment.price}</Table.Cell>
                      <Table.Cell>{payment.paymentDate}</Table.Cell>
                      <Table.Cell>
                        Paid
                        </Table.Cell>
                    </Table.Row>
    );
};

export default PaymentRow;