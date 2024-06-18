import { ImageSourcePropType } from "react-native";
import { WithExtras } from "./types";

export interface HeaderButtonProps {
  icon: ImageSourcePropType;
  dimension?: string;
  handlePress?: () => void;
}

export interface FetchQueryParams {
  [key: string]: string | number;
}
export interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
  handleClick: () => void;
}
interface CardProps {
  item: WithExtras<JobData>;
}

export interface PopularJobCardProps extends CardProps {
  selectedJob: string;
  handleCardPress: (item: JobData) => void;
}

export interface NearbyJobCardProps extends CardProps {
  handleNavigate: () => void;
}

export interface JobData {
  employer_name: string;
  employer_logo: string;
  job_id: string;
  job_title: string;
  job_country: string;
  job_employment_type?: string;
  job_highlights?: JobHighlights;
}

export interface CompanyProps {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
}

export interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

export interface SpecificTabContentProps {
  title: string;
  points: string[];
}

interface JobHighlights {
  Qualifications: string[];
  Responsibilities: string[];
}

export interface JobAboutProps {
  info: string;
}

export interface JobFooterProps {
  url: string;
}
