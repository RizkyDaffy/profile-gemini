
export interface ProfileData {
  name: string;
  username: string;
  role: string;
  company: string;
  tagline: string;
  imageUrl: string;
  socials: {
    email?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    discord?: string;
  };
}
