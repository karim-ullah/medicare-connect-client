"use server";

import { authClient } from "../auth-client";
import { serverMutation } from "../core/server";

export const addDoctorSchedule = async (data) => {

  const resData = await serverMutation("/api/doctor-schedule", "POST", data);
  return resData;
};

export const updateSchedule = async (scheduleId, data) => {
  return serverMutation(
    `/api/update-schedule?scheduleId=${scheduleId}`,
    "PATCH",
    data,
  );
};

export const updatePrescription = async (prescriptionId, data) => {
  return serverMutation(
    `/api/update-prescription?prescriptionId=${prescriptionId}`,
    "PATCH",
    data,
  );
};

export const deletePrescription = async (prescriptionId) => {
  return serverMutation(
    `/api/delete-prescription?prescriptionId=${prescriptionId}`,
    "DELETE",
  );
};

export const deleteSchedule = async (scheduleId) => {
  return serverMutation(
    `/api/delete-schedule?scheduleId=${scheduleId}`,
    "DELETE",
  );
};
