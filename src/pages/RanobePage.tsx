import { Ranobe } from '@components/Ranobe/Ranobe';

const RanobePage = ({ params }: { params: { id: string } }) => {
  return (
    <section>
      <div className='container mx-auto py-6 px-10'>
        <Ranobe id={params.id} />
      </div>
    </section>
  );
};

export default RanobePage;
