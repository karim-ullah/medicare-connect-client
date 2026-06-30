import { Table } from '@heroui/react';
import React from 'react';

const AppointRow = ({appointment}) => {
    return (
        <Table.Row >
              <Table.Cell>{appointment.doctorName}</Table.Cell>
              <Table.Cell>{appointment.specialization}</Table.Cell>
              <Table.Cell>{appointment.price}</Table.Cell>
              <Table.Cell>
                {appointment.status}
                </Table.Cell>
            </Table.Row>
    )
}

export default AppointRow;