'use client'
import { updateStatus } from '@/lib/Actions/admin/actiions';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const RevokeAlert = ({doctor}) => {
  const doctorId = doctor.doctorId
  const handleRevoke = async(status)=>{
    // console.log('work');
    const res = await updateStatus(doctorId, {status})

    console.log(res, 'please');
  }
    return (
        <AlertDialog>
      <Button
          color="danger"
          variant="outline"
          className={"bg-accent/10"}
        >
          Revoke
        </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Heading>Want to revoke now?</AlertDialog.Heading>
            </AlertDialog.Header>
            
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot='close' onClick={()=>handleRevoke('verify')} variant="danger">
                Revoke
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default RevokeAlert;