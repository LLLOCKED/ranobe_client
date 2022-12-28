import { Chapter } from '@components/Chapter/Chapter';

export default function Page({ params }: { params: { idC: string } }) {
  return (
    <section>
      <div className='container mx-auto py-6 px-10'>
        <Chapter id={params.idC} />
      </div>
    </section>
  );
}
 