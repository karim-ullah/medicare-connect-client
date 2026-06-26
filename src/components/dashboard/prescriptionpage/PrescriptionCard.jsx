'use client'
import { Button, Card, Table } from '@heroui/react';
import React, { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { RiFileTextLine } from 'react-icons/ri';
import EditCard from './EditCard';
import { deletePrescription } from '@/lib/doctor/action';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const PrescriptionCard = ({prescription}) => {
  const router = useRouter()
  const prescriptionId = prescription._id
  const [open, setOpen] = useState(false)
  const handleEdit = ()=>{
    setOpen(true)
  }

  const handleDelete =async()=>{
    const res = await deletePrescription(prescriptionId)
    if(res.deletedCount > 0){
      toast.success('prescription deleted successfully')
      router.refresh()

    }
  }
    return (
      <>
      {open &&(
        <EditCard prescription={prescription} setOpen = {setOpen}></EditCard>
      )}
        <Card className="w-full mt-6">
        <div className="p-3 space-y-3">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{prescription.patientName}</h2>
              <p className="text-default-500">{prescription.Diagnosis}</p>
              <p className="text-default-500">{prescription.date}</p>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleEdit} isIconOnly variant="outline" className={'bg-accent/10 text-foreground hover:bg-white'}>
                <FiEdit2 size={18} />
              </Button>

              <Button onClick={handleDelete} isIconOnly variant="outline" color="danger" className={'bg-accent/10 text-foreground hover:bg-white'}>
                <FiTrash2 size={18} />
              </Button>
            </div>
          </div>

          {/* Medicine Table */}
          <div className="rounded-xl overflow-hidden border">
            <Table className='p-0 rounded-xl'>
              <Table.ScrollContainer>
                <Table.Content
                  aria-label="Team members"
                  className=""
                >
                  <Table.Header className={"bg-accent/10 text-foreground rounded-xl"}>
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
          <div className="bg-accent/10 rounded-xl p-3 flex items-center gap-2">
            <RiFileTextLine size={18} />
            <span>{prescription.Notes}</span>
          </div>
        </div>
      </Card>
      </>
    );
};

export default PrescriptionCard;