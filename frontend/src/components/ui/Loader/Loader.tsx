import { AiOutlineLoading } from 'react-icons/ai';

export const Loader = () => {
    return (
        <div className={'flex h-full w-full items-center justify-center gap-2'}>
            <div className={'text-lg'}>Загрузка...</div>
            <div className={'animate-spin'}>
                <AiOutlineLoading />
            </div>
        </div>
    );
};
