import { useRouter } from "next/router";

// Dynamic Route with []
// Will load for anything after 3000/games/details
    
function DetailPage() {
  const router = useRouter();
  const gamesId = router.query.gamesId;

  // we can use this id and send it to the backend server
  // to fetch the news item with gamesId
  return <h1>My Game's Detail</h1>;
}

export default DetailPage;
