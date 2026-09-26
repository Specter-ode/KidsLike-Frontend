import { INewNoteData, INote } from '../../types/info-types';
import instance from './auth';

export const MAX_NOTES = 20;
export const MAX_NOTE_LENGTH = 2000;

export const getNotes = async (): Promise<INote[]> => {
  const result = await instance.get<INote[]>('/note');
  return result.data;
};

export const addNote = async (data: INewNoteData): Promise<INote> => {
  const result = await instance.post<INote>('/note', data);
  return result.data;
};

export const removeNote = async (noteId: string): Promise<void> => {
  await instance.delete<void>(`/note/${noteId}`);
};

export const removeAllNotes = async (): Promise<void> => {
  await instance.delete<void>('/note');
};
