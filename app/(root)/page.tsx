import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.name || "Guest"} subtext="Access your account information below." />
        </header>
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.5 }, { currentBalance: 55.5 }]} />
    </section>
  );
};

export default Home;
