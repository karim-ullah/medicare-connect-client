'use client'
import { updatePrescription } from '@/lib/doctor/action';
import { Button, Card, Input, Label, TextArea, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';

const EditCard = ({prescription, setOpen}) => {
    const router = useRouter()
    const prescriptionId = prescription._id
    const onSubmit = async(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        const res = await updatePrescription(prescriptionId, formData)
        if(res.modifiedCount >0){
            toast.success('Prescription edited')
            setOpen(false)
            router.refresh()
        }
    }
    return (
        <Card className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Update Prescription</h3>
                  <div
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  >
                    <RxCross2></RxCross2>
                  </div>
                </div>
                <div>
                  <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <TextField
                        className="w-full"
                        name="patientName"
                        defaultValue={prescription.patientName}
                        type="text"
                        variant="secondary"
                      >
                        <Label>Patient Name</Label>
                        <Input placeholder="Enter patient name" />
                      </TextField>
                      <TextField
                        className="w-full"
                        name="date"
                        type="date"
                        defaultValue={prescription.date}
                        variant="secondary"
                      >
                        <Label>Date</Label>
                        <Input placeholder="Date" />
                      </TextField>
                      <TextField
                        className="w-full col-span-2"
                        name="Diagnosis"
                        type="text"
                        defaultValue={prescription.Diagnosis}
                        variant="secondary"
                      >
                        <Label>Diagnosis</Label>
                        <Input placeholder="Primary diagnosis" />
                      </TextField>
        
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-3 col-span-2">
                        <TextField
                          className="w-full"
                          name="Medicine"
                          type="text"
                          defaultValue={prescription.Medicine}
                          variant="secondary"
                        >
                          <Label>Medicine</Label>
                          <Input placeholder="Medicine" />
                        </TextField>
        
                        <TextField
                          className="w-full"
                          name="Dosage"
                          type="text"
                          defaultValue={prescription.Dosage}
                          variant="secondary"
                        >
                          <Label>Dosage</Label>
                          <Input placeholder="Dosage" />
                        </TextField>
                        <TextField
                          className="w-full"
                          name="Duration"
                          type="text"
                          defaultValue={prescription.Duration}
                          variant="secondary"
                        >
                          <Label>Duration</Label>
                          <Input placeholder="Duration" />
                        </TextField>
                      </div>
        
                      <TextArea
                        variant="secondary"
                        aria-label="Notes"
                        name='Notes'
                        defaultValue={prescription.Notes}
                        className="h-20 w-full col-span-2"
                        placeholder="Additional notes for patient"
                      />
                    </div>
        
                    <div>
                      <Button slot="close" type="submit">
                        Update Prescription
                      </Button>
                    </div>
                  </form>
                </div>
                <div></div>
              </Card>
    );
};

export default EditCard;