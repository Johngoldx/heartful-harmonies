
export type EventType = 'wedding' | 'anniversary' | 'birthday' | 'proposal' | 'other';
export type Language = 'english' | 'spanish' | 'hindi' | 'french' | 'japanese' | 'other';
export type MusicStyle = 'romantic' | 'upbeat' | 'classical' | 'folk' | 'pop' | 'other';

export interface QuestionnaireData {
  eventType: EventType | null;
  language: Language | null;
  musicStyle: MusicStyle | null;
  additionalDetails: string;
  names: string;
}
