import ProfileDetails from "./ProfileDetails";
import SuggestedAccount from "./SuggestedAccount";

const Suggested = () => {
  const suggestedInfo = [
    {
      username: "jay_loo1",
      followedBy: "sugirayvan",
    },
    {
      username: "_patriicke",
      followedBy: "edmond_gaks",
    },
    {
      username: "__i.divin__",
      followedBy: "tresorr_officiel",
    },
    {
      username: "rca.alumni",
      followedBy: "joy_kevin_banjo",
    },
    {
      username: "moustapha_iradukunda",
      followedBy: "manzi_cedrick",
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
    <div className="mt-6 hidden w-[20rem] flex-col text-white min-[1160px]:flex">
      <ProfileDetails />
      <div className="flex justify-between px-1">
        <span className="font-semibold text-sm tracking-tight text-[rgb(168,168,168)]">
          Suggested for you
        </span>
        <span className="text-xs tracking-tight font-semibold">See All</span>
      </div>
      <div className="flex flex-col">
        {suggestedInfo.map((suggestion, index) => (
          <SuggestedAccount
            key={index}
            username={suggestion.username}
            followedBy={suggestion.followedBy}
          />
        ))}
      </div>
      <div className="group flex w-[90%] flex-wrap gap-2 py-2 text-xs text-[rgb(115,115,115)] group-hover:underline">
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
