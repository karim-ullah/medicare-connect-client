import DashboardHeading from '@/components/dashboard/DashboardHeading';
import PaymentRow from '@/components/dashboard/my-appointmentPatient/PaymentRow';
import { getPayments } from '@/lib/Actions/admin/actiions';
import { Table } from '@heroui/react';
import React from 'react';

const Payment = async() => {
    const payments = await getPayments()
    // console.log(payments);
    return (
        <div className='py-10 px-6'>
            <DashboardHeading tittle={'Manage Payments'} description={'Manage all transaction details here.'}/>

            <div className="mt-3">
                <Table>
                  <Table.ScrollContainer>
                    <Table.Content aria-label="users" className="min-w-[600px]">
                      <Table.Header>
                        <Table.Column isRowHeader>Doctor</Table.Column>
                        <Table.Column>Amount</Table.Column>
                        <Table.Column>Date</Table.Column>
                        <Table.Column>Status</Table.Column>
                      </Table.Header>
                      <Table.Body>
                        {payments && (
                            payments.map((payment) => <PaymentRow key={payment._id} payment={payment} />)
                        )}
                      </Table.Body>
                    </Table.Content>
                  </Table.ScrollContainer>
                </Table>
              </div>
        </div>

        
    );
};

export default Payment;