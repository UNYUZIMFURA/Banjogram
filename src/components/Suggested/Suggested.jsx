import ProfileDetails from "./ProfileDetails"
import SuggestedAccount from "./SuggestedAccount"

const Suggested = () => {
return (
    <div className="h-[25rem] w-[20rem] bg-slate-500 hidden min-[1160px]:flex flex-col mt-6">
        <ProfileDetails />
        <div className="flex justify-between px-1">
            <span className="tracking-tight">Suggested for you</span>
            <span className="tracking-tight text-sm">See All</span>
        </div>
        <div className="flex flex-col">
            <SuggestedAccount />
            <SuggestedAccount />
            <SuggestedAccount />
            <SuggestedAccount />
            <SuggestedAccount />
        </div>
    </div>
)
}

export default Suggested