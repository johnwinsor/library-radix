import NewBooksCarousel from '@/components/newbooks'
import '@/components/css/newbooksCarousel.css';

export default async function Page() {
    const res = await fetch(
        'https://library.mills.edu/data.json',
        { cache: 'no-store' },
    );
    const data = await res.json()

    return (
        <NewBooksCarousel data={data} />
  )
}