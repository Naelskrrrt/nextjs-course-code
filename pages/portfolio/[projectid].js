import { useRouter } from "next/router";
// add withRouter: If you're using class components

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  
//   Send a request to some backend server
//  to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Page Project</h1>
      <p>{router.query.projectid}</p>
    </div>
  );
}

export default PortfolioProjectPage;
