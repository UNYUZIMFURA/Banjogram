import "index.css";
import ProfileDetails from "./ProfileDetails";
import SuggestedAccount from "./SuggestedAccount";

const Suggested = () => {
  const suggestedAcc = [
    {
      username: "joy_kevin_banjo",
      followedBy: "sugirayvan",
      category: "Programmer",
    },
    {
      username: "_patriicke",
      followedBy: "edmond_gaks",
      category: "Football",
    },
    {
      username: "__i.divin__",
      followedBy: "tresorr_officiel",
      category: "Basketball",
    },
    {
      username: "rca.alumni",
      followedBy: "joy_kevin_banjo",
      category: "Coding",
    },
    {
      username: "jay_loo1",
      followedBy: "manzi_cedrick",
      category: "Musician",
    },
  ];

  const links = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
    "Meta Verified",
  ];
  return (
    <div className="mt-6 hidden w-[20rem] flex-col gap-2 text-white min-[1160px]:flex min-[1264px]:mt-3">
      <ProfileDetails />
      <div className="flex justify-between px-1">
        <span className="text-sm font-semibold tracking-tight text-[rgb(168,168,168)]">
          Suggested for you
        </span>
        <span className="text-xs font-semibold tracking-tight">See All</span>
      </div>
      <div className="flex flex-col">
        {suggestedAcc.map((suggestion, index) => (
          <SuggestedAccount
            key={index}
            category={suggestion.category}
            username={suggestion.username}
            followedBy={suggestion.followedBy}
          />
        ))}
      </div>
      <div className="flex w-[90%] cursor-pointer flex-wrap gap-2 py-2 text-xs text-[rgb(115,115,115)]">
        {links.map((link, index) => (
          <span key={index}>{link}</span>
        ))}
      </div>
      <span className="text-xs tracking-tight text-[rgb(115,115,115)]">
        © 2023 BANJOGRAM FROM BANJO
      </span>
    </div>
  );
};

export default Suggested;
