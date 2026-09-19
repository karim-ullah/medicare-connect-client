"use client";
import { Button, Card, Table } from "@heroui/react";
import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { RiFileTextLine } from "react-icons/ri";
import EditCard from "./EditCard";
import { deletePrescription } from "@/lib/doctor/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const PrescriptionCard = ({ prescription }) => {
  const router = useRouter();
  const prescriptionId = prescription._id;
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const res = await deletePrescription(prescriptionId);
    if (res.deletedCount > 0) {
      toast.success("Prescription deleted successfully");
      router.refresh();
    }
  };

  return (
    <>
      {open && <EditCard prescription={prescription} setOpen={setOpen} />}

      <Card className="w-full">
        <div className="space-y-3 p-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold">{prescription.patientName}</h2>
              <p className="text-muted">{prescription.Diagnosis}</p>
              <p className="text-muted">{prescription.date}</p>
            </div>

            <div className="flex shrink-0 gap-2">
              <Button
                onClick={() => setOpen(true)}
                isIconOnly
                variant="secondary"
                aria-label="Edit prescription"
              >
                <FiEdit2 size={18} />
              </Button>

              <Button
                onClick={handleDelete}
                isIconOnly
                variant="danger-soft"
                aria-label="Delete prescription"
              >
                <FiTrash2 size={18} />
              </Button>
            </div>
          </div>

          {/* Medicine Table */}
          <div className="overflow-hidden rounded-xl border">
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Prescription medicine">
                  <Table.Header>
                    <Table.Column isRowHeader>Medicine</Table.Column>
                    <Table.Column className="text-center">Dosage</Table.Column>
                    <Table.Column className="text-center">Duration</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>{prescription.Medicine}</Table.Cell>
                      <Table.Cell className="text-center">
                        {prescription.Dosage}
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        {prescription.Duration}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>

          {/* Notes */}
          {prescription.Notes && (
            <div className="flex items-start gap-2 rounded-xl bg-accent-soft p-3">
              <RiFileTextLine size={18} className="mt-0.5 shrink-0" />
              <span className="break-words">{prescription.Notes}</span>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default PrescriptionCard;
