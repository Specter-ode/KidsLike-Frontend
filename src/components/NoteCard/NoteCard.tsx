import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeNote } from '../../redux/info/info-operations';
import { formatNoteDate } from '../../services/helpers/date';
import { getChildColor } from '../../services/helpers/getChildColor';
import { INote } from '../../types/info-types';
import Modal from '../Modal/Modal';
import text from './text.json';

const COLLAPSED_LENGTH = 400;

interface IProps {
  note: INote;
}

const NoteCard: React.FC<IProps> = ({ note }) => {
  const { lang } = useAppSelector(store => store.auth);
  const { children } = useAppSelector(store => store.info);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const childIndex = children.findIndex(child => child._id === note.child?._id);
  const color = getChildColor(note.child ? childIndex : -1);
  const isLong = note.text.length > COLLAPSED_LENGTH;
  const visibleText = isLong && !isExpanded ? `${note.text.slice(0, COLLAPSED_LENGTH).trimEnd()}…` : note.text;

  const closeDeleteModal = (): void => setIsDeleteModal(false);
  const handleDelete = (): void => {
    dispatch(removeNote(note._id));
    closeDeleteModal();
  };

  return (
    <li className="card relative overflow-hidden rounded-[12px] bg-main-bg shadow-base transition duration-300 hover:shadow-hover">
      <span className="absolute left-0 top-0 h-full w-[4px]" style={{ backgroundColor: color }} />
      <div className="py-[16px] pl-[20px] pr-[16px]">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 items-center">
            <span
              className="mr-[8px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-main-bg"
              style={{ backgroundColor: color }}
            >
              {note.child ? note.child.name[0]?.toUpperCase() : '?'}
            </span>
            <span className="truncate text-[14px] font-bold text-main-color">
              {note.child ? note.child.name : text[lang].deletedChild}
            </span>
            {note.child && (
              <svg className="ml-[4px] shrink-0" width="16" height="16">
                <use href={sprite + `#${note.child.gender}`}></use>
              </svg>
            )}
          </div>
          <div className="ml-[12px] flex shrink-0 items-center">
            <time dateTime={note.date} className="text-[12px] font-medium text-fifth-color">
              {formatNoteDate(note.date, lang, text[lang])}
            </time>
            <button
              type="button"
              aria-label={text[lang].delete}
              title={text[lang].delete}
              onClick={() => setIsDeleteModal(true)}
              className="visible-on-hover ml-[10px] flex h-[28px] w-[28px] items-center justify-center rounded-full border border-transparent text-fifth-color transition duration-300 hover:border-error-color hover:text-error-color focus:border-error-color focus:text-error-color focus:outline-none"
            >
              <svg className="fill-current" width={16} height={16}>
                <use href={sprite + '#delete'}></use>
              </svg>
            </button>
          </div>
        </div>

        <p className="mt-[10px] whitespace-pre-wrap break-words text-[14px] leading-[1.6] text-main-color">
          {visibleText}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setIsExpanded(prev => !prev)}
            className="mt-[6px] text-[12px] font-bold text-third-color transition hover:text-accent-color"
          >
            {isExpanded ? text[lang].showLess : text[lang].showMore}
          </button>
        )}
      </div>

      {isDeleteModal && (
        <Modal onClose={closeDeleteModal}>
          <div className="w-[280px] px-[20px] pt-[40px] pb-[20px] sMob:w-[340px]">
            <p className="mb-[20px] text-center text-[16px] font-bold">{text[lang].areYouWantDelete}</p>
            <div className="flex">
              <button type="button" onClick={handleDelete} className="btn mr-[20px] w-full">
                {text[lang].yes}
              </button>
              <button type="button" onClick={closeDeleteModal} className="btn w-full">
                {text[lang].no}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </li>
  );
};

export default NoteCard;
