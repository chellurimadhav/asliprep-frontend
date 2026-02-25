import { useContent } from "./useContent";

export type BusinessInfo = {
  name: string;
  addressLines: string[];
  cityStatePin: string;
  phoneDisplay: string;
  phoneTelHref: string;
  primaryEmail: string;
  secondaryEmail?: string;
  whatsappNumber: string; // e.g. 919346832477 (no +)
  websiteUrl: string;
  googleMapsUrl: string;
};

const defaultBusinessInfo: BusinessInfo = {
  name: "Asli Prep Foundation",
  addressLines: [
    "Plot No. 47, Rd No: 4A,",
    "Golden Tulip Estates, Kondapur,",
  ],
  cityStatePin: "Hyderabad, Telangana - 500 084",
  phoneDisplay: "+91 9346832477",
  phoneTelHref: "tel:+919346832477",
  primaryEmail: "info@asliprep.com",
  secondaryEmail: "asliprep@gmail.com",
  whatsappNumber: "919346832477",
  websiteUrl: "https://www.asliprep.com",
  googleMapsUrl:
    "https://maps.google.com/?q=Plot+No.+47,+Rd+No:+4A,+Golden+Tulip+Estates,+Kondapur,+Hyderabad,+Telangana+500084",
};

export function useBusinessInfo() {
  return useContent<BusinessInfo>("businessInfo", defaultBusinessInfo);
}

