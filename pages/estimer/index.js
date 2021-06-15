import { useRouter } from 'next/router';

export default function Estimate() {
  const router = useRouter();

  const onSubmit = async event => {
    event.preventDefault();

    const { uuid } = await fetch('/api/estimer', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(response => response.json());

    router.push(`/estimer/resultat/${uuid}`);
  };

  return (
    <div className='flex items-center justify-center flex-grow bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400'>
      <form className='flex flex-col w-1/2 px-2 py-6 bg-white' onSubmit={onSubmit}>
        <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='Acheter, vendre, louer, ...' />
        <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='Type de bien' />
        <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='CP, Ville, Département' />
        <button type='submit' className='px-2 py-4 m-2 text-white rounded-md bg-tertiary'>
          Rechercher
        </button>
      </form>
    </div>
  );
}
