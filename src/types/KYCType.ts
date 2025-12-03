import type { SetStateAction } from "react";

export type FormDataType= {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  occupation: string;
  income: string;
  idType: "citizenship" | "passport" | "driving" | "voter";
  idNumber: string;
  panNumber: string;
}

export type IDoc = {
  name: string;
  file: File;
} | null;


export type UploadedDocsType= {
  idFront: IDoc;
  idBack: IDoc;
  selfie: IDoc;
  addressProof: IDoc;
}

export type KYCSteps  =  {
  currentStep: number;
  setCurrentStep:React.Dispatch<SetStateAction<number>>;
} & {
formData:FormDataType;
  setFormData: React.Dispatch<SetStateAction<FormDataType>>;
}
  
