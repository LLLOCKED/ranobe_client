import RanobePage from '@pages/RanobePage';

export default function Page({ params }: { params: { id: string } }) {
  return <RanobePage params={params} />;
}
