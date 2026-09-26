import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNote } from '../../redux/info/info-operations';
import { MAX_NOTES, MAX_NOTE_LENGTH } from '../../services/api/note';
import { getChildColor } from '../../services/helpers/getChildColor';
import text from './text.json';

const NoteForm: React.FC = () => {
  const { lang } = useAppSelector(store => store.auth);
  const { children, notes } = useAppSelector(store => store.info);
  const [childId, setChildId] = useState<string>('');
  const [noteText, setNoteText] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (children.length === 1) setChildId(children[0]._id);
  }, [children]);

  const length = noteText.length;
  const isTextEmpty = noteText.trim().length === 0;
  const canSubmit = Boolean(childId) && !isTextEmpty && !isSaving;

  const submit = async (): Promise<void> => {
    if (!canSubmit) return;
    setIsSaving(true);
    const result = await dispatch(addNote({ childId, text: noteText.trim() }));
    setIsSaving(false);
    if (addNote.fulfilled.match(result)) setNoteText('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submit();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      submit();
    }
  };

  const counterColor =
    length >= MAX_NOTE_LENGTH
      ? 'text-error-color'
      : length > MAX_NOTE_LENGTH * 0.9
      ? 'text-accent-color'
      : 'text-fifth-color';

  return (
    <form onSubmit={handleSubmit} className="rounded-[12px] bg-main-bg p-[20px] shadow-base sTablet:p-[24px]">
      <h2 className="mb-[16px] flex items-center text-[16px] font-bold text-main-color">
        <span className="mr-[10px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-accent-color">
          <svg width={14} height={14}>
            <use href={sprite + '#pencil'}></use>
          </svg>
        </span>
        {text[lang].newNote}
      </h2>

      <p className="mb-[10px] text-[12px] font-medium uppercase tracking-[0.04em] text-second-color">
        {text[lang].forWhom}
      </p>

      {children.length === 0 ? (
        <div className="mb-[16px] rounded-[8px] bg-third-bg-color p-[12px] text-[12px] font-medium text-second-color">
          {text[lang].noChildren}
          <Link to="/main" className="ml-[4px] font-bold text-accent-color hover:underline">
            {text[lang].addChild}
          </Link>
        </div>
      ) : (
        <div role="radiogroup" aria-label={text[lang].forWhom} className="mb-[16px] flex flex-wrap gap-[8px]">
          {children.map((child, index) => {
            const isSelected = child._id === childId;
            return (
              <button
                key={child._id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setChildId(child._id)}
                className={`flex items-center rounded-full border-2 py-[4px] pl-[4px] pr-[12px] text-[13px] font-medium transition duration-300 focus:outline-none focus:ring focus:ring-accent-color focus:ring-opacity-50 ${
                  isSelected
                    ? 'border-accent-color bg-second-accent-color text-main-color'
                    : 'border-line-color bg-main-bg text-second-color hover:border-accent-color hover:text-main-color'
                }`}
              >
                <span
                  className="mr-[6px] flex h-[24px] w-[24px] items-center justify-center rounded-full text-[12px] font-bold text-main-bg"
                  style={{ backgroundColor: getChildColor(index) }}
                >
                  {child.name[0]?.toUpperCase()}
                </span>
                {child.name}
                <svg className="ml-[4px]" width="16" height="16">
                  <use href={sprite + `#${child.gender}`}></use>
                </svg>
              </button>
            );
          })}
        </div>
      )}

      <div className="relative">
        <textarea
          value={noteText}
          onChange={e => setNoteText(e.target.value.slice(0, MAX_NOTE_LENGTH))}
          onKeyDown={handleKeyDown}
          maxLength={MAX_NOTE_LENGTH}
          placeholder={text[lang].placeholder}
          rows={6}
          disabled={children.length === 0}
          className="block min-h-[140px] w-full resize-y rounded-[8px] border border-gray-300 px-[14px] pt-[12px] pb-[28px] text-[14px] leading-[1.5] text-main-color outline-none transition placeholder:text-fifth-color focus:border-[2px] focus:border-accent-color focus:px-[13px] focus:pt-[11px] disabled:cursor-not-allowed disabled:bg-third-bg-color"
        />
        <span
          className={`pointer-events-none absolute bottom-[8px] right-[12px] text-[11px] font-medium ${counterColor}`}
        >
          {length} / {MAX_NOTE_LENGTH}
        </span>
      </div>

      <p className="mt-[8px] min-h-[18px] text-[12px] font-medium text-error-color">
        {!childId && !isTextEmpty && children.length > 0 ? text[lang].chooseChild : ''}
      </p>

      <button className="btn mt-[4px] w-full" type="submit" disabled={!canSubmit}>
        {isSaving ? text[lang].saving : text[lang].save}
      </button>

      <p className="mt-[10px] hidden text-center text-[11px] text-fifth-color sLaptop:block">{text[lang].shortcut}</p>

      {notes.length >= MAX_NOTES && (
        <p className="mt-[12px] flex items-start rounded-[8px] bg-second-accent-color/60 p-[10px] text-[12px] font-medium text-second-color">
          <svg className="mr-[8px] mt-[1px] shrink-0" width="14" height="14">
            <use href={sprite + '#attention'}></use>
          </svg>
          {text[lang].limitHint}
        </p>
      )}
    </form>
  );
};

export default NoteForm;
