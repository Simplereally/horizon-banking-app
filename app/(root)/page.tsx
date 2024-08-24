import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
  const loggedIn = {
    firstName: "Josh",
    lastName: "Mackus",
    email: "myemail@email.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access your account information below."
          />
        </header>
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 55.5 }]}
      />
    </section>
  );
};

export default Home;
