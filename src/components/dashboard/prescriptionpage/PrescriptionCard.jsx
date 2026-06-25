import { Button, Card, Table } from '@heroui/react';
import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { RiFileTextLine } from 'react-icons/ri';

const PrescriptionCard = ({prescription}) => {
    return (
        <Card className="w-full mt-6">
        <div className="p-6 space-y-5">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{prescription.patientName}</h2>
              <p className="text-default-500">{prescription.Diagnosis}</p>
              <p className="text-default-500">{prescription.date}</p>
            </div>

            <div className="flex gap-2">
              <Button isIconOnly variant="bordered">
                <FiEdit2 size={18} />
              </Button>

              <Button isIconOnly variant="bordered" color="danger">
                <FiTrash2 size={18} />
              </Button>
            </div>
          </div>

          {/* Medicine Table */}
          <div className="rounded-xl overflow-hidden border">
            <Table>
              <Table.ScrollContainer>
                <Table.Content
                  aria-label="Team members"
                  className="min-w-[600px]"
                >
                  <Table.Header className={"bg-accent/30 text-foreground"}>
                    <Table.Column isRowHeader>Medicine</Table.Column>
                    <Table.Column className={'text-center'}>Dosage</Table.Column>
                    <Table.Column className={'text-center'}>Duration</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>{prescription.Medicine}</Table.Cell>
                      <Table.Cell className={'text-center'}>{prescription.Dosage}</Table.Cell>
                      <Table.Cell className={'text-center'}>{prescription.Duration}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>

          {/* Notes */}
          <div className="bg-accent/30 rounded-xl p-3 flex items-center gap-2">
            <RiFileTextLine size={18} />
            <span>Nothing</span>
          </div>
        </div>
      </Card>
    );
};

export default PrescriptionCard;