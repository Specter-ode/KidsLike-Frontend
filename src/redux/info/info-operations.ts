import { toast } from 'react-toastify';
import {
  IBuyGiftsResponse,
  IBuyGiftsData,
  IChild,
  IEditGiftData,
  IEditTaskData,
  IGift,
  IGiftData,
  INewChildData,
  INewNoteData,
  INote,
  ITask,
  ITaskActiveStatusData,
  ITaskActiveStatusResponse,
  ITaskCompletedStatusData,
  ITaskCompletedStatusResponse,
  ITaskData,
} from '../../types/info-types';
import { AxiosError } from 'axios';
import * as childApi from '../../services/api/child';
import * as taskApi from '../../services/api/task';
import * as giftApi from '../../services/api/gift';
import * as noteApi from '../../services/api/note';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../store';
import { setNotes } from './info-slice';
import text from './text.json';

export const addChild = createAsyncThunk<IChild, INewChildData, { rejectValue: string; state: RootState }>(
  'info/addChild',
  async (data, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await childApi.addChild(data);
      toast.success(text[lang].childAdded);
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      if (!err.response) {
        throw error;
      } else {
        if (err.response.status === 409) {
          toast.error(text[lang].childExisted);
          return rejectWithValue('Child with this name and gender already exists');
        } else {
          toast.error(text[lang].childAddFailed);
          return rejectWithValue(err.message);
        }
      }
    }
  }
);

export const getTasks = createAsyncThunk<ITask[], undefined, { rejectValue: string }>(
  'info/getTasks',
  async (_, { rejectWithValue }) => {
    try {
      const result = await taskApi.getTasks();
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;

      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const addTask = createAsyncThunk<ITask, ITaskData, { rejectValue: string; state: RootState }>(
  'info/addTask',
  async (data, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await taskApi.addTask(data);
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].addTaskFailed);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const changeTaskActiveStatus = createAsyncThunk<
  ITaskActiveStatusResponse,
  ITaskActiveStatusData,
  { rejectValue: string; state: RootState }
>('info/changeTaskActiveStatus', async (data, { rejectWithValue, getState }) => {
  const { lang } = getState().auth;
  try {
    const result = await taskApi.changeTaskActiveStatus(data);
    return result;
  } catch (error) {
    const err = error as AxiosError<string>;
    console.log('changeTaskActiveStatus error: ', error);
    toast.error(text[lang].changeTaskStatusFailed);
    if (!err.response) {
      throw error;
    } else {
      return rejectWithValue(err.message);
    }
  }
});

export const changeTaskCompletedStatus = createAsyncThunk<
  ITaskCompletedStatusResponse,
  ITaskCompletedStatusData,
  { rejectValue: string; state: RootState }
>('info/changeTaskCompletedStatus', async (data, { rejectWithValue, getState }) => {
  const { lang } = getState().auth;
  try {
    const result = await taskApi.changeTaskCompletedStatus(data);
    return result;
  } catch (error) {
    const err = error as AxiosError<string>;
    toast.error(text[lang].changeTaskStatusFailed);
    console.log('changeTaskCompletedStatus error: ', error);
    if (!err.response) {
      throw error;
    } else {
      return rejectWithValue(err.message);
    }
  }
});

export const editTask = createAsyncThunk<ITask, IEditTaskData, { rejectValue: string; state: RootState }>(
  'info/editTask',
  async (data, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await taskApi.editTask(data);
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].editTaskFailed);
      console.log('editTask error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
export const removeTask = createAsyncThunk<string, string, { rejectValue: string; state: RootState }>(
  'info/removeTask',
  async (taskId, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      await taskApi.removeTask(taskId);
      return taskId;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].removeTaskFailed);
      console.log('removeTask error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const addGift = createAsyncThunk<IGift, IGiftData, { rejectValue: string; state: RootState }>(
  'info/addGift',
  async (data, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await giftApi.addGift(data);
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].addGiftFailed);
      console.log('addGift error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const editGift = createAsyncThunk<IGift, IEditGiftData, { rejectValue: string; state: RootState }>(
  'info/editGift',
  async (data, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await giftApi.editGift(data);
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].editGiftFailed);
      console.log('editGift error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const removeGift = createAsyncThunk<string, string, { rejectValue: string; state: RootState }>(
  'info/removeGift',
  async (giftId, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      await giftApi.removeGift(giftId);
      return giftId;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].removeGiftFailed);
      console.log('removeGift error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const buyGifts = createAsyncThunk<IBuyGiftsResponse, IBuyGiftsData, { rejectValue: string; state: RootState }>(
  'info/buyGifts',
  async (data, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await giftApi.buyGifts(data);
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].buyGiftFailed);
      console.log('buyGifts error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const getNotes = createAsyncThunk<INote[], undefined, { rejectValue: string; state: RootState }>(
  'info/getNotes',
  async (_, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await noteApi.getNotes();
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].getNotesFailed);
      console.log('getNotes error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const addNote = createAsyncThunk<INote, INewNoteData, { rejectValue: string; state: RootState }>(
  'info/addNote',
  async (data, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      const result = await noteApi.addNote(data);
      return result;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].addNoteFailed);
      console.log('addNote error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const removeNote = createAsyncThunk<string, string, { rejectValue: string; state: RootState }>(
  'info/removeNote',
  async (noteId, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      await noteApi.removeNote(noteId);
      return noteId;
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].removeNoteFailed);
      console.log('removeNote error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const removeAllNotes = createAsyncThunk<void, undefined, { rejectValue: string; state: RootState }>(
  'info/removeAllNotes',
  async (_, { rejectWithValue, getState }) => {
    const { lang } = getState().auth;
    try {
      return await noteApi.removeAllNotes();
    } catch (error) {
      const err = error as AxiosError<string>;
      toast.error(text[lang].removeAllNotesFailed);
      console.log('removeAllNotes error: ', error);
      if (!err.response) {
        throw error;
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

// Background refresh for the notes page: a plain thunk, so it dispatches no pending/rejected
// actions (no loaders, no error toasts on every poll)
export const refreshNotes = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { notesVersion } = getState().info;
  try {
    const notes = await noteApi.getNotes();
    const { info } = getState();
    // skip the response if notes were added/removed locally while the request was in flight
    if (info.notesVersion !== notesVersion) return;
    if (JSON.stringify(info.notes) !== JSON.stringify(notes)) dispatch(setNotes(notes));
  } catch (error) {
    console.log('refreshNotes error: ', error);
  }
};
