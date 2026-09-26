import { useEffect, useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import Container from '../../components/Container/Container';
import DotedLoader from '../../components/Loader/DotedLoader';
import Modal from '../../components/Modal/Modal';
import NoteCard from '../../components/NoteCard/NoteCard';
import NoteForm from '../../components/NoteForm/NoteForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getNotes, refreshNotes, removeAllNotes } from '../../redux/info/info-operations';
import { MAX_NOTES } from '../../services/api/note';
import text from './text.json';

const POLL_INTERVAL = 5000;

const NotesPage: React.FC = () => {
  const { lang } = useAppSelector(store => store.auth);
  const { notes, isNotesLoaded } = useAppSelector(store => store.info);
  const [isDeleteAllModal, setIsDeleteAllModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  // Keep the list in sync with other devices logged into the same account (chat-like)
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    let isPolling = false;
    let isStopped = false;

    const poll = async (): Promise<void> => {
      if (isPolling || isStopped) return;
      clearTimeout(timerId);
      isPolling = true;
      if (document.visibilityState === 'visible') await dispatch(refreshNotes());
      isPolling = false;
      if (!isStopped) timerId = setTimeout(poll, POLL_INTERVAL);
    };
    // refresh right away when the parent comes back to the tab
    const handleVisibilityChange = (): void => {
      if (document.visibilityState === 'visible') poll();
    };

    timerId = setTimeout(poll, POLL_INTERVAL);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      isStopped = true;
      clearTimeout(timerId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [dispatch]);

  const closeDeleteAllModal = (): void => setIsDeleteAllModal(false);
  const handleDeleteAll = (): void => {
    dispatch(removeAllNotes());
    closeDeleteAllModal();
  };

  return (
    <section className="min-h-[calc(100vh-130px)] py-[20px] sTablet:min-h-[calc(100vh-120px)] sTablet:py-[40px] sLaptop:pt-[32px]">
      <Container>
        <div className="mb-[20px] flex items-end justify-between sTablet:mb-[28px]">
          <div>
            <h1 className="text-[20px] font-bold text-main-color sTablet:text-[24px]">{text[lang].title}</h1>
            <p className="mt-[4px] text-[12px] font-medium text-second-color sTablet:text-[14px]">
              {text[lang].subtitle}
            </p>
          </div>
          <div className="ml-[12px] flex shrink-0 flex-col items-end gap-[8px] sTablet:flex-row sTablet:items-center sTablet:gap-[12px]">
            {notes.length > 0 && (
              <button
                type="button"
                onClick={() => setIsDeleteAllModal(true)}
                className="flex items-center rounded-full border border-error-color px-[12px] py-[4px] text-[12px] font-bold text-error-color transition duration-300 hover:bg-error-color hover:text-main-bg focus:outline-none focus:ring focus:ring-error-color focus:ring-opacity-30"
              >
                <svg className="mr-[6px] fill-current" width={14} height={14}>
                  <use href={sprite + '#delete'}></use>
                </svg>
                {text[lang].deleteAll}
              </button>
            )}
            <span
              className={`rounded-full px-[12px] py-[4px] text-[12px] font-bold ${
                notes.length >= MAX_NOTES ? 'bg-accent-color text-main-bg' : 'bg-third-bg-color text-second-color'
              }`}
            >
              {notes.length} / {MAX_NOTES}
            </span>
          </div>
        </div>

        <div className="sLaptop:grid sLaptop:grid-cols-[400px_1fr] sLaptop:items-start sLaptop:gap-[32px]">
          <div className="mb-[24px] sLaptop:sticky sLaptop:top-[20px] sLaptop:mb-0">
            <NoteForm />
          </div>

          {!isNotesLoaded ? (
            <div className="py-[40px]">
              <DotedLoader />
            </div>
          ) : notes.length === 0 ? (
            <div className="flex flex-col items-center rounded-[12px] border-2 border-dashed border-line-color px-[20px] py-[48px] text-center">
              <span className="mb-[12px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-accent-color">
                <svg width={22} height={22}>
                  <use href={sprite + '#pencil'}></use>
                </svg>
              </span>
              <p className="text-[16px] font-bold text-main-color">{text[lang].emptyTitle}</p>
              <p className="mt-[6px] max-w-[320px] text-[13px] font-medium text-second-color">{text[lang].emptyText}</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-[16px]">
              {notes.map(note => (
                <NoteCard key={note._id} note={note} />
              ))}
            </ul>
          )}
        </div>
      </Container>

      {isDeleteAllModal && (
        <Modal onClose={closeDeleteAllModal}>
          <div className="w-[280px] px-[20px] pt-[40px] pb-[20px] sMob:w-[340px]">
            <p className="text-center text-[16px] font-bold">{text[lang].areYouWantDeleteAll}</p>
            <p className="mt-[6px] mb-[20px] text-center text-[12px] font-medium text-second-color">
              {text[lang].deleteAllWarning}
            </p>
            <div className="flex">
              <button type="button" onClick={handleDeleteAll} className="btn mr-[20px] w-full">
                {text[lang].yes}
              </button>
              <button type="button" onClick={closeDeleteAllModal} className="btn w-full">
                {text[lang].no}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default NotesPage;
