export type FormDataType= {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  occupation: string;
  income: string;
  idType: "aadhaar" | "passport" | "driving" | "voter";
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