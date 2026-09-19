'use client'
import { updateStatus } from '@/lib/Actions/admin/actiions';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const RevokeAlert = ({doctor}) => {
  const router = useRouter()
  const doctorId = doctor.doctorId
  const handleRevoke = async(status)=>{
    // console.log('work');
    const res = await updateStatus(doctorId, {status})
    if(res.modifiedCount > 0){
      toast.success('status changed')
      router.refresh()
    }

  }
    return (
        <AlertDialog>
      <Button
          variant={doctor.status === 'pending' ? 'primary' : 'danger-soft'}
        >
          {doctor.status === 'pending' ? 'Verify' : 'Revoke'}
        </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Heading>Want to {doctor.status === 'pending' ? 'verify' : 'revoke'} now?</AlertDialog.Heading>
            </AlertDialog.Header>
            
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              {doctor.status === 'verified' ? <Button slot='close' onClick={()=>handleRevoke('pending')} variant="danger">
                Revoke
              </Button> : <Button slot='close' onClick={()=>handleRevoke('verified')} variant="primary">
                Verify
              </Button>}
              
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default RevokeAlert;