import TotalBalanceBox from "./TotalBalanceBox";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
      <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={35133.54}
      />
    </div>
  );
};

export default HeaderBox;
