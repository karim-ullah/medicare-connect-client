import AppointRow from '@/components/dashboard/appointment-requests/AppointRow';
import DashboardHeading from '@/components/dashboard/DashboardHeading';
import UserTrow from '@/components/dashboard/manageuser/UserTrow';
import { getAppointments } from '@/lib/Actions/admin/actiions';
import { Table } from '@heroui/react';
import React from 'react';

const ManageAppointments = async() => {
    const appointments = await getAppointments()

    // console.log(appointments);
    return (
        <div className='py-10 px-6'>
            <DashboardHeading tittle={'Manage Appointments'} description={'Manage all appointments with details.'}/>



        <div className="mt-3">
                <Table>
                  <Table.ScrollContainer>
                    <Table.Content aria-label="users" className="min-w-[600px]">
                      <Table.Header>
                        <Table.Column isRowHeader>Doctor</Table.Column>
                        <Table.Column>Speciality</Table.Column>
                        <Table.Column>Fee</Table.Column>
                        <Table.Column>Status</Table.Column>
                      </Table.Header>
                      <Table.Body>
                        {appointments && (
                            appointments.map((appointment) => <AppointRow key={appointment._id} appointment={appointment} />)
                        )}
                      </Table.Body>
                    </Table.Content>
                  </Table.ScrollContainer>
                </Table>
              </div>

        </div>
    );
};

export default ManageAppointments;