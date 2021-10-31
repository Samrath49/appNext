import {useRouter} from 'next/router';

// Dynamic Route with []
// Will load for anything after 3000/games/details

function DetailPage() {
    const router = useRouter();
    console.log(router.query.gamesId)
    return <h1>My Game's Detail</h1>
  }
  
export default DetailPage