import { Ranobe } from '@components/Ranobe/Ranobe';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section>
      <div className='container mx-auto py-6 px-10'>
        <Ranobe id={params.id} />
      </div>
    </section>
  );
}
