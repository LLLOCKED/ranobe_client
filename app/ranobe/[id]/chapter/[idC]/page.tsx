import ChapterPage from '@pages/ChapterPage';

export default function Page({ params }: { params: { idC: string } }) {
  return <ChapterPage params={params} />;
}
