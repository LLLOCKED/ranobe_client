import { Create } from '@components/Create/Create';

const CreatePage = () => {
  return (
    <section>
      <div className='container mx-auto py-10 flex justify-center'>
        <div className='flex flex-col w-3/4 bg-white p-10'>
          <Create />
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
