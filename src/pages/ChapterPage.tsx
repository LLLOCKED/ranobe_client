import { Chapter } from '@components/Chapter/Chapter';

const ChapterPage = ({ params }: { params: { idC: string } }) => {
  return (
    <section>
      <div className='container mx-auto py-6 px-10'>
        <Chapter id={params.idC} />
      </div>
    </section>
  );
};

export default ChapterPage;
