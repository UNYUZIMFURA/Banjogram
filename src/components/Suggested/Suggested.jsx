import ProfileDetails from "./ProfileDetails"
import SuggestedAccount from "./SuggestedAccount"

const Suggested = () => {
    const suggestedInfo = [{
        username: "jay_loo1",
        followedBy: "sugirayvan"
    },{
        username: "_patriicke",
        followedBy: "edmond_gaks"
    },{
        username: "__i.divin__",
        followedBy: "tresorr_officiel"
    },{
        username: "rca.alumni",
        followedBy: "joy_kevin_banjo"
    },{
        username: "moustapha_iradukunda",
        followedBy: "manzi_cedrick"
    },
]
return (
    <div className="w-[20rem] text-white hidden min-[1160px]:flex flex-col mt-6">
        <ProfileDetails />
        <div className="flex justify-between px-1">
            <span className="tracking-tight">Suggested for you</span>
            <span className="tracking-tight text-sm">See All</span>
        </div>
        <div className="flex flex-col">
           {
            suggestedInfo.map(suggestion => <SuggestedAccount key={suggestedInfo[suggestion]} username={suggestion.username} followedBy={suggestion.followedBy}/>)
           }
        </div>
        <div className="py-2 text-xs flex gap-2 flex-wrap w-[90%] group group-hover:underline">
          <span>About</span> 
          <span>Help</span>
          <span>Press</span>
          <span>API</span>
          <span>Jobs</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Language</span>
          <span>Meta Verified</span>
        </div>
    </div>
)
}

export default Suggested